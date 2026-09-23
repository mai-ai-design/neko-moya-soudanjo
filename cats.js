(() => {
  const SELECTED_CAT_STORAGE_KEY = "nekomoya_selected_cat_id";
  const catViewIds = new Set(["cats", "cat-register", "cat-welcome", "cat-detail"]);
  const sexLabels = { male: "オス", female: "メス", unknown: "わからない" };
  const form = document.querySelector("#catRegisterForm");
  const nameInput = document.querySelector("#catName");
  const breedInput = document.querySelector("#catBreed");
  const submitButton = document.querySelector("#catRegisterSubmit");
  const registerPhotoInput = document.querySelector("#catRegisterPhotoInput");
  const registerPhotoChoose = document.querySelector("#catRegisterPhotoChoose");
  const registerPhotoClear = document.querySelector("#catRegisterPhotoClear");
  const registerPhotoStatus = document.querySelector("#catRegisterPhotoStatus");
  let registerPhoto = { blob: null, url: null, busy: false };
  let welcomePhotoUrl = null;
  let detailPhotoPreviewUrl = null;
  let lastAuthUserId = undefined;
  let authChangeHandled = false;

  function isUuid(value) {
    return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
  }

  function getSelectedCatId() {
    try {
      const id = sessionStorage.getItem(SELECTED_CAT_STORAGE_KEY);
      if (isUuid(id)) return id;
      sessionStorage.removeItem(SELECTED_CAT_STORAGE_KEY);
    } catch (error) {
      // The selected cat is optional when session storage is unavailable.
    }
    return null;
  }

  function saveSelectedCatId(id) {
    try {
      sessionStorage.setItem(SELECTED_CAT_STORAGE_KEY, id);
    } catch (error) {
      // The current screen remains usable when session storage is unavailable.
    }
  }

  function setView(viewId) {
    if (viewId !== "cat-welcome") clearWelcomePhoto();
    if (viewId !== "cat-detail") {
      revokeObjectUrl(detailPhotoPreviewUrl);
      detailPhotoPreviewUrl = null;
    }
    setActiveView(viewId);
    saveAppState();
  }

  function clearNode(node) {
    node.replaceChildren();
    return node;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function createPlaceholder(size = "") {
    const placeholder = element("div", `cat-photo-placeholder ${size}`.trim());
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", "猫の写真はこれから追加できます");
    placeholder.textContent = "🐾";
    return placeholder;
  }

  function createPhotoFrame(name, url, size = "", { lazy = false } = {}) {
    if (!url) return createPlaceholder(size);
    const image = document.createElement("img");
    image.className = `cat-photo-image ${size}`.trim();
    image.src = url;
    image.alt = `${name}の写真`;
    image.decoding = "async";
    if (lazy) image.loading = "lazy";
    image.addEventListener("error", () => image.replaceWith(createPlaceholder(size)));
    return image;
  }

  function revokeObjectUrl(url) {
    if (url) URL.revokeObjectURL(url);
  }

  function clearRegisterPhoto() {
    revokeObjectUrl(registerPhoto.url);
    registerPhoto = { blob: null, url: null, busy: false };
    renderRegisterPhotoPreview();
  }

  function setRegisterPhotoControlsDisabled(disabled) {
    registerPhotoChoose.classList.toggle("is-disabled", disabled);
    registerPhotoChoose.setAttribute("aria-disabled", String(disabled));
    registerPhotoClear.disabled = disabled;
    submitButton.disabled = disabled;
  }

  function renderRegisterPhotoPreview() {
    const currentPreview = document.querySelector("#catRegisterPhotoPreview");
    if (!currentPreview) return;
    currentPreview.replaceWith(createPhotoFrame(nameInput.value.trim() || "猫", registerPhoto.url));
    const replacement = document.querySelector(".cat-register-photo-row .cat-photo-image, .cat-register-photo-row .cat-photo-placeholder");
    if (replacement) replacement.id = "catRegisterPhotoPreview";
    registerPhotoClear.hidden = !registerPhoto.blob;
    registerPhotoChoose.textContent = registerPhoto.blob ? "写真を変更" : "写真を選ぶ";
  }

  function photoErrorMessage(error) {
    if (error?.code === "unsupported_type") return "JPEG・PNG・WebPの写真を選んでね🐾";
    if (error?.code === "too_large_input") return "20MBまでの写真を選んでね🐾";
    if (error?.code === "too_large_output") return "この写真は大きすぎて保存できなかったにゃん。別の写真を選んでね";
    return "この写真は読み込めなかったにゃん。別の写真を選んでね";
  }

  function createBackButton() {
    const button = element("button", "cat-back-link", "うちの子たちへ戻る");
    button.type = "button";
    button.addEventListener("click", openCats);
    return button;
  }

  function todayParts() {
    const today = new Date();
    return { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
  }

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function dateString(parts) {
    return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
  }

  function parseLocalDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return null;
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
    return { year, month, day };
  }

  function isAfter(left, right) {
    return left.year > right.year || (left.year === right.year && (left.month > right.month || (left.month === right.month && left.day > right.day)));
  }

  function shiftFromToday(years = 0, months = 0) {
    const today = todayParts();
    const totalMonths = today.year * 12 + (today.month - 1) - years * 12 - months;
    const year = Math.floor(totalMonths / 12);
    const month = (totalMonths % 12) + 1;
    return { year, month, day: Math.min(today.day, daysInMonth(year, month)) };
  }

  function showFieldError(id, message = "") {
    const node = document.querySelector(id);
    if (!node) return;
    node.textContent = message;
    node.hidden = !message;
  }

  function updateRegisterButton() {
    const name = nameInput.value.trim();
    submitButton.textContent = name ? `🐾 ${name}を登録する` : "🐾 この子を登録する";
  }

  function updateDependentFields() {
    const ageMode = form.querySelector('input[name="ageMode"]:checked')?.value;
    document.querySelector("#catAgeExact").hidden = ageMode !== "exact";
    document.querySelector("#catAgeEstimated").hidden = ageMode !== "estimated";
    document.querySelector("#catAgeYearOnly").hidden = ageMode !== "year_only";
    const neuterStatus = form.querySelector('input[name="neuterStatus"]:checked')?.value;
    document.querySelector("#catNeuterDate").hidden = neuterStatus !== "done";
  }

  function resetRegisterForm() {
    form.reset();
    clearRegisterPhoto();
    registerPhotoStatus.textContent = "";
    setRegisterPhotoControlsDisabled(false);
    showFieldError("#catNameError");
    showFieldError("#catAgeError");
    showFieldError("#catNeuterError");
    showFieldError("#catRegisterError");
    updateDependentFields();
    updateRegisterButton();
  }

  async function handleRegisterPhotoSelection() {
    const file = registerPhotoInput.files?.[0];
    registerPhotoInput.value = "";
    if (!file) return;
    registerPhoto.busy = true;
    registerPhotoStatus.textContent = "写真を準備しているにゃん…";
    setRegisterPhotoControlsDisabled(true);
    try {
      const prepared = await CatPhotoPrepare.prepareProfilePhoto(file);
      revokeObjectUrl(registerPhoto.url);
      registerPhoto = { blob: prepared.blob, url: URL.createObjectURL(prepared.blob), busy: false };
      renderRegisterPhotoPreview();
      registerPhotoStatus.textContent = "";
    } catch (error) {
      registerPhoto.busy = false;
      registerPhotoStatus.textContent = photoErrorMessage(error);
    } finally {
      setRegisterPhotoControlsDisabled(false);
    }
  }

  function getAgeValues() {
    const mode = form.querySelector('input[name="ageMode"]:checked')?.value || null;
    const today = todayParts();
    if (!mode) return { precision: null, birthDate: null, estimatedDate: null };
    if (mode === "unknown") return { precision: "unknown", birthDate: null, estimatedDate: null };

    if (mode === "exact") {
      const date = parseLocalDate(document.querySelector("#catBirthDate").value);
      if (!date) throw new Error("生年月日を確認してね🐾");
      if (isAfter(date, today)) throw new Error("未来の日付は選べないにゃん");
      return { precision: "exact", birthDate: dateString(date), estimatedDate: null };
    }

    if (mode === "estimated") {
      const value = document.querySelector("#catEstimatedNumber").value;
      const amount = Number(value);
      const unit = form.querySelector('input[name="estimatedUnit"]:checked')?.value;
      if (!Number.isInteger(amount) || !unit || (unit === "years" && amount < 1) || (unit === "months" && (amount < 0 || amount > 11))) {
        throw new Error(unit === "months" ? "か月は0〜11で教えてね🐾" : "年齢と単位を教えてね🐾");
      }
      const calculated = unit === "years" ? shiftFromToday(amount) : shiftFromToday(0, amount);
      return { precision: "estimated", birthDate: null, estimatedDate: dateString(calculated) };
    }

    const yearValue = document.querySelector("#catBirthYear").value;
    const year = Number(yearValue);
    if (!/^\d{4}$/.test(yearValue) || !Number.isInteger(year) || year > today.year) {
      throw new Error("生まれた年は今年までの4桁で教えてね🐾");
    }
    let estimated = { year, month: 7, day: 1 };
    if (isAfter(estimated, today)) estimated = { year, month: 1, day: 1 };
    return { precision: "year_only", birthDate: null, estimatedDate: dateString(estimated) };
  }

  function getNeuterValues() {
    const status = form.querySelector('input[name="neuterStatus"]:checked')?.value || null;
    if (status !== "done") return { status, year: null, month: null };
    const yearValue = document.querySelector("#catNeuterYear").value;
    const monthValue = document.querySelector("#catNeuterMonth").value;
    if (!yearValue) return { status, year: null, month: null };
    const today = todayParts();
    const year = Number(yearValue);
    const month = monthValue ? Number(monthValue) : null;
    if (!/^\d{4}$/.test(yearValue) || !Number.isInteger(year) || year > today.year) {
      throw new Error("時期の年は今年までの4桁で教えてね🐾");
    }
    if (month && (month < 1 || month > 12 || (year === today.year && month > today.month))) {
      throw new Error("時期の月を確認してね🐾");
    }
    return { status, year, month };
  }

  function ageLabel(cat) {
    const precision = cat.birth_date_precision;
    const start = parseLocalDate(precision === "exact" ? cat.birth_date : cat.birth_date_estimated);
    if (!start || !["exact", "estimated", "year_only"].includes(precision)) return "";
    const today = todayParts();
    let months = (today.year - start.year) * 12 + (today.month - start.month);
    if (today.day < start.day) months -= 1;
    if (months < 0) return "";
    const value = months < 12 ? `生後${months}か月` : `${Math.floor(months / 12)}歳`;
    return precision === "exact" ? value : `推定 ${value}`;
  }

  function birthLabel(cat) {
    if (cat.birth_date_precision === "exact") {
      const date = parseLocalDate(cat.birth_date);
      return date ? `${date.year}年${date.month}月${date.day}日生まれ` : "";
    }
    if (cat.birth_date_precision === "year_only") {
      const date = parseLocalDate(cat.birth_date_estimated);
      return date ? `${date.year}年生まれ` : "";
    }
    return "";
  }

  function appendCatMeta(parent, cat, detail = false) {
    const details = [cat.breed, sexLabels[cat.sex], ageLabel(cat), detail ? birthLabel(cat) : ""].filter(Boolean);
    if (details.length) parent.append(element("p", "cat-meta", details.join(" ・ ")));
  }

  function showLoading(container, text = "うちの子たちを呼んでいるにゃん…") {
    clearNode(container).append(element("p", "cat-status", text));
  }

  async function refreshProfileButton() {
    const button = document.querySelector(".hero-btn-profile");
    if (!button) return;
    button.textContent = "うちの子情報を登録する";
    button.dataset.catDestination = "register";
    if (!isAuthenticated() || !supabaseClient) return;

    const { count, error } = await supabaseClient.from("cats").select("id", { count: "exact", head: true });
    if (error) {
      button.dataset.catDestination = "cats";
      return;
    }
    if (count > 0) {
      button.textContent = "うちの子情報を見る";
      button.dataset.catDestination = "cats";
    }
  }

  async function openCats() {
    if (!isAuthenticated()) {
      requestAuthentication({ type: "register_cat" });
      return;
    }
    setView("cats");
    const container = document.querySelector("#catsContent");
    showLoading(container);
    const { data, error } = await supabaseClient
      .from("cats")
      .select("id, name, breed, sex, birth_date, birth_date_estimated, birth_date_precision, photo_path, created_at")
      .order("created_at", { ascending: true });
    if (document.querySelector(".view.is-active")?.id !== "cats") return;
    if (error) {
      clearNode(container).append(element("p", "cat-status cat-status-error", "うまく読み込めなかったにゃん。時間をおいてもう一度開いてね"));
      return;
    }
    clearNode(container);
    if (!data.length) {
      const empty = element("div", "cat-empty-state");
      empty.append(createPlaceholder(), element("p", "cat-empty-title", "まだ、うちの子が登録されていないにゃん🐾"), element("p", "cat-empty-copy", "まずはお名前だけでも教えてね♪"));
      const button = element("button", "secondary-btn", "＋ うちの子を登録する");
      button.type = "button";
      button.addEventListener("click", openRegister);
      empty.append(button);
      container.append(empty);
      return;
    }
    const grid = element("div", "cat-list-grid");
    data.forEach((cat) => {
      const card = element("button", "cat-list-card");
      card.type = "button";
      card.dataset.catId = cat.id;
      card.append(createPlaceholder(), element("strong", "cat-name", cat.name));
      appendCatMeta(card, cat);
      card.addEventListener("click", () => {
        saveSelectedCatId(cat.id);
        openDetail();
      });
      grid.append(card);
    });
    const addButton = element("button", "ghost-btn cat-add-button", "＋ もうひとり登録する");
    addButton.type = "button";
    addButton.addEventListener("click", openRegister);
    container.append(grid, addButton);
    const photoPaths = data.map((cat) => cat.photo_path).filter(Boolean);
    if (!photoPaths.length) return;
    try {
      const signedPhotos = await CatPhotoStorage.getProfilePhotoSignedUrls(supabaseClient, photoPaths);
      if (document.querySelector(".view.is-active")?.id !== "cats") return;
      const urlsByPath = new Map(signedPhotos.filter((photo) => !photo.error && photo.signedUrl).map((photo) => [photo.path, photo.signedUrl]));
      data.forEach((cat) => {
        const signedUrl = urlsByPath.get(cat.photo_path);
        const card = grid.querySelector(`[data-cat-id="${CSS.escape(cat.id)}"]`);
        const placeholder = card?.querySelector(".cat-photo-placeholder");
        if (signedUrl && placeholder) placeholder.replaceWith(createPhotoFrame(cat.name, signedUrl, "", { lazy: true }));
      });
    } catch (photoError) {
      console.warn("Cat list photo loading failed:", photoError);
    }
  }

  function openRegister() {
    if (!isAuthenticated()) {
      requestAuthentication({ type: "register_cat" });
      return;
    }
    resetRegisterForm();
    setView("cat-register");
  }

  function clearWelcomePhoto() {
    revokeObjectUrl(welcomePhotoUrl);
    welcomePhotoUrl = null;
  }

  function renderWelcome(cat, { photoUrl = null, photoSaveFailed = false } = {}) {
    const container = document.querySelector("#catWelcomeContent");
    clearNode(container);
    const heading = element("div", "page-heading cat-welcome-heading");
    heading.append(element("p", "eyebrow", "うちの子情報"), element("h1", "", "🐾 登録できたにゃん♪"), element("p", "", `${cat.name}が、ねこモヤにやってきたにゃん♪`));
    const celebration = element("div", "cat-welcome-celebration");
    celebration.append(createPhotoFrame(cat.name, photoUrl, "cat-photo-placeholder-large"));
    if (photoSaveFailed) celebration.append(element("p", "cat-photo-save-note", `${cat.name}の登録はできたけれど、写真は保存できませんでした。あとから${cat.name}のページで追加できます🐾`));
    const kinako = element("div", "cat-welcome-kinako");
    const image = document.createElement("img");
    image.className = "kinako-avatar";
    image.src = "assets/kinako.png";
    image.alt = "きなこ";
    kinako.append(image, element("p", "kinako-speech", "きなこもここにいるにゃん♪ これからよろしくにゃん！"));
    const choices = element("div", "cat-welcome-choices");
    [["🩺", `${cat.name}の健康情報も登録する`, "体重・持病・お薬など"], ["🐾", `${cat.name}のことをもう少し教える`, "性格・暮らし・病院で苦手なことなど"]].forEach(([icon, title, copy]) => {
      const choice = element("button", "cat-welcome-choice");
      choice.type = "button";
      choice.disabled = true;
      choice.setAttribute("aria-disabled", "true");
      choice.append(element("span", "cat-choice-icon", icon), element("strong", "", title), element("span", "", copy), element("small", "", "もうすぐ登録できるようになるにゃん"));
      choices.append(choice);
    });
    const finish = element("button", "cat-welcome-choice cat-welcome-finish");
    finish.type = "button";
    finish.append(element("span", "cat-choice-icon", "🏠"), element("strong", "", "今日はここまで"), element("span", "", "あとからいつでも追加できます"));
    finish.addEventListener("click", () => {
      clearWelcomePhoto();
      openDetail();
    });
    choices.append(finish);
    container.append(heading, celebration, kinako, choices);
  }

  async function openWelcome(cat, options = {}) {
    setView("cat-welcome");
    if (cat?.name) {
      renderWelcome(cat, options);
      return;
    }
    await openDetail();
  }

  function createDetailPhotoControls(cat) {
    const controls = element("div", "cat-detail-photo-controls");
    const status = element("p", "cat-photo-status");
    status.setAttribute("aria-live", "polite");
    const input = document.createElement("input");
    input.id = "catDetailPhotoInput";
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp";
    input.className = "cat-visually-hidden";
    const choose = element("label", "ghost-btn cat-photo-button", cat.photo_path ? "写真を変更" : "📷 写真を追加");
    choose.htmlFor = input.id;
    const remove = element("button", "ghost-btn cat-photo-button", "写真を削除");
    remove.type = "button";
    remove.hidden = !cat.photo_path;
    const cancel = element("button", "ghost-btn cat-photo-button", "やめる");
    cancel.type = "button";
    cancel.hidden = true;
    const save = element("button", "primary-btn cat-photo-save-button", "この写真にする");
    save.type = "button";
    save.hidden = true;
    const confirm = element("div", "cat-photo-delete-confirm");
    confirm.hidden = true;
    const confirmText = element("p", "", "写真を削除する？ 削除した写真は元に戻せないにゃん");
    const confirmDelete = element("button", "primary-btn", "削除");
    confirmDelete.type = "button";
    const confirmCancel = element("button", "ghost-btn cat-photo-delete-cancel", "やめる");
    confirmCancel.type = "button";
    confirm.append(confirmText, confirmDelete, confirmCancel);
    let pendingBlob = null;
    let busy = false;

    const photoFrame = () => controls.closest(".cat-detail-photo-area")?.querySelector(".cat-photo-image, .cat-photo-placeholder");
    const setBusy = (value) => {
      busy = value;
      choose.classList.toggle("is-disabled", value);
      choose.setAttribute("aria-disabled", String(value));
      remove.disabled = value;
      cancel.disabled = value;
      save.disabled = value;
      confirmDelete.disabled = value;
      confirmCancel.disabled = value;
    };
    const showOriginal = () => {
      revokeObjectUrl(detailPhotoPreviewUrl);
      detailPhotoPreviewUrl = null;
      pendingBlob = null;
      cancel.hidden = true;
      save.hidden = true;
      choose.hidden = false;
      remove.hidden = !cat.photo_path;
      status.textContent = "";
      openDetail();
    };

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      input.value = "";
      if (!file || busy) return;
      setBusy(true);
      status.textContent = "写真を準備しているにゃん…";
      try {
        const prepared = await CatPhotoPrepare.prepareProfilePhoto(file);
        revokeObjectUrl(detailPhotoPreviewUrl);
        detailPhotoPreviewUrl = URL.createObjectURL(prepared.blob);
        pendingBlob = prepared.blob;
        const frame = photoFrame();
        if (frame) frame.replaceWith(createPhotoFrame(cat.name, detailPhotoPreviewUrl, "cat-photo-placeholder-large"));
        choose.hidden = true;
        remove.hidden = true;
        cancel.hidden = false;
        save.hidden = false;
        status.textContent = "";
      } catch (error) {
        status.textContent = photoErrorMessage(error);
      } finally {
        setBusy(false);
      }
    });
    choose.addEventListener("click", (event) => {
      if (busy) event.preventDefault();
    });
    cancel.addEventListener("click", showOriginal);
    save.addEventListener("click", async () => {
      if (!pendingBlob || busy) return;
      if (!isAuthenticated()) {
        requestAuthentication({ type: "register_cat" });
        return;
      }
      setBusy(true);
      status.textContent = "写真を保存しているにゃん…";
      try {
        const result = await CatPhotoStorage.saveProfilePhoto(supabaseClient, { catId: cat.id, file: pendingBlob });
        if (result.previousCleanupError) console.warn("Previous cat photo cleanup failed:", result.previousCleanupError);
        revokeObjectUrl(detailPhotoPreviewUrl);
        detailPhotoPreviewUrl = null;
        showToast("写真を保存したにゃん♪");
        openDetail();
      } catch (error) {
        console.error("Cat photo save failed:", error);
        showToast("写真を保存できなかったにゃん。\n時間をおいてもう一度試してね", { variant: "error", duration: 5000 });
        showOriginal();
      } finally {
        setBusy(false);
      }
    });
    remove.addEventListener("click", () => {
      confirm.hidden = false;
      choose.hidden = true;
      remove.hidden = true;
    });
    confirmCancel.addEventListener("click", () => {
      confirm.hidden = true;
      choose.hidden = false;
      remove.hidden = false;
    });
    confirmDelete.addEventListener("click", async () => {
      if (busy) return;
      if (!isAuthenticated()) {
        requestAuthentication({ type: "register_cat" });
        return;
      }
      setBusy(true);
      status.textContent = "写真を削除しているにゃん…";
      try {
        const result = await CatPhotoStorage.removeProfilePhoto(supabaseClient, { catId: cat.id });
        if (result.storageCleanupError) console.warn("Cat photo storage cleanup failed:", result.storageCleanupError);
        showToast("写真を削除したにゃん");
        openDetail();
      } catch (error) {
        console.error("Cat photo removal failed:", error);
        status.textContent = "写真を削除できなかったにゃん。時間をおいてもう一度試してね";
        confirm.hidden = true;
        choose.hidden = false;
        remove.hidden = false;
      } finally {
        setBusy(false);
      }
    });
    controls.append(input, choose, remove, cancel, save, status, confirm);
    return controls;
  }

  async function openDetail() {
    if (!isAuthenticated()) {
      requestAuthentication({ type: "register_cat" });
      return;
    }
    const id = getSelectedCatId();
    if (!id) {
      openCats();
      return;
    }
    setView("cat-detail");
    const container = document.querySelector("#catDetailContent");
    showLoading(container, "この子のことを呼んでいるにゃん…");
    const { data: cat, error } = await supabaseClient
      .from("cats")
      .select("id, name, breed, sex, birth_date, birth_date_estimated, birth_date_precision, photo_path")
      .eq("id", id)
      .maybeSingle();
    if (document.querySelector(".view.is-active")?.id !== "cat-detail") return;
    if (error || !cat) {
      openCats();
      return;
    }
    clearNode(container);
    const heading = element("div", "cat-detail-heading");
    const photoArea = element("div", "cat-detail-photo-area");
    photoArea.append(createPlaceholder("cat-photo-placeholder-large"), createDetailPhotoControls(cat));
    heading.append(photoArea);
    const text = element("div", "");
    text.append(element("p", "eyebrow", "うちの子情報"), element("h1", "", cat.name));
    appendCatMeta(text, cat, true);
    heading.append(text);
    const sections = [
      ["🐾", `${cat.name}はこんな子`, `${cat.name}のこと、もう少し教えてくれる？🐾`],
      ["🩺", `${cat.name}の健康について`, "分かるところから、少しずつで大丈夫だにゃん"],
      ["", `${cat.name}の病院メモ`, "まだ病院メモはありません🐾"]
    ];
    const detailSections = element("div", "cat-detail-sections");
    sections.forEach(([icon, title, copy]) => {
      const section = element("section", "cat-detail-section");
      section.append(element("h2", "", `${icon ? `${icon} ` : ""}${title}`), element("p", "", copy));
      detailSections.append(section);
    });
    container.append(heading, detailSections, createBackButton());
    if (!cat.photo_path) return;
    try {
      const { signedUrl } = await CatPhotoStorage.getProfilePhotoSignedUrl(supabaseClient, cat.photo_path);
      if (document.querySelector(".view.is-active")?.id !== "cat-detail" || getSelectedCatId() !== cat.id || !signedUrl) return;
      const placeholder = photoArea.querySelector(".cat-photo-placeholder");
      if (placeholder) placeholder.replaceWith(createPhotoFrame(cat.name, signedUrl, "cat-photo-placeholder-large"));
    } catch (photoError) {
      console.warn("Cat detail photo loading failed:", photoError);
    }
  }

  async function submitRegistration(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    showFieldError("#catNameError");
    showFieldError("#catAgeError");
    showFieldError("#catNeuterError");
    showFieldError("#catRegisterError");
    if (!name) {
      showFieldError("#catNameError", "お名前を教えてね🐾");
      return;
    }
    let age;
    let neuter;
    try {
      age = getAgeValues();
    } catch (error) {
      showFieldError("#catAgeError", error.message);
      return;
    }
    try {
      neuter = getNeuterValues();
    } catch (error) {
      showFieldError("#catNeuterError", error.message);
      return;
    }
    if (!isAuthenticated() || !supabaseClient) {
      requestAuthentication({ type: "register_cat" });
      return;
    }
    const preparedPhoto = registerPhoto.blob ? { blob: registerPhoto.blob, url: registerPhoto.url } : null;
    submitButton.disabled = true;
    setRegisterPhotoControlsDisabled(true);
    submitButton.textContent = "登録しているにゃん…";
    const { data, error } = await supabaseClient.from("cats").insert({
      name,
      breed: breedInput.value.trim() || null,
      sex: form.querySelector('input[name="sex"]:checked')?.value || null,
      birth_date_precision: age.precision,
      birth_date: age.birthDate,
      birth_date_estimated: age.estimatedDate,
      neuter_status: neuter.status,
      neuter_year: neuter.year,
      neuter_month: neuter.month
    }).select("id, name").single();
    if (error) {
      console.error("Cat registration failed:", error);
      showFieldError("#catRegisterError", "登録できなかったにゃん。時間をおいてもう一度試してね");
      setRegisterPhotoControlsDisabled(false);
      updateRegisterButton();
      return;
    }
    saveSelectedCatId(data.id);
    refreshProfileButton();
    showToast("うちの子を登録できたにゃん♪");
    if (!preparedPhoto) {
      setRegisterPhotoControlsDisabled(false);
      updateRegisterButton();
      openWelcome(data);
      return;
    }
    submitButton.textContent = "写真を保存しているにゃん…";
    try {
      const result = await CatPhotoStorage.saveProfilePhoto(supabaseClient, { catId: data.id, file: preparedPhoto.blob });
      if (result.previousCleanupError) console.warn("Previous cat photo cleanup failed:", result.previousCleanupError);
      welcomePhotoUrl = preparedPhoto.url;
      registerPhoto = { blob: null, url: null, busy: false };
      openWelcome(data, { photoUrl: welcomePhotoUrl });
    } catch (photoError) {
      console.error("Cat registration photo save failed:", photoError);
      clearRegisterPhoto();
      openWelcome(data, { photoSaveFailed: true });
    } finally {
      setRegisterPhotoControlsDisabled(false);
      updateRegisterButton();
    }
  }

  function onAuthChanged() {
    const userId = authenticatedUser?.id ?? null;
    if (authChangeHandled && lastAuthUserId === userId) return;
    authChangeHandled = true;
    lastAuthUserId = userId;
    refreshProfileButton();
    const activeView = document.querySelector(".view.is-active")?.id;
    if (!catViewIds.has(activeView)) return;
    if (!isAuthenticated()) {
      setView("home");
      return;
    }
    if (activeView === "cats") openCats();
    if (activeView === "cat-register") openRegister();
    if (activeView === "cat-welcome" || activeView === "cat-detail") openDetail();
  }

  document.querySelector(".hero-btn-profile")?.addEventListener("click", (event) => {
    if (!isAuthenticated()) {
      requestAuthentication({ type: "register_cat" });
      return;
    }
    if (event.currentTarget.dataset.catDestination === "cats") {
      openCats();
    } else {
      openRegister();
    }
  });
  document.querySelector("#catRegisterBack")?.addEventListener("click", openCats);
  nameInput?.addEventListener("input", () => {
    updateRegisterButton();
    if (registerPhoto.blob) renderRegisterPhotoPreview();
  });
  registerPhotoInput?.addEventListener("change", handleRegisterPhotoSelection);
  registerPhotoClear?.addEventListener("click", () => {
    clearRegisterPhoto();
    registerPhotoStatus.textContent = "";
  });
  registerPhotoChoose?.addEventListener("click", (event) => {
    if (registerPhoto.busy) event.preventDefault();
  });
  form?.addEventListener("change", updateDependentFields);
  form?.addEventListener("submit", submitRegistration);
  document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", () => {
    clearWelcomePhoto();
    revokeObjectUrl(detailPhotoPreviewUrl);
    detailPhotoPreviewUrl = null;
    clearRegisterPhoto();
  }));
  window.addEventListener("pagehide", () => {
    clearWelcomePhoto();
    revokeObjectUrl(detailPhotoPreviewUrl);
    revokeObjectUrl(registerPhoto.url);
  });

  window.NekoCats = { onAuthChanged, openRegister, openCats, openDetail };
  if (hasResolvedInitialAuth()) {
    onAuthChanged();
  }
})();
