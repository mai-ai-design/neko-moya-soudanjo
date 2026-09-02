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

const symptomCategoryGrid = document.querySelector("#symptomCategoryGrid");
const lifeGrid = document.querySelector("#lifeGrid");

const symptomCategories = [
  { icon: "🤮", title: "吐いた・吐きそう", view: "vomit-detail", ready: true },
  { icon: "🍚", title: "食べない・食欲がおかしい", view: "appetite-detail", ready: true },
  { icon: "💩", title: "うんちがおかしい", view: "poop-detail", ready: true },
  { icon: "🚽", title: "おしっこがおかしい", view: "urine-detail", ready: true },
  { icon: "💧", title: "水の飲み方がおかしい", view: "water-detail", ready: true },
  { icon: "😿", title: "元気・様子がおかしい", view: "energy-detail", ready: true },
  { icon: "💨", title: "呼吸・咳・くしゃみ", view: "breathing-detail", ready: true },
  { icon: "👁️", title: "目がおかしい", view: "eye-detail", ready: true },
  { icon: "👂", title: "耳がおかしい", view: "ear-detail", ready: true },
  { icon: "👄", title: "口・歯がおかしい", view: "mouth-detail", ready: true },
  { icon: "🩹", title: "皮膚・毛がおかしい" },
  { icon: "🐾", title: "歩き方・動きがおかしい" },
  { icon: "⚖️", title: "体重・体型が変わった" },
  { icon: "⚠️", title: "けいれん・意識・急な異変" }
];

const dangerQuestions = [
  {
    id: "danger_signs_first_check",
    category: "dangerSigns",
    text: "今、次のような様子はありますか？",
    multiple: true,
    options: [
      { label: "呼吸が明らかに苦しそう", value: "breathing" },
      { label: "意識・反応がおかしい", value: "consciousness" },
      { label: "けいれんしている", value: "seizure" },
      { label: "倒れている", value: "collapsed" },
      { label: "強く痛がっている", value: "strongPain" },
      { label: "異物・薬・毒物などを食べた可能性がある", value: "ingestion" },
      { label: "どれも当てはまらない", value: "none", exclusive: true }
    ]
  }
];

const vomitFollowupQuestions = [
  {
    id: "vomit_started_at",
    category: "timing",
    label: "吐き始め",
    text: "吐いたのはいつ頃からですか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "それより前", "分からない"]
  },
  {
    id: "vomit_count",
    category: "frequency",
    label: "回数",
    text: "これまでに何回くらい吐きましたか？",
    type: "single",
    options: ["1回", "2〜3回", "4回以上", "数えられない・何度も", "分からない"]
  },
  {
    id: "vomit_content",
    category: "content",
    label: "吐いたもの",
    text: "吐いたものに近いものを選んでください。",
    help: "いくつでも選べます。",
    type: "multiple",
    options: ["フード・食べたもの", "毛玉", "透明な液体・泡っぽいもの", "黄色っぽい液体", "血のようなもの", "その他", "よく分からない"],
    notices: {
      "血のようなもの": "⚠️ 吐いたものに血のように見えるものが混じっている場合は、動物病院への相談を検討してください。"
    }
  },
  {
    id: "meal_timing",
    category: "mealTiming",
    label: "食事とのタイミング",
    text: "食事とのタイミングはどうでしたか？",
    type: "single",
    options: ["食べてすぐ", "食べてしばらくしてから", "空腹のとき", "食事とは関係なさそう", "分からない"]
  },
  {
    id: "appetite_now",
    category: "appetite",
    label: "食欲",
    text: "今、ごはんは食べられていますか？",
    type: "single",
    options: ["いつも通り", "少し食べている", "ほとんど食べていない", "まったく食べていない", "分からない"]
  },
  {
    id: "water_change",
    category: "water",
    label: "水",
    text: "水の飲み方に変化はありますか？",
    type: "single",
    options: ["いつも通り", "普段より多い", "普段より少ない", "飲んでも吐いてしまう", "分からない"]
  },
  {
    id: "energy_now",
    category: "energy",
    label: "元気",
    text: "いつもと比べて様子はどうですか？",
    type: "single",
    options: ["いつも通り", "少し元気がない", "寝ている時間が増えた・隠れている", "明らかに元気がない", "分からない"]
  },
  {
    id: "toilet_change",
    category: "toilet",
    label: "うんち・おしっこ",
    text: "うんちやおしっこに変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "特に変わらない", value: "特に変わらない", exclusive: true },
      "下痢・軟便",
      "便が出ていない・少ない",
      "おしっこの量・回数が増えた",
      "おしっこの量・回数が減った",
      "その他",
      "分からない"
    ]
  }
];

const appetiteFollowupQuestions = [
  {
    id: "appetite_started_at",
    category: "appetiteTiming",
    label: "食欲の変化",
    text: "食欲がいつもと違うと感じたのは、いつ頃からですか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "それより前", "分からない"]
  },
  {
    id: "appetite_eating_style",
    category: "eatingStyle",
    label: "食べ方",
    text: "今の食べ方に近いものを選んでください。",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "まったく食べない",
      "食べる量がかなり減った",
      "少しは食べている",
      "食べたそうにするけれど食べられない",
      "好きなものだけなら食べる",
      "食べたり食べなかったりする",
      "その他",
      "分からない"
    ],
    notices: {
      "まったく食べない": "⚠️ 猫は食べない状態が続くこと自体が体への負担になることがあります。いつから食べていないかを確認し、動物病院への相談も検討してください。"
    }
  },
  {
    id: "appetite_amount",
    category: "eatingAmount",
    label: "食べた量",
    text: "普段と比べて、どのくらい食べていますか？",
    type: "single",
    options: ["ほとんど食べていない", "普段の1〜3割くらい", "半分くらい", "半分以上は食べている", "量はあまり変わらない", "分からない"]
  },
  {
    id: "appetite_water_change",
    category: "water",
    label: "水",
    text: "水の飲み方に変化はありますか？",
    type: "single",
    options: ["いつも通り", "普段より多い", "普段より少ない", "ほとんど飲んでいないように見える", "分からない"]
  },
  {
    id: "appetite_eating_behavior",
    category: "eatingBehavior",
    label: "食べようとするときの様子",
    text: "食べようとするとき、こんな様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "食べ物のところまでは来るけれど食べない",
      "匂いを嗅いで離れる",
      "口や顔まわりを気にする",
      "よだれが増えた",
      "食べ物を口から落とす",
      "飲み込みにくそう",
      { label: "特に気になる様子はない", value: "特に気になる様子はない", exclusive: true },
      "分からない"
    ],
    notices: {
      "口や顔まわりを気にする": "気になる食べ方が続いている場合は、その様子を動画に残して動物病院で見せると、状況を伝えやすくなります。",
      "よだれが増えた": "気になる食べ方が続いている場合は、その様子を動画に残して動物病院で見せると、状況を伝えやすくなります。",
      "食べ物を口から落とす": "気になる食べ方が続いている場合は、その様子を動画に残して動物病院で見せると、状況を伝えやすくなります。",
      "飲み込みにくそう": "気になる食べ方が続いている場合は、その様子を動画に残して動物病院で見せると、状況を伝えやすくなります。"
    }
  },
  {
    id: "appetite_energy_now",
    category: "energy",
    label: "元気",
    text: "いつもと比べて様子はどうですか？",
    type: "single",
    options: ["いつも通り", "少し元気がない", "寝ている時間が増えた／隠れている", "明らかに元気がない", "分からない"]
  },
  {
    id: "appetite_other_changes",
    category: "otherChanges",
    label: "その他の変化",
    text: "ほかに気になる変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "吐いた・吐きそう",
      "下痢・軟便",
      "便が出ていない／少ない",
      "おしっこの様子がいつもと違う",
      "体重が減ったように感じる",
      "鼻水・鼻づまり・くしゃみ",
      { label: "特にない", value: "特にない", exclusive: true },
      "その他",
      "分からない"
    ]
  },
  {
    id: "appetite_recent_changes",
    category: "recentChanges",
    label: "最近の変化",
    text: "最近、食事や暮らしで変わったことはありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "フードを変えた",
      "おやつや食べ物が変わった",
      "引っ越し・模様替えなど環境が変わった",
      "新しい家族や動物が増えた",
      "留守番など生活リズムが変わった",
      "薬を飲み始めた／変更した",
      { label: "特にない", value: "特にない", exclusive: true },
      "その他",
      "分からない"
    ]
  }
];

