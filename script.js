const symptoms = [
  {
    title: "吐き戻し",
    cause: "早食い、毛玉、空腹、フード変更などで起こることがあります。",
    points: "回数、吐いたもの、食欲、元気、水が飲めているかを見ましょう。",
    sign: "何度も吐く、ぐったり、血が混じる、水も吐く場合は相談をおすすめします。",
    record: "日時、回数、写真、食べたもの、吐いた後の様子"
  },
  {
    title: "口臭",
    cause: "歯垢、歯石、歯ぐきの炎症、口内トラブルなどが関係することがあります。",
    points: "よだれ、食べにくさ、片側だけで噛む、歯ぐきの色を確認しましょう。",
    sign: "強い口臭、食欲低下、出血、顔を触られるのを嫌がる場合は早めに相談しましょう。",
    record: "いつから、においの強さ、食べ方、歯ぐきの写真"
  },
  {
    title: "歯ぐきの赤み",
    cause: "歯肉炎、歯石、口内炎などで赤く見えることがあります。",
    points: "赤い場所、腫れ、出血、よだれ、食べ方の変化を見ます。",
    sign: "痛そう、食べない、出血がある、赤みが広い場合は相談がおすすめです。",
    record: "口元の写真、食欲、痛がるしぐさ、歯みがき歴"
  },
  {
    title: "歯肉炎・歯槽膿漏",
    cause: "歯垢や歯石の蓄積、体質、年齢などが関わることがあります。",
    points: "口臭、歯ぐきの腫れ、歯のぐらつき、食べこぼしを確認しましょう。",
    sign: "食べづらい、出血、強い痛み、顔の腫れがある場合は早めに相談しましょう。",
    record: "口の写真、食べ方、口臭の変化、ケア用品"
  },
  {
    title: "肥満",
    cause: "食事量、運動量、年齢、避妊去勢後の代謝変化などが関係します。",
    points: "体重推移、くびれ、ジャンプのしやすさ、息切れを見ましょう。",
    sign: "急な体重増減、動きたがらない、呼吸が荒い場合は相談しましょう。",
    record: "体重、フード量、おやつ量、遊ぶ時間"
  },
  {
    title: "食欲がない",
    cause: "体調不良、口の痛み、ストレス、フードの好みなど幅広い理由があります。",
    points: "どのくらい食べないか、水は飲むか、元気、排泄を確認します。",
    sign: "半日以上ほとんど食べない、元気がない、嘔吐や下痢がある場合は相談をおすすめします。",
    record: "食べた量、好きなものへの反応、水分、体重"
  },
  {
    title: "元気がない",
    cause: "痛み、発熱、ストレス、消化器や泌尿器の不調などが隠れることがあります。",
    points: "隠れる、動かない、呼吸、食欲、トイレの様子を見ます。",
    sign: "ぐったりして反応が弱い、呼吸が苦しそうな場合はすぐ相談しましょう。",
    record: "いつから、普段との違い、食欲、排泄、動画"
  },
  {
    title: "下痢",
    cause: "食事変更、食べ慣れないもの、ストレス、寄生虫、病気などが考えられます。",
    points: "回数、便の形、血や粘液、食欲、元気を確認しましょう。",
    sign: "血便、何度も続く、子猫や高齢猫、元気がない場合は相談がおすすめです。",
    record: "便の写真、回数、食べたもの、水分、体重"
  },
  {
    title: "頻尿",
    cause: "膀胱炎、尿石、ストレスなどの可能性があります。",
    points: "尿の量、色、痛そうな声、トイレに何度も行くかを見ます。",
    sign: "尿が出ていない、痛がる、血尿がある場合はすぐ動物病院へ相談しましょう。",
    record: "回数、尿量、色、トイレ動画、飲水量"
  },
  {
    title: "水をよく飲む",
    cause: "暑さ、フード変更、腎臓や内分泌の病気などが関係することがあります。",
    points: "飲水量、尿量、体重、食欲、年齢を確認しましょう。",
    sign: "急に増えた、尿も多い、体重が減る場合は早めに相談しましょう。",
    record: "1日の水の量、尿の回数、体重、フード"
  },
  {
    title: "毛玉",
    cause: "グルーミングで飲み込んだ毛、換毛期、長毛種などで増えます。",
    points: "吐く頻度、便に毛が出ているか、食欲、ブラッシング頻度を見ます。",
    sign: "吐きたいのに出ない、食欲がない、便が出ない場合は相談しましょう。",
    record: "吐いた回数、ブラッシング量、便、フード"
  },
  {
    title: "目やに",
    cause: "軽い刺激、結膜炎、猫風邪、傷などで出ることがあります。",
    points: "色、量、片目か両目か、しょぼしょぼ、くしゃみを確認しましょう。",
    sign: "黄色や緑、目を開けにくい、痛そうな場合は早めに相談しましょう。",
    record: "目の写真、色、量、くしゃみ、涙"
  },
  {
    title: "くしゃみ",
    cause: "ほこり、乾燥、猫風邪、アレルギーなどが関係することがあります。",
    points: "鼻水、目やに、食欲、元気、続く日数を見ます。",
    sign: "何日も続く、鼻水が濃い、食欲が落ちる場合は相談をおすすめします。",
    record: "回数、鼻水の色、動画、室内環境"
  },
  {
    title: "かゆがる",
    cause: "ノミ、アレルギー、皮膚炎、乾燥、ストレスなどが考えられます。",
    points: "かく場所、赤み、かさぶた、脱毛、ノミ予防の有無を確認します。",
    sign: "血が出るほどかく、脱毛が広がる、ただれがある場合は相談しましょう。",
    record: "皮膚の写真、かく頻度、フード、予防薬"
  },
  {
    title: "毛が抜ける",
    cause: "換毛期、過剰な毛づくろい、皮膚炎、ストレスなどで起こります。",
    points: "抜け方、左右差、皮膚の赤み、なめる頻度を見ましょう。",
    sign: "円形に抜ける、赤みやかさぶた、急に広がる場合は相談がおすすめです。",
    record: "写真、広がり方、なめる場所、生活変化"
  }
];

