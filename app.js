const STORAGE_KEY = "linktree-alt-prototype-v1";

const templates = [
  ["minimal", "シンプル / 洗練", "白背景、余白、細線"],
  ["chalk", "黒板風", "チョーク線と教室感"],
  ["sticky", "付箋ノート風", "方眼紙と手帳感"],
  ["vinyl", "レコード風", "深い色と棚感"],
  ["surf", "サーフィン", "海と半透明ボタン"],
  ["y2k", "2000年代風 / Y2K", "光沢とパステル"],
  ["arcade", "レトロゲームセンター", "ネオンとSTART感"],
  ["wamodern", "和モダン", "和紙、墨、朱色"],
  ["cafe", "カフェメニュー", "紙メニューと営業時間感"],
  ["luxury", "ラグジュアリー", "黒金と余白"],
  ["portfolio", "ポートフォリオグリッド", "作品カード主役"],
  ["editorial", "雑誌 / エディトリアル", "大見出しと目次感"],
  ["craft", "クラフト / ハンドメイド", "紙、布、ステッチ"],
  ["botanical", "ボタニカル", "葉と淡い緑"],
  ["experimental", "実験アート", "色面と非対称"]
].map(([id, name, description], index) => ({ id, name, description, order: index + 1 }));

const templateSamples = {
  minimal: {
    title: "Simple",
    handle: "リンクを、すっきりと。",
    links: ["プロフィール", "サービス", "作品", "お知らせ", "お問い合わせ"]
  },
  chalk: {
    title: "山田先生の教室",
    handle: "一緒に学び、考え、成長する",
    links: ["プロフィール", "授業メニュー", "お知らせ", "資料ダウンロード", "お問い合わせ"]
  },
  sticky: {
    title: "わたしのリンクまとめ",
    handle: "気になること、まとめてここに",
    links: ["プロフィール", "作品一覧", "SNSまとめ", "メディア情報", "ご予約", "お問い合わせ"]
  },
  vinyl: {
    title: "Good Music.",
    handle: "Good Life.",
    links: ["プロフィール", "おすすめ", "コレクション", "プレイリスト", "お問い合わせ"]
  },
  surf: {
    title: "Ride the Wave",
    handle: "波にのるように、軽やかに",
    links: ["プロフィール", "レッスン案内", "ギャラリー", "予約ページ", "お問い合わせ"]
  },
  y2k: {
    title: "My Link",
    handle: "100% glossy mood",
    links: ["プロフィール", "メニュー", "イベント", "ブログ", "お問い合わせ"]
  },
  arcade: {
    title: "GAME CENTER",
    handle: "PUSH START",
    links: ["プロフィール", "ゲーム紹介", "ハイスコア", "イベント情報", "お問い合わせ"]
  },
  wamodern: {
    title: "和のしつらえ",
    handle: "静けさと、余白のリンク",
    links: ["プロフィール", "お知らせ", "作品", "ご予約", "お問い合わせ"]
  },
  cafe: {
    title: "Cafe Natural",
    handle: "coffee / sweets / lunch",
    links: ["メニュー", "こだわり", "予約する", "お知らせ", "お問い合わせ"]
  },
  luxury: {
    title: "Aurum studio",
    handle: "本物だけを、静かに集める",
    links: ["プロフィール", "サービス", "実績紹介", "ご予約", "お問い合わせ"]
  },
  portfolio: {
    title: "PORTFOLIO",
    handle: "visual works gallery",
    links: ["写真", "Webデザイン", "イラスト", "商品制作", "パッケージ", "ロゴ"]
  },
  editorial: {
    title: "FOCUS",
    handle: "特集、深掘り、今のログ",
    links: ["最新記事", "インタビュー", "コラム", "連載一覧", "お問い合わせ"]
  },
  craft: {
    title: "handmade with love",
    handle: "作る、売る、届ける",
    links: ["作品一覧", "オーダーについて", "イベント情報", "作家について", "お問い合わせ"]
  },
  botanical: {
    title: "植物と暮らす",
    handle: "グリーンのある毎日",
    links: ["プロフィール", "植物の販売", "ワークショップ", "お手入れ方法", "お問い合わせ"]
  },
  experimental: {
    title: "CREATE THE NEW.",
    handle: "アイデアでつなぐ",
    links: ["プロフィール", "作品", "展示・イベント", "NEWS", "お問い合わせ"]
  }
};

const navItems = [
  ["top", "トップ"],
  ["templates", "テンプレート"],
  ["profile", "プロフィール"],
  ["links", "リンク"],
  ["sections", "セクション"],
  ["design", "デザイン"],
  ["ai", "AIデザイン"],
  ["keeps", "キープ"],
  ["analytics", "分析"],
  ["publish", "公開設定"],
  ["plans", "プラン確認"]
];

const mobileNav = [
  ["top", "ホーム"],
  ["links", "リンク"],
  ["design", "デザイン"],
  ["ai", "AI"],
  ["publish", "公開"]
];

const planLabel = { basic: "Basic", pro: "Pro", premium: "Premium" };
const planRank = { basic: 0, pro: 1, premium: 2 };