const poopFollowupQuestions = [
  {
    id: "poop_started_at",
    category: "poopTiming",
    label: "うんちの変化",
    text: "うんちの変化が気になったのは、いつ頃からですか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "それより前", "分からない"]
  },
  {
    id: "poop_state",
    category: "poopState",
    label: "便の状態",
    text: "うんちの状態にいちばん近いものを選んでください。",
    type: "single",
    options: ["やわらかい", "水っぽい", "硬い・コロコロ", "便が出ていない", "少しずつしか出ない", "いつもと形が違う", "よく分からない"]
  },
  {
    id: "poop_color_mixture",
    category: "poopColorMixture",
    label: "色・混じっているもの",
    text: "色や混じっているものに気になる点はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "いつもと同じような色", value: "いつもと同じような色", exclusive: true },
      "赤い血のようなもの",
      "黒っぽい・タール状に見える",
      "粘液・ゼリー状のもの",
      "いつもと違う色",
      "その他",
      "よく分からない"
    ],
    notices: {
      "赤い血のようなもの": "⚠️ 血のように見えるものや、黒くタール状に見える便がある場合は、動物病院へ相談してください。\n\n量が多い、ぐったりしているなどほかの異変がある場合は、早めの受診を検討してください。",
      "黒っぽい・タール状に見える": "⚠️ 血のように見えるものや、黒くタール状に見える便がある場合は、動物病院へ相談してください。\n\n量が多い、ぐったりしているなどほかの異変がある場合は、早めの受診を検討してください。"
    }
  },
  {
    id: "poop_count",
    category: "poopCount",
    label: "回数",
    text: "うんちの回数は、いつもと比べてどうですか？",
    type: "single",
    options: ["増えた", "減った", "ほぼ同じ", "便が出ていない", "分からない"]
  },
  {
    id: "poop_toilet_behavior",
    category: "toiletBehavior",
    label: "トイレでの様子",
    text: "トイレでは、どんな様子ですか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "いつもどおり", value: "いつもどおり", exclusive: true },
      "何度もトイレに行く",
      "長くいきんでいる",
      "出そうなのに出ない",
      "鳴く・痛そう",
      "その他",
      "分からない"
    ],
    notices: {
      "何度もトイレに行く": "🚨 おしっこが出ているかも確認してください\n\nトイレで何度もいきんでいるのに尿が出ていない、\nまたはほとんど出ていない場合は、\n\n便ではなく、おしっこのトラブルの可能性もあります。\n\n尿が出ていないように見える場合は、\n早めに動物病院へ連絡してください。",
      "長くいきんでいる": "🚨 おしっこが出ているかも確認してください\n\nトイレで何度もいきんでいるのに尿が出ていない、\nまたはほとんど出ていない場合は、\n\n便ではなく、おしっこのトラブルの可能性もあります。\n\n尿が出ていないように見える場合は、\n早めに動物病院へ連絡してください。",
      "出そうなのに出ない": "🚨 おしっこが出ているかも確認してください\n\nトイレで何度もいきんでいるのに尿が出ていない、\nまたはほとんど出ていない場合は、\n\n便ではなく、おしっこのトラブルの可能性もあります。\n\n尿が出ていないように見える場合は、\n早めに動物病院へ連絡してください。"
    }
  },
  {
    id: "poop_appetite",
    category: "appetite",
    label: "食欲",
    text: "食欲はどうですか？",
    type: "single",
    options: ["普段どおり", "少し減った", "かなり減った", "食べていない", "分からない"]
  },
  {
    id: "poop_water",
    category: "water",
    label: "水",
    text: "水は飲めていますか？",
    type: "single",
    options: ["普段どおり", "少ない気がする", "多い気がする", "飲んでいない", "分からない"]
  },
  {
    id: "poop_other_symptoms",
    category: "otherSymptoms",
    label: "ほかの気になる様子",
    text: "ほかに気になる様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "吐いている",
      "元気がない",
      "隠れている",
      "お腹を痛がる／触られるのを嫌がる",
      "体重が減った",
      { label: "特になし", value: "特になし", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "poop_recent_changes",
    category: "recentChanges",
    label: "最近の変化",
    text: "最近、思い当たる変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "フード・おやつを変えた",
      "普段と違うものを食べた",
      "薬・サプリを始めた",
      "環境の変化があった",
      "異物・薬・植物などを口にした可能性",
      { label: "特になし", value: "特になし", exclusive: true },
      "分からない"
    ],
    notices: {
      "異物・薬・植物などを口にした可能性": "⚠️ 異物・薬・植物などを口にした可能性がある場合は、動物病院へ相談してください。"
    }
  }
];

