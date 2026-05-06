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
  ["experimental", "実験アート", "色面と非対称"],
  ["hero-cover", "ヒーローカバー型", "上部ビジュアルで世界観を見せる"],
  ["featured-first", "1番目特大カード型", "最重要リンクを大きく押し出す"],
  ["bento-grid", "Bentoグリッド型", "大小カードで導線を整理"],
  ["magazine-index", "雑誌目次型", "読み物を目次のように並べる"],
  ["sns-hub", "SNSハブ型", "SNS導線を主役にする"],
  ["event-promo", "イベント告知型", "単発告知から外部リンクへ送る"]
].map(([id, name, description], index) => ({ id, name, description, order: index + 1 }));

const structuredTemplateIds = ["hero-cover", "featured-first", "bento-grid", "magazine-index", "sns-hub", "event-promo"];

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
  },
  "hero-cover": {
    title: "Mika Atelier",
    handle: "静かな世界観を、最初の一枚で。",
    links: ["Portfolio", "最新のお知らせ", "制作の相談", "Instagram", "お問い合わせ"]
  },
  "featured-first": {
    title: "予約とお知らせ",
    handle: "いちばん見てほしい導線を先頭に",
    links: ["5月の先行予約をする", "サービスを見る", "最新記事を読む", "お問い合わせ"]
  },
  "bento-grid": {
    title: "Design Desk",
    handle: "works / shop / note / contact",
    links: ["最新プロジェクト", "作品集", "オンラインストア", "制作依頼", "読みもの", "連絡先"]
  },
  "magazine-index": {
    title: "ISSUE 05",
    handle: "今月の読みものと記録",
    links: ["巻頭エッセイ", "制作ノート", "インタビュー", "おすすめリスト", "バックナンバー"]
  },
  "sns-hub": {
    title: "Nana Channel",
    handle: "毎日の発信はこちらから",
    links: ["YouTube最新回", "お仕事の依頼", "グッズストア", "ファンレター"]
  },
  "event-promo": {
    title: "Night Market",
    handle: "one night pop-up event",
    links: ["チケットを予約", "イベント詳細を見る", "アクセス", "FAQ"]
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
      avatarImage: "",
      avatarSize: "normal",
      layout: "center"
    },
    eventMeta: {
      date: "2026.06.21",
      time: "18:00 OPEN",
      place: "Nakameguro"
    },
    links: [
      { id: "link_1", sectionId: "main", title: "最新のプロジェクトを見る", url: "https://example.com/project", role: "featured", image: "", backgroundImage: "", backgroundOpacity: 0.48, isVisible: true, order: 1 },
      { id: "link_2", sectionId: "main", title: "Instagram", url: "https://example.com/instagram", role: "standard", image: "", backgroundImage: "", backgroundOpacity: 0.48, isVisible: true, order: 2 },
      { id: "link_3", sectionId: "main", title: "予約・お問い合わせ", url: "https://example.com/contact", role: "brand", image: "", backgroundImage: "", backgroundOpacity: 0.48, isVisible: true, order: 3 },
      { id: "link_4", sectionId: "works", title: "制作実績", url: "https://example.com/works", role: "image", image: "", backgroundImage: "", backgroundOpacity: 0.48, isVisible: true, order: 4 }
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
      },
      custom: {
        images: {
          pageBackground: ""
        },
        colors: {
          pageText: "",
          profileName: "",
          profileHandle: "",
          profileBio: "",
          sectionHeading: "",
          linkText: ""
        }
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
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    window.alert("画像の保存容量を超えました。もう少し軽い画像で試してください。");
    return false;
  }
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

function cssUrl(value) {
  return `url('${String(value || "").replaceAll("\\", "\\\\").replaceAll("'", "\\'").replaceAll("\n", "").replaceAll("\r", "")}')`;
}