const defaultState = {
  activeTab: "top",
  publicPreview: false,
  aiGenerated: false,
  aiPrompt: "落ち着いた雰囲気だけど、リンク集っぽく見えないページにしたい",
  aiAnswers: {},
  page: {
    id: "page_demo_001",
    ownerId: "owner_demo",
    title: "taku studio",
    slug: "taku",
    plan: "basic",
    profile: {
      name: "taku studio",
      handle: "@taku",
      bio: "制作物、SNS、予約導線をひとつにまとめた実験用プロフィール。",
      avatarText: "T",
      avatarSize: "normal",
      layout: "center"
    },
    links: [
      { id: "link_1", sectionId: "main", title: "最新のプロジェクトを見る", url: "https://example.com/project", role: "featured", isVisible: true, order: 1 },
      { id: "link_2", sectionId: "main", title: "Instagram", url: "https://example.com/instagram", role: "standard", isVisible: true, order: 2 },
      { id: "link_3", sectionId: "main", title: "予約・お問い合わせ", url: "https://example.com/contact", role: "brand", isVisible: true, order: 3 },
      { id: "link_4", sectionId: "works", title: "制作実績", url: "https://example.com/works", role: "image", isVisible: true, order: 4 }
    ],
    sections: [
      { id: "main", name: "Main Links", order: 1, isVisible: true, headingStyle: "line" },
      { id: "works", name: "Works", order: 2, isVisible: true, headingStyle: "plain" }
    ],
    snsLinks: ["Instagram", "X", "YouTube"],
    design: {
      templateId: "minimal",
      source: "template",
      createdByPlan: "basic",
      theme: {
        buttonStyle: "outline",
        radius: "medium",
        spacing: "normal",
        fontMood: "simple",
        decorationLevel: "subtle"
      },
      layout: {
        headerType: "center",
        linkLayout: "stack",
        snsPosition: "top"
      }
    },
    ogp: {
      title: "taku studio",
      description: "SNS、制作物、予約導線をまとめたページ",
      mode: "template",
      qrStyle: "standard"
    },
    publish: {
      isPublic: true,
      customDomain: ""
    },
    analytics: {
      views: 12840,
      clicks: 3921,
      ctr: "30.5%",
      topLink: "最新のプロジェクトを見る"
    },
    createdAt: "2026-05-05T00:00:00.000Z",
    updatedAt: "2026-05-05T00:00:00.000Z"
  },
  keeps: []
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !saved.page) return clone(defaultState);
    return mergeDeep(clone(defaultState), saved);
  } catch {
    return clone(defaultState);
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function saveState() {
  state.page.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function mergeDeep(target, source) {
  Object.keys(source || {}).forEach((key) => {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      target[key] = mergeDeep(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTemplate(id = state.page.design.templateId) {
  return templates.find((template) => template.id === id) || templates[0];
}

function render() {
  const root = document.querySelector("#app");
  root.innerHTML = `
    <main class="app-shell">
      ${renderTopbar()}
      <section class="workspace ${state.activeTab === "templates" ? "templates-mode" : ""}">
        ${renderSideNav()}
        <section class="editor-panel">${renderPanel()}</section>
        <aside class="preview-panel">${renderPhonePreview()}</aside>
      </section>
      ${renderMobileTabs()}
      ${state.publicPreview ? renderPublicPreview() : ""}
    </main>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="brand-mark">
        <div class="brand-glyph">L</div>
        <div>
          <div class="brand-title">Link Atelier</div>
          <div class="brand-sub">リンクページ作成プロトタイプ</div>
        </div>
      </div>
      <div class="plan-switcher" aria-label="表示プラン">
        ${["basic", "pro", "premium"].map((plan) => `
          <button class="${state.page.plan === plan ? "active" : ""}" data-action="set-plan" data-plan="${plan}">${planLabel[plan]}</button>
        `).join("")}
      </div>
    </header>
  `;
}

function renderSideNav() {
  const counts = {
    templates: templates.length,
    links: state.page.links.length,
    keeps: state.keeps.length
  };
  return `
    <nav class="side-nav" aria-label="編集メニュー">
      ${navItems.map(([id, label]) => `
        <button class="nav-button ${state.activeTab === id ? "active" : ""}" data-action="tab" data-tab="${id}">
          <span>${label}</span>
          ${counts[id] ? `<span class="nav-count">${counts[id]}</span>` : ""}
        </button>
      `).join("")}
    </nav>
  `;
}

function renderMobileTabs() {
  return `
    <nav class="mobile-tabs" aria-label="スマホ編集メニュー">
      ${mobileNav.map(([id, label]) => `
        <button class="${state.activeTab === id ? "active" : ""}" data-action="tab" data-tab="${id}">${label}</button>
      `).join("")}
    </nav>
  `;
}

function panelIntro(title, text, action = "") {
  return `
    <div class="panel-head">
      <div>
        <p class="eyebrow">${planLabel[state.page.plan]} Prototype</p>
        <h1>${title}</h1>
        <p class="muted">${text}</p>
      </div>
      ${action}
    </div>
  `;
}

function renderPanel() {
  switch (state.activeTab) {
    case "templates": return renderTemplatesPanel();
    case "profile": return renderProfilePanel();
    case "links": return renderLinksPanel();
    case "sections": return renderSectionsPanel();
    case "design": return renderDesignPanel();
    case "ai": return renderAiPanel();
    case "keeps": return renderKeepsPanel();
    case "analytics": return renderAnalyticsPanel();
    case "publish": return renderPublishPanel();
    case "plans": return renderPlansPanel();
    default: return renderTopPanel();
  }
}

function renderTopPanel() {
  return `
    ${panelIntro("選ぶだけで崩れないリンクページ", "テンプレート、手動カスタム、AI提案導線、有料プラン差を1つの画面で検証できます。", `<button class="solid-button" data-action="tab" data-tab="templates">テンプレートを選ぶ</button>`)}
    <div class="grid two">
      <div class="setting-card">
        <h2>作成フロー</h2>
        <div class="bar-row"><span>テンプレート</span><div class="bar-track"><div class="bar-fill" style="width:95%"></div></div><strong>15</strong></div>
        <div class="bar-row"><span>手動カスタム</span><div class="bar-track"><div class="bar-fill" style="width:78%"></div></div><strong>8</strong></div>
        <div class="bar-row"><span>AI導線</span><div class="bar-track"><div class="bar-fill" style="width:66%"></div></div><strong>3案</strong></div>
      </div>
      <div class="setting-card">
        <h2>現在のページ</h2>
        <p class="muted">テンプレート: ${escapeHTML(getTemplate().name)}</p>
        <p class="muted">公開URL: https://example.link/${escapeHTML(state.page.slug)}</p>
        <div class="row-actions">
          <button class="ghost-button" data-action="tab" data-tab="design">デザイン編集</button>
          <button class="solid-button" data-action="public-preview">公開ページ</button>
        </div>
      </div>
    </div>
    <div class="template-grid home-template-strip" style="margin-top:16px">${templates.slice(0, 6).map(renderTemplateCard).join("")}</div>
  `;
}

function renderTemplatesPanel() {
  return `
    <section class="template-board">
      <div class="template-board-title">
        <div class="board-rule"></div>
        <div>
          <h1>15 の Linkページ テンプレートコンセプト</h1>
          <p>水平思考で広げた、個性あふれるリンク集 / ミニLP UIアイデア集</p>
        </div>
        <div class="board-rule"></div>
      </div>
      <div class="template-grid">${templates.map(renderTemplateCard).join("")}</div>
    </section>
  `;
}

function renderTemplateCard(template) {
  const isActive = state.page.design.templateId === template.id;
  const miniPage = getTemplatePreviewPage(template.id);
  miniPage.design.templateId = template.id;
  return `
    <article class="template-card ${isActive ? "active" : ""}" data-action="set-template" data-template="${template.id}" tabindex="0">
      <div class="template-phone">
        <div class="template-notch"></div>
        <div class="template-phone-screen">${renderPageHTML(miniPage, true)}</div>
      </div>
      <h3>${template.order}. ${escapeHTML(template.name)}</h3>
      <p>${escapeHTML(template.description)}</p>
    </article>
  `;
}

function getTemplatePreviewPage(templateId) {
  const sample = templateSamples[templateId] || templateSamples.minimal;
  const page = clone(state.page);
  page.plan = "pro";
  page.profile.name = sample.title;
  page.profile.handle = sample.handle;
  page.profile.bio = "";
  page.profile.avatarText = sample.title.slice(0, 1);
  page.profile.avatarSize = templateId === "portfolio" || templateId === "editorial" ? "small" : "normal";
  page.profile.layout = ["surf", "luxury", "experimental"].includes(templateId) ? "hero" : "center";
  page.sections = [{ id: "main", name: templateId === "portfolio" ? "Works" : "Menu", order: 1, isVisible: true, headingStyle: "plain" }];
  page.links = sample.links.map((title, index) => ({
    id: `${templateId}_${index}`,
    sectionId: "main",
    title,
    url: "#",
    role: templateId === "portfolio" || templateId === "sticky" ? "image" : index === 0 ? "featured" : "standard",
    isVisible: true,
    order: index + 1
  }));
  page.snsLinks = ["SNS", "MAIL"];
  page.design = clone(state.page.design);
  page.design.templateId = templateId;
  page.design.theme.spacing = "compact";
  page.design.theme.radius = ["arcade", "cafe", "luxury", "experimental"].includes(templateId) ? "square" : "medium";
  page.design.theme.buttonStyle = {
    y2k: "glass",
    surf: "glass",
    arcade: "neon",
    sticky: "paper",
    luxury: "luxury",
    experimental: "filled",
    vinyl: "filled"
  }[templateId] || "outline";
  page.design.layout.headerType = ["surf", "luxury", "experimental"].includes(templateId) ? "hero" : templateId === "editorial" ? "magazine" : "center";
  page.design.layout.linkLayout = templateId === "portfolio" || templateId === "sticky" ? "grid" : templateId === "cafe" ? "menu" : "stack";
  page.design.layout.snsPosition = ["luxury", "botanical"].includes(templateId) ? "bottom" : "hidden";
  return page;
}

function renderProfilePanel() {
  const p = state.page.profile;
  return `
    ${panelIntro("プロフィール編集", "名前、説明、アイコン表記、プロフィール配置を編集します。")}
    <div class="form-grid">
      <div class="grid two">
        ${input("名前", "page.profile.name", p.name)}
        ${input("ハンドル", "page.profile.handle", p.handle)}
      </div>
      ${textarea("説明文", "page.profile.bio", p.bio)}
      <div class="grid three">
        ${input("アイコン文字", "page.profile.avatarText", p.avatarText)}
        ${select("写真サイズ", "page.profile.avatarSize", p.avatarSize, [["small", "小さめ"], ["normal", "標準"], ["large", "大きめ"]])}
        ${select("プロフィール配置", "page.profile.layout", p.layout, [["center", "中央寄せ"], ["left", "左寄せ"], ["hero", "Hero画像型"]])}
      </div>
    </div>
  `;
}

function renderLinksPanel() {
  return `
    ${panelIntro("リンク編集", "タイトル、URL、表示状態、強調の種類を編集します。", `<button class="solid-button" data-action="add-link">リンク追加</button>`)}
    ${state.page.links.sort((a, b) => a.order - b.order).map((link, index) => `
      <article class="link-row">
        <div class="link-row-header">
          <strong>リンク ${index + 1}</strong>
          <button class="danger-button" data-action="remove-link" data-id="${link.id}">削除</button>
        </div>
        <div class="grid two">
          ${input("タイトル", `link.${link.id}.title`, link.title)}
          ${input("URL", `link.${link.id}.url`, link.url)}
        </div>
        <div class="grid three">
          ${select("セクション", `link.${link.id}.sectionId`, link.sectionId, state.page.sections.map((s) => [s.id, s.name]))}
          ${select("表示タイプ", `link.${link.id}.role`, link.role, [["standard", "通常"], ["featured", "目立たせる"], ["brand", "ブランド"], ["image", "画像付き"]])}
          <label class="toggle-line"><input type="checkbox" data-bind="link.${link.id}.isVisible" ${link.isVisible ? "checked" : ""}>表示する</label>
        </div>
      </article>
    `).join("")}
  `;
}

function renderSectionsPanel() {
  return `
    ${panelIntro("セクション編集", "リンクのまとまり、表示状態、見出しスタイルを編集します。", `<button class="solid-button" data-action="add-section">セクション追加</button>`)}
    ${state.page.sections.sort((a, b) => a.order - b.order).map((section, index) => `
      <article class="link-row">
        <div class="section-title-line">
          <strong>セクション ${index + 1}</strong>
          ${section.id !== "main" ? `<button class="danger-button" data-action="remove-section" data-id="${section.id}">削除</button>` : ""}
        </div>
        <div class="grid three">
          ${input("セクション名", `section.${section.id}.name`, section.name)}
          ${select("見出しスタイル", `section.${section.id}.headingStyle`, section.headingStyle, [["plain", "プレーン"], ["line", "区切り線あり"], ["label", "ラベル"]])}
          <label class="toggle-line"><input type="checkbox" data-bind="section.${section.id}.isVisible" ${section.isVisible ? "checked" : ""}>表示する</label>
        </div>
      </article>
    `).join("")}
  `;
}

function renderDesignPanel() {
  const d = state.page.design;
  return `
    ${panelIntro("デザイン編集", "完全自由配置ではなく、選択式で見た目を調整します。", `<button class="solid-button" data-action="keep-current">現在のデザインをキープ</button>`)}
    <div class="grid two">
      <div class="setting-card">
        <h2>見た目</h2>
        <div class="form-grid">
          ${select("ボタン", "page.design.theme.buttonStyle", d.theme.buttonStyle, [["outline", "枠線"], ["filled", "塗り"], ["glass", "半透明"], ["paper", "紙風"], ["neon", "ネオン"], ["luxury", "高級感"]])}
          ${select("角丸", "page.design.theme.radius", d.theme.radius, [["small", "小"], ["medium", "中"], ["large", "大"], ["pill", "丸"], ["square", "四角"]])}
          ${select("余白", "page.design.theme.spacing", d.theme.spacing, [["compact", "コンパクト"], ["normal", "標準"], ["relaxed", "ゆったり"]])}
          ${select("装飾量", "page.design.theme.decorationLevel", d.theme.decorationLevel, [["none", "なし"], ["subtle", "控えめ"], ["rich", "しっかり"]])}
        </div>
      </div>
      <div class="setting-card">
        <h2>構造</h2>
        <div class="form-grid">
          ${select("プロフィール", "page.design.layout.headerType", d.layout.headerType, [["center", "中央寄せ"], ["left", "左寄せ"], ["hero", "Hero画像型"], ["magazine", "雑誌型"]])}
          ${select("リンク表示", "page.design.layout.linkLayout", d.layout.linkLayout, [["stack", "縦ボタン"], ["cards", "画像付きカード"], ["grid", "グリッド"], ["menu", "メニュー表"], ["featured", "強調リンク"]])}
          ${select("SNS位置", "page.design.layout.snsPosition", d.layout.snsPosition, [["top", "上"], ["bottom", "下"], ["both", "上下"], ["hidden", "非表示"]])}
          ${select("文字の雰囲気", "page.design.theme.fontMood", d.theme.fontMood, [["simple", "シンプル"], ["elegant", "上品"], ["retro", "レトロ"], ["japanese", "和風"], ["magazine", "雑誌風"]])}
        </div>
      </div>
    </div>
  `;
}

function renderAiPanel() {
  if (state.page.plan === "basic") {
    return `
      ${panelIntro("AIデザイン提案", "Basicではロック表示、Pro以上ではダミーの3案生成を体験できます。")}
      <div class="lock-card">
        <h2>Pro以上で利用可能</h2>
        <p class="muted">希望や画像の雰囲気をもとに、王道案・世界観案・攻めた案の3つを提案する想定です。</p>
        <button class="solid-button" data-action="set-plan" data-plan="pro">Pro表示で試す</button>
      </div>
    `;
  }
  const allowance = state.page.plan === "premium" ? "30 / 30回" : "10 / 10回";
  return `
    ${panelIntro("AIデザイン提案", `AIデザイン提案 残り${allowance}。現在はダミー提案です。`)}
    <div class="ai-flow">
      <div class="setting-card">
        ${textarea("希望", "aiPrompt", state.aiPrompt)}
        <div class="row-actions">
          <label class="ghost-button">画像添付<input type="file" hidden data-action="mock-file"></label>
          <button class="solid-button" data-action="generate-ai">3案生成</button>
        </div>
      </div>
      <div class="question-list">${renderQuestions()}</div>
      ${state.aiGenerated ? renderAiSuggestions() : ""}
    </div>
  `;
}

function renderQuestions() {
  const questions = [
    ["impression", "印象", ["落ち着き", "親しみ", "強い個性"]],
    ["world", "世界観", ["上品", "自然", "ポップ"]],
    ["brightness", "明るさ", ["明るい", "標準", "暗め"]],
    ["color", "色", ["白黒", "寒色", "暖色"]],
    ["background", "背景", ["単色", "質感", "画像風"]],
    ["button", "ボタン", ["細線", "半透明", "厚みあり"]],
    ["shape", "形", ["四角", "中丸", "丸"]],
    ["spacing", "余白", ["詰める", "標準", "広め"]],
    ["font", "文字", ["シンプル", "上品", "レトロ"]],
    ["decor", "装飾", ["なし", "控えめ", "しっかり"]]
  ];
  return questions.map(([key, title, choices]) => `
    <div class="setting-card">
      <h3>${title}</h3>
      <div class="choice-row">${choices.map((choice) => `
        <button class="${state.aiAnswers[key] === choice ? "active" : ""}" data-action="ai-answer" data-key="${key}" data-value="${choice}">${choice}</button>
      `).join("")}</div>
    </div>
  `).join("");
}

function renderAiSuggestions() {
  const suggestions = [
    { name: "王道案", description: "整っていて失敗しにくい見た目", templateId: "minimal", style: "outline" },
    { name: "世界観案", description: "雰囲気を強めたブランド寄り", templateId: "botanical", style: "glass" },
    { name: "攻めた案", description: "印象に残るコラージュ感", templateId: "experimental", style: "filled" }
  ];
  return `
    <div class="grid three">
      ${suggestions.map((s, index) => {
        const page = clone(state.page);
        page.design.templateId = s.templateId;
        page.design.theme.buttonStyle = s.style;
        return `
          <article class="ai-card">
            <div class="mini-preview">${renderPageHTML(page, true)}</div>
            <h2>${s.name}</h2>
            <p class="muted">${s.description}</p>
            <div class="row-actions">
              <button class="ghost-button" data-action="keep-ai" data-index="${index}">キープ</button>
              <button class="solid-button" data-action="apply-ai" data-template="${s.templateId}" data-style="${s.style}">適用</button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderKeepsPanel() {
  return `
    ${panelIntro("キープデザイン", "公開前に比較しながら戻せるデザイン候補です。", `<button class="solid-button" data-action="keep-current">現在のデザインをキープ</button>`)}
    <div class="grid two">
      ${state.keeps.length ? state.keeps.map(renderKeepCard).join("") : `<div class="setting-card"><h2>キープなし</h2><p class="muted">現在のデザインまたはAI案をキープできます。</p></div>`}
    </div>
  `;
}

function renderKeepCard(keep) {
  const allowed = planRank[state.page.plan] >= planRank[keep.createdByPlan];
  const page = clone(state.page);
  page.design = keep.designState;
  return `
    <article class="keep-card ${allowed ? "" : "locked"}">
      <div class="mini-preview">${renderPageHTML(page, true)}</div>
      <h2>${escapeHTML(keep.name)}</h2>
      <p class="muted">${escapeHTML(keep.description)}</p>
      <p class="muted">作成元: ${keep.source} / ${planLabel[keep.createdByPlan]}</p>
      ${allowed ? `
        <div class="row-actions">
          <button class="solid-button" data-action="apply-keep" data-id="${keep.id}">適用</button>
          <button class="danger-button" data-action="remove-keep" data-id="${keep.id}">削除</button>
        </div>
      ` : `
        <div class="lock-card">このデザインは${planLabel[keep.createdByPlan]}で作成されたため、${planLabel[keep.createdByPlan]}プランでのみ利用できます。</div>
      `}
    </article>
  `;
}

function renderAnalyticsPanel() {
  const a = state.page.analytics;
  const sources = [["Instagram", 62], ["QR", 21], ["X", 11], ["検索", 6]];
  const devices = [["iOS", 54], ["Android", 24], ["Desktop", 18], ["Tablet", 4]];
  return `
    ${panelIntro("分析", "プロトタイプ用のダミーデータです。7日 / 30日 / 90日の見え方を確認できます。")}
    <div class="grid four"></div>
    <div class="grid three">
      <div class="metric-card">ページ閲覧数<strong>${a.views.toLocaleString()}</strong></div>
      <div class="metric-card">全体クリック数<strong>${a.clicks.toLocaleString()}</strong></div>
      <div class="metric-card">クリック率<strong>${a.ctr}</strong></div>
    </div>
    <div class="grid two" style="margin-top:14px">
      <div class="setting-card">
        <h2>流入元</h2>
        ${sources.map(([name, value]) => bar(name, value)).join("")}
      </div>
      <div class="setting-card">
        <h2>デバイス別</h2>
        ${devices.map(([name, value]) => bar(name, value)).join("")}
      </div>
    </div>
    <div class="setting-card" style="margin-top:14px">
      <h2>リンク別クリック</h2>
      ${state.page.links.filter((l) => l.isVisible).map((link, index) => bar(link.title, 86 - index * 18)).join("")}
      <button class="ghost-button" data-action="mock-alert" data-message="CSV出力は本番分析接続後に有効になります。">CSV出力</button>
    </div>
  `;
}

function renderPublishPanel() {
  const url = `https://example.link/${escapeHTML(state.page.slug)}`;
  return `
    ${panelIntro("公開設定", "公開URL、QR、OGP、独自ドメインの本番風UIです。", `<button class="solid-button" data-action="public-preview">公開ページ</button>`)}
    <div class="grid two">
      <div class="setting-card">
        <h2>公開URL</h2>
        <label class="toggle-line"><input type="checkbox" data-bind="page.publish.isPublic" ${state.page.publish.isPublic ? "checked" : ""}>公開する</label>
        ${input("スラッグ", "page.slug", state.page.slug)}
        <p class="muted">${url}</p>
        <button class="ghost-button" data-action="mock-alert" data-message="URLをコピーしました。">コピー</button>
      </div>
      <div class="setting-card">
        <h2>QRコード</h2>
        ${renderQr()}
        ${select("QRスタイル", "page.ogp.qrStyle", state.page.ogp.qrStyle, [["standard", "標準"], ["round", "角丸"], ["background", "背景あり"], ["logo", "ロゴ入り風"]])}
      </div>
      <div class="setting-card">
        <h2>OGP</h2>
        <div class="form-grid">
          ${input("OGPタイトル", "page.ogp.title", state.page.ogp.title)}
          ${textarea("OGP説明文", "page.ogp.description", state.page.ogp.description)}
          ${select("OGP画像", "page.ogp.mode", state.page.ogp.mode, [["default", "デフォルト"], ["template", "テンプレートに合わせる"], ["custom", "自分の画像を使う"]])}
        </div>
        <div class="ogp-preview" style="margin-top:12px">
          <div class="ogp-art"></div>
          <div><strong>${escapeHTML(state.page.ogp.title)}</strong><p class="muted">${escapeHTML(state.page.ogp.description)}</p></div>
        </div>
      </div>
      <div class="setting-card">
        <h2>独自ドメイン</h2>
        ${state.page.plan === "premium" ? `
          ${input("ドメイン", "page.publish.customDomain", state.page.publish.customDomain)}
          <p class="muted">CNAME: cname.example.link</p>
          <button class="ghost-button" data-action="mock-alert" data-message="接続チェックは本番化後に有効になります。">接続チェック</button>
        ` : `
          <div class="lock-card">Premiumで利用可能</div>
        `}
      </div>
    </div>
  `;
}

function renderPlansPanel() {
  const rows = [
    ["公開ページ数", "1ページ", "1ページ", "3ページ"],
    ["AIデザイン提案", "なし", "月10回", "月30回"],
    ["キープデザイン", "1個", "5個", "5個"],
    ["サービスロゴ", "表示あり", "非表示", "非表示"],
    ["独自ドメイン", "なし", "なし", "あり"],
    ["有人UI提案", "なし", "なし", "月1回"]
  ];
  return `
    ${panelIntro("プラン確認", "課金なしでBasic / Pro / Premiumの見え方を切り替えられます。")}
    <div class="grid three">
      ${["basic", "pro", "premium"].map((plan) => `
        <div class="setting-card">
          <h2>${planLabel[plan]}</h2>
          <p class="muted">${plan === "basic" ? "480円/月" : plan === "pro" ? "1,980円/月" : "5,980円/月"}</p>
          <button class="${state.page.plan === plan ? "solid-button" : "ghost-button"}" data-action="set-plan" data-plan="${plan}">表示を切り替え</button>
        </div>
      `).join("")}
    </div>
    <div class="setting-card" style="margin-top:14px">
      ${rows.map((row) => `<div class="bar-row"><span>${row[0]}</span><div>${row[1]} / ${row[2]} / ${row[3]}</div><strong></strong></div>`).join("")}
    </div>
  `;
}

function renderPhonePreview() {
  return `
    <div class="panel-head">
      <div>
        <p class="eyebrow">Phone Preview</p>
        <h2>${escapeHTML(getTemplate().name)}</h2>
      </div>
      <button class="ghost-button" data-action="public-preview">公開</button>
    </div>
    <div class="phone-frame"><div class="phone-screen">${renderPageHTML(state.page)}</div></div>
  `;
}

function renderPublicPreview() {
  return `
    <div class="public-overlay">
      <div class="overlay-actions"><button class="solid-button" data-action="close-public-preview">編集に戻る</button></div>
      <div class="public-shell">${renderPageHTML(state.page)}</div>
    </div>
  `;
}

function renderPageHTML(page, compact = false) {
  const d = page.design;
  const templateId = d.templateId;
  const headerType = d.layout.headerType === "magazine" ? "left" : d.layout.headerType;
  const profileClass = page.profile.layout === "hero" || d.layout.headerType === "hero" ? "hero" : headerType;
  const linkLayout = d.layout.linkLayout;
  const pageClasses = [
    "link-page",
    `template-${templateId}`,
    `radius-${d.theme.radius}`,
    `spacing-${d.theme.spacing}`,
    `button-${d.theme.buttonStyle}`
  ].join(" ");
  const sns = renderSns(page, profileClass);
  const showSnsTop = ["top", "both"].includes(d.layout.snsPosition);
  const showSnsBottom = ["bottom", "both"].includes(d.layout.snsPosition);
  return `
    <div class="${pageClasses}">
      <section class="profile ${profileClass}">
        <div class="avatar" style="--avatar-size:${page.profile.avatarSize === "large" ? "104px" : page.profile.avatarSize === "small" ? "64px" : "82px"}">${escapeHTML(page.profile.avatarText || "L").slice(0, 2)}</div>
        <div>
          <h2>${escapeHTML(page.profile.name)}</h2>
          <p>${escapeHTML(page.profile.handle)}</p>
          <p>${escapeHTML(page.profile.bio)}</p>
        </div>
      </section>
      ${showSnsTop ? sns : ""}
      ${page.sections.filter((section) => section.isVisible).sort((a, b) => a.order - b.order).map((section) => {
        const links = page.links.filter((link) => link.sectionId === section.id && link.isVisible).sort((a, b) => a.order - b.order);
        if (!links.length) return "";
        return `
          <section class="page-section">
            <h3>${escapeHTML(section.name)}</h3>
            <div class="links ${linkLayout === "grid" || linkLayout === "cards" ? "grid" : ""}">
              ${links.map((link) => renderLinkButton(link, linkLayout)).join("")}
            </div>
          </section>
        `;
      }).join("")}
      ${showSnsBottom ? sns : ""}
      ${page.plan === "basic" && !compact ? `<div class="brand-foot">Made with Link Atelier</div>` : ""}
    </div>
  `;
}

function renderSns(page, profileClass) {
  return `<div class="sns-line ${profileClass === "center" ? "center" : ""}">${page.snsLinks.map((sns) => `<a class="sns-pill" href="#">${escapeHTML(sns)}</a>`).join("")}</div>`;
}

function renderLinkButton(link, layout) {
  const thumb = link.role === "image" || layout === "cards" ? `<div class="link-thumb"></div>` : "";
  const featured = link.role === "featured" || layout === "featured" ? "featured" : "";
  return `<a class="link-button ${featured}" href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">${thumb}<span>${escapeHTML(link.title)}</span><b>›</b></a>`;
}

function input(labelText, bind, value) {
  return `<label>${labelText}<input data-bind="${bind}" value="${escapeHTML(value)}"></label>`;
}

function textarea(labelText, bind, value) {
  return `<label>${labelText}<textarea data-bind="${bind}">${escapeHTML(value)}</textarea></label>`;
}

function select(labelText, bind, value, options) {
  return `
    <label>${labelText}
      <select data-bind="${bind}">
        ${options.map(([optionValue, label]) => `<option value="${optionValue}" ${String(value) === String(optionValue) ? "selected" : ""}>${escapeHTML(label)}</option>`).join("")}
      </select>
    </label>
  `;
}

function bar(label, value) {
  return `<div class="bar-row"><span>${escapeHTML(label)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, value)}%"></div></div><strong>${value}</strong></div>`;
}

function renderQr() {
  const round = state.page.ogp.qrStyle === "round";
  const seed = state.page.slug + state.page.design.templateId;
  let cells = "";
  for (let i = 0; i < 121; i += 1) {
    const finder = (i < 25 && i % 11 < 5) || (i > 85 && i % 11 < 5) || (i < 55 && i % 11 > 5 && i % 11 < 11);
    const filled = finder || ((seed.charCodeAt(i % seed.length) + i * 7) % 5 < 2);
    cells += `<span class="${filled ? `qr-dot ${round ? "round" : ""}` : ""}"></span>`;
  }
  return `<div class="qr-box">${cells}</div>`;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  event.preventDefault();
  const action = target.dataset.action;
  if (action === "tab") state.activeTab = target.dataset.tab;
  if (action === "set-plan") state.page.plan = target.dataset.plan;
  if (action === "set-template") {
    state.page.design.templateId = target.dataset.template;
    state.page.design.source = "template";
    state.activeTab = "design";
  }
  if (action === "add-link") addLink();
  if (action === "remove-link") removeLink(target.dataset.id);
  if (action === "add-section") addSection();
  if (action === "remove-section") removeSection(target.dataset.id);
  if (action === "generate-ai") state.aiGenerated = true;
  if (action === "ai-answer") state.aiAnswers[target.dataset.key] = target.dataset.value;
  if (action === "apply-ai") applyAi(target.dataset.template, target.dataset.style);
  if (action === "keep-ai") keepAi(Number(target.dataset.index));
  if (action === "keep-current") keepCurrent();
  if (action === "apply-keep") applyKeep(target.dataset.id);
  if (action === "remove-keep") state.keeps = state.keeps.filter((keep) => keep.id !== target.dataset.id);
  if (action === "public-preview") state.publicPreview = true;
  if (action === "close-public-preview") state.publicPreview = false;
  if (action === "mock-alert") window.alert(target.dataset.message || "Prototype");
  saveState();
  render();
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.dataset.bind) return;
  updateBind(target.dataset.bind, target.type === "checkbox" ? target.checked : target.value);
  saveState();
  refreshPreviews();
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.dataset.bind) return;
  updateBind(target.dataset.bind, target.type === "checkbox" ? target.checked : target.value);
  saveState();
  render();
});

function updateBind(path, value) {
  if (path === "aiPrompt") {
    state.aiPrompt = value;
    return;
  }
  if (path.startsWith("link.")) {
    const [, id, key] = path.split(".");
    const link = state.page.links.find((item) => item.id === id);
    if (link) link[key] = value;
    return;
  }
  if (path.startsWith("section.")) {
    const [, id, key] = path.split(".");
    const section = state.page.sections.find((item) => item.id === id);
    if (section) section[key] = value;
    return;
  }
  const parts = path.split(".");
  let cursor = state;
  parts.slice(0, -1).forEach((part) => { cursor = cursor[part]; });
  cursor[parts[parts.length - 1]] = value;
}

function refreshPreviews() {
  const phoneScreen = document.querySelector(".preview-panel .phone-screen");
  if (phoneScreen) phoneScreen.innerHTML = renderPageHTML(state.page);
  const publicShell = document.querySelector(".public-shell");
  if (publicShell) publicShell.innerHTML = renderPageHTML(state.page);
}

function addLink() {
  const id = `link_${Date.now()}`;
  state.page.links.push({
    id,
    sectionId: state.page.sections[0].id,
    title: "新しいリンク",
    url: "https://example.com",
    role: "standard",
    isVisible: true,
    order: state.page.links.length + 1
  });
}

function removeLink(id) {
  state.page.links = state.page.links.filter((link) => link.id !== id);
}

function addSection() {
  const id = `section_${Date.now()}`;
  state.page.sections.push({
    id,
    name: "New Section",
    order: state.page.sections.length + 1,
    isVisible: true,
    headingStyle: "plain"
  });
}

function removeSection(id) {
  state.page.sections = state.page.sections.filter((section) => section.id !== id);
  state.page.links.forEach((link) => {
    if (link.sectionId === id) link.sectionId = "main";
  });
}

function applyAi(templateId, style) {
  state.page.design.templateId = templateId;
  state.page.design.theme.buttonStyle = style;
  state.page.design.source = "ai";
  state.page.design.createdByPlan = state.page.plan;
}

function keepAi(index) {
  const suggestions = [
    ["王道案", "整っていて失敗しにくい見た目", "minimal", "outline"],
    ["世界観案", "雰囲気を強めたブランド寄り", "botanical", "glass"],
    ["攻めた案", "印象に残るコラージュ感", "experimental", "filled"]
  ];
  const [name, description, templateId, style] = suggestions[index];
  const design = clone(state.page.design);
  design.templateId = templateId;
  design.theme.buttonStyle = style;
  design.source = "ai";
  design.createdByPlan = state.page.plan;
  addKeep(name, description, "ai", design);
}

function keepCurrent() {
  addKeep(`${getTemplate().name}の調整`, "現在の手動カスタムを保存", state.page.design.source || "manual", clone(state.page.design));
}

function addKeep(name, description, source, designState) {
  const limit = state.page.plan === "basic" ? 1 : 5;
  if (state.keeps.length >= limit) state.keeps.shift();
  state.keeps.push({
    id: `keep_${Date.now()}`,
    pageId: state.page.id,
    name,
    description,
    source,
    createdByPlan: state.page.plan,
    designState,
    isCurrent: false,
    createdAt: new Date().toISOString()
  });
}

function applyKeep(id) {
  const keep = state.keeps.find((item) => item.id === id);
  if (!keep) return;
  if (planRank[state.page.plan] < planRank[keep.createdByPlan]) return;
  state.page.design = clone(keep.designState);
}

render();