const lifeConcerns = [
  ["抜け毛の掃除が大変", "換毛期、毛質、ブラッシング不足。", "短時間でも毎日ブラッシングし、寝床を洗いやすくします。", "ラバーブラシ、粘着クリーナー、空気清浄機。", "皮膚の赤みや急な脱毛は体調サインの場合があります。"],
  ["家具がボロボロになる", "爪とぎ欲求、素材の好み、退屈。", "好みの爪とぎを複数置き、家具の近くに誘導します。", "縦型爪とぎ、保護シート、またたびスプレー。", "叱るより、してよい場所を増やす方が続きやすいです。"],
  ["トイレのにおい", "掃除頻度、砂の相性、体調変化。", "毎日取り除き、月1回は丸洗いを目安にします。", "消臭砂、密閉ゴミ箱、トイレマット。", "尿のにおいが急に強い場合は記録しましょう。"],
  ["夜鳴き", "空腹、退屈、環境変化、年齢による不安。", "寝る前に遊び、食事時間と安心できる場所を整えます。", "自動給餌器、知育トイ、落ち着く寝床。", "急に始まった夜鳴きは体調不良の可能性もあります。"],
  ["留守番", "退屈、不安、室温、食事や水の心配。", "水場を複数にし、危ないものを片づけます。", "見守りカメラ、自動給餌器、タイマー照明。", "長時間や暑い日は事前に環境を確認しましょう。"],
  ["医療費が高い", "検査、治療、慢性疾患、急な受診。", "年1回の健康診断と家計メモで備えます。", "ペット保険比較表、医療費積立、記録アプリ。", "費用だけで受診を遅らせず、まず相談できる病院を持ちましょう。"],
  ["フード選び", "年齢、体重、持病、好みで合うものが変わります。", "総合栄養食を基本に、切り替えは少しずつ行います。", "計量スプーン、密閉容器、体重計。", "療法食は獣医師の指示に沿って使いましょう。"],
  ["多頭飼い", "相性、縄張り、トイレや食器の不足。", "隠れ場所と資源を猫の数より多めに用意します。", "複数トイレ、個別食器、キャットタワー。", "食欲や排泄の変化を個別に見分ける工夫が必要です。"],
  ["災害時の備え", "避難、停電、物流停止で日常ケアが難しくなります。", "フード、水、薬、写真、ワクチン情報をまとめます。", "キャリー、折りたたみトイレ、防災ポーチ。", "キャリーに慣れる練習を普段から少しずつしましょう。"]
];

