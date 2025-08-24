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
var VideoTools = class extends import_obsidian.Plugin {
  async onload() {
    this.addCommand({
      id: "vt-set-size",
      name: "Set size for current video (line under cursor)",
      callback: async () => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (!view) {
          new import_obsidian.Notice("\u041E\u0442\u043A\u0440\u043E\u0439 \u0437\u0430\u043C\u0435\u0442\u043A\u0443 Markdown");
          return;
        }
        const value = await prompt(
          this.app,
          "\u0428\u0438\u0440\u0438\u043D\u0430 (px) \u0438\u043B\u0438 W\xD7H. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E H = W \xD7 9/16",
          "1280"
        );
        if (!value) return;
        const parsed = parseSize(value);
        if (!parsed) {
          new import_obsidian.Notice("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442. \u041F\u0440\u0438\u043C\u0435\u0440: 1280 \u0438\u043B\u0438 1280x720");
          return;
        }
        const { w, h } = parsed;
        const editor = view.editor;
        const lineNo = editor.getCursor().line;
        const line = editor.getLine(lineNo);
        const rxMd = /!\[\[([^\]\|]+?)(?:\|([0-9]+)(?:\s*[x×]\s*([0-9]+))?)?\]\]/;
        if (rxMd.test(line)) {
          const out = line.replace(rxMd, (_m, p1) => `![[${p1}|${w}x${h}]]`);
          editor.setLine(lineNo, out);
          applyWidthToPreview(view, String(w), String(h), String(line.match(rxMd)[1]));
          new import_obsidian.Notice(`\u0420\u0430\u0437\u043C\u0435\u0440 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D: ${w}\xD7${h}`);
          return;
        }
        const rxHtml = /<video\b([^>]*)>/i;
        if (rxHtml.test(line)) {
          let attrs = RegExp.$1;
          attrs = upsertAttr(attrs, "width", String(w));
          attrs = upsertAttr(attrs, "height", String(h));
          const out = line.replace(rxHtml, `<video${attrs}>`);
          editor.setLine(lineNo, out);
          new import_obsidian.Notice(`\u0420\u0430\u0437\u043C\u0435\u0440 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0434\u043B\u044F <video>: ${w}\xD7${h}`);
          return;
        }
        for (let i = -3; i <= 3; i++) {
          if (i === 0) continue;
          const l = lineNo + i;
          if (l < 0 || l > editor.lastLine()) continue;
          let s = editor.getLine(l);
          if (rxMd.test(s)) {
            const file = String(s.match(rxMd)[1]);
            s = s.replace(rxMd, (_m, p1) => `![[${p1}|${w}x${h}]]`);
            editor.setLine(l, s);
            applyWidthToPreview(view, String(w), String(h), file);
            new import_obsidian.Notice(`\u0420\u0430\u0437\u043C\u0435\u0440 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D: ${w}\xD7${h} (\u0441\u0442\u0440\u043E\u043A\u0430 ${l + 1})`);
            return;
          }
          if (rxHtml.test(s)) {
            let attrs = RegExp.$1;
            attrs = upsertAttr(attrs, "width", String(w));
            attrs = upsertAttr(attrs, "height", String(h));
            const out = s.replace(rxHtml, `<video${attrs}>`);
            editor.setLine(l, out);
            new import_obsidian.Notice(`\u0420\u0430\u0437\u043C\u0435\u0440 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0434\u043B\u044F <video> (\u0441\u0442\u0440\u043E\u043A\u0430 ${l + 1})`);
            return;
          }
        }
        new import_obsidian.Notice("\u041D\u0435 \u043D\u0430\u0448\u0451\u043B \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u043D\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u043E\u043A\u0435.");
      }
    });
  }
};
function parseSize(input) {
  const s = input.trim().toLowerCase().replace(/×/g, "x");
  const m = s.match(/^(\d+)\s*x\s*(\d+)$/);
  if (m) {
    const w2 = parseInt(m[1], 10);
    const h2 = parseInt(m[2], 10);
    if (!w2 || !h2) return null;
    return { w: w2, h: h2 };
  }
  const w = parseInt(s, 10);
  if (!isFinite(w) || !w) return null;
  const h = Math.round(w * 9 / 16);
  return { w, h };
}
function upsertAttr(attrs, name, value) {
  const rx = new RegExp(`\\b${name}\\s*=\\s*("[^"]*"|'[^']*'|\\S+)`, "i");
  if (rx.test(attrs)) {
    return attrs.replace(rx, `${name}="${value}"`);
  }
  return `${attrs} ${name}="${value}"`;
}
function applyWidthToPreview(view, w, h, fileBasename) {
  try {
    const root = view.containerEl;
    const all = root.querySelectorAll(".internal-embed.is-loaded");
    all.forEach((div) => {
      const src = div.getAttribute("src") || "";
      if (!src.toLowerCase().endsWith(fileBasename.toLowerCase())) return;
      div.style.width = `${w}px`;
      const player = div.querySelector("video, .plyr, .mx-media-embed, .media-embed");
      if (player) {
        player.style.maxWidth = "100%";
        player.style.width = "100%";
        player.style.height = "100%";
      }
    });
  } catch {
  }
}
var PromptModal = class extends import_obsidian.Modal {
  resolve;
  value = "";
  placeholder = "";
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    const wrapper = contentEl.createDiv({ cls: "vt-prompt" });
    const label = wrapper.createEl("div", { text: this.title ?? "" });
    label.style.marginBottom = "8px";
    const input = wrapper.createEl("input", { type: "text" });
    input.value = this.value;
    input.placeholder = this.placeholder;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.resolve(input.value.trim() || null);
        this.close();
      }
      if (e.key === "Escape") {
        this.resolve(null);
        this.close();
      }
    });
    const btns = wrapper.createDiv({ cls: "vt-row" });
    const ok = btns.createEl("button", { text: "OK" });
    ok.onclick = () => {
      this.resolve(input.value.trim() || null);
      this.close();
    };
    const cancel = btns.createEl("button", { text: "\u041E\u0442\u043C\u0435\u043D\u0430" });
    cancel.onclick = () => {
      this.resolve(null);
      this.close();
    };
    setTimeout(() => input.focus(), 10);
  }
};
function prompt(app, title, placeholder = "") {
  return new Promise((resolve) => {
    const m = new PromptModal(app);
    m.title = title;
    m.placeholder = placeholder;
    m.resolve = resolve;
    m.open();
  });
}