function customStyle(entries) {
  return Object.entries(entries)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
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
        <div class="bar-row"><span>テンプレート</span><div class="bar-track"><div class="bar-fill" style="width:95%"></div></div><strong>${templates.length}</strong></div>
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
  page.profile.name = sample.title;
  page.profile.handle = sample.handle;
  page.profile.bio = "";
  page.profile.avatarText = sample.title.slice(0, 1);
  page.sections = [{ id: "main", name: getPreviewSectionName(templateId), order: 1, isVisible: true, headingStyle: "plain" }];
  page.links = sample.links.map((title, index) => ({
    id: `${templateId}_${index}`,
    sectionId: "main",
    title,
    url: "#",
    role: getPreviewLinkRole(templateId, index),
    image: "",
    isVisible: true,
    order: index + 1
  }));
  page.snsLinks = templateId === "sns-hub" ? ["Instagram", "TikTok", "YouTube", "X"] : ["SNS", "MAIL"];
  page.design = clone(state.page.design);
  applyTemplateVisuals(page, templateId);
  return page;
}

function getPreviewSectionName(templateId) {
  if (templateId === "portfolio") return "Works";
  if (templateId === "magazine-index") return "Contents";
  if (templateId === "event-promo") return "Links";
  return "Menu";
}

function getPreviewLinkRole(templateId, index) {
  if (["portfolio", "sticky", "bento-grid"].includes(templateId)) return index === 0 ? "featured" : "image";
  if (["featured-first", "event-promo"].includes(templateId) && index === 0) return "featured";
  return index === 0 ? "featured" : "standard";
}

function getTemplateVisualPreset(templateId) {
  return {
    profile: {
      avatarSize: ["portfolio", "editorial", "bento-grid", "magazine-index", "event-promo"].includes(templateId) ? "small" : "normal",
      layout: ["surf", "luxury", "experimental", "hero-cover"].includes(templateId) ? "hero" : "center"
    },
    theme: {
      spacing: ["magazine-index", "event-promo"].includes(templateId) ? "relaxed" : "compact",
      radius: ["arcade", "cafe", "luxury", "experimental", "magazine-index"].includes(templateId) ? "square" : "medium",
      buttonStyle: {
        y2k: "glass",
        surf: "glass",
        arcade: "neon",
        sticky: "paper",
        luxury: "luxury",
        experimental: "filled",
        vinyl: "filled",
        "hero-cover": "glass",
        "featured-first": "filled",
        "bento-grid": "soft",
        "magazine-index": "underline",
        "sns-hub": "glass",
        "event-promo": "filled"
      }[templateId] || "outline"
    },
    layout: {
      headerType: ["surf", "luxury", "experimental", "hero-cover"].includes(templateId) ? "hero" : ["editorial", "magazine-index"].includes(templateId) ? "magazine" : "center",
      linkLayout: ["portfolio", "sticky", "bento-grid"].includes(templateId) ? "grid" : templateId === "cafe" ? "menu" : templateId === "featured-first" ? "featured" : "stack",
      snsPosition: ["luxury", "botanical", "hero-cover"].includes(templateId) ? "bottom" : templateId === "sns-hub" ? "top" : "hidden"
    }
  };
}

function applyTemplateVisuals(page, templateId) {
  const preset = getTemplateVisualPreset(templateId);
  page.profile.avatarSize = preset.profile.avatarSize;
  page.profile.layout = preset.profile.layout;
  page.design.templateId = templateId;
  page.design.source = "template";
  page.design.theme.spacing = preset.theme.spacing;
  page.design.theme.radius = preset.theme.radius;
  page.design.theme.buttonStyle = preset.theme.buttonStyle;
  page.design.layout.headerType = preset.layout.headerType;
  page.design.layout.linkLayout = preset.layout.linkLayout;
  page.design.layout.snsPosition = preset.layout.snsPosition;
}