const urineFollowupQuestions = [
  {
    id: "urine_output",
    category: "urineOutput",
    label: "尿が出ているか",
    text: "おしっこは出ていますか？",
    type: "single",
    options: ["普段どおり出ている", "少しは出ている", "数滴しか出ていない", "何度もトイレに行くが、出ていないように見える", "分からない"],
    stopOnValues: ["数滴しか出ていない", "何度もトイレに行くが、出ていないように見える"],
    stopResult: {
      label: "確認を止める目安",
      title: "🚨 ここでチェックを止めましょう",
      body: "何度もおしっこをしようとしているのに、\n尿がほとんど出ていない場合は、\n緊急性のある尿路トラブルで見られるサインです。\n\nねこモヤだけで判断せず、\n動物病院へ連絡して状況を伝えてください。"
    }
  },
  {
    id: "urine_started_at",
    category: "urineTiming",
    label: "いつから",
    text: "おしっこの変化が気になったのは、いつ頃からですか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "それより前", "分からない"]
  },
  {
    id: "urine_toilet_count",
    category: "toiletCount",
    label: "トイレ回数",
    text: "トイレに行く回数は、いつもと比べてどうですか？",
    type: "single",
    options: ["増えた", "減った", "ほぼ同じ", "分からない"]
  },
  {
    id: "urine_amount",
    category: "urineAmount",
    label: "1回の尿量",
    text: "1回のおしっこの量はどうですか？",
    type: "single",
    options: ["普段どおり", "少ない", "かなり少ない", "多い", "分からない"]
  },
  {
    id: "urine_appearance",
    category: "urineAppearance",
    label: "色、見た目",
    text: "おしっこの色や見た目で気になることはありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "いつもと同じ", value: "いつもと同じ", exclusive: true },
      "赤、ピンクっぽい／血のようなもの",
      "濃い色に見える",
      "濁っているように見える",
      "その他",
      "分からない"
    ],
    notices: {
      "赤、ピンクっぽい／血のようなもの": "⚠️ 血のように見えるものが混じっている場合は、\n動物病院への相談を検討してください。"
    }
  },
  {
    id: "urine_behavior",
    category: "urineBehavior",
    label: "排尿時の様子",
    text: "おしっこをするとき、こんな様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "いつもどおり", value: "いつもどおり", exclusive: true },
      "長くいきんでいる",
      "鳴く、痛そう",
      "何度もトイレに出たり入ったりする",
      "陰部をよくなめる",
      "トイレ以外でしてしまう",
      "その他",
      "分からない"
    ]
  },
  {
    id: "urine_water",
    category: "water",
    label: "水",
    text: "水の飲み方に変化はありますか？",
    type: "single",
    options: ["普段どおり", "多くなった", "少なくなった", "ほとんど飲まない", "分からない"]
  },
  {
    id: "urine_other_symptoms",
    category: "otherSymptoms",
    label: "ほかの気になる様子",
    text: "ほかに気になる様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "食欲が落ちている",
      "元気がない",
      "吐いている",
      "隠れている",
      "お腹を触られるのを嫌がる",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "urine_recent_changes",
    category: "recentChanges",
    label: "最近の変化",
    text: "最近、暮らしで変わったことはありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "引っ越し、模様替え",
      "トイレや猫砂を変えた",
      "新しい家族、猫が増えた",
      "生活リズムが変わった",
      "フードを変えた",
      "薬を飲み始めた／変更した",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  }
];

const waterFollowupQuestions = [
  {
    id: "water_drinking_change",
    category: "waterDrinkingChange",
    label: "水の飲み方の変化",
    text: "水の飲み方は、いつもと比べてどうですか？",
    type: "single",
    options: ["明らかに増えた", "少し増えた気がする", "少なくなった", "ほとんど飲んでいない", "飲み方が変わった気がするが、量は分からない", "分からない"]
  },
  {
    id: "water_started_at",
    category: "waterTiming",
    label: "いつから",
    text: "水の飲み方が気になったのは、いつ頃からですか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "1週間くらい前", "それより前", "分からない"]
  },
  {
    id: "water_drinking_style",
    category: "waterDrinkingStyle",
    label: "どんな飲み方の変化",
    text: "どんな変化が気になりますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "水を飲みに行く回数が増えた",
      "1回に飲む量が増えたように見える",
      "長い時間飲むようになった",
      "水皿の減りが以前より早い気がする",
      "飲みに行く回数が減った",
      "水の前まで行くけれど、あまり飲まない",
      "その他",
      "分からない"
    ]
  },
  {
    id: "water_food_type",
    category: "foodType",
    label: "普段のフード",
    text: "普段のごはんは、どれに近いですか？",
    type: "single",
    options: ["ドライフード中心", "ウェットフード中心", "ドライとウェットの両方", "最近フードを変えた", "分からない"]
  },
  {
    id: "water_urine_change",
    category: "urineChange",
    label: "おしっこの変化",
    text: "おしっこに変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "量が増えた気がする",
      "回数が増えた",
      "量が減った気がする",
      "回数が減った",
      "何度もトイレに行くのに、ほとんど出ていない",
      { label: "特に変わらない", value: "特に変わらない", exclusive: true },
      "分からない"
    ],
    stopOnValues: ["何度もトイレに行くのに、ほとんど出ていない"],
    stopResult: {
      label: "確認を止める目安",
      title: "🚨 ここでチェックを止めましょう",
      body: "何度もおしっこをしようとしているのに、\n尿がほとんど出ていない場合は、\n緊急性のある尿路トラブルで見られるサインです。\n\n水の飲み方のチェックより先に、\nねこモヤだけで判断せず、\n動物病院へ連絡して状況を伝えてください。"
    }
  },
  {
    id: "water_appetite",
    category: "appetite",
    label: "食欲",
    text: "食欲はどうですか？",
    type: "single",
    options: ["普段どおり", "少し減った", "かなり減った", "食べていない", "増えた気がする", "分からない"]
  },
  {
    id: "water_body_change",
    category: "bodyChange",
    label: "体重／体つき",
    text: "最近、体重や体つきに変化はありますか？",
    type: "single",
    options: ["変わらない", "体重が減った", "体重が増えた", "少し痩せた気がする", "少し太った気がする", "分からない"]
  },
  {
    id: "water_other_symptoms",
    category: "otherSymptoms",
    label: "ほかの気になる様子",
    text: "ほかに気になる様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "元気がない",
      "吐いている",
      "下痢をしている",
      "隠れることが増えた",
      "毛づや、毛並みが変わった気がする",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "water_recent_changes",
    category: "recentChanges",
    label: "最近の変化",
    text: "最近、思い当たる変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "フードを変えた",
      "ドライ／ウェットの割合が変わった",
      "水皿や給水器を変えた",
      "水皿の場所を変えた",
      "暑くなった／室温が変わった",
      "薬やサプリを始めた／変更した",
      "生活環境が変わった",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  }
];