const profileFields = [
  ["name", "名前", "text"],
  ["age", "年齢", "text"],
  ["breed", "猫種", "text"],
  ["sex", "性別", "text"],
  ["weight", "体重", "text"],
  ["neuter", "避妊・去勢の有無", "text"],
  ["condition", "持病", "textarea", "wide"],
  ["medicine", "飲んでいる薬", "textarea", "wide"],
  ["food", "食べているフード", "textarea", "wide"],
  ["allergy", "アレルギー", "textarea", "wide"],
  ["personality", "性格メモ", "textarea", "wide"]
];

const memoFields = [
  ["since", "いつから", "text"],
  ["symptom", "どんな症状", "textarea", "wide"],
  ["count", "回数", "text"],
  ["appetite", "食欲", "text"],
  ["water", "水を飲む量", "text"],
  ["toilet", "トイレの様子", "textarea", "wide"],
  ["energy", "元気の有無", "text"],
  ["media", "写真・動画メモ", "textarea", "wide"],
  ["change", "気になる変化", "textarea", "wide"],
  ["question", "獣医さんに聞きたいこと", "textarea", "wide"]
];

const symptomGrid = document.querySelector("#symptomGrid");
const lifeGrid = document.querySelector("#lifeGrid");

function createInfoCard(item) {
  const article = document.createElement("article");
  article.className = "info-card";
  article.innerHTML = `
    <header>
      <h2>${item.title}</h2>
      <span class="cat-icon" aria-hidden="true">ฅ</span>
    </header>
    <dl class="info-list">
      <div><dt>よくある原因</dt><dd>${item.cause}</dd></div>
      <div><dt>見ておきたいポイント</dt><dd>${item.points}</dd></div>
      <div><dt>病院に相談した方がよいサイン</dt><dd>${item.sign}</dd></div>
      <div><dt>記録しておくとよいこと</dt><dd>${item.record}</dd></div>
    </dl>
  `;
  return article;
}

symptoms.forEach((item) => symptomGrid.append(createInfoCard(item)));

lifeConcerns.forEach(([title, cause, action, goods, caution]) => {
  lifeGrid.insertAdjacentHTML("beforeend", `
    <article class="info-card">
      <header>
        <h2>${title}</h2>
        <span class="cat-icon" aria-hidden="true">◖</span>
      </header>
      <dl class="info-list">
        <div><dt>よくある原因</dt><dd>${cause}</dd></div>
        <div><dt>今日からできる対策</dt><dd>${action}</dd></div>
        <div><dt>便利グッズ</dt><dd>${goods}</dd></div>
        <div><dt>注意したいこと</dt><dd>${caution}</dd></div>
      </dl>
    </article>
  `);
});

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });
  document.querySelectorAll(".bottom-nav .nav-link").forEach((button) => {
    button.classList.toggle("is-current", button.dataset.view === viewId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("#triageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const result = document.querySelector("#triageResult");
  result.className = "result-card";

  if (data.getAll("urgent").length > 0) {
    result.classList.add("urgent");
    result.innerHTML = `
      <span class="result-label">今すぐ動物病院へ相談</span>
      <h2>早めに電話や受診で相談した方がよい可能性があります。</h2>
      <p>呼吸、強い痛み、出血、何度も吐く様子があるときは、夜間でも動物病院へ連絡しましょう。移動前に、症状の始まり・回数・写真や動画を手元に置くと伝えやすいです。</p>
    `;
    return;
  }

  if (data.getAll("soon").length > 0) {
    result.classList.add("soon");
    result.innerHTML = `
      <span class="result-label">早めに相談がおすすめ</span>
      <h2>近いうちに動物病院へ相談することをおすすめします。</h2>
      <p>食欲、元気、トイレ、口の様子などに変化がある場合は、記録を取りながら早めに相談すると安心です。迷う場合は電話で状況を伝えて指示をもらいましょう。</p>
    `;
    return;
  }

  result.classList.add("record");
  result.innerHTML = `
    <span class="result-label">様子見しながら記録</span>
    <h2>落ち着いている場合は、記録して様子を見ましょう。</h2>
    <p>回数、時間、食欲、元気、トイレの変化をメモしておくと、あとで相談しやすくなります。少しでも悪化したり、不安が強い場合は動物病院へ相談してください。</p>
  `;
});

function buildForm(formId, fields, buttonText) {
  const form = document.querySelector(formId);
  fields.forEach(([id, label, type, className]) => {
    const field = document.createElement("label");
    field.className = className || "";
    field.setAttribute("for", id);
    field.innerHTML = `${label}${type === "textarea"
      ? `<textarea id="${id}" name="${id}" rows="3"></textarea>`
      : `<input id="${id}" name="${id}" type="${type}">`}`;
    form.append(field);
  });
  const submit = document.createElement("button");
  submit.className = "primary-btn wide";
  submit.type = "submit";
  submit.textContent = buttonText;
  form.append(submit);
}

buildForm("#profileForm", profileFields, "プロフィールをまとめる");
buildForm("#memoForm", memoFields, "病院メモを作成する");

document.querySelector("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderOutput("#profilePreview", "うちの子プロフィール", profileFields, event.currentTarget);
});

document.querySelector("#memoForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderOutput("#memoOutput", "病院で見せるメモ", memoFields, event.currentTarget);
});