function renderProfilePanel() {
  const p = state.page.profile;
  return `
    ${panelIntro("プロフィール編集", "名前、説明、プロフィール画像、配置を編集します。")}
    <div class="form-grid">
      <div class="grid two">
        ${input("名前", "page.profile.name", p.name)}
        ${input("ハンドル", "page.profile.handle", p.handle)}
      </div>
      ${textarea("説明文", "page.profile.bio", p.bio)}
      <div class="setting-card profile-image-card">
        ${profileImageUploadControl(p.avatarImage)}
      </div>
      <div class="grid two">
        ${select("写真サイズ", "page.profile.avatarSize", p.avatarSize, [["small", "小さめ"], ["normal", "標準"], ["large", "大きめ"]])}
        ${select("プロフィール配置", "page.profile.layout", p.layout, [["center", "中央寄せ"], ["left", "左寄せ"], ["hero", "Hero画像型"]])}
      </div>
      ${state.page.design.templateId === "event-promo" ? renderEventMetaFields() : ""}
    </div>
  `;
}

function renderEventMetaFields() {
  const eventMeta = state.page.eventMeta || defaultState.page.eventMeta;
  return `
    <div class="setting-card">
      <h2>イベント情報</h2>
      <div class="grid three">
        ${input("日付", "page.eventMeta.date", eventMeta.date)}
        ${input("時間", "page.eventMeta.time", eventMeta.time)}
        ${input("場所", "page.eventMeta.place", eventMeta.place)}
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
        ${linkImageUploadControl(link)}
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
    ${renderImageCustomPanel(d)}
    ${renderTextColorPanel(d)}
    <div class="grid two">
      <div class="setting-card">
        <h2>見た目</h2>
        <div class="form-grid">
          ${select("ボタン", "page.design.theme.buttonStyle", d.theme.buttonStyle, [["outline", "枠線"], ["filled", "塗り"], ["soft", "やわらかい"], ["glass", "半透明"], ["paper", "紙風"], ["underline", "下線"], ["neon", "ネオン"], ["luxury", "高級感"]])}
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

function renderImageCustomPanel(design) {
  const images = design.custom?.images || {};
  return `
    <div class="setting-card">
      <h2>背景画像</h2>
      <div class="grid two">
        ${imageUploadControl("ページ背景", "pageBackground", images.pageBackground)}
      </div>
    </div>
  `;
}

function imageUploadControl(label, target, value) {
  const hasImage = Boolean(value);
  const previewStyle = hasImage ? ` style="${escapeHTML(`--preview-image:${cssUrl(value)}`)}"` : "";
  return `
    <div>
      <h3>${label}</h3>
      <div class="image-upload-row">
        <div class="image-preview ${hasImage ? "has-image" : ""}"${previewStyle}>${hasImage ? "" : "未設定"}</div>
        <div class="image-upload-actions">
          <label class="ghost-button image-picker">画像変更<input type="file" accept="image/*" data-image-target="${target}"></label>
          ${hasImage ? `<button class="danger-button" data-action="clear-custom-image" data-image-target="${target}">削除</button>` : ""}
        </div>
      </div>
    </div>
  `;
}

function profileImageUploadControl(value) {
  const hasImage = Boolean(value);
  const previewStyle = hasImage ? ` style="${escapeHTML(`--preview-image:${cssUrl(value)}`)}"` : "";
  return `
    <div>
      <h3>プロフィール画像</h3>
      <div class="image-upload-row">
        <div class="image-preview avatar-image-preview ${hasImage ? "has-image" : ""}"${previewStyle}>${hasImage ? "" : "未設定"}</div>
        <div class="image-upload-actions">
          <label class="ghost-button image-picker">画像変更<input type="file" accept="image/*" data-profile-image="avatarImage"></label>
          ${hasImage ? `<button class="danger-button" data-action="clear-profile-image">削除</button>` : ""}
        </div>
      </div>
    </div>
  `;
}

function linkImageUploadControl(link) {
  const visibleIndex = getOrderedVisibleLinks(state.page).findIndex((item) => item.id === link.id);
  const imageControl = linkUsesInnerImageSlot(state.page, visibleIndex) ? linkImageField(link, "リンク内画像", "image", link.image, getInnerImageSlotLabel(state.page, visibleIndex)) : "";
  const backgroundControl = linkImageField(link, "リンク背景", "backgroundImage", link.backgroundImage, "", link.backgroundImage ? linkBackgroundOpacityControl(link) : "");
  return `
    <div class="link-image-control">
      <div class="grid two">
        ${backgroundControl}
        ${imageControl}
      </div>
    </div>
  `;
}

function linkUsesInnerImageSlot(page, index) {
  const templateId = page.design.templateId;
  if (["sticky", "portfolio", "bento-grid"].includes(templateId)) return true;
  if (templateId === "featured-first") return index === 0;
  return page.design.layout.linkLayout === "cards";
}

function getInnerImageSlotLabel(page, index) {
  const template = getTemplate(page.design.templateId);
  if (page.design.templateId === "featured-first") return `${template.order}番テンプレの1番目の大きいカード内に表示`;
  return `${template.order}番テンプレのリンク内の四角に表示`;
}

function linkImageField(link, label, field, value, note = "", extraControl = "") {
  const hasImage = Boolean(value);
  const previewStyle = hasImage ? ` style="${escapeHTML(`--preview-image:${cssUrl(value)}`)}"` : "";
  return `
    <div>
      <h3>${label}</h3>
      ${note ? `<p class="image-field-note">${escapeHTML(note)}</p>` : ""}
      <div class="image-upload-row">
        <div class="image-preview link-image-preview ${hasImage ? "has-image" : ""}"${previewStyle}>${hasImage ? "" : "未設定"}</div>
        <div class="image-upload-actions">
          <label class="ghost-button image-picker">画像変更<input type="file" accept="image/*" data-link-image-id="${link.id}" data-link-image-field="${field}"></label>
          ${hasImage ? `<button class="danger-button" data-action="clear-link-image" data-id="${link.id}" data-link-image-field="${field}">削除</button>` : ""}
        </div>
      </div>
      ${extraControl}
    </div>
  `;
}

function linkBackgroundOpacityControl(link) {
  const opacity = getLinkBackgroundOpacity(link);
  return `
    <label class="range-control">
      <span>背景の濃さ <strong>${Math.round(opacity * 100)}%</strong></span>
      <input type="range" min="0.1" max="1" step="0.05" data-bind="link.${link.id}.backgroundOpacity" value="${escapeHTML(opacity)}">
    </label>
  `;
}

function getLinkBackgroundOpacity(link) {
  const value = Number(link.backgroundOpacity);
  if (!Number.isFinite(value)) return 0.48;
  return Math.min(1, Math.max(0.1, value));
}

function renderTextColorPanel(design) {
  const colors = design.custom?.colors || {};
  const controls = [
    ["ページ全体", "pageText", colors.pageText, "#171717"],
    ["プロフィール名", "profileName", colors.profileName, "#171717"],
    ["ID", "profileHandle", colors.profileHandle, "#171717"],
    ["説明文", "profileBio", colors.profileBio, "#171717"],
    ["セクション見出し", "sectionHeading", colors.sectionHeading, "#171717"],
    ["リンク文字", "linkText", colors.linkText, "#171717"]
  ];
  return `
    <div class="setting-card">
      <h2>文字色</h2>
      <div class="color-grid">
        ${controls.map(([label, key, value, fallback]) => colorInput(label, `page.design.custom.colors.${key}`, value || fallback)).join("")}
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
    ${panelIntro("キープデザイン", "公開前に比較しながら戻せるデザイン候補です。")}
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
      <div class="row-actions">
        <button class="ghost-button" data-action="public-preview">公開</button>
        <button class="solid-button" data-action="keep-current">キープ</button>
      </div>
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
  const custom = d.custom || {};
  const hasPageBackground = Boolean(custom.images?.pageBackground);
  const hasAvatarImage = Boolean(page.profile.avatarImage);
  const templateId = d.templateId;
  const headerType = d.layout.headerType === "magazine" ? "left" : d.layout.headerType;
  const profileClass = page.profile.layout === "hero" || d.layout.headerType === "hero" ? "hero" : headerType;
  const linkLayout = d.layout.linkLayout;
  const pageClasses = [
    "link-page",
    `template-${templateId}`,
    `radius-${d.theme.radius}`,
    `spacing-${d.theme.spacing}`,
    `button-${d.theme.buttonStyle}`,
    hasPageBackground ? "custom-background" : ""
  ].filter(Boolean).join(" ");
  const pageStyle = customStyle({
    "--custom-page-bg": hasPageBackground ? cssUrl(custom.images.pageBackground) : "",
    "--page-text": custom.colors?.pageText,
    "--profile-name-color": custom.colors?.profileName,
    "--profile-handle-color": custom.colors?.profileHandle,
    "--profile-bio-color": custom.colors?.profileBio,
    "--section-heading-color": custom.colors?.sectionHeading,
    "--link-text-color": custom.colors?.linkText
  });
  const buttonClass = [
    "link-button"
  ].join(" ");
  const sns = renderSns(page, profileClass);
  const showSnsTop = ["top", "both"].includes(d.layout.snsPosition);
  const showSnsBottom = ["bottom", "both"].includes(d.layout.snsPosition);
  const avatarStyle = [
    `--avatar-size:${page.profile.avatarSize === "large" ? "104px" : page.profile.avatarSize === "small" ? "64px" : "82px"}`,
    hasAvatarImage ? `--avatar-image:${cssUrl(page.profile.avatarImage)}` : ""
  ].filter(Boolean).join(";");
  const avatarText = hasAvatarImage ? "" : escapeHTML(page.profile.avatarText || page.profile.name || "L").slice(0, 2);
  const avatarHTML = `<div class="avatar ${hasAvatarImage ? "has-image" : ""}" style="${escapeHTML(avatarStyle)}">${avatarText}</div>`;
  const context = {
    pageClasses,
    pageStyle,
    buttonClass,
    profileClass,
    linkLayout,
    sns,
    showSnsTop,
    showSnsBottom,
    avatarHTML
  };
  if (structuredTemplateIds.includes(templateId)) return renderStructuredTemplatePage(page, compact, context);
  return `
    <div class="${pageClasses}"${pageStyle ? ` style="${escapeHTML(pageStyle)}"` : ""}>
      <section class="profile ${profileClass}">
        ${avatarHTML}
        <div>
          <h2>${escapeHTML(page.profile.name)}</h2>
          <p class="profile-handle">${escapeHTML(page.profile.handle)}</p>
          <p class="profile-bio">${escapeHTML(page.profile.bio)}</p>
        </div>
      </section>
      ${showSnsTop ? sns : ""}
      ${renderGenericPageSections(page, linkLayout, buttonClass)}
      ${showSnsBottom ? sns : ""}
      ${renderBrandFoot(page, compact)}
    </div>
  `;
}