const energyFollowupQuestions = [
  {
    id: "energy_main_changes",
    category: "mainChanges",
    label: "気になった様子",
    text: "どんな様子が一番気になりますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "いつもより動かない",
      "寝ている時間が増えた",
      "遊ばなくなった",
      "隠れることが増えた",
      "呼んでも反応が鈍い気がする",
      "人を避けるようになった",
      "いつもより甘える／離れなくなった",
      "鳴くことが増えた／鳴き方が変わった",
      "なんとなく普段と違う",
      "その他",
      "分からない"
    ]
  },
  {
    id: "energy_started_at",
    category: "timing",
    label: "いつから",
    text: "変化が気になったのは、いつ頃からですか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "1週間くらい前", "それより前", "分からない"]
  },
  {
    id: "energy_movement",
    category: "movement",
    label: "動き方",
    text: "動き方に変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "いつもどおり", value: "いつもどおり", exclusive: true },
      "動くのがゆっくり",
      "歩き方がいつもと違う",
      "ジャンプしなくなった／ためらう",
      "高いところへ行かなくなった",
      "立ち上がりにくそう",
      "その他",
      "分からない"
    ]
  },
  {
    id: "energy_appetite",
    category: "appetite",
    label: "食欲、食べ方",
    text: "食欲や食べ方に変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "普段どおり", value: "普段どおり", exclusive: true },
      "食べる量が少し減った",
      "食べる量がかなり減った",
      "食べていない",
      "食欲が増えた気がする",
      "食べたそうにするが、食べにくそう",
      "食べ物を口から落とす",
      "食べるのに時間がかかるようになった",
      "その他",
      "分からない"
    ]
  },
  {
    id: "energy_water_toilet",
    category: "waterToilet",
    label: "水、トイレ",
    text: "水やトイレに変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "水を飲む量が増えた気がする",
      "水を飲む量が減った気がする",
      "おしっこの量や回数が変わった",
      "うんちが変わった",
      "何度もトイレに行くのに尿がほとんど出ない",
      { label: "特に変わらない", value: "特に変わらない", exclusive: true },
      "分からない"
    ],
    stopOnValues: ["何度もトイレに行くのに尿がほとんど出ない"],
    stopResult: {
      label: "確認を止める目安",
      title: "🚨 ここでチェックを止めましょう",
      body: "何度もおしっこをしようとしているのに、\n尿がほとんど出ていない場合は、\n緊急性のある尿路トラブルで見られるサインです。\n\nねこモヤだけで判断せず、\n動物病院へ連絡して状況を伝えてください。"
    }
  },
  {
    id: "energy_other_symptoms",
    category: "otherSymptoms",
    label: "ほかの気になる様子",
    text: "ほかに気になる様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "吐いている",
      "下痢をしている",
      "咳、くしゃみ",
      "呼吸がいつもと違う",
      "目や鼻から何か出ている",
      "毛づくろいをしなくなった",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "energy_touch_behavior",
    category: "touchBehavior",
    label: "触ったときの様子",
    text: "触ったときや抱っこしたとき、いつもと違う様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "いつもどおり", value: "いつもどおり", exclusive: true },
      "触られるのを嫌がる",
      "特定の場所を触ると嫌がる",
      "抱っこを嫌がるようになった",
      "怒る／鳴く",
      "体を丸めてじっとしていることがある",
      "その他",
      "分からない"
    ]
  },
  {
    id: "energy_recent_changes",
    category: "recentChanges",
    label: "最近の変化",
    text: "最近、思い当たる変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "引っ越し、模様替え",
      "新しい家族や猫が増えた",
      "留守番時間や生活リズムが変わった",
      "フードを変えた",
      "薬やサプリを始めた／変更した",
      "ケガや落下などの心当たりがある",
      "異物、薬、植物などを口にした可能性がある",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ],
    stopOnValues: ["異物、薬、植物などを口にした可能性がある"],
    stopResult: {
      label: "確認を止める目安",
      title: "🚨 ここでチェックを止めましょう",
      body: "異物、薬、植物などを口にした可能性がある場合は、\nねこモヤだけで判断せず、\n動物病院へ連絡して状況を伝えてください。"
    }
  }
];

const breathingFollowupQuestions = [
  {
    id: "breathing_main_changes",
    category: "mainChanges",
    label: "気になる様子",
    text: "いちばん気になるのはどんな様子ですか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "咳をしているように見える",
      "くしゃみ",
      {
        label: "普段からくしゃみはするが、いつもより増えた／様子が違う",
        value: "普段からくしゃみあり／今回はいつもより増えた"
      },
      "咳か吐こうとしているのか分からない",
      "鼻水",
      "呼吸音がいつもと違う",
      "呼吸が速い気がする",
      "その他",
      "分からない"
    ]
  },
  {
    id: "breathing_started_at",
    category: "timing",
    label: "いつから",
    text: "気になる様子は、いつ頃からありますか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "1週間くらい前", "それより前", "以前から繰り返している", "分からない"]
  },
  {
    id: "breathing_frequency",
    category: "frequency",
    label: "頻度",
    text: "どのくらい見られますか？",
    type: "single",
    options: ["1回だけ", "ときどき", "1日に何度か", "何度も繰り返している", "以前から繰り返している", "分からない"]
  },
  {
    id: "breathing_nose_eyes",
    category: "noseEyes",
    label: "鼻、目の様子",
    text: "鼻水や目の様子に変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "透明でさらさらした鼻水",
      "白っぽい／濁った鼻水",
      "黄色、緑っぽい鼻水",
      "血が混じっているように見える",
      "鼻水が片方の鼻だけから出ている",
      "鼻がつまっているように見える",
      "目やにが増えた",
      "涙が増えた",
      "目をしょぼしょぼさせている",
      { label: "特にない", value: "特にない", exclusive: true },
      "よく分からない"
    ],
    note: "🐾 きなこメモ\n\nくしゃみのあと、\n壁や床などに鼻水が飛んでいたら、\n色や状態も観察の参考になります。\n\n無理に鼻を触って確認しなくても大丈夫です。"
  },
  {
    id: "breathing_appetite_energy",
    category: "appetiteEnergy",
    label: "食欲、元気",
    text: "食欲や元気はどうですか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      { label: "普段どおり", value: "普段どおり", exclusive: true },
      "食欲が少し落ちた",
      "ほとんど食べていない",
      "元気がない",
      "寝ている時間が増えた",
      "隠れることが増えた",
      "その他",
      "分からない"
    ]
  },
  {
    id: "breathing_other_changes",
    category: "otherChanges",
    label: "ほかの気になる変化",
    text: "ほかに気になることはありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "吐いている",
      "吐こうとするような動きがある",
      "よだれが増えた",
      "声が変わった気がする",
      "食べにくそう",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "breathing_recent_changes",
    category: "recentChanges",
    label: "最近の環境変化",
    text: "最近、思い当たる変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "部屋の掃除、模様替え",
      "猫砂を変えた",
      "芳香剤、スプレーなどを使った",
      "煙や強いにおいがあった",
      "新しい猫や家族が増えた",
      "外へ出た／ほかの猫と接触した",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  }
];

