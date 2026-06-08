const STORAGE_KEY = "jinbei_gas_01_blue_gold_brand_v1";

const defaultData = {
  company: {
    name: "荆州市津北化工股份有限公司",
    subtitle: "津北气体 JINBEI GAS · 专业气体充装服务商",
    slogan: "安全 · 合规 · 品质 · 服务",
    intro: "",
    address: "湖北省荆州开发区深圳大道延伸线以北木沉渊港路",
    phone: "秦磊 13545630436",
    phone2: "市场部 0716-4132988",
    email: "",
    website: "www.jbhg.top",
    hours: "周一至周日 8:00-17:30",
    locationTitle: "荆州市津北化工股份有限公司",
    locationRegion: "湖北荆州 · 荆州开发区",
    mapSearch: "荆州市津北化工股份有限公司 荆州开发区深圳大道延伸线以北",
    locationNote: "厂区位于荆州开发区深圳大道延伸线以北，导航可搜索公司名称或使用下方地图入口。"
  },
  nav: [
    ["home", "首页"], ["about", "关于我们"], ["business", "业务中心"], ["products", "产品服务"],
    ["inspection", "钢瓶检验"], ["safety", "安全资质"], ["news", "新闻中心"], ["contact", "联系我们"]
  ],
  slides: [
    {
      tag: "安全合规 · 稳定供应",
      title: "专业气体充装服务商",
      desc: "面向医疗、工业、科研、制造等领域，提供医用氧气、工业氧气、氩气、氮气、混合气、钢瓶检验及钢瓶全生命周期服务。",
      button: "查看业务",
      link: "business",
      image: "assets/1.webp"
    },
    {
      tag: "医用氧气 · 工业气体",
      title: "严守质量标准\n保障每一瓶气体安全可靠",
      desc: "从气源准入、充装复核、压力检测到批次追溯，建立规范化质量控制与安全管理流程。",
      button: "安全资质",
      link: "safety",
      image: "assets/2.webp"
    },
    {
      tag: "乙炔生产 · 丙烷充装 · 杜瓦罐服务",
      title: "多品类气体服务\n快速响应客户需求",
      desc: "覆盖常用工业气体、燃气、低温容器，支持企业客户长期稳定供应与配送服务。",
      button: "在线咨询",
      link: "contact",
      image: "assets/3.webp"
    }
  ],
  services: [
    { icon: "O₂", title: "医用氧气充装", desc: "医用氧气专业充装，纯度稳定，安全可靠。", image: "assets/7.webp" },
    { icon: "O₂", title: "工业氧气充装", desc: "满足切割、焊接、制造等工业场景用气需求。", image: "assets/8.webp" },
    { icon: "Ar", title: "氩气充装", desc: "高纯氩气充装服务，适用于焊接保护等场景。", image: "assets/9.webp" },
    { icon: "N₂", title: "氮气充装", desc: "氮气稳定供应，适用于置换、保护、吹扫等用途。", image: "assets/10.webp" },
    { icon: "MIX", title: "混合气充装", desc: "多组分混合气定制充装，配比精准，品质稳定。", image: "assets/11.webp" },
    { icon: "D", title: "杜瓦罐服务", desc: "杜瓦罐租赁、维护、低温气体供应与安全服务。", image: "assets/15.webp" },
    { icon: "🔥", title: "丙烷充装", desc: "丙烷气体充装服务，热值稳定，供应充足。", image: "assets/14.webp" },
    { icon: "C₂H₂", title: "乙炔生产充装", desc: "乙炔生产与充装，严格管控工艺与安全风险。", image: "assets/13.webp" },
    { icon: "🔍", title: "钢瓶检验", desc: "钢瓶定期检验、气密性试验、报告出具等服务。", image: "assets/12.webp" },
    { icon: "QR", title: "二维码电子溯源信息管理", desc: "作为公司业务展示，支持气瓶身份识别、充装批次、检验记录与流转信息展示。", image: "assets/16.webp" }
  ],
  features: [
    { icon: "▣", title: "实力雄厚", desc: "现代化充装与检验设备，服务医疗、工业、科研多类客户。" },
    { icon: "盾", title: "安全管理", desc: "建立安全生产责任制、隐患排查与应急处置机制。" },
    { icon: "证", title: "资质齐全", desc: "合规经营，具备气体充装与钢瓶检验相关能力。" },
    { icon: "车", title: "快速配送", desc: "响应及时，支持区域客户稳定供气与配送服务。" },
    { icon: "检", title: "专业检验", desc: "专业检验流程，数据记录完整，检测报告规范。" },
    { icon: "服", title: "售后服务", desc: "7×24 小时响应机制，及时解决客户用气问题。" }
  ],
  certificates: [
    { title: "气体充装许可证", image: "assets/17.png" },
    { title: "特种设备相关资质", image: "assets/18.png" },
    { title: "质量管理体系认证", image: "assets/19.png" }
  ],
  sectionImages: {
    businessCenter: "assets/4.webp",
    coreBusiness: "assets/5.webp",
    productCategory: "assets/5.webp",
    inspectionFlow: "assets/6.webp"
  },
  inspectionSteps: [
    { no: "01", title: "收瓶登记", desc: "登记钢瓶信息、使用单位、规格型号和检验周期。", image: "" },
    { no: "02", title: "外观检查", desc: "检查瓶体腐蚀、凹陷、裂纹、附件状态和标识情况。", image: "" },
    { no: "03", title: "压力试验", desc: "按规范进行耐压相关测试，记录关键数据。", image: "" },
    { no: "04", title: "气密性试验", desc: "对阀门、瓶体和连接部位开展气密性检查。", image: "" },
    { no: "05", title: "数据记录", desc: "记录检测数据、判定结果与处理建议。", image: "" },
    { no: "06", title: "出具报告", desc: "对合格钢瓶出具检验结果，形成可追溯记录。", image: "" }
  ],
  news: [
    { date: "2024-05-16", type: "企业动态", title: "津北化工完成新一批医用氧气充装设备升级", desc: "为进一步提升医用氧气充装能力和品质，公司完成新一批充装设备升级改造。" },
    { date: "2024-05-10", type: "安全生产", title: "安全生产月 | 津北化工开展安全应急演练", desc: "公司组织开展安全应急演练活动，强化全员安全意识，筑牢安全防线。" },
    { date: "2024-04-28", type: "质量管理", title: "津北化工通过质量管理体系复审", desc: "公司顺利完成质量管理体系复审，标志着质量管理水平持续提升。" }
  ]
};

let siteData = loadData();
let currentPage = location.hash.replace("#", "") || "home";
let currentSlide = 0;
let slideTimer = null;
let imageCache = {};
let adminInitialized = false;
let adminContentBound = false;
let adminTabsBound = false;
let adminStaticBound = false;
let adminImageStoreReady = false;
let adminLogged = false;
let currentAdminTab = "overview";
const ADMIN_USER = "admin";
const ADMIN_PASS_HASH = "a5e586276eff590073462ada516bccaf87f9765a2668b2ee3afdce40e69053a4";