function renderStructuredTemplatePage(page, compact, context) {
  const templateId = page.design.templateId;
  const content = {
    "hero-cover": renderHeroCoverPage,
    "featured-first": renderFeaturedFirstPage,
    "bento-grid": renderBentoGridPage,
    "magazine-index": renderMagazineIndexPage,
    "sns-hub": renderSnsHubPage,
    "event-promo": renderEventPromoPage
  }[templateId](page, context);
  return `
    <div class="${context.pageClasses} structured-template"${context.pageStyle ? ` style="${escapeHTML(context.pageStyle)}"` : ""}>
      ${content}
      ${renderBrandFoot(page, compact)}
    </div>
  `;
}

function renderHeroCoverPage(page, context) {
  const links = getOrderedVisibleLinks(page).slice(0, 5);
  return `
    <section class="hero-cover-panel">
      <div class="hero-cover-visual"></div>
      <div class="hero-cover-profile">
        ${context.avatarHTML}
        <div>
          <h2>${escapeHTML(page.profile.name)}</h2>
          <p class="profile-handle">${escapeHTML(page.profile.handle)}</p>
          <p class="profile-bio">${escapeHTML(page.profile.bio)}</p>
        </div>
      </div>
    </section>
    ${renderSns(page, "center")}
    <section class="page-section hero-cover-links">
      <div class="links">${links.map((link) => renderLinkButton(link, "stack", context.buttonClass, false)).join("")}</div>
    </section>
  `;
}