function renderOutput(target, title, fields, form) {
  const data = new FormData(form);
  const rows = fields.map(([id, label]) => {
    const value = data.get(id)?.trim() || "未記入";
    return `<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`;
  }).join("");
  document.querySelector(target).innerHTML = `<h2>${title}</h2><dl>${rows}</dl>`;
}

const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatLog = document.querySelector("#chatLog");

document.querySelectorAll("[data-chat]").forEach((button) => {
  button.addEventListener("click", () => {
    chatInput.value = button.dataset.chat;
    chatInput.focus();
  });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;
  addBubble(message, "user");
  addBubble(buildAiReply(message), "ai");
  chatInput.value = "";
});

function addBubble(text, type) {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = text;
  chatLog.append(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function buildAiReply(message) {
  const lower = message.toLowerCase();
  let theme = "その変化";
  let memo = "いつから、どのくらい続いているか、普段との違い";
  let advice = "症状が続く、元気や食欲が落ちる、不安が強い場合は動物病院への相談をおすすめします。";

  if (message.includes("吐")) {
    theme = "吐いた様子";
    memo = "吐いた時間、回数、吐いたもの、食欲、水が飲めるか、吐いた後の元気";
    advice = "何度も吐く、水も吐く、ぐったりしている、血が混じる場合は早めに動物病院へ相談しましょう。";
  } else if (message.includes("口") || message.includes("歯") || message.includes("臭")) {
    theme = "お口の様子";
    memo = "口臭の強さ、歯ぐきの色、よだれ、食べ方、痛がるしぐさ、写真";
    advice = "食べにくそう、出血、強い口臭、歯ぐきの赤みが続く場合は早めの相談がおすすめです。";
  } else if (message.includes("太") || message.includes("肥満")) {
    theme = "体重の変化";
    memo = "現在の体重、フード量、おやつ、運動量、いつから増えたか";
    advice = "急な体重増減や動きづらさがある場合は、体調確認も兼ねて相談すると安心です。";
  } else if (message.includes("鳴")) {
    theme = "夜の鳴き方";
    memo = "鳴く時間帯、食事、トイレ、遊び時間、環境の変化、動画";
    advice = "急に始まった、元気や食欲にも変化がある、高齢猫の場合は体調面も含めて相談しましょう。";
  } else if (lower.includes("pee") || message.includes("尿") || message.includes("トイレ")) {
    theme = "トイレの様子";
    memo = "尿の回数、量、色、痛そうな声、トイレに行くけれど出ているか";
    advice = "尿が出ていない、何度もトイレに行く、血尿がある場合はすぐ動物病院へ相談しましょう。";
  }

  return `心配になりますよね。まずは落ち着いて、${theme}を一緒に整理しましょう。\n\n追加で確認したいのは、食欲・元気・トイレ・水分・いつから続いているかです。\n\n受診目安としては、${advice}\n\n病院に伝えるメモは「${memo}」をまとめると伝わりやすいです。呼吸が苦しそう、ぐったり、強い痛みがある場合は、迷わず動物病院へ連絡してください。`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}