async function sha256Text(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

async function verifyAdminPassword(pass) {
  if (window.crypto && crypto.subtle && window.TextEncoder) {
    return await sha256Text(pass) === ADMIN_PASS_HASH;
  }
  const localFallback = [55, 48, 52, 48, 54, 56, 57, 49].reverse().map(code => String.fromCharCode(code)).join("");
  return pass === localFallback;
}

const $ = (sel) => document.querySelector(sel);
const app = $("#app");
const nav = $("#mainNav");
const footerLinks = $("#footerLinks");
const adminContent = $("#adminContent");

function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nl(value = "") {
  return esc(value).replace(/\n/g, "<br>");
}

function mapUrl(type = "amap", query = "") {
  const keyword = encodeURIComponent(query || siteData.company.address || siteData.company.name);
  if (type === "baidu") return `https://map.baidu.com/search/${keyword}`;
  return `https://www.amap.com/search?query=${keyword}`;
}

const OPTIMIZED_ASSET_MAP = {
  "assets/1.jpg": "assets/1.webp",
  "assets/2.jpg": "assets/2.webp",
  "assets/3.jpg": "assets/3.webp",
  "assets/4.png": "assets/4.webp",
  "assets/5.png": "assets/5.webp",
  "assets/6.png": "assets/6.webp",
  "assets/7.png": "assets/7.webp",
  "assets/8.png": "assets/8.webp",
  "assets/9.png": "assets/9.webp",
  "assets/10.jpg": "assets/10.webp",
  "assets/11.png": "assets/11.webp",
  "assets/12.png": "assets/12.webp",
  "assets/13.png": "assets/13.webp",
  "assets/14.png": "assets/14.webp",
  "assets/15.png": "assets/15.webp",
  "assets/16.png": "assets/16.webp",
  "assets/17.png": "assets/17.webp",
  "assets/18.png": "assets/18.webp",
  "assets/19.png": "assets/19.webp"
};

function normalizeAssetRef(src = "") {
  const value = String(src || "");
  return OPTIMIZED_ASSET_MAP[value] || value;
}

function resolveImage(src = "") {
  if (!src) return "";
  const value = normalizeAssetRef(src);
  if (value.startsWith("idb:")) return imageCache[value.slice(4)] || "";
  return value;
}

function bgStyle(src = "") {
  const realSrc = resolveImage(src);
  if (!realSrc) return "";
  return `style="background-image:linear-gradient(135deg,rgba(7,95,212,.15),rgba(6,26,53,.12)),url('${esc(realSrc)}')"`;
}

function layeredImage(src = "", className = "adaptive-image", alt = "") {
  const realSrc = resolveImage(src);
  if (!realSrc) return "";
  const safeSrc = esc(realSrc);
  const safeAlt = esc(alt);
  const loadingAttr = className === "hero-image" ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
  return `<img class="${className}-blur image-blur-bg" src="${safeSrc}" alt="" aria-hidden="true" ${loadingAttr} decoding="async" />
          <img class="${className}-main image-main-contain" src="${safeSrc}" alt="${safeAlt}" ${loadingAttr} decoding="async" />`;
}

function previewAttrs(src = "", title = "图片") {
  if (!resolveImage(src)) return "";
  return ` data-preview-image="${esc(src)}" data-preview-title="${esc(title)}" tabindex="0" role="button" aria-label="点击放大查看：${esc(title)}"`;
}

function sectionPhoto(key, label) {
  const src = siteData.sectionImages?.[key] || "";
  return `<div class="section-photo ${src ? "has-image" : ""}"${previewAttrs(src, label)}>${layeredImage(src, "section-photo", label)}<div><strong>${esc(label)}</strong><span>${src ? "" : ""}</span></div></div>`;
}

function hydrateData(data = {}) {
  const base = structuredClone(defaultData);
  const merged = { ...base, ...data };
  merged.company = { ...base.company, ...(data.company || {}) };
  // 导航以当前版本为准，避免旧缓存继续显示“电子溯源”独立页面。
  merged.nav = base.nav;
  merged.sectionImages = { ...base.sectionImages, ...(data.sectionImages || {}) };
  merged.slides = (data.slides || base.slides).map((item, i) => ({ ...(base.slides[i % base.slides.length] || {}), image: "", ...item }));
  merged.services = (data.services || base.services).map((item, i) => ({ ...(base.services[i % base.services.length] || {}), image: "", ...item }));
  if (!merged.services.some(item => item.title === "二维码电子溯源信息管理")) {
    merged.services.push({ icon: "QR", title: "二维码电子溯源信息管理", desc: "作为公司业务展示，支持气瓶身份识别、充装批次、检验记录与流转信息展示。", image: "" });
  }
  merged.features = data.features || base.features;
  merged.certificates = (data.certificates || base.certificates).map((item, i) => {
    const cert = typeof item === "string" ? { title: item, image: "" } : item;
    return { ...(base.certificates[i % base.certificates.length] || {}), image: "", ...cert };
  });
  merged.news = (data.news || base.news).map(item => ({ image: "", ...item }));
  merged.inspectionSteps = (data.inspectionSteps || base.inspectionSteps).map((item, i) => ({ ...(base.inspectionSteps[i % base.inspectionSteps.length] || {}), image: "", ...item }));
  return merged;
}

function loadData() {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (!cached) return hydrateData();
    return hydrateData(JSON.parse(cached));
  } catch (e) {
    return hydrateData();
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
  updateCommonText();
}

function readableSize(bytes = 0) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

const IMAGE_DB_NAME = "jinbei_gas_image_store_v2";
const IMAGE_STORE_NAME = "images";

function supportsIndexedDB() {
  return typeof indexedDB !== "undefined";
}

function openImageDB() {
  return new Promise((resolve, reject) => {
    if (!supportsIndexedDB()) {
      reject(new Error("IndexedDB not supported"));
      return;
    }
    const request = indexedDB.open(IMAGE_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(IMAGE_STORE_NAME)) {
        db.createObjectStore(IMAGE_STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => {
      adminImageStoreReady = true;
      resolve(request.result);
    };
    request.onerror = () => reject(request.error || new Error("Image DB open failed"));
  });
}

function withImageStore(mode, callback) {
  return openImageDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(IMAGE_STORE_NAME, mode);
    const store = tx.objectStore(IMAGE_STORE_NAME);
    let result;
    try {
      result = callback(store);
    } catch (err) {
      db.close();
      reject(err);
      return;
    }
    tx.oncomplete = () => { db.close(); resolve(result); };
    tx.onerror = () => { db.close(); reject(tx.error || new Error("Image DB transaction failed")); };
    tx.onabort = () => { db.close(); reject(tx.error || new Error("Image DB transaction aborted")); };
  }));
}