function renderFeaturedFirstPage(page, context) {
  const links = getOrderedVisibleLinks(page);
  const [primary, ...rest] = links;
  return `
    <section class="profile center featured-first-profile">
      ${context.avatarHTML}
      <div>
        <h2>${escapeHTML(page.profile.name)}</h2>
        <p class="profile-handle">${escapeHTML(page.profile.handle)}</p>
        <p class="profile-bio">${escapeHTML(page.profile.bio)}</p>
      </div>
    </section>
    ${renderSns(page, "center")}
    <section class="page-section featured-first-links">
      ${primary ? renderLinkButton(primary, "cards", `${context.buttonClass} featured-first-card`) : ""}
      <div class="links">${rest.map((link) => renderLinkButton(link, "stack", context.buttonClass, false)).join("")}</div>
    </section>
  `;
}

function renderBentoGridPage(page, context) {
  const links = getOrderedVisibleLinks(page);
  return `
    <section class="bento-profile-card">
      ${context.avatarHTML}
      <div>
        <h2>${escapeHTML(page.profile.name)}</h2>
        <p class="profile-handle">${escapeHTML(page.profile.handle)}</p>
        <p class="profile-bio">${escapeHTML(page.profile.bio)}</p>
      </div>
    </section>
    <section class="bento-link-grid">
      ${links.map((link, index) => renderLinkButton(link, "cards", `${context.buttonClass} bento-card ${index === 0 ? "bento-card-wide" : ""}`)).join("")}
    </section>
  `;
}