const eyeFollowupQuestions = [
  {
    id: "eye_side",
    category: "eyeSide",
    label: "気になる目",
    text: "どちらの目が気になりますか？",
    type: "single",
    options: ["右目", "左目", "両目", "分からない"]
  },
  {
    id: "eye_changes",
    category: "eyeChanges",
    label: "気になる変化",
    text: "どんな変化がありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "目やにが増えた",
      "涙が増えた",
      "赤い",
      "腫れている",
      "目を細めている",
      "目を閉じていることが増えた",
      "目をこする／気にしている",
      "白っぽい／曇って見える",
      "目の見た目や色が変わった",
      "その他",
      "分からない"
    ]
  },
  {
    id: "eye_discharge_tears",
    category: "dischargeTears",
    label: "目やに／涙",
    text: "目やにや涙はどんな様子ですか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "透明でさらさらしている",
      "白っぽい／濁っている",
      "黄色、緑っぽい",
      "茶色っぽい",
      "血が混じっているように見える",
      "乾いて固まっている",
      { label: "特に出ていない", value: "特に出ていない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "eye_appearance",
    category: "appearance",
    label: "左右差／見た目",
    text: "目の見た目にこんな変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "左右の瞳孔の大きさが違う",
      "片方の目だけ白っぽい／濁っている",
      "目が以前より大きく見える",
      "目が以前より小さく見える",
      "目頭から白っぽい膜が出ている／目立つ",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "eye_behavior",
    category: "visionBehavior",
    label: "見え方が変わったような行動",
    text: "見え方が変わったように感じる行動はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "物にぶつかるようになった",
      "段差や階段をためらう",
      "ジャンプをためらう",
      "食器や水の場所を探すようになった",
      "トイレを探すようになった",
      "呼びかけられると周りを探すような動きをする",
      "急に不安そうになる／固まることがある",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "eye_other_symptoms",
    category: "otherSymptoms",
    label: "ほかの気になる様子",
    text: "ほかに気になる様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "くしゃみ",
      "鼻水",
      "食欲が落ちている",
      "元気がない",
      "吐いている",
      "鳴くことが増えた／鳴き方や様子が違う",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "eye_recent_changes",
    category: "recentChanges",
    label: "最近の心当たり",
    text: "最近、思い当たることはありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "猫同士でケンカした",
      "どこかにぶつかった／落ちた",
      "目の近くを引っかいた可能性がある",
      "シャンプー、洗剤などが目に入った可能性がある",
      "新しい薬、目薬を使い始めた",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  }
];

const earFollowupQuestions = [
  {
    id: "ear_side",
    category: "earSide",
    label: "気になる耳",
    text: "どの耳が気になりますか？",
    type: "single",
    options: ["右耳", "左耳", "両耳", "どちらか分からない"]
  },
  {
    id: "ear_changes",
    category: "earChanges",
    label: "気になる変化",
    text: "どんな変化が気になりますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "耳垢が増えた",
      "耳垢の見た目が変わった",
      "においが気になる",
      "耳が赤い",
      "耳が腫れている",
      "耳をよく掻く",
      "頭をよく振る",
      "顔や耳をこすりつける",
      "耳を触られるのを嫌がるようになった",
      "片方の耳を下げることが増えた",
      "その他",
      "分からない"
    ]
  },
  {
    id: "ear_wax",
    category: "earWax",
    label: "耳垢の様子",
    text: "耳垢や耳の中はどんな様子ですか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "黒っぽい",
      "濃い茶色",
      "薄い茶色",
      "黄色っぽい",
      "白っぽい",
      "湿っている／ベタっとしている",
      "乾いている／ポロポロしている",
      "液体っぽいものがある",
      "血が混じっているように見える",
      "普段より量が多い",
      { label: "普段とあまり変わらない", value: "普段とあまり変わらない", exclusive: true },
      { label: "耳垢は特に見えない", value: "耳垢は特に見えない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "ear_smell_appearance",
    category: "smellAppearance",
    label: "におい／見た目",
    text: "耳のにおいや見た目に変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "いつもよりにおう",
      "強いにおいがする",
      "赤く見える",
      "腫れている",
      "かさぶた／傷がある",
      "耳の周りの毛が抜けている",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "ear_behavior",
    category: "earBehavior",
    label: "かゆみ／痛み／行動",
    text: "耳を気にする様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "耳を何度も掻く",
      "頭を振る",
      "耳や顔を家具などにこすりつける",
      "耳を触ると嫌がる",
      "耳を触ると鳴く／逃げる",
      "片方の耳を下げることが増えた",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "ear_other_symptoms",
    category: "otherSymptoms",
    label: "ほかの気になる様子",
    text: "ほかに気になる様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "元気がない",
      "食欲が落ちている",
      "くしゃみ／鼻水",
      "目やに／涙",
      "吐いている",
      "ふらつく",
      "頭を傾ける",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ],
    notices: {
      "ふらつく": "耳の症状と一緒に、\nバランスや頭の傾きにも変化があるようです。\nねこモヤだけで判断せず、\n動物病院へ相談して今の様子を伝えてください。",
      "頭を傾ける": "耳の症状と一緒に、\nバランスや頭の傾きにも変化があるようです。\nねこモヤだけで判断せず、\n動物病院へ相談して今の様子を伝えてください。"
    }
  },
  {
    id: "ear_recent_changes",
    category: "recentChanges",
    label: "最近の心当たり",
    text: "最近、思い当たることはありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "最近、耳掃除をした",
      "新しい耳クリーナー／薬を使った",
      "シャンプーをした",
      "外へ出た／ほかの猫と接触した",
      "猫同士でケンカした",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  }
];