function createImageId() {
  return `img_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

async function saveImageToStore(dataUrl) {
  const id = createImageId();
  await withImageStore("readwrite", store => store.put({ id, dataUrl, createdAt: Date.now() }));
  imageCache[id] = dataUrl;
  return `idb:${id}`;
}

async function readImageFromStore(id) {
  return new Promise((resolve, reject) => {
    withImageStore("readonly", store => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result?.dataUrl || "");
      request.onerror = () => reject(request.error || new Error("Image DB read failed"));
      return request;
    }).catch(reject);
  });
}

function deleteImageFromStoreRef(ref) {
  if (!ref || !String(ref).startsWith("idb:")) return;
  const id = String(ref).slice(4);
  delete imageCache[id];
  withImageStore("readwrite", store => store.delete(id)).catch(() => {});
}

function getImageFields() {
  const fields = [];
  (siteData.slides || []).forEach(item => fields.push({ obj: item, key: "image" }));
  (siteData.services || []).forEach(item => fields.push({ obj: item, key: "image" }));
  (siteData.certificates || []).forEach(item => fields.push({ obj: item, key: "image" }));
  (siteData.inspectionSteps || []).forEach(item => fields.push({ obj: item, key: "image" }));
  (siteData.news || []).forEach(item => fields.push({ obj: item, key: "image" }));
  Object.keys(siteData.sectionImages || {}).forEach(key => fields.push({ obj: siteData.sectionImages, key }));
  return fields;
}

async function preloadStoredImages() {
  const refs = getImageFields().map(item => item.obj[item.key]).filter(src => String(src || "").startsWith("idb:"));
  const ids = [...new Set(refs.map(ref => String(ref).slice(4)))];
  await Promise.all(ids.map(async id => {
    if (!imageCache[id]) {
      const dataUrl = await readImageFromStore(id);
      if (dataUrl) imageCache[id] = dataUrl;
    }
  }));
}

async function migrateInlineImagesToIndexedDB() {
  let changed = false;
  for (const field of getImageFields()) {
    const src = field.obj[field.key];
    if (String(src || "").startsWith("data:image/")) {
      try {
        field.obj[field.key] = await saveImageToStore(src);
        changed = true;
      } catch (err) {
        // IndexedDB 不可用时保留旧数据，后续上传会走压缩兜底。
      }
    }
  }
  if (changed) {
    try { saveData(); } catch (err) {}
  }
}

function getImageTarget(input) {
  const type = input.dataset.imageUpload;
  if (type === "section") return { obj: siteData.sectionImages, key: input.dataset.key };
  return { obj: siteData[type][Number(input.dataset.index)], key: "image" };
}

function getImageConfig(input) {
  const type = input.dataset.imageUpload;
  if (type === "slides") return { max: 2560, min: 1600, quality: 0.92, minQuality: 0.78, targetBytes: 2400 * 1024 };
  if (type === "certificates") return { max: 1600, min: 900, quality: 0.88, minQuality: 0.68, targetBytes: 520 * 1024 };
  if (type === "section") return { max: 1200, min: 680, quality: 0.76, minQuality: 0.54, targetBytes: 390 * 1024 };
  return { max: 1000, min: 620, quality: 0.74, minQuality: 0.52, targetBytes: 320 * 1024 };
}

function makeImageDataUrl(img, maxSide, quality) {
  const scale = Math.min(1, maxSide / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
  const width = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
  const height = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { alpha: false });
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", quality);
}

function compressImageForStorage(img, input) {
  const cfg = getImageConfig(input);
  let best = "";
  for (let maxSide = cfg.max; maxSide >= cfg.min; maxSide -= 160) {
    for (let quality = cfg.quality; quality >= cfg.minQuality; quality -= 0.08) {
      const dataUrl = makeImageDataUrl(img, maxSide, Number(quality.toFixed(2)));
      best = dataUrl;
      if (dataUrl.length * 0.75 <= cfg.targetBytes) return dataUrl;
    }
  }
  return best;
}

async function commitImageData(input, dataUrl) {
  const target = getImageTarget(input);
  if (!target?.obj) {
    toast("图片保存位置异常，请刷新后台后重试");
    return false;
  }
  const oldValue = target.obj[target.key] || "";

  // 优先把图片存进 IndexedDB，后台数据只保存很短的图片编号，避免 localStorage 容量爆掉。
  try {
    const storedRef = await saveImageToStore(dataUrl);
    target.obj[target.key] = storedRef;
    saveData();
    if (oldValue && oldValue !== storedRef && String(oldValue).startsWith("idb:")) deleteImageFromStoreRef(oldValue);
    renderPage();
    renderAdmin();
    toast(`图片已压缩到约 ${readableSize(Math.round(dataUrl.length * 0.75))} 并保存`);
    return true;
  } catch (dbErr) {
    // 兼容极少数禁用 IndexedDB 的浏览器：退回 localStorage，但压缩后的图片也可能受容量限制。
    target.obj[target.key] = dataUrl;
    try {
      saveData();
      renderPage();
      renderAdmin();
      toast(`图片已用兼容模式保存，大小约 ${readableSize(Math.round(dataUrl.length * 0.75))}`);
      return true;
    } catch (storageErr) {
      target.obj[target.key] = oldValue;
      try { saveData(); } catch (e) {}
      toast("图片仍然过大或浏览器存储已满：请先点“恢复默认”清空旧图片，或换 jpg/png 小图再试");
      return false;
    }
  }
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el.timer);
  el.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function updateCommonText() {
  const c = siteData.company;
  $("#brandName").textContent = c.name;
  $("#brandSub").textContent = c.subtitle;
  $("#footerHotline").textContent = c.phone2;
  $("#footerHours").textContent = c.hours;
  $("#footerAddress").textContent = c.address;
  $("#footerPhone").textContent = c.phone;
  $("#footerServicePhone").textContent = c.phone2;
  $("#footerEmail").textContent = c.email;
  $("#footerWebsite").textContent = c.website;
}

function renderNav() {
  const links = siteData.nav.map(([key, label]) => `<a href="#${key}" class="${currentPage === key ? "active" : ""}">${esc(label)}</a>`).join("");
  nav.innerHTML = links;
  footerLinks.innerHTML = siteData.nav.slice(1).map(([key, label]) => `<a href="#${key}">${esc(label)}</a>`).join("") + `<button class="footer-admin-link" data-open-admin="true" type="button">后台管理</button>`;
}

function route() {
  const hash = location.hash.replace("#", "") || "home";
  currentPage = siteData.nav.some(([key]) => key === hash) ? hash : "home";
  renderNav();
  renderPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPage() {
  const map = {
    home: renderHome,
    about: renderAbout,
    business: renderBusiness,
    products: renderProducts,
    inspection: renderInspection,
    safety: renderSafety,
    news: renderNews,
    contact: renderContact
  };
  app.innerHTML = (map[currentPage] || renderHome)();
  if (currentPage === "home") initHero();
}

function renderHome() {
  const hasCustomSlideImages = siteData.slides.some(slide => resolveImage(slide.image));
  return `
    <section class="hero ${hasCustomSlideImages ? "has-custom-slide-images" : ""}">
      ${siteData.slides.map((slide, i) => `
        <article class="hero-slide ${i === currentSlide ? "active" : ""} ${resolveImage(slide.image) ? "has-image" : ""}" data-slide="${i}">
          <div class="hero-visual ${resolveImage(slide.image) ? "has-image" : ""}"${previewAttrs(slide.image, slide.title || "首页轮播图")}>${layeredImage(slide.image, "hero-image", slide.title || "轮播图")}</div>
          <div class="container hero-content">
            <div class="hero-copy">
              <div class="hero-kicker">${esc(slide.tag)}</div>
              <h1>${nl(slide.title)}</h1>
              <p class="hero-desc">${esc(slide.desc)}</p>
              <div class="hero-actions">
                <a class="blue-btn" href="#${esc(slide.link || "business")}">${esc(slide.button || "查看业务")} →</a>
                <a class="ghost-btn" href="#contact">在线咨询 ⌕</a>
              </div>
            </div>
          </div>
        </article>`).join("")}
      <button class="slide-arrow prev" id="prevSlide" type="button">‹</button>
      <button class="slide-arrow next" id="nextSlide" type="button">›</button>
      <div class="slider-dots">${siteData.slides.map((_, i) => `<button class="${i === currentSlide ? "active" : ""}" data-dot="${i}" type="button" aria-label="切换到第 ${i + 1} 张轮播图"></button>`).join("")}</div>
    </section>
    <section class="section white business-center-section">
      <div class="container">
        <div class="section-title center"><small>Business Center</small><h2>业务中心</h2></div>
        ${sectionPhoto("businessCenter", "业务中心主图")}
        ${servicesGrid()}
      </div>
    </section>
    <section class="section blue-soft">
      <div class="container">
        <div class="section-head"><div class="section-title"><small>Advantages</small><h2>公司优势</h2></div><a class="more-link" href="#about">了解更多 →</a></div>
        <div class="feature-grid">${siteData.features.map(featureCard).join("")}</div>
      </div>
    </section>
    <section class="section white">
      <div class="container split-grid">
        <div class="light-panel">
          <div class="section-title"><small>Safety & Quality</small><h2>安全与质量</h2></div>
          <div class="process">
            ${[
              ["01","安全管理","建立完善安全管理体系，落实全员安全培训、风险分级管控与隐患排查治理。"],
              ["02","质量控制","从气源到充装全流程监控，执行标准化作业，保证气体品质稳定。"],
              ["03","检验流程","钢瓶外观检查、压力试验、气密性试验、壁厚测定与报告出具。"],
              ["04","二维码电子溯源","一瓶一码、一批一码，作为业务能力在前台展示，便于客户了解气瓶与批次信息。"]
            ].map(processStep).join("")}
          </div>
        </div>
        <div class="cert-panel">
          <div class="section-head"><div class="section-title"><small>Certificates</small><h2>安全资质 / 证书展示</h2></div><a href="#safety" class="more-link">查看全部 →</a></div>
          <div class="cert-row">
            ${siteData.certificates.slice(0, 3).map(certCard).join("")}
          </div>
        </div>
      </div>
    </section>
    <section class="section blue-soft">
      <div class="container">
        <div class="section-head"><div class="section-title"><small>News Center</small><h2>新闻中心</h2></div><a class="more-link" href="#news">查看更多 →</a></div>
        <div class="news-grid">${siteData.news.slice(0, 3).map(newsCard).join("")}</div>
      </div>
    </section>`;
}

function servicesGrid() {
  return `<div class="service-grid">${siteData.services.map(serviceCard).join("")}</div>`;
}

function serviceCard(s) {
  return `<article class="service-card"><div class="service-visual ${s.image ? "has-image" : ""}"${previewAttrs(s.image, s.title)}>${layeredImage(s.image, "service-image", s.title)}<span>${esc(s.icon)}</span></div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></article>`;
}

function featureCard(f) {
  return `<article class="feature-card"><div class="service-icon">${esc(f.icon)}</div><h3>${esc(f.title)}</h3><p>${esc(f.desc)}</p></article>`;
}

function processStep(p, idx = 0) {
  const item = Array.isArray(p) ? { no: p[0], title: p[1], desc: p[2], image: "" } : p;
  return `<div class="process-step ${item.image ? "with-image" : ""}"><span>${esc(item.no || String(idx + 1).padStart(2, "0"))}</span>${item.image ? `<div class="process-image has-image"${previewAttrs(item.image, item.title)}>${layeredImage(item.image, "process-image", item.title)}</div>` : ""}<div><strong>${esc(item.title)}</strong><p>${esc(item.desc)}</p></div></div>`;
}

function certCard(cert) {
  const item = typeof cert === "string" ? { title: cert, image: "" } : (cert || {});
  const title = item.title || "证书资质";
  const image = item.image || "";
  return `<div class="cert-card ${image ? "has-image" : ""}"><div class="cert-img ${image ? "has-image" : ""}"${previewAttrs(image, title)}>${image ? layeredImage(image, "cert-image", title) : ""}</div><p>${esc(title)}</p></div>`;
}

function newsCard(n) {
  return `<article class="news-card"><div class="news-thumb"></div><div class="news-body"><small>${esc(n.type)} · ${esc(n.date)}</small><h3>${esc(n.title)}</h3><p>${esc(n.desc)}</p></div></article>`;
}

function innerHero(title, desc, crumb) {
  return `<section class="inner-hero"><div class="container"><div class="breadcrumb">首页 / ${esc(crumb || title)}</div><h1>${esc(title)}</h1><p>${esc(desc)}</p></div></section>`;
}

function renderAbout() {
  return `${innerHero("关于我们", "津北化工股份有限公司专注气体充装、乙炔生产充装、杜瓦罐服务与钢瓶检验，始终坚持安全第一、合规经营、质量为本、客户至上。")}
  <section class="section white"><div class="container split-grid">
    <div class="light-panel"><div class="section-title"><small>Company Profile</small><h2>企业简介</h2></div><p style="line-height:2;color:#66758e">${esc(siteData.company.intro)} 荆州市津北化工股份有限公司自2000年成立以来，一直专注于溶解乙炔生产和工业气体经营。随着业务的发展，公司在2014年至2015年不断扩展生产能力，从最初的乙炔生产小规模起步，逐步增加到年产10.8万瓶，并拓展了氩气、氧气、氮气、氢气、二氧化碳及液化石油气等工业气体的批发业务。

为了适应发展需求，2016年至2017年，公司多次调整注册地址，并顺利获得溶解乙炔生产及工业气体分装项目审批，为企业规范化运作打下基础。

2019年，面对荆州市“关改搬转”政策，公司积极响应号召，将工厂整体迁入荆州开发区化工园区。迁厂过程中，公司投资5000万元引进国内先进的乙炔、液氧等生产设备，并全面安装智能预警系统，大幅提升了生产安全和智能管理水平，实现了向现代化、智能化、绿色化工企业的转型升级。

2024年，公司法定代表人由秦官斌变更为秦磊，并对经营范围进行了优化调整，继续为推动企业高质量发展和服务区域工业发展贡献力量。</p><p style="line-height:2;color:#66758e"></p></div>
    <div class="content-grid" style="grid-template-columns:1fr">
      ${["安全生产责任体系","专业充装与检验团队","稳定供应与快速响应"].map((t,i)=>`<article class="article-card"><h3>${t}</h3><p>${["落实岗位责任、培训教育、风险管控、隐患排查与应急演练。","持证上岗，规范操作，严格执行充装、检测、记录与复核流程。","覆盖常用气体与钢瓶服务，支持企业客户长期合作与稳定供气。" ][i]}</p></article>`).join("")}
    </div>
  </div></section>`;
}

function renderBusiness() {
  return `${innerHero("业务中心", "覆盖医用氧气、工业氧气、氩气、氮气、混合气、杜瓦罐、丙烷、乙炔生产充装与钢瓶检验等核心业务。")}
  <section class="section white"><div class="container"><div class="section-title center"><small>All Services</small><h2>核心业务一览</h2></div>${sectionPhoto("coreBusiness", "核心业务一览")}${servicesGrid()}</div></section>
  <section class="section blue-soft"><div class="container"><div class="section-title"><small>Service Support</small><h2>服务支持流程</h2></div><div class="content-grid">${[
    ["需求沟通", "确认气体种类、规格、数量、钢瓶状态、配送周期和使用场景。"],
    ["充装检验", "按流程开展充装前检查、充装控制、复核记录和质量确认。"],
    ["配送交付", "根据客户需求安排供气、配送、钢瓶回收与后续服务。"],
    ["电子溯源", "二维码电子溯源信息管理作为公司业务展示，便于客户了解气瓶身份、充装批次与检验记录。"]
  ].map(item=>`<article class="article-card"><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("")}</div></div></section>`;
}

function renderProducts() {
  return `${innerHero("产品服务", "围绕不同用气场景提供专业产品与服务，可根据客户需求进行规格匹配、供气方案制定和长期供应。")}
  <section class="section white"><div class="container"><div class="section-title center"><small>Product Services</small><h2>产品服务分类</h2></div>${sectionPhoto("productCategory", "产品服务分类")}<div class="content-grid">${siteData.services.map(s=>`<article class="article-card"><div class="service-visual small ${s.image ? "has-image" : ""}"${previewAttrs(s.image, s.title)}>${layeredImage(s.image, "service-image", s.title)}<span>${esc(s.icon)}</span></div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p><p><strong>适用场景：</strong>医疗、工业制造、焊接切割、科研实验、低温存储、工程施工等。</p><a class="more-link" href="#contact">立即咨询 →</a></article>`).join("")}</div></div></section>`;
}

function renderInspection() {
  return `${innerHero("钢瓶检验", "提供钢瓶定期检验、外观检查、压力试验、气密性试验、数据记录和检验报告服务。")}
  <section class="section white"><div class="container split-grid"><div class="light-panel"><div class="section-title"><small>Inspection Flow</small><h2>钢瓶检验流程</h2></div>${sectionPhoto("inspectionFlow", "钢瓶检验")}<div class="process">
    ${siteData.inspectionSteps.map(processStep).join("")}
  </div></div><div class="cert-panel"><div class="section-title"><small>Capability</small><h2>检验能力</h2></div><div class="feature-grid" style="grid-template-columns:1fr 1fr">${[
    {icon:"检",title:"专业设备",desc:"配套检测仪器，满足钢瓶定期检验需求。"},
    {icon:"数",title:"数据准确",desc:"关键检测数据规范记录，便于追溯。"},
    {icon:"报",title:"报告规范",desc:"按流程出具检验结果与处理建议。"},
    {icon:"安",title:"安全合规",desc:"严格执行安全操作要求和检验流程。"}
  ].map(featureCard).join("")}</div></div></div></section>`;
}

function renderSafety() {
  return `${innerHero("安全资质", "安全是化工企业的生命线。公司围绕合规经营、质量控制、证书管理和应急响应建设安全管理体系。")}
  <section class="section white"><div class="container split-grid"><div class="light-panel"><div class="section-title"><small>HSE Management</small><h2>安全管理体系</h2></div><div class="process">
    ${[["01","安全责任","建立岗位责任、作业审批、员工培训与安全考核机制。"],["02","风险管控","开展危险源辨识、风险分级管控和隐患排查治理。"],["03","质量追溯","气源准入、充装复核、检验记录、批次留样与数据追溯。"],["04","应急响应","完善应急预案，定期组织演练，提高突发情况处置能力。"]].map(processStep).join("")}
  </div></div><div class="cert-panel"><div class="section-head"><div class="section-title"><small>Certificates</small><h2>证书展示</h2></div></div><div class="cert-row">${siteData.certificates.map(certCard).join("")}</div></div></div></section>`;
}

function renderNews() {
  return `${innerHero("新闻中心", "展示企业动态、安全通知、检验公告与行业资讯。")}
  <section class="section white"><div class="container"><div class="news-grid">${siteData.news.map(newsCard).join("")}</div></div></section>`;
}


function renderContact() {
  const c = siteData.company;
  const mapKeyword = c.mapSearch || `${c.name} ${c.address}`;
  return `${innerHero("联系我们", "欢迎咨询气体充装、杜瓦罐服务、乙炔生产充装、丙烷充装和钢瓶检验业务。")}
  <section class="section white"><div class="container contact-page-grid">
    <div class="contact-info"><div class="section-title"><small>Contact</small><h2>联系信息</h2></div><ul class="contact-list"><li><strong>联系电话：</strong>${esc(c.phone)}</li><li><strong>服务热线：</strong>${esc(c.phone2)}</li><li><strong>公司地址：</strong>${esc(c.address)}</li><li><strong>电子邮箱：</strong>${esc(c.email)}</li><li><strong>公司网址：</strong>${esc(c.website)}</li><li><strong>工作时间：</strong>${esc(c.hours)}</li></ul></div>
    <article class="location-card" aria-label="公司定位信息卡片">
      <div class="location-map" role="img" aria-label="${esc(c.name)}定位示意图">
        <span class="map-road map-road-a"></span><span class="map-road map-road-b"></span><span class="map-road map-road-c"></span>
        <div class="map-pin"><i></i><strong>${esc(c.name.replace("荆州市", "").replace("股份有限公司", ""))}</strong></div>
      </div>
      <div class="location-card-body">
        <span class="location-badge">Location Card</span>
        <h3>${esc(c.locationTitle || c.name)}</h3>
        <p>${esc(c.locationNote || "导航可搜索公司名称或使用下方地图入口。")}</p>
        <div class="location-meta">
          <div><b>所在区域</b><span>${esc(c.locationRegion || "湖北荆州")}</span></div>
          <div><b>定位地址</b><span>${esc(c.address)}</span></div>
        </div>
        <div class="location-actions">
          <a class="blue-btn" href="${mapUrl("amap", mapKeyword)}" target="_blank" rel="noopener">高德地图导航</a>
          <a class="outline-map-btn" href="${mapUrl("baidu", mapKeyword)}" target="_blank" rel="noopener">百度地图查看</a>
        </div>
      </div>
    </article>
  </div></section>`;
}

function initHero() {
  clearInterval(slideTimer);
  const renderSlideState = () => {
    document.querySelectorAll(".hero-slide").forEach((el, i) => el.classList.toggle("active", i === currentSlide));
    document.querySelectorAll("[data-dot]").forEach((el, i) => el.classList.toggle("active", i === currentSlide));
  };
  const go = (i) => { currentSlide = (i + siteData.slides.length) % siteData.slides.length; renderSlideState(); };
  $("#prevSlide")?.addEventListener("click", () => go(currentSlide - 1));
  $("#nextSlide")?.addEventListener("click", () => go(currentSlide + 1));
  document.querySelectorAll("[data-dot]").forEach(btn => btn.addEventListener("click", () => go(Number(btn.dataset.dot))));
  slideTimer = setInterval(() => go(currentSlide + 1), 5200);

  // “我们的优势”浮动卡片已删除，首页只保留轮播图、文案和基础切换控件。
}

function openLogin() {
  if (adminLogged) {
    openAdmin();
  } else {
    $("#loginModal").classList.add("show");
    $("#loginModal").setAttribute("aria-hidden", "false");
  }
}

function closeLogin() {
  $("#loginModal").classList.remove("show");
  $("#loginModal").setAttribute("aria-hidden", "true");
}

function openAdmin() {
  closeLogin();
  $("#adminDashboard").classList.add("show");
  $("#adminDashboard").setAttribute("aria-hidden", "false");
  renderAdmin();
}

function closeAdmin() {
  $("#adminDashboard").classList.remove("show");
  $("#adminDashboard").setAttribute("aria-hidden", "true");
}

function renderAdmin() {
  if (currentAdminTab === "traceability") currentAdminTab = "overview";
  document.querySelectorAll(".admin-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.adminTab === currentAdminTab));
  const titles = { overview:"仪表盘", slides:"轮播图管理", services:"业务服务管理", images:"图片上传管理", news:"新闻中心管理", contact:"联系信息管理", settings:"企业信息设置" };
  $("#adminTitle").textContent = titles[currentAdminTab] || "后台管理";
  const map = { overview: adminOverview, slides: adminSlides, services: adminServices, images: adminImages, news: adminNews, contact: adminContact, settings: adminSettings };
  adminContent.innerHTML = (map[currentAdminTab] || adminOverview)();
}

function adminOverview() {
  return `<div class="admin-cards">
    <div class="admin-stat"><span>轮播图数量</span><strong>${siteData.slides.length}</strong></div>
    <div class="admin-stat"><span>业务服务数量</span><strong>${siteData.services.length}</strong></div>
    <div class="admin-stat"><span>新闻数量</span><strong>${siteData.news.length}</strong></div>
    <div class="admin-stat"><span>证书照片</span><strong>${siteData.certificates.length}</strong></div>
  </div>
  <div class="admin-panel" style="margin-top:18px"><h3>网站模块状态</h3><div class="content-grid"><article class="article-card"><h3>前台页面</h3><p>首页、关于我们、业务中心、产品服务、钢瓶检验、安全资质、新闻中心、联系我们。</p></article><article class="article-card"><h3>可编辑内容</h3><p>企业信息、轮播图、业务服务、新闻动态、联系方式，以及产品服务分类、核心业务一览、钢瓶检验流程、业务中心图片、证书页面照片均可在后台维护。二维码电子溯源信息管理作为业务项目在前台展示，不再设置独立后台操作页面。</p></article><article class="article-card"><h3>部署方式</h3><p>静态部署即可运行；图片上传会压缩后保存到当前浏览器本地。如需多人共用后台，可后续接入数据库。</p></article></div></div>`;
}

function adminSlides() {
  return `<div class="admin-panel"><h3>轮播图列表</h3><button class="mini-btn" data-action="add-slide">新增轮播</button></div>
  ${siteData.slides.map((s,i)=>`<div class="admin-panel data-row"><div class="form-grid">
    <label>标签<input data-array="slides" data-index="${i}" data-field="tag" value="${esc(s.tag)}" /></label>
    <label>按钮文字<input data-array="slides" data-index="${i}" data-field="button" value="${esc(s.button)}" /></label>
    <label class="wide">标题<textarea data-array="slides" data-index="${i}" data-field="title">${esc(s.title)}</textarea></label>
    <label class="wide">描述<textarea data-array="slides" data-index="${i}" data-field="desc">${esc(s.desc)}</textarea></label>
    <label>跳转页面<select data-array="slides" data-index="${i}" data-field="link">${siteData.nav.map(([key,label])=>`<option value="${key}" ${s.link===key?"selected":""}>${label}</option>`).join("")}</select></label>
    ${imageUploadBlock("slides", i, s.image, "轮播图背景图片")}
  </div><div class="row-actions"><button class="danger-btn" data-action="delete-slide" data-index="${i}">删除</button></div></div>`).join("")}`;
}

function adminServices() {
  return `<div class="admin-panel"><h3>业务服务列表</h3><button class="mini-btn" data-action="add-service">新增业务</button></div>
  ${siteData.services.map((s,i)=>`<div class="admin-panel data-row"><div class="form-grid">
    <label>图标/符号<input data-array="services" data-index="${i}" data-field="icon" value="${esc(s.icon)}" /></label>
    <label>业务名称<input data-array="services" data-index="${i}" data-field="title" value="${esc(s.title)}" /></label>
    <label class="wide">业务简介<textarea data-array="services" data-index="${i}" data-field="desc">${esc(s.desc)}</textarea></label>
    ${imageUploadBlock("services", i, s.image, "业务图片（用于业务中心 / 核心业务一览 / 产品服务分类）")}
  </div><div class="row-actions"><button class="danger-btn" data-action="delete-service" data-index="${i}">删除</button></div></div>`).join("")}`;
}

function imageUploadBlock(array, index, src, label) {
  const has = !!src;
  return `<div class="image-upload-block wide">
    <div class="upload-preview ${has ? "has-image" : ""}">${layeredImage(src, "upload-preview", label)}<span>${has ? "" : "未上传图片"}</span></div>
    <div class="upload-control">
      <strong>${esc(label)}</strong>
      <small>${array === "slides" ? "轮播图由你自己上传设定；前台会清晰铺满轮播区域，右侧显示信息卡片。手机 HEIC 请先转 jpg。" : "建议上传清晰图片；前台会按比例自适应显示，不拉伸、不裁切。手机 HEIC 请先转 jpg。"}</small>
      <input type="file" accept="image/*" data-image-upload="${array}" data-index="${index}" />
      ${has ? `<button class="danger-btn" type="button" data-action="remove-image" data-array="${array}" data-index="${index}">删除图片</button>` : ""}
    </div>
  </div>`;
}

function sectionImageUploadBlock(key, src, label) {
  const has = !!src;
  return `<div class="admin-panel data-row"><div class="form-grid">
    <div class="image-upload-block wide">
      <div class="upload-preview ${has ? "has-image" : ""}">${layeredImage(src, "upload-preview", label)}<span>${has ? "" : "未上传图片"}</span></div>
      <div class="upload-control">
        <strong>${esc(label)}</strong>
        <small>用于前台对应模块展示图，可随时替换；前台会按比例自适应显示，不拉伸、不裁切。</small>
        <input type="file" accept="image/*" data-image-upload="section" data-key="${key}" />
        ${has ? `<button class="danger-btn" type="button" data-action="remove-section-image" data-key="${key}">删除图片</button>` : ""}
      </div>
    </div>
  </div></div>`;
}

function adminImages() {
  return `<div class="admin-panel"><h3>模块图片上传替换</h3><p class="admin-note">以下图片会显示在前台对应模块：产品服务分类、核心业务一览、钢瓶检验流程、业务中心。业务服务列表中的单项图片也会同步用于这些页面的业务卡片。</p></div>
  ${sectionImageUploadBlock("businessCenter", siteData.sectionImages.businessCenter, "业务中心主图")}
  ${sectionImageUploadBlock("coreBusiness", siteData.sectionImages.coreBusiness, "核心业务一览主图")}
  ${sectionImageUploadBlock("productCategory", siteData.sectionImages.productCategory, "产品服务分类主图")}
  ${sectionImageUploadBlock("inspectionFlow", siteData.sectionImages.inspectionFlow, "钢瓶检验流程主图")}
  <div class="admin-panel"><h3>证书页面照片</h3><p class="admin-note">可为“安全资质 / 证书展示”页面中的每一本证书单独上传、替换或删除照片。</p><button class="mini-btn" data-action="add-certificate">新增证书</button></div>
  ${siteData.certificates.map((cert, i)=>`<div class="admin-panel data-row"><div class="form-grid">
    <label class="wide">证书名称<input data-array="certificates" data-index="${i}" data-field="title" value="${esc(cert.title)}" /></label>
    ${imageUploadBlock("certificates", i, cert.image, "证书照片")}
  </div><div class="row-actions"><button class="danger-btn" data-action="delete-certificate" data-index="${i}">删除证书</button></div></div>`).join("")}
  <div class="admin-panel"><h3>钢瓶检验流程步骤图片</h3></div>
  ${siteData.inspectionSteps.map((step, i)=>`<div class="admin-panel data-row"><div class="form-grid">
    <label>序号<input data-array="inspectionSteps" data-index="${i}" data-field="no" value="${esc(step.no)}" /></label>
    <label>步骤名称<input data-array="inspectionSteps" data-index="${i}" data-field="title" value="${esc(step.title)}" /></label>
    <label class="wide">步骤说明<textarea data-array="inspectionSteps" data-index="${i}" data-field="desc">${esc(step.desc)}</textarea></label>
    ${imageUploadBlock("inspectionSteps", i, step.image, "步骤图片")}
  </div></div>`).join("")}`;
}


function adminNews() {
  return `<div class="admin-panel"><h3>新闻列表</h3><button class="mini-btn" data-action="add-news">新增新闻</button></div>
  ${siteData.news.map((n,i)=>`<div class="admin-panel data-row"><div class="form-grid">
    <label>日期<input data-array="news" data-index="${i}" data-field="date" value="${esc(n.date)}" /></label>
    <label>分类<input data-array="news" data-index="${i}" data-field="type" value="${esc(n.type)}" /></label>
    <label class="wide">标题<input data-array="news" data-index="${i}" data-field="title" value="${esc(n.title)}" /></label>
    <label class="wide">摘要<textarea data-array="news" data-index="${i}" data-field="desc">${esc(n.desc)}</textarea></label>
  </div><div class="row-actions"><button class="danger-btn" data-action="delete-news" data-index="${i}">删除</button></div></div>`).join("")}`;
}

function adminContact() {
  const c = siteData.company;
  return `<div class="admin-panel"><h3>联系信息</h3><div class="form-grid">
    <label>联系电话<input data-object="company" data-field="phone" value="${esc(c.phone)}" /></label>
    <label>服务热线<input data-object="company" data-field="phone2" value="${esc(c.phone2)}" /></label>
    <label>电子邮箱<input data-object="company" data-field="email" value="${esc(c.email)}" /></label>
    <label>公司网址<input data-object="company" data-field="website" value="${esc(c.website)}" /></label>
    <label class="wide">公司地址<input data-object="company" data-field="address" value="${esc(c.address)}" /></label>
    <label class="wide">工作时间<input data-object="company" data-field="hours" value="${esc(c.hours)}" /></label>
    <label>定位卡片标题<input data-object="company" data-field="locationTitle" value="${esc(c.locationTitle || c.name)}" /></label>
    <label>定位区域<input data-object="company" data-field="locationRegion" value="${esc(c.locationRegion || "湖北荆州")}" /></label>
    <label class="wide">地图导航关键词<input data-object="company" data-field="mapSearch" value="${esc(c.mapSearch || `${c.name} ${c.address}`)}" /></label>
    <label class="wide">定位卡片备注<textarea data-object="company" data-field="locationNote">${esc(c.locationNote || "导航可搜索公司名称或使用下方地图入口。")}</textarea></label>
  </div></div>`;
}

function adminSettings() {
  const c = siteData.company;
  return `<div class="admin-panel"><h3>企业信息</h3><div class="form-grid">
    <label>公司名称<input data-object="company" data-field="name" value="${esc(c.name)}" /></label>
    <label>网站副标题<input data-object="company" data-field="subtitle" value="${esc(c.subtitle)}" /></label>
    <label>宣传标语<input data-object="company" data-field="slogan" value="${esc(c.slogan)}" /></label>
    <label class="wide">企业简介<textarea data-object="company" data-field="intro">${esc(c.intro)}</textarea></label>
  </div></div>`;
}

function handleImageInput(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const name = (file.name || "").toLowerCase();
  const supportedName = /\.(jpe?g|png|webp|gif|bmp)$/i.test(name);
  if (!file.type.startsWith("image/") && !supportedName) {
    toast("请选择 jpg、png、webp 等常见图片文件");
    input.value = "";
    return;
  }
  if (/\.hei[cf]$/i.test(name) || /heic|heif/i.test(file.type || "")) {
    toast("当前浏览器通常不能直接读取 HEIC，请先转成 jpg/png 后上传");
    input.value = "";
    return;
  }

  toast("图片正在压缩保存，请稍候");
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = async () => {
      try {
        await migrateInlineImagesToIndexedDB();
        const dataUrl = compressImageForStorage(img, input);
        await commitImageData(input, dataUrl);
      } catch (err) {
        toast("图片处理失败，请换一张 jpg/png 图片");
      } finally {
        input.value = "";
      }
    };
    img.onerror = () => {
      toast("图片读取失败，请换 jpg/png/webp 格式，手机 HEIC 需先转成 jpg");
      input.value = "";
    };
    img.src = reader.result;
  };
  reader.onerror = () => {
    toast("图片文件读取失败，请重新选择");
    input.value = "";
  };
  reader.readAsDataURL(file);
}

function ensureImagePreviewer() {
  let box = document.getElementById("imagePreviewer");
  if (box) return box;
  box = document.createElement("section");
  box.id = "imagePreviewer";
  box.className = "image-lightbox";
  box.setAttribute("aria-hidden", "true");
  box.innerHTML = `<button class="image-lightbox-close" type="button" aria-label="关闭大图预览">×</button><figure><img alt="" /><figcaption></figcaption></figure>`;
  document.body.appendChild(box);
  box.addEventListener("click", e => {
    if (e.target === box || e.target.closest(".image-lightbox-close")) closeImagePreview();
  });
  return box;
}

function openImagePreview(src = "", title = "图片预览") {
  const realSrc = resolveImage(src) || src;
  if (!realSrc) return;
  const box = ensureImagePreviewer();
  const img = box.querySelector("img");
  const caption = box.querySelector("figcaption");
  img.src = realSrc;
  img.alt = title || "图片预览";
  caption.textContent = title || "图片预览";
  box.classList.add("show");
  box.setAttribute("aria-hidden", "false");
  document.body.classList.add("preview-open");
}

function closeImagePreview() {
  const box = document.getElementById("imagePreviewer");
  if (!box) return;
  box.classList.remove("show");
  box.setAttribute("aria-hidden", "true");
  document.body.classList.remove("preview-open");
  const img = box.querySelector("img");
  if (img) img.removeAttribute("src");
}

function bindImagePreviewEvents() {
  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-preview-image]");
    if (!trigger || trigger.closest(".admin-dashboard")) return;
    if (e.target.closest("a,button,input,textarea,select,label")) return;
    e.preventDefault();
    openImagePreview(trigger.dataset.previewImage, trigger.dataset.previewTitle || "图片预览");
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeImagePreview();
      return;
    }
    if (e.key !== "Enter" && e.key !== " ") return;
    const trigger = document.activeElement?.closest?.("[data-preview-image]");
    if (!trigger || trigger.closest(".admin-dashboard")) return;
    e.preventDefault();
    openImagePreview(trigger.dataset.previewImage, trigger.dataset.previewTitle || "图片预览");
  });
}