function renderMagazineIndexPage(page, context) {
  const links = getOrderedVisibleLinks(page);
  return `
    <section class="magazine-head">
      <div class="magazine-title-line">
        <div>
          <p class="magazine-kicker">LINK INDEX</p>
          <h2>${escapeHTML(page.profile.name)}</h2>
        </div>
        ${context.avatarHTML}
      </div>
      <p>${escapeHTML(page.profile.handle || page.profile.bio)}</p>
    </section>
    <section class="magazine-list">
      ${links.map((link, index) => renderMagazineLink(link, index, context.buttonClass)).join("")}
    </section>
    ${renderSns(page, "center")}
  `;
}

function renderSnsHubPage(page, context) {
  const links = getOrderedVisibleLinks(page);
  return `
    <section class="profile center sns-hub-profile">
      ${context.avatarHTML}
      <div>
        <h2>${escapeHTML(page.profile.name)}</h2>
        <p class="profile-handle">${escapeHTML(page.profile.handle)}</p>
        <p class="profile-bio">${escapeHTML(page.profile.bio)}</p>
      </div>
    </section>
    <section class="sns-hub-block">
      <h3>Follow me</h3>
      <div class="sns-hub-icons">${page.snsLinks.map((sns) => `<a class="sns-hub-icon" href="#">${escapeHTML(sns)}</a>`).join("")}</div>
    </section>
    <section class="page-section sns-hub-links">
      <div class="links">${links.map((link) => renderLinkButton(link, "stack", context.buttonClass, false)).join("")}</div>
    </section>
  `;
}