const mouthFollowupQuestions = [
  {
    id: "mouth_changes",
    category: "mouthChanges",
    label: "気になる変化",
    text: "どんなことが気になりますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "口臭",
      "よだれ",
      "歯ぐきの赤み",
      "歯ぐきの腫れ",
      "口の中の出血",
      "歯の見た目が変わった",
      "歯が欠けた／抜けたように見える",
      "口元／顔が腫れている",
      "口を前足で気にする",
      "食べ方がおかしい",
      "その他",
      "分からない"
    ]
  },
  {
    id: "mouth_started_at",
    category: "timing",
    label: "いつから",
    text: "その変化に気づいたのはいつ頃ですか？",
    type: "single",
    options: ["今日", "昨日", "2〜3日前", "1週間くらい前", "それより前", "以前からあるが最近変わった", "分からない"]
  },
  {
    id: "mouth_trying_to_eat",
    category: "tryingToEat",
    label: "食べようとする様子",
    text: "食べようとする様子はどうですか？",
    type: "single",
    options: [
      "普段どおり食べる",
      "食べたそうにして、食べられる",
      "食べたそうにするが、食べ始めにくそう",
      "食べ始めるが、途中でやめる",
      "食べ物に近づくが、食べずに離れる",
      "ほとんど食べようとしない",
      "分からない"
    ]
  },
  {
    id: "mouth_eating_behavior",
    category: "eatingBehavior",
    label: "実際の食べ方",
    text: "食べているとき、こんな変化はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "食べ物を口から落とす",
      "食べるのが遅くなった",
      "何度も食べ直す",
      "頭を傾けて食べる",
      "片側だけで噛んでいるように見える",
      "硬いフードを避ける",
      "柔らかいものなら食べやすそう",
      "丸飲みするようになった",
      "食事中に鳴く／急に離れる",
      "飲み込みにくそう",
      { label: "普段とあまり変わらない", value: "普段とあまり変わらない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "mouth_visible_changes",
    category: "visibleChanges",
    label: "よだれ／口元の見た目",
    text: "見える範囲で、口元に変化はありますか？",
    help: "無理に口を開けて確認する必要はありません。\nいくつでも選べます。",
    type: "multiple",
    options: [
      "よだれが増えた",
      "よだれに血が混じっているように見える",
      "歯ぐきが赤い",
      "歯ぐきが腫れている",
      "口の中に傷／できもののようなものが見える",
      "歯が欠けた／抜けたように見える",
      "口元／顔が腫れている",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "mouth_face_behavior",
    category: "faceBehavior",
    label: "口や顔を気にする行動",
    text: "口や顔を気にする様子はありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "前足で口を触る／こする",
      "顔を家具などにこすりつける",
      "口元を触られるのを嫌がる",
      "あくびや口を開けたときに嫌がる",
      "口をくちゃくちゃ／もぐもぐすることが増えた",
      "鳴き方や食事中の反応が変わった",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ]
  },
  {
    id: "mouth_care_recent",
    category: "careRecent",
    label: "普段の口腔ケア／最近のこと",
    text: "最近の口まわりのケアや、思い当たることはありますか？",
    help: "いくつでも選べます。",
    type: "multiple",
    options: [
      "猫用歯ブラシで歯磨きをしている",
      "歯磨きシート／ガーゼなどを使っている",
      "デンタルケア用のおやつを食べている",
      "デンタルケア用のおもちゃ／噛むおもちゃを使っている",
      "最近、新しいデンタルケア用品を使い始めた",
      "最近、口や顔をぶつけた可能性がある",
      "硬いものを噛んだ可能性がある",
      "糸、ひもなどの異物を口にした可能性がある",
      { label: "特にない", value: "特にない", exclusive: true },
      "分からない"
    ],
    notices: {
      "糸、ひもなどの異物を口にした可能性がある": "糸やひもなどを口にした可能性がある場合は、\nねこモヤだけで判断せず、\n動物病院へ連絡して今の様子を伝えてください。\n\n口から糸やひものようなものが見えても、\n無理に引っ張らないでください。"
    }
  }
];

const answers = {};
let currentVomitQuestionIndex = 0;
let currentFlowKey = "vomit";
const vomitQuestionKinakoMessage = "いくつか質問するね。分からないものは「分からない」で大丈夫です。";
const vomitSummaryKinakoMessage = "いっしょに整理できたね🐾 今の様子をまとめてみたよ。\n気になるところがあったら、病院で見せるメモにもできるよ。";
const appetiteSummaryKinakoMessage = "いっしょに整理できたね🐾\n今の様子をまとめてみたよ。\n気になるところがあったら、\n病院で見せるメモにもできるよ。";
const symptomFlowConfigs = {
  vomit: {
    questions: vomitFollowupQuestions,
    summaryMessage: vomitSummaryKinakoMessage,
    photoItems: ["吐いたものの写真", "吐いている様子の動画", "吐いた時刻", "食べたもののパッケージ", "誤食の可能性があれば、その物や包装"]
  },
  appetite: {
    questions: appetiteFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "食べた量や残した量が分かる写真",
      "食べようとするときの様子の動画",
      "最後に普段通り食べた日時",
      "食べたフードの商品名／パッケージ",
      "最近の体重が分かればその記録",
      "吐いた、下痢などがある場合はその記録"
    ]
  },
  poop: {
    questions: poopFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "便の写真",
      "いつから変わったか",
      "回数",
      "色・形・硬さ",
      "血や粘液の有無",
      "食欲・水・元気",
      "嘔吐など他の症状",
      "最近食べたもの",
      "フード変更",
      "誤食の可能性"
    ]
  },
  urine: {
    questions: urineFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "トイレに行った回数",
      "実際に尿が出た回数",
      "1回の尿量の目安",
      "尿の色",
      "血のようなものの有無",
      "トイレでの様子",
      "食欲、元気",
      "水の飲み方",
      "嘔吐の有無",
      "最近の環境変化"
    ]
  },
  water: {
    questions: waterFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "いつから変わったか",
      "水を飲む姿を以前よりよく見るか",
      "水皿の減り方",
      "普段のフード",
      "おしっこの量や回数",
      "食欲",
      "体重や体つき",
      "嘔吐、下痢",
      "最近の薬やサプリ",
      "生活環境の変化"
    ],
    photoNote: "正確な飲水量が分からなくても大丈夫です。\n「以前より水を飲む姿をよく見る」\n「水皿の減りが早くなった気がする」など、\n気づいた変化を伝えられるようにしておきましょう。\n\n※多頭飼いでは個体ごとの正確な飲水量を測れない場合があります。"
  },
  energy: {
    questions: energyFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "いつから変わったか",
      "どんな行動が変わったか",
      "鳴く回数や鳴き方",
      "寝る時間",
      "遊びへの反応",
      "食欲、食べ方",
      "水",
      "排泄",
      "嘔吐、下痢",
      "歩き方、動き方",
      "最近の環境変化"
    ],
    photoNote: "歩き方や鳴き方、食べるときの様子など、\n普段と違う行動が見られる場合は、\n可能であれば動画を残しておくと、\n動物病院で様子を伝える参考になることがあります。"
  },
  breathing: {
    questions: breathingFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "いつから",
      "咳、くしゃみの頻度",
      "普段との違い",
      "どんな姿勢でしているか",
      "呼吸の様子",
      "呼吸音",
      "鼻水の色や状態",
      "鼻水が片方か両方か",
      "目やに、涙",
      "食欲",
      "元気",
      "吐く動きがあるか",
      "最近の環境変化"
    ],
    photoNote: "咳なのか吐こうとしているのか分からない場合や、\n呼吸音、呼吸の様子が気になる場合は、\n無理のない範囲で動画を残しておくと、\n動物病院で様子を伝える参考になることがあります。"
  },
  eye: {
    questions: eyeFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "いつから",
      "右目／左目／両目",
      "目やにの色、状態",
      "涙",
      "赤み",
      "腫れ",
      "目を開けられているか",
      "白っぽさ／濁り",
      "瞳孔の左右差",
      "目頭の白っぽい膜",
      "見え方が変わったような行動",
      "くしゃみ、鼻水",
      "元気",
      "食欲",
      "ケガなどの心当たり"
    ],
    photoNote: "目の赤み、濁り、目やになどが気になる場合は、\n無理のない範囲で写真を残しておくと、\n動物病院で経過を伝える参考になることがあります。"
  },
  ear: {
    questions: earFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "いつから",
      "右耳／左耳／両耳",
      "普段の耳との違い",
      "耳垢の量",
      "耳垢の色",
      "湿っている／乾いている",
      "におい",
      "赤み",
      "腫れ",
      "掻く回数",
      "頭を振る回数",
      "耳を触ったときの反応",
      "頭の傾き",
      "ふらつき",
      "元気",
      "食欲",
      "最近の耳掃除",
      "使用した耳クリーナー／薬"
    ],
    photoNote: "耳垢の色や量、耳の赤みなどが気になる場合は、\n無理のない範囲で写真を残しておくと、\n動物病院で経過を伝える参考になることがあります。"
  },
  mouth: {
    questions: mouthFollowupQuestions,
    summaryMessage: appetiteSummaryKinakoMessage,
    photoItems: [
      "いつから",
      "口臭",
      "よだれ",
      "歯ぐきの見た目",
      "歯の見た目",
      "口元／顔の腫れ",
      "食べたそうにするか",
      "実際の食べ方",
      "食べ物を落とすか",
      "食べる速度",
      "硬い／柔らかい食べ物で違いがあるか",
      "食事中の反応",
      "元気",
      "体重変化",
      "普段の口腔ケア",
      "最近使用したデンタルケア用品"
    ],
    photoNote: "食べ方がいつもと違う場合は、\n無理のない範囲で食事中の様子を動画に残しておくと、\n動物病院で経過を伝える参考になることがあります。"
  }
};

