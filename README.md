# Video Size (Obsidian)
### A plugin that lets you freely resize videos and save presets

Resize `<video>` right in Obsidian’s preview — fast, precise, and without any “jitter”. The plugin adds corner handles, size presets, and a couple of handy actions in the context menu.

![Resizing in action](https://github.com/user-attachments/assets/0ea12075-9975-4e12-8e40-d05bb53866ba)

---

## Features
- **Drag to resize** via four corner handles. Works in both **Reading View** and **Live Preview**.
- **Auto 16:9 container** — vertical clips are shown with side letterboxing (`object-fit: contain`), nothing gets squashed.
- **Size persistence** — every individual video embed in every note remembers its own width. The same file can have different sizes in different notes.
- **Smart restore after renaming** — if the file path changes, the saved width is matched by filename (basename).
- **Context menu (right-click the video)**  
  - **Presets**: 144, 320, 480, 640, 720, 960, 1280, 1920  
  - **Fit to container** (use available width)  
  - **Natural width** (`videoWidth`)  
  - **Add…** a custom preset (up to 5; each can be removed with `✖`)  
  - **Reveal in file explorer** — now you can open the file location via the right-click menu.
- **Media Extended plugin support**
- **No media “magic”** — only `<video>` is handled. Audio and images are ignored.

---

## Installation
1. In Obsidian, open **Settings → Community plugins → Browse**.
2. Search for **“Video Size”** and install.
3. Enable the plugin.

---

## How to use
1. Insert a video into a note (an embedded file from your vault).
2. Hover the video and drag a corner handle to resize.
3. Or right-click the video → **Presets** (choose a size, **Fit to container**, **Natural width**, or **Add…** your own).
4. Right-click → **Reveal in file explorer** to quickly open the file in Explorer/Finder.

---

## Where data is stored
The plugin uses Obsidian’s standard plugin storage:
- widths are saved per note/path in the plugin’s data file  
  `.<your-vault>/.obsidian/plugins/video-size/data.json`.

---

# 0.2.6 — Localization and new presets UX

## 🌐 Localization
The plugin now automatically follows the Obsidian interface language.  
Change the language in Obsidian settings and restart — all plugin labels (menus, modals, notifications) switch accordingly.

Translated strings include: **“Presets”**, **“Add”**, **“Fit to container”**, **“Natural width”**, **“Open file location”**, fields in the **Add preset** modal, notifications, etc.

**Supported languages:**
- **English** (default fallback)
- **Русский** (ru), 
- **Deutsch** (de), 
- **Polski** (pl), 
- **Español** (es), 
- **Français** (fr), 
- **Italiano** (it), 
- **Беларуская** (be)
- **Українська** (uk), 
- **o‘zbekcha** (uz), 
- **Tiếng Việt** (vi)
- **简体中文** (zh-CN), 
- **繁體中文** (zh-TW)

If your language isn’t supported yet, English is used automatically.

## 🧰 Preset interface
- The **delete** control moved onto the preset item itself: a small **✖** on the right that highlights on hover.
- When you delete a preset, it **disappears immediately** from the menu **without closing** the context menu.
- If it was the **last** user preset, the separating line is removed too.
- Adding presets and built-in preset sizes are unchanged.

## 🧩 Compatibility and more
- No changes to the data format — your presets remain intact.
- Requires **Obsidian 1.5.0+**.

---

## Contributing
Spotted a translation issue or want to add a new language? PRs are welcome!