function renderEventPromoPage(page, context) {
  const links = getOrderedVisibleLinks(page);
  const [ticket, ...rest] = links;
  const eventMeta = page.eventMeta || defaultState.page.eventMeta;
  return `
    <section class="event-visual">
      <div class="event-avatar">${context.avatarHTML}</div>
      <p>POP-UP EVENT</p>
      <h2>${escapeHTML(page.profile.name)}</h2>
    </section>
    <section class="event-meta-grid">
      <div><span>DATE</span><strong>${escapeHTML(eventMeta.date)}</strong></div>
      <div><span>TIME</span><strong>${escapeHTML(eventMeta.time)}</strong></div>
      <div><span>PLACE</span><strong>${escapeHTML(eventMeta.place)}</strong></div>
    </section>
    <p class="event-lead">${escapeHTML(page.profile.handle || page.profile.bio)}</p>
    <section class="page-section event-links">
      ${ticket ? renderLinkButton(ticket, "stack", `${context.buttonClass} event-ticket-button`, false) : ""}
      <div class="links">${rest.map((link) => renderLinkButton(link, "stack", context.buttonClass, false)).join("")}</div>
    </section>
  `;
}

function renderGenericPageSections(page, linkLayout, buttonClass) {
  return getOrderedSections(page).map((section) => {
    const links = getOrderedLinksForSection(page, section.id);
    if (!links.length) return "";
    return `
      <section class="page-section">
        <h3>${escapeHTML(section.name)}</h3>
        <div class="links ${linkLayout === "grid" || linkLayout === "cards" ? "grid" : ""}">
          ${links.map((link) => renderLinkButton(link, linkLayout, buttonClass, templateSupportsInnerImages(page))).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function templateSupportsInnerImages(page) {
  return ["sticky", "portfolio", "bento-grid"].includes(page.design.templateId) || page.design.layout.linkLayout === "cards";
}

function getOrderedSections(page) {
  return page.sections.filter((section) => section.isVisible).sort((a, b) => a.order - b.order);
}

function getOrderedLinksForSection(page, sectionId) {
  return page.links.filter((link) => link.sectionId === sectionId && link.isVisible).sort((a, b) => a.order - b.order);
}

function getOrderedVisibleLinks(page) {
  return getOrderedSections(page).flatMap((section) => getOrderedLinksForSection(page, section.id));
}

function renderMagazineLink(link, index, buttonClass) {
  return `
    <a class="${buttonClass} magazine-link" href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">
      <span class="magazine-number">${String(index + 1).padStart(2, "0")}</span>
      <span>${escapeHTML(link.title)}</span>
      <b>読む</b>
    </a>
  `;
}

function renderBrandFoot(page, compact) {
  return page.plan === "basic" && !compact ? `<div class="brand-foot">Made with Link Atelier</div>` : "";
}

function renderSns(page, profileClass) {
  return `<div class="sns-line ${profileClass === "center" ? "center" : ""}">${page.snsLinks.map((sns) => `<a class="sns-pill" href="#">${escapeHTML(sns)}</a>`).join("")}</div>`;
}

function renderLinkButton(link, layout, buttonClass = "link-button", allowInnerImage = true) {
  const hasThumb = allowInnerImage;
  const thumbStyle = link.image ? ` style="${escapeHTML(`--link-image:${cssUrl(link.image)}`)}"` : "";
  const thumb = hasThumb ? `<div class="link-thumb ${link.image ? "has-image" : ""}"${thumbStyle}></div>` : "";
  const featured = link.role === "featured" || layout === "featured" ? "featured" : "";
  const hasBackground = Boolean(link.backgroundImage);
  const backgroundStyle = hasBackground ? ` style="${escapeHTML(`--link-background-image:${cssUrl(link.backgroundImage)};--link-background-opacity:${getLinkBackgroundOpacity(link)}`)}"` : "";
  return `<a class="${buttonClass} ${featured} ${hasBackground ? "has-link-background" : ""}"${backgroundStyle} href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">${thumb}<span>${escapeHTML(link.title)}</span><b>›</b></a>`;
}

function input(labelText, bind, value) {
  return `<label>${labelText}<input data-bind="${bind}" value="${escapeHTML(value)}"></label>`;
}

function colorInput(labelText, bind, value) {
  return `<label>${labelText}<input class="color-input" type="color" data-bind="${bind}" value="${escapeHTML(value)}"></label>`;
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
    applyTemplateVisuals(state.page, target.dataset.template);
    state.activeTab = "profile";
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
  if (action === "clear-custom-image") clearCustomImage(target.dataset.imageTarget);
  if (action === "clear-profile-image") clearProfileImage();
  if (action === "clear-link-image") clearLinkImage(target.dataset.id, target.dataset.linkImageField);
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
  if (target.type === "file" && target.dataset.imageTarget) {
    readCustomImage(target);
    return;
  }
  if (target.type === "file" && target.dataset.profileImage) {
    readProfileImage(target);
    return;
  }
  if (target.type === "file" && target.dataset.linkImageId) {
    readLinkImage(target);
    return;
  }
  if (!target.dataset.bind) return;
  updateBind(target.dataset.bind, target.type === "checkbox" ? target.checked : target.value);
  saveState();
  render();
});

function readCustomImage(inputElement) {
  const file = inputElement.files?.[0];
  const imageTarget = inputElement.dataset.imageTarget;
  if (!file || !imageTarget) return;
  readOptimizedImage(file, imageTarget === "pageBackground" ? { maxWidth: 1440, maxHeight: 2560, quality: 0.82 } : { maxWidth: 1200, maxHeight: 900, quality: 0.78 })
    .then((imageData) => {
      setCustomImage(imageTarget, imageData);
      saveState();
      render();
    })
    .catch(() => window.alert("画像を読み込めませんでした。別の画像で試してください。"));
}

function readOptimizedImage(file, options = {}) {
  const { maxWidth = 1200, maxHeight = 1200, quality = 0.82 } = options;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("error", reject);
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("error", reject);
      image.addEventListener("load", () => {
        const ratio = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
        const width = Math.max(1, Math.round(image.naturalWidth * ratio));
        const height = Math.max(1, Math.round(image.naturalHeight * ratio));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}

function readLinkImage(inputElement) {
  const file = inputElement.files?.[0];
  const linkId = inputElement.dataset.linkImageId;
  const imageField = inputElement.dataset.linkImageField || "image";
  if (!file || !linkId) return;
  readOptimizedImage(file, { maxWidth: 900, maxHeight: 900, quality: 0.78 })
    .then((imageData) => {
      const link = state.page.links.find((item) => item.id === linkId);
      if (!link) return;
      link[imageField] = imageData;
      if (imageField === "image") link.role = "image";
      saveState();
      render();
    })
    .catch(() => window.alert("画像を読み込めませんでした。別の画像で試してください。"));
}

function clearLinkImage(linkId, imageField = "image") {
  const link = state.page.links.find((item) => item.id === linkId);
  if (link) link[imageField] = "";
}

function setCustomImage(imageTarget, value) {
  if (!state.page.design.custom) state.page.design.custom = { images: {}, colors: {} };
  if (!state.page.design.custom.images) state.page.design.custom.images = {};
  state.page.design.custom.images[imageTarget] = value || "";
}

function clearCustomImage(imageTarget) {
  setCustomImage(imageTarget, "");
}

function readProfileImage(inputElement) {
  const file = inputElement.files?.[0];
  if (!file) return;
  readOptimizedImage(file, { maxWidth: 640, maxHeight: 640, quality: 0.82 })
    .then((imageData) => {
      state.page.profile.avatarImage = imageData;
      saveState();
      render();
    })
    .catch(() => window.alert("画像を読み込めませんでした。別の画像で試してください。"));
}

function clearProfileImage() {
  state.page.profile.avatarImage = "";
}

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
    image: "",
    backgroundImage: "",
    backgroundOpacity: 0.48,
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