if (symptomCategoryGrid) {
  symptomCategories.forEach((item) => {
    const button = document.createElement("button");
    button.className = `symptom-category-card${item.ready ? "" : " is-disabled"}`;
    button.type = "button";
    button.innerHTML = `
      <span class="symptom-emoji" aria-hidden="true">${item.icon}</span>
      <span>${item.title}</span>
      ${item.ready ? "" : '<small>準備中</small>'}
    `;
    button.addEventListener("click", () => {
      if (item.ready) {
        showView(item.view);
        return;
      }
      showToast("この症状ページは準備中です。");
    });
    symptomCategoryGrid.append(button);
  });
}

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
  button.addEventListener("click", () => {
    if (button.dataset.flow) {
      currentFlowKey = button.dataset.flow;
    }
    showView(button.dataset.view);
  });
});

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });
  if (viewId === "vomit-check") {
    resetVomitCheckPage();
  }
  const navViewId = ["vomit-detail", "appetite-detail", "poop-detail", "urine-detail", "water-detail", "energy-detail", "breathing-detail", "eye-detail", "ear-detail", "mouth-detail", "vomit-check"].includes(viewId) ? "symptoms" : viewId;
  document.querySelectorAll(".bottom-nav .nav-link").forEach((button) => {
    button.classList.toggle("is-current", button.dataset.view === navViewId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetVomitCheckPage() {
  currentVomitQuestionIndex = 0;
  setVomitKinakoMessage(vomitQuestionKinakoMessage);
  document.querySelector("#dangerSignForm").hidden = false;
  document.querySelector("#dangerResult").hidden = false;
  document.querySelector("#vomitQuestionFlow").hidden = true;
  document.querySelector("#vomitSummary").hidden = true;
  document.querySelector("#dangerSignForm").reset();
  document.querySelector("#dangerResult").className = "result-card";
  document.querySelector("#dangerResult").innerHTML = `
    <span class="result-label">状況確認中</span>
    <h2>選択して「次へ」を押してください。</h2>
    <p>分からない場合は、無理に判断せず近くの動物病院へ相談してください。</p>
  `;
  getCurrentQuestions().forEach((question) => delete answers[question.id]);
}

function getCurrentFlowConfig() {
  return symptomFlowConfigs[currentFlowKey] || symptomFlowConfigs.vomit;
}

function getCurrentQuestions() {
  return getCurrentFlowConfig().questions;
}

function setVomitKinakoMessage(message) {
  const kinakoMessage = document.querySelector("#vomitKinakoMessage");
  if (!kinakoMessage) return;
  kinakoMessage.textContent = message;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function renderDangerQuestion() {
  const optionsRoot = document.querySelector("#dangerOptions");
  if (!optionsRoot) return;
  const question = dangerQuestions[0];
  optionsRoot.innerHTML = question.options.map((option) => `
    <label>
      <input
        type="checkbox"
        name="${question.id}"
        value="${option.value}"
        data-exclusive="${option.exclusive ? "true" : "false"}"
      >
      ${option.label}
    </label>
  `).join("");

  optionsRoot.addEventListener("change", (event) => {
    const changed = event.target;
    if (!(changed instanceof HTMLInputElement)) return;
    const inputs = [...optionsRoot.querySelectorAll("input[type='checkbox']")];
    const noneInput = inputs.find((input) => input.dataset.exclusive === "true");

    if (changed.dataset.exclusive === "true" && changed.checked) {
      inputs.forEach((input) => {
        if (input !== changed) input.checked = false;
      });
      return;
    }

    if (changed.checked && noneInput) {
      noneInput.checked = false;
    }
  });
}

renderDangerQuestion();

document.querySelector("#dangerSignForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const question = dangerQuestions[0];
  const selected = [...form.querySelectorAll(`input[name="${question.id}"]:checked`)].map((input) => input.value);
  answers[question.id] = {
    questionId: question.id,
    category: question.category,
    values: selected
  };

  const result = document.querySelector("#dangerResult");
  if (!result) return;
  result.className = "result-card";

  if (selected.length === 0) {
    result.innerHTML = `
      <span class="result-label">未選択です</span>
      <h2>当てはまるものを選んでください。</h2>
      <p>分からない場合は「どれも当てはまらない」を選んでください。</p>
    `;
    return;
  }

  if (selected.some((value) => value !== "none")) {
    showStopResult({
      label: "確認を止める目安",
      title: "チェックをいったんここで止めましょう",
      body: "入力された内容には、緊急性のある状態で見られるサインが含まれています。ねこモヤだけで判断せず、動物病院へ連絡して状況を伝えてください。"
    });
    return;
  }

  startVomitQuestionFlow();
});

function startVomitQuestionFlow() {
  currentVomitQuestionIndex = 0;
  setVomitKinakoMessage(vomitQuestionKinakoMessage);
  document.querySelector("#dangerResult").hidden = true;
  document.querySelector("#dangerSignForm").hidden = true;
  document.querySelector("#vomitSummary").hidden = true;
  document.querySelector("#vomitQuestionFlow").hidden = false;
  renderVomitQuestion();
}

function showStopResult({ label, title, body }) {
  const result = document.querySelector("#dangerResult");
  if (!result) return;
  document.querySelector("#vomitQuestionFlow").hidden = true;
  document.querySelector("#vomitSummary").hidden = true;
  result.hidden = false;
  result.className = `result-card urgent${title.startsWith("🚨") ? " has-heading-icon" : ""}`;
  result.innerHTML = `
    <span class="result-label">${escapeHtml(label)}</span>
    <h2>${escapeHtml(title)}</h2>
    <p>${escapeHtml(body)}</p>
  `;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getOptionData(option) {
  return typeof option === "string"
    ? { label: option, value: option, exclusive: false }
    : { exclusive: false, ...option };
}

function renderVomitQuestion() {
  const questions = getCurrentQuestions();
  const question = questions[currentVomitQuestionIndex];
  if (!question) return;

  const title = document.querySelector("#vomitQuestionTitle");
  const help = document.querySelector("#vomitQuestionHelp");
  const optionsRoot = document.querySelector("#vomitQuestionOptions");
  const notice = document.querySelector("#vomitQuestionNotice");
  const count = document.querySelector("#vomitQuestionCount");
  const progress = document.querySelector("#vomitQuestionProgress");
  const back = document.querySelector("#vomitQuestionBack");

  title.textContent = question.text;
  help.textContent = question.help || "";
  help.hidden = !question.help;
  count.textContent = `${currentVomitQuestionIndex + 1} / ${questions.length}`;
  progress.style.width = `${((currentVomitQuestionIndex + 1) / questions.length) * 100}%`;
  back.disabled = currentVomitQuestionIndex === 0;

  const inputType = question.type === "multiple" ? "checkbox" : "radio";
  const selectedValues = answers[question.id]?.values || [];
  optionsRoot.innerHTML = question.options.map((rawOption) => {
    const option = getOptionData(rawOption);
    const checked = selectedValues.includes(option.value) ? " checked" : "";
    return `
      <label>
        <input
          type="${inputType}"
          name="${question.id}"
          value="${escapeHtml(option.value)}"
          data-exclusive="${option.exclusive ? "true" : "false"}"
          ${checked}
        >
        ${escapeHtml(option.label)}
      </label>
    `;
  }).join("");

  bindExclusiveOptions(optionsRoot);
  updateQuestionNotice(question, optionsRoot, notice);
}

function bindExclusiveOptions(optionsRoot) {
  optionsRoot.onchange = (event) => {
    const changed = event.target;
    if (!(changed instanceof HTMLInputElement)) return;
    const inputs = [...optionsRoot.querySelectorAll("input[type='checkbox']")];
    const exclusiveInputs = inputs.filter((input) => input.dataset.exclusive === "true");

    if (changed.dataset.exclusive === "true" && changed.checked) {
      inputs.forEach((input) => {
        if (input !== changed) input.checked = false;
      });
      return;
    }

    if (changed.checked) {
      exclusiveInputs.forEach((input) => {
        input.checked = false;
      });
    }

    const question = getCurrentQuestions()[currentVomitQuestionIndex];
    updateQuestionNotice(question, optionsRoot, document.querySelector("#vomitQuestionNotice"));
  };
}

function updateQuestionNotice(question, optionsRoot, notice) {
  const selectedLabels = [...optionsRoot.querySelectorAll("input:checked")].map((input) => input.value);
  const message = selectedLabels.map((label) => question.notices?.[label]).find(Boolean);
  const fallbackMessage = question.note || "";
  notice.hidden = !message && !fallbackMessage;
  notice.textContent = message || fallbackMessage;
}

function saveCurrentVomitAnswer() {
  const question = getCurrentQuestions()[currentVomitQuestionIndex];
  const selectedInputs = [...document.querySelectorAll(`#vomitQuestionOptions input[name="${question.id}"]:checked`)];
  const values = selectedInputs.map((input) => input.value);

  if (values.length === 0) {
    showInlineQuestionNotice("選択してから進んでください。");
    return false;
  }

  answers[question.id] = {
    questionId: question.id,
    category: question.category,
    label: question.label,
    values
  };
  return true;
}

function showInlineQuestionNotice(message) {
  const notice = document.querySelector("#vomitQuestionNotice");
  notice.hidden = false;
  notice.textContent = message;
}

document.querySelector("#vomitQuestionForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!saveCurrentVomitAnswer()) return;

  const question = getCurrentQuestions()[currentVomitQuestionIndex];
  const selectedValues = answers[question.id]?.values || [];
  if (question.stopOnValues?.some((value) => selectedValues.includes(value))) {
    const appendMessage = selectedValues.map((value) => question.stopAppendByValues?.[value]).find(Boolean);
    showStopResult({
      ...question.stopResult,
      body: appendMessage ? `${question.stopResult.body}\n\n${appendMessage}` : question.stopResult.body
    });
    return;
  }

  if (currentVomitQuestionIndex < getCurrentQuestions().length - 1) {
    currentVomitQuestionIndex += 1;
    renderVomitQuestion();
    return;
  }

  renderVomitSummary();
});

document.querySelector("#vomitQuestionBack")?.addEventListener("click", () => {
  saveCurrentVomitAnswer();
  if (currentVomitQuestionIndex > 0) {
    currentVomitQuestionIndex -= 1;
    renderVomitQuestion();
  }
});

function renderVomitSummary() {
  document.querySelector("#vomitQuestionFlow").hidden = true;
  const flowConfig = getCurrentFlowConfig();
  setVomitKinakoMessage(flowConfig.summaryMessage);
  const summary = document.querySelector("#vomitSummary");
  const list = document.querySelector("#vomitSummaryList");
  const photoList = document.querySelector("#summaryPhotoList");
  const photoNote = document.querySelector("#summaryPhotoNote");
  list.innerHTML = flowConfig.questions.filter((question) => !question.skipSummary).map((question) => {
    const values = answers[question.id]?.values || ["未選択"];
    return `
      <div>
        <dt>${question.label}</dt>
        <dd>${values.map(escapeHtml).join("・")}</dd>
      </div>
    `;
  }).join("");
  if (photoList) {
    photoList.innerHTML = flowConfig.photoItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }
  if (photoNote) {
    photoNote.hidden = !flowConfig.photoNote;
    photoNote.textContent = flowConfig.photoNote || "";
  }
  summary.hidden = false;
  summary.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#memoComingSoon")?.addEventListener("click", () => {
  const status = document.querySelector("#memoComingSoonStatus");
  status.hidden = false;
  status.textContent = "病院メモ機能は準備中です。次回実装予定です。";
});

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