function bindEvents() {
  window.addEventListener("hashchange", route);
  window.addEventListener("scroll", () => $("#topHeader").classList.toggle("scrolled", scrollY > 10));
  $("#year").textContent = new Date().getFullYear();
  $("#openAdmin")?.addEventListener("click", openLogin);
  footerLinks.addEventListener("click", e => {
    if (e.target.closest("[data-open-admin]")) { e.preventDefault(); openLogin(); }
  });
  $("#closeLogin").addEventListener("click", closeLogin);
  $("#closeAdmin").addEventListener("click", closeAdmin);
  $("#loginBtn").addEventListener("click", async () => {
    const user = $("#adminUser").value.trim();
    const pass = $("#adminPass").value.trim();
    const ok = user === ADMIN_USER && await verifyAdminPassword(pass);
    if (ok) { adminLogged = true; openAdmin(); $("#adminPass").value = ""; toast("登录成功"); }
    else $("#loginError").textContent = "账号或密码错误";
  });
  $("#mobileMenu").addEventListener("click", () => nav.classList.toggle("mobile-open"));
  nav.addEventListener("click", () => nav.classList.remove("mobile-open"));
  bindImagePreviewEvents();
  document.querySelectorAll(".admin-tab").forEach(btn => btn.addEventListener("click", () => { currentAdminTab = btn.dataset.adminTab; renderAdmin(); }));
  $("#saveAll").addEventListener("click", () => { saveData(); renderNav(); renderPage(); toast("已保存修改"); });
  $("#resetData").addEventListener("click", () => {
    if (confirm("确定恢复默认数据？当前本地修改将被清除。")) {
      localStorage.removeItem(STORAGE_KEY);
      if (supportsIndexedDB()) indexedDB.deleteDatabase(IMAGE_DB_NAME);
      imageCache = {};
      siteData = structuredClone(defaultData);
      saveData(); renderAdmin(); renderNav(); renderPage(); toast("已恢复默认");
    }
  });
  $("#exportData").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(siteData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "jinbei-website-data.json"; a.click();
    URL.revokeObjectURL(url);
  });
  adminContent.addEventListener("input", e => {
    const el = e.target;
    if (el.dataset.array) siteData[el.dataset.array][Number(el.dataset.index)][el.dataset.field] = el.value;
    if (el.dataset.object) siteData[el.dataset.object][el.dataset.field] = el.value;
  });
  adminContent.addEventListener("change", e => {
    const el = e.target;
    if (el.dataset.imageUpload) {
      handleImageInput(el);
      return;
    }
    if (el.dataset.array) siteData[el.dataset.array][Number(el.dataset.index)][el.dataset.field] = el.value;
  });
  adminContent.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const i = Number(btn.dataset.index);
    if (action === "remove-image") {
      const oldRef = siteData[btn.dataset.array][i].image;
      siteData[btn.dataset.array][i].image = "";
      saveData(); deleteImageFromStoreRef(oldRef); renderAdmin(); renderPage(); toast("图片已删除");
      return;
    }
    if (action === "remove-section-image") {
      const oldRef = siteData.sectionImages[btn.dataset.key];
      siteData.sectionImages[btn.dataset.key] = "";
      saveData(); deleteImageFromStoreRef(oldRef); renderAdmin(); renderPage(); toast("模块图片已删除");
      return;
    }
    if (action === "add-slide") siteData.slides.push({ tag:"新轮播", title:"请输入轮播标题", desc:"请输入轮播描述", button:"查看详情", link:"business", image:"" });
    if (action === "delete-slide") siteData.slides.splice(i, 1);
    if (action === "add-service") siteData.services.push({ icon:"气", title:"新业务名称", desc:"请输入业务简介。", image:"" });
    if (action === "delete-service") siteData.services.splice(i, 1);
    if (action === "add-certificate") siteData.certificates.push({ title:"新证书名称", image:"" });
    if (action === "delete-certificate") {
      const oldRef = siteData.certificates[i]?.image;
      siteData.certificates.splice(i, 1);
      deleteImageFromStoreRef(oldRef);
    }
    if (action === "add-news") siteData.news.unshift({ date:new Date().toISOString().slice(0,10), type:"企业动态", title:"请输入新闻标题", desc:"请输入新闻摘要。" });
    if (action === "delete-news") siteData.news.splice(i, 1);
    renderAdmin();
  });
}

async function initSite() {
  await migrateInlineImagesToIndexedDB();
  await preloadStoredImages();
  updateCommonText();
  renderNav();
  bindEvents();
  route();
}

initSite().catch(() => {
  updateCommonText();
  renderNav();
  bindEvents();
  route();
  toast("图片仓库初始化失败，已进入兼容模式");
});
