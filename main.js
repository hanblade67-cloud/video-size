var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => VideoTools
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var WidthPresetModal = class extends import_obsidian.Modal {
  onSubmit;
  constructor(app, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h3", { text: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0441\u0435\u0442 \u0448\u0438\u0440\u0438\u043D\u044B (px)" });
    let val = "";
    const input = contentEl.createEl("input", { type: "number", placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 1110", attr: { min: "64", max: "8192", step: "1" } });
    input.style.width = "300px";
    input.style.maxWidth = "100%";
    input.style.minWidth = "280px";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.closeWithValue();
    });
    input.addEventListener("input", () => val = input.value);
    input.focus();
    const row = contentEl.createDiv({ cls: "modal-button-container" });
    const ok = row.createEl("button", { text: "\u041E\u041A" });
    const cancel = row.createEl("button", { text: "\u041E\u0442\u043C\u0435\u043D\u0430" });
    ok.addEventListener("click", () => this.closeWithValue());
    cancel.addEventListener("click", () => {
      this.onSubmit(null);
      this.close();
    });
    this.closeWithValue = () => {
      const n = Number.parseInt(val || input.value, 10);
      if (!Number.isFinite(n) || n < 64 || n > 8192) {
        new import_obsidian.Notice("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
        return;
      }
      this.onSubmit(n);
      this.close();
    };
  }
  onClose() {
    this.contentEl.empty();
  }
  closeWithValue;
};
var VideoTools = class extends import_obsidian.Plugin {
  store = {};
  userPresets = [];
  observers = [];
  STYLE_ID = "vt-inline-style";
  lastCtxEvt = null;
  async onload() {
    const persisted = await this.loadData() ?? {};
    if (persisted && typeof persisted === "object" && ("widths" in persisted || "userPresets" in persisted)) {
      const p = persisted;
      this.store = p.widths ?? {};
      this.userPresets = Array.isArray(p.userPresets) ? p.userPresets.slice(0, 5) : [];
    } else {
      this.store = persisted;
      this.userPresets = [];
    }
    this.injectCss();
    const ctxHandler = (e) => this.lastCtxEvt = e;
    document.addEventListener("contextmenu", ctxHandler, true);
    this.register(() => document.removeEventListener("contextmenu", ctxHandler, true));
    this.registerMarkdownPostProcessor((el, ctx) => {
      const notePath = ctx?.sourcePath || this.getActiveNote()?.path || "";
      this.processRoot(el, notePath);
    });
    this.app.workspace.onLayoutReady(() => this.scanActive());
    this.registerEvent(this.app.workspace.on("file-open", () => this.scanActive()));
    this.registerEvent(this.app.workspace.on("layout-change", () => this.scanActive()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.scanActive()));
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, _editor, view) => {
        const ev = this.lastCtxEvt;
        if (!ev) return;
        const target = ev.target;
        if (!target) return;
        const host = target.closest(".vt-host") || target.closest(".internal-embed, .media-embed, .mx-media-embed");
        if (!host) return;
        const v = host.querySelector("video");
        if (!v) return;
        const notePath = view?.file?.path ?? this.getActiveNote()?.path ?? "";
        const { src } = this.getSrcAndBase(host, v);
        const key = host.dataset.vtKey ?? this.makeEmbedKey(host, src, 0);
        menu.addSeparator();
        menu.addItem((i) => {
          i.setTitle("\u041F\u0440\u0435\u0441\u0435\u0442\u044B");
          const sub = i.setSubmenu();
          this.userPresets.forEach((val) => {
            sub.addItem(
              (si) => si.setTitle(String(val)).onClick(async () => {
                this.applyWidth(host, v, val);
                await this.saveWidth(notePath, key, val);
              })
            );
            sub.addItem(
              (si) => si.setTitle("\u0443\u0434\u0430\u043B\u0438\u0442\u044C " + val).setIcon("x").onClick(async () => {
                this.removeUserPreset(val);
                new import_obsidian.Notice(`\u0423\u0434\u0430\u043B\u0451\u043D \u043F\u0440\u0435\u0441\u0435\u0442 ${val}`);
              })
            );
          });
          if (this.userPresets.length) sub.addSeparator();
          sub.addItem(
            (si) => si.setTitle("\u041F\u043E\u0434\u043E\u0433\u043D\u0430\u0442\u044C \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440").onClick(async () => {
              const parent = host.parentElement ?? host;
              const pw = Math.round(parent.clientWidth || parent.getBoundingClientRect().width);
              this.applyWidth(host, v, pw);
              await this.saveWidth(notePath, key, pw);
            })
          );
          sub.addItem(
            (si) => si.setTitle("\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430").onClick(async () => {
              const apply = async (w) => {
                this.applyWidth(host, v, w);
                await this.saveWidth(notePath, key, w);
              };
              if (v.videoWidth > 0) return apply(v.videoWidth);
              v.addEventListener("loadedmetadata", () => apply(v.videoWidth), { once: true });
              try {
                v.load();
              } catch {
              }
            })
          );
          sub.addSeparator();
          [144, 320, 480, 640, 720, 960, 1280, 1920].forEach(
            (sz) => sub.addItem(
              (si) => si.setTitle(String(sz)).onClick(async () => {
                this.applyWidth(host, v, sz);
                await this.saveWidth(notePath, key, sz);
              })
            )
          );
          sub.addItem(
            (si) => si.setTitle("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\u2026").setIcon("plus").onClick(async () => {
              if (this.userPresets.length >= 5) return new import_obsidian.Notice("\u274C\u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E");
              new WidthPresetModal(this.app, async (n) => {
                if (n == null) return;
                this.addUserPreset(n);
                this.applyWidth(host, v, n);
                await this.saveWidth(notePath, key, n);
                new import_obsidian.Notice(`\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043F\u0440\u0435\u0441\u0435\u0442 ${n}`);
              }).open();
            })
          );
        });
        menu.addItem(
          (i) => i.setTitle("\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430").onClick(async () => {
            const tf = this.resolveTFile(notePath, src);
            if (!tf) return new import_obsidian.Notice("\u0424\u0430\u0439\u043B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u0432\u0430\u0443\u043B\u0442\u0435");
            const adapter = this.app.vault.adapter;
            if (adapter instanceof import_obsidian.FileSystemAdapter) {
              const full = adapter.getFullPath(tf.path);
              try {
                const shell = window.require?.("electron")?.shell;
                if (shell?.showItemInFolder) shell.showItemInFolder(full);
                else new import_obsidian.Notice("\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A shell");
              } catch {
                new import_obsidian.Notice("\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A shell");
              }
            } else new import_obsidian.Notice("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u0430\u0443\u043B\u0442\u043E\u0432");
          })
        );
      })
    );
    this.addCommand({ id: "vt-ping", name: "VT: ping", callback: () => new import_obsidian.Notice("VT: OK \u2014 plugin active") });
    const sb = this.addStatusBarItem();
    sb.setText("VT \u2022 ready");
    sb.setAttr("title", "VideoTools: click to reinit");
    sb.addEventListener("click", () => this.scanActive());
  }
  onunload() {
    this.observers.forEach((o) => o.disconnect());
    this.observers.length = 0;
    document.getElementById(this.STYLE_ID)?.remove();
  }
  scanActive() {
    this.disconnectObservers();
    const root = this.getActiveContainerEl();
    if (!root) return;
    const notePath = this.getActiveNote()?.path ?? "";
    this.processRoot(root, notePath);
    const mo = new MutationObserver(() => this.processRoot(root, notePath));
    mo.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "src"] });
    this.observers.push(mo);
  }
  disconnectObservers() {
    this.observers.forEach((o) => o.disconnect());
    this.observers.length = 0;
  }
  processRoot(rootEl, notePath) {
    const hosts = rootEl.querySelectorAll(
      ".internal-embed, .media-embed, .mx-media-embed, .markdown-reading-view video, .markdown-preview-view video, video"
    );
    let index = 0;
    hosts.forEach((hostLike) => {
      const host = hostLike.tagName.toLowerCase() === "video" ? hostLike.closest(".internal-embed, .media-embed, .mx-media-embed") ?? hostLike : hostLike;
      if (!(host instanceof HTMLElement)) return;
      if (this.containsTag(host, "img") || this.containsTag(host, "audio")) return;
      const v = host.querySelector("video");
      if (!v) return;
      if (host.dataset.vtInit === "1") return;
      host.dataset.vtInit = "1";
      host.classList.add("vt-host");
      const { src, base } = this.getSrcAndBase(host, v);
      const key = this.makeEmbedKey(host, src, index++);
      host.dataset.vtKey = key;
      const saved = this.loadWidthWithFallback(notePath, key, base);
      if (typeof saved === "number" && saved > 0) this.applyWidth(host, v, saved);
      else {
        const rect = host.getBoundingClientRect();
        if (rect.width) this.applyWidth(host, v, Math.round(rect.width));
      }
      const overlay = host.querySelector(".vt-overlay") ?? (() => {
        const d = document.createElement("div");
        d.className = "vt-overlay";
        host.appendChild(d);
        return d;
      })();
      const need = (cls) => overlay.querySelector(`.${cls.split(" ").join(".")}`) ?? (() => {
        const h = document.createElement("div");
        h.className = cls;
        overlay.appendChild(h);
        return h;
      })();
      const hRB = need("vt-handle vt-handle--rb");
      const hLB = need("vt-handle vt-handle--lb");
      const hRT = need("vt-handle vt-handle--rt");
      const hLT = need("vt-handle vt-handle--lt");
      const startDrag = (e, anchor, handle) => {
        e.preventDefault();
        e.stopPropagation();
        overlay.classList.add("--drag");
        document.body.classList.add("vt-noselect");
        const startX = e.clientX;
        const startW = host.getBoundingClientRect().width;
        const onMove = (ev) => {
          ev.preventDefault();
          const dx = ev.clientX - startX;
          let newW = anchor === "left" ? startW - dx : startW + dx;
          newW = Math.max(144, Math.min(newW, 4096));
          this.applyWidth(host, v, Math.round(newW));
        };
        const onUp = async () => {
          window.removeEventListener("pointermove", onMove, true);
          window.removeEventListener("pointerup", onUp, true);
          window.removeEventListener("mousemove", onMove, true);
          window.removeEventListener("mouseup", onUp, true);
          overlay.classList.remove("--drag");
          document.body.classList.remove("vt-noselect");
          const finalW = Math.round(host.getBoundingClientRect().width);
          await this.saveWidth(notePath, key, finalW);
        };
        const hasPointer = "pointerId" in e && typeof handle.setPointerCapture === "function";
        if (hasPointer) {
          handle.setPointerCapture(e.pointerId);
          window.addEventListener("pointermove", onMove, true);
          window.addEventListener("pointerup", onUp, true);
        } else {
          window.addEventListener("mousemove", onMove, true);
          window.addEventListener("mouseup", onUp, true);
        }
      };
      [hRB, hRT].forEach((h) => {
        h.addEventListener("pointerdown", (e) => startDrag(e, "right", h));
        h.addEventListener("mousedown", (e) => startDrag(e, "right", h));
      });
      [hLB, hLT].forEach((h) => {
        h.addEventListener("pointerdown", (e) => startDrag(e, "left", h));
        h.addEventListener("mousedown", (e) => startDrag(e, "left", h));
      });
    });
  }
  applyWidth(host, video, w) {
    host.style.width = `${w}px`;
    host.style.maxWidth = `${w}px`;
    host.style.aspectRatio = `16 / 9`;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.maxWidth = "100%";
    video.style.maxHeight = "100%";
    video.style.objectFit = "contain";
    video.style.objectPosition = "center center";
    video.style.display = "block";
    host.style.display = "block";
  }
  async saveWidth(notePath, key, width) {
    if (!notePath) return;
    if (!this.store[notePath]) this.store[notePath] = {};
    this.store[notePath][key] = width;
    await this.saveData({ widths: this.store, userPresets: this.userPresets });
  }
  addUserPreset(n) {
    this.userPresets = [n, ...this.userPresets.filter((v) => v !== n)].slice(0, 5);
    this.saveData({ widths: this.store, userPresets: this.userPresets });
  }
  removeUserPreset(n) {
    this.userPresets = this.userPresets.filter((v) => v !== n);
    this.saveData({ widths: this.store, userPresets: this.userPresets });
  }
  loadWidthWithFallback(notePath, key, basename) {
    const byKey = this.store[notePath]?.[key];
    if (typeof byKey === "number") return byKey;
    const dict = this.store[notePath] ?? {};
    for (const k of Object.keys(dict)) {
      const b = this.extractBaseFromKey(k);
      if (b && b === basename) {
        const w = dict[k];
        if (!this.store[notePath]) this.store[notePath] = {};
        this.store[notePath][key] = w;
        this.saveData({ widths: this.store, userPresets: this.userPresets });
        return w;
      }
    }
    return void 0;
  }
  extractBaseFromKey(key) {
    const parts = key.split("::");
    const fromSrc = parts.find((p) => p.includes("/")) ?? parts[0];
    const lastSlash = Math.max(fromSrc.lastIndexOf("/"), fromSrc.lastIndexOf("\\"));
    return fromSrc.substring(lastSlash + 1) || null;
  }
  getSrcAndBase(host, v) {
    const s = host.getAttribute("src") || host.getAttribute("alt") || v.getAttribute("src") || "";
    const lastSlash = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
    const base = s.substring(lastSlash + 1);
    return { src: s, base };
  }
  makeEmbedKey(host, src, index) {
    const cls = Array.from(host.classList).join(".");
    return `${cls}::${src ?? ""}::#${index}`;
  }
  resolveTFile(notePath, linkPath) {
    if (!linkPath) return null;
    return this.app.metadataCache.getFirstLinkpathDest(linkPath, notePath) ?? null;
  }
  getActiveNote() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    return view?.file ?? null;
  }
  getActiveContainerEl() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    return view?.containerEl ?? null;
  }
  containsTag(el, tag) {
    const t = tag.toLowerCase();
    if (el.tagName.toLowerCase() === t) return true;
    if (el.querySelector(t)) return true;
    if (tag === "audio") {
      if (el.classList?.contains("mod-audio")) return true;
      if (el.querySelector(".mod-audio")) return true;
    }
    return false;
  }
  injectCss() {
    if (document.getElementById(this.STYLE_ID)) return;
    const css = `
    .vt-host { position: relative; display:block; }
    .vt-overlay { position:absolute; inset:0; pointer-events:none; }
    .vt-overlay.--drag { pointer-events: all; cursor: ew-resize; }
    .vt-handle { position:absolute; width:12px; height:12px; border-radius:3px; background:var(--interactive-accent);
      box-shadow:0 0 0 2px rgba(0,0,0,.25); display:none; pointer-events:auto; cursor:ew-resize; z-index:30; touch-action:none; }
    .vt-host:hover .vt-handle { display:block; }
    .vt-handle--rb { right:-6px; bottom:-6px; }
    .vt-handle--lb { left:-6px; bottom:-6px; }
    .vt-handle--rt { right:-6px; top:-6px; }
    .vt-handle--lt { left:-6px; top:-6px; }
    .vt-noselect { user-select: none !important; }
    `;
    const style = document.createElement("style");
    style.id = this.STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }
};
