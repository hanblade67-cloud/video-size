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
var I18N = {
  en: {
    addPresetTitle: "Add width preset (px)",
    placeholder: "e.g. 820",
    ok: "OK",
    cancel: "Cancel",
    invalid: "Invalid value",
    presets: "Presets",
    fit: "Fit to container",
    natural: "Natural width",
    add: "Add\u2026",
    openLocation: "Reveal in file explorer",
    fileNotFound: "File not found in vault",
    shellDenied: "No access to shell",
    localOnly: "Only available for local vaults",
    maxReached: "Maximum number of presets reached",
    added: "Preset {n} added",
    removed: "Preset {n} removed",
    sbReady: "VT \u2022 ready",
    sbTitle: "Video Size: click to reinit",
    cmdPing: "Video Size: ping",
    pingOk: "VT: OK \u2014 plugin active"
  },
  ru: {
    addPresetTitle: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0441\u0435\u0442 \u0448\u0438\u0440\u0438\u043D\u044B (px)",
    placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: 820",
    ok: "\u041E\u041A",
    cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    invalid: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    presets: "\u041F\u0440\u0435\u0441\u0435\u0442\u044B",
    fit: "\u041F\u043E\u0434\u043E\u0433\u043D\u0430\u0442\u044C \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440",
    natural: "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430",
    add: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\u2026",
    openLocation: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430",
    fileNotFound: "\u0424\u0430\u0439\u043B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u0432\u0430\u0443\u043B\u0442\u0435",
    shellDenied: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A shell",
    localOnly: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u0430\u0443\u043B\u0442\u043E\u0432",
    maxReached: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0435\u0441\u0435\u0442\u043E\u0432",
    added: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    removed: "\u0423\u0434\u0430\u043B\u0451\u043D \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    sbReady: "VT \u2022 \u0433\u043E\u0442\u043E\u0432\u043E",
    sbTitle: "Video Size: \u043A\u043B\u0438\u043A \u2014 \u043F\u0435\u0440\u0435\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    cmdPing: "Video Size: ping",
    pingOk: "VT: OK \u2014 \u043F\u043B\u0430\u0433\u0438\u043D \u0430\u043A\u0442\u0438\u0432\u0435\u043D"
  },
  de: {
    addPresetTitle: "Breitenvorgabe hinzuf\xFCgen (px)",
    placeholder: "z. B. 820",
    ok: "OK",
    cancel: "Abbrechen",
    invalid: "Ung\xFCltiger Wert",
    presets: "Vorgaben",
    fit: "An Container anpassen",
    natural: "Nat\xFCrliche Breite",
    add: "Hinzuf\xFCgen\u2026",
    openLocation: "Im Dateimanager anzeigen",
    fileNotFound: "Datei nicht im Vault gefunden",
    shellDenied: "Kein Zugriff auf die Shell",
    localOnly: "Nur f\xFCr lokale Vaults verf\xFCgbar",
    maxReached: "Maximale Anzahl an Vorgaben erreicht",
    added: "Vorgabe {n} hinzugef\xFCgt",
    removed: "Vorgabe {n} entfernt",
    sbReady: "VT \u2022 bereit",
    sbTitle: "Video Size: klicken zum Neu-Scan",
    cmdPing: "Video Size: Ping",
    pingOk: "VT: OK \u2014 Plugin aktiv"
  },
  uk: {
    addPresetTitle: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0435\u0441\u0435\u0442 \u0448\u0438\u0440\u0438\u043D\u0438 (px)",
    placeholder: "\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: 820",
    ok: "\u041E\u041A",
    cancel: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
    invalid: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
    presets: "\u041F\u0440\u0435\u0441\u0435\u0442\u0438",
    fit: "\u041F\u0456\u0434\u0456\u0433\u043D\u0430\u0442\u0438 \u043F\u0456\u0434 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440",
    natural: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0430",
    add: "\u0414\u043E\u0434\u0430\u0442\u0438",
    openLocation: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0440\u043E\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0430",
    fileNotFound: "\u0424\u0430\u0439\u043B \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0443 \u0441\u0445\u043E\u0432\u0438\u0449\u0456",
    shellDenied: "\u041D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E shell",
    localOnly: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0445 \u0441\u0445\u043E\u0432\u0438\u0449",
    maxReached: "\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0457 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 \u043F\u0440\u0435\u0441\u0435\u0442\u0456\u0432",
    added: "\u0414\u043E\u0434\u0430\u043D\u043E \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    removed: "\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    sbReady: "VT: \u2713 \u0433\u043E\u0442\u043E\u0432\u043E",
    sbTitle: "Video Size: \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0441\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438",
    cmdPing: "Video Size: ping",
    pingOK: "VT: OK \u2014 \u043F\u043B\u0430\u0433\u0456\u043D \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439"
  },
  uz: {
    addPresetTitle: "Kenglik preseti qo\u2018shish (px)",
    placeholder: "masalan: 820",
    ok: "OK",
    cancel: "Bekor qilish",
    invalid: "Noto\u2018g\u2018ri qiymat",
    presets: "Presetlar",
    fit: "Konteynerga moslashtirish",
    natural: "Tabiiy kenglik",
    add: "Qo\u2018shish",
    openLocation: "Fayl joylashuvini ochish",
    fileNotFound: "Fayl vault ichida topilmadi",
    shellDenied: "Shell\u2019ga ruxsat yo\u2018q",
    localOnly: "Faqat lokal vaultlar uchun",
    maxReached: "Presetlar sonining maksimal miqdoriga yetildi",
    added: "{n} preseti qo\u2018shildi",
    removed: "{n} preseti o\u2018chirildi",
    sbReady: "VT: \u2713 tayyor",
    sbTitle: "Video Size: qayta skan qilish uchun bosing",
    cmdPing: "Video Size: ping",
    pingOK: "VT: OK \u2014 plagin faol"
  },
  vi: {
    addPresetTitle: "Th\xEAm preset chi\u1EC1u r\u1ED9ng (px)",
    placeholder: "v\xED d\u1EE5: 820",
    ok: "OK",
    cancel: "H\u1EE7y",
    invalid: "Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7",
    presets: "Preset",
    fit: "V\u1EEBa v\u1EDBi khung ch\u1EE9a",
    natural: "\u0110\u1ED9 r\u1ED9ng t\u1EF1 nhi\xEAn",
    add: "Th\xEAm",
    openLocation: "M\u1EDF v\u1ECB tr\xED t\u1EC7p",
    fileNotFound: "Kh\xF4ng t\xECm th\u1EA5y t\u1EC7p trong vault",
    shellDenied: "Kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp shell",
    localOnly: "Ch\u1EC9 d\xF9ng cho vault c\u1EE5c b\u1ED9",
    maxReached: "\u0110\xE3 \u0111\u1EA1t s\u1ED1 l\u01B0\u1EE3ng preset t\u1ED1i \u0111a",
    added: "\u0110\xE3 th\xEAm preset {n}",
    removed: "\u0110\xE3 x\xF3a preset {n}",
    sbReady: "VT: \u2713 s\u1EB5n s\xE0ng",
    sbTitle: "Video Size: nh\u1EA5p \u0111\u1EC3 qu\xE9t l\u1EA1i",
    cmdPing: "Video Size: ping",
    pingOK: "VT: OK \u2014 plugin ho\u1EA1t \u0111\u1ED9ng"
  },
  "zh-cn": {
    addPresetTitle: "\u6DFB\u52A0\u5BBD\u5EA6\u9884\u8BBE\uFF08px\uFF09",
    placeholder: "\u4F8B\u5982\uFF1A820",
    ok: "\u786E\u5B9A",
    cancel: "\u53D6\u6D88",
    invalid: "\u65E0\u6548\u7684\u503C",
    presets: "\u9884\u8BBE",
    fit: "\u9002\u914D\u5BB9\u5668",
    natural: "\u539F\u59CB\u5BBD\u5EA6",
    add: "\u6DFB\u52A0",
    openLocation: "\u6253\u5F00\u6587\u4EF6\u4F4D\u7F6E",
    fileNotFound: "\u5728\u5E93\u4E2D\u672A\u627E\u5230\u8BE5\u6587\u4EF6",
    shellDenied: "\u6CA1\u6709 shell \u8BBF\u95EE\u6743\u9650",
    localOnly: "\u4EC5\u9002\u7528\u4E8E\u672C\u5730\u5E93",
    maxReached: "\u5DF2\u8FBE\u5230\u9884\u8BBE\u6570\u91CF\u4E0A\u9650",
    added: "\u5DF2\u6DFB\u52A0\u9884\u8BBE {n}",
    removed: "\u5DF2\u5220\u9664\u9884\u8BBE {n}",
    sbReady: "VT\uFF1A\u2713 \u5C31\u7EEA",
    sbTitle: "Video Size\uFF1A\u5355\u51FB\u4EE5\u91CD\u65B0\u626B\u63CF",
    cmdPing: "Video Size\uFF1Aping",
    pingOK: "VT\uFF1AOK \u2014 \u63D2\u4EF6\u5DF2\u542F\u7528"
  },
  "zh-tw": {
    addPresetTitle: "\u65B0\u589E\u5BEC\u5EA6\u9810\u8A2D\uFF08px\uFF09",
    placeholder: "\u4F8B\u5982\uFF1A820",
    ok: "\u78BA\u5B9A",
    cancel: "\u53D6\u6D88",
    invalid: "\u7121\u6548\u7684\u6578\u503C",
    presets: "\u9810\u8A2D",
    fit: "\u7B26\u5408\u5BB9\u5668",
    natural: "\u539F\u59CB\u5BEC\u5EA6",
    add: "\u65B0\u589E",
    openLocation: "\u958B\u555F\u6A94\u6848\u4F4D\u7F6E",
    fileNotFound: "\u5728\u8CC7\u6599\u5EAB\u4E2D\u627E\u4E0D\u5230\u6A94\u6848",
    shellDenied: "\u6C92\u6709 shell \u5B58\u53D6\u6B0A\u9650",
    localOnly: "\u50C5\u9069\u7528\u65BC\u672C\u6A5F\u8CC7\u6599\u5EAB",
    maxReached: "\u5DF2\u9054\u5230\u9810\u8A2D\u6578\u91CF\u4E0A\u9650",
    added: "\u5DF2\u65B0\u589E\u9810\u8A2D {n}",
    removed: "\u5DF2\u522A\u9664\u9810\u8A2D {n}",
    sbReady: "VT\uFF1A\u2713 \u5C31\u7DD2",
    sbTitle: "Video Size\uFF1A\u9EDE\u64CA\u4EE5\u91CD\u65B0\u6383\u63CF",
    cmdPing: "Video Size\uFF1Aping",
    pingOK: "VT\uFF1AOK \u2014 \u5916\u639B\u5DF2\u555F\u7528"
  },
  pl: {
    addPresetTitle: "Dodaj preset szeroko\u015Bci (px)",
    placeholder: "np.: 820",
    ok: "OK",
    cancel: "Anuluj",
    invalid: "Nieprawid\u0142owa warto\u015B\u0107",
    presets: "Presety",
    fit: "Dopasuj do kontenera",
    natural: "Naturalna szeroko\u015B\u0107",
    add: "Dodaj",
    openLocation: "Otw\xF3rz lokalizacj\u0119 pliku",
    fileNotFound: "Plik nie znaleziony w skarbcu",
    shellDenied: "Brak dost\u0119pu do pow\u0142oki",
    localOnly: "Dost\u0119pne tylko dla lokalnych skarbc\xF3w",
    maxReached: "Osi\u0105gni\u0119to maksymaln\u0105 liczb\u0119 preset\xF3w",
    added: "Dodano preset {n}",
    removed: "Usuni\u0119to preset {n}",
    sbReady: "VT: \u2713 gotowe",
    sbTitle: "Video Size: kliknij, aby przeskanowa\u0107 ponownie",
    cmdPing: "Video Size: ping",
    pingOK: "VT: OK \u2014 wtyczka aktywna"
  },
  es: {
    addPresetTitle: "A\xF1adir preset de ancho (px)",
    placeholder: "por ejemplo: 820",
    ok: "OK",
    cancel: "Cancelar",
    invalid: "Valor no v\xE1lido",
    presets: "Presets",
    fit: "Ajustar al contenedor",
    natural: "Ancho natural",
    add: "A\xF1adir",
    openLocation: "Abrir ubicaci\xF3n del archivo",
    fileNotFound: "Archivo no encontrado en el vault",
    shellDenied: "Sin permiso para el shell",
    localOnly: "Disponible solo para vaults locales",
    maxReached: "Se alcanz\xF3 el n\xFAmero m\xE1ximo de presets",
    added: "Se a\xF1adi\xF3 el preset {n}",
    removed: "Se elimin\xF3 el preset {n}",
    sbReady: "VT: \u2713 listo",
    sbTitle: "Video Size: haz clic para volver a escanear",
    cmdPing: "Video Size: ping",
    pingOK: "VT: OK \u2014 complemento activo"
  },
  fr: {
    addPresetTitle: "Ajouter un pr\xE9r\xE9glage de largeur (px)",
    placeholder: "ex. : 820",
    ok: "OK",
    cancel: "Annuler",
    invalid: "Valeur invalide",
    presets: "Pr\xE9r\xE9glages",
    fit: "Ajuster au conteneur",
    natural: "Largeur naturelle",
    add: "Ajouter",
    openLocation: "Ouvrir l\u2019emplacement du fichier",
    fileNotFound: "Fichier introuvable dans le coffre",
    shellDenied: "Acc\xE8s au shell refus\xE9",
    localOnly: "Disponible uniquement pour les coffres locaux",
    maxReached: "Nombre maximal de pr\xE9r\xE9glages atteint",
    added: "Pr\xE9r\xE9glage {n} ajout\xE9",
    removed: "Pr\xE9r\xE9glage {n} supprim\xE9",
    sbReady: "VT : \u2713 pr\xEAt",
    sbTitle: "Video Size : cliquer pour rescanner",
    cmdPing: "Video Size : ping",
    pingOK: "VT : OK \u2014 plugin actif"
  },
  it: {
    addPresetTitle: "Aggiungi preset larghezza (px)",
    placeholder: "es.: 820",
    ok: "OK",
    cancel: "Annulla",
    invalid: "Valore non valido",
    presets: "Preset",
    fit: "Adatta al contenitore",
    natural: "Larghezza naturale",
    add: "Aggiungi",
    openLocation: "Apri posizione del file",
    fileNotFound: "File non trovato nel vault",
    shellDenied: "Nessun accesso alla shell",
    localOnly: "Disponibile solo per vault locali",
    maxReached: "Numero massimo di preset raggiunto",
    added: "Preset {n} aggiunto",
    removed: "Preset {n} rimosso",
    sbReady: "VT: \u2713 pronto",
    sbTitle: "Video Size: clic per eseguire nuovamente la scansione",
    cmdPing: "Video Size: ping",
    pingOK: "VT: OK \u2014 plugin attivo"
  },
  be: {
    addPresetTitle: "\u0414\u0430\u0434\u0430\u0446\u044C \u043F\u0440\u044D\u0441\u0435\u0442 \u0448\u044B\u0440\u044B\u043D\u0456 (px)",
    placeholder: "\u043D\u0430\u043F\u0440\u044B\u043A\u043B\u0430\u0434: 820",
    ok: "OK",
    cancel: "\u0421\u043A\u0430\u0441\u0430\u0432\u0430\u0446\u044C",
    invalid: "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435",
    presets: "\u041F\u0440\u044D\u0441\u0435\u0442\u044B",
    fit: "\u041F\u0430\u0434\u0430\u0433\u043D\u0430\u0446\u044C \u043F\u0430\u0434 \u043A\u0430\u043D\u0442\u044D\u0439\u043D\u0435\u0440",
    natural: "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u044B\u0440\u044B\u043D\u044F",
    add: "\u0414\u0430\u0434\u0430\u0446\u044C",
    openLocation: "\u0410\u0434\u043A\u0440\u044B\u0446\u044C \u0440\u0430\u0437\u043C\u044F\u0448\u0447\u044D\u043D\u043D\u0435 \u0444\u0430\u0439\u043B\u0430",
    fileNotFound: "\u0424\u0430\u0439\u043B \u043D\u0435 \u0437\u043D\u043E\u0439\u0434\u0437\u0435\u043D\u044B \u045E \u0441\u0445\u043E\u0432\u0456\u0448\u0447\u044B",
    shellDenied: "\u041D\u044F\u043C\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u0430 shell",
    localOnly: "\u0414\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u0456 \u0434\u043B\u044F \u043B\u0430\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0445\u043E\u0432\u0456\u0448\u0447\u0430\u045E",
    maxReached: "\u0414\u0430\u0441\u044F\u0433\u043D\u0443\u0442\u0430 \u043C\u0430\u043A\u0441\u0456\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043B\u044C\u043A\u0430\u0441\u0446\u044C \u043F\u0440\u044D\u0441\u0435\u0442\u0430\u045E",
    added: "\u0414\u0430\u0434\u0430\u0434\u0437\u0435\u043D\u044B \u043F\u0440\u044D\u0441\u0435\u0442 {n}",
    removed: "\u0412\u044B\u0434\u0430\u043B\u0435\u043D\u044B \u043F\u0440\u044D\u0441\u0435\u0442 {n}",
    sbReady: "VT: \u2713 \u0433\u0430\u0442\u043E\u0432\u0430",
    sbTitle: "Video Size: \u043D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435, \u043A\u0430\u0431 \u043F\u0435\u0440\u0430\u0441\u043A\u0430\u043D\u0430\u0432\u0430\u0446\u044C",
    cmdPing: "Video Size: ping",
    pingOK: "VT: OK \u2014 \u0443\u0431\u0443\u0434\u043E\u0432\u0430 \u0430\u043A\u0442\u044B\u045E\u043D\u0430\u044F"
  }
};
function getLocale(app) {
  const raw = app?.i18n?.locale ?? app?.locale ?? app.vault?.getConfig?.("locale") ?? window.localStorage.getItem("language") ?? "en";
  return String(raw).toLowerCase();
}
function t(app, key, vars) {
  const loc = getLocale(app);
  const dict = I18N[loc] ?? I18N[loc.split("-")[0]] ?? I18N.en;
  let s = dict[key] ?? I18N.en[key];
  if (vars) for (const k in vars) s = s.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
  return s;
}
var WidthPresetModal = class extends import_obsidian.Modal {
  onSubmit;
  constructor(app, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h3", { text: t(this.app, "addPresetTitle") });
    let val = "";
    const input = contentEl.createEl("input", {
      type: "number",
      placeholder: t(this.app, "placeholder"),
      attr: { min: "64", max: "8192", step: "1" }
    });
    input.style.width = "300px";
    input.style.maxWidth = "100%";
    input.style.minWidth = "280px";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.closeWithValue();
    });
    input.addEventListener("input", () => val = input.value);
    input.focus();
    const row = contentEl.createDiv({ cls: "modal-button-container" });
    const ok = row.createEl("button", { text: t(this.app, "ok") });
    const cancel = row.createEl("button", { text: t(this.app, "cancel") });
    ok.addEventListener("click", () => this.closeWithValue());
    cancel.addEventListener("click", () => {
      this.onSubmit(null);
      this.close();
    });
    this.closeWithValue = () => {
      const n = Number.parseInt(val || input.value, 10);
      if (!Number.isFinite(n) || n < 64 || n > 8192) {
        new import_obsidian.Notice(t(this.app, "invalid"));
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
          i.setTitle(t(this.app, "presets"));
          const sub = i.setSubmenu();
          this.userPresets.forEach((val) => {
            sub.addItem((si) => {
              si.setTitle(String(val)).onClick(async () => {
                this.applyWidth(host, v, val);
                await this.saveWidth(notePath, key, val);
              });
              const root = si.dom;
              if (root) {
                root.classList.add("vt-preset-item");
                const btn = document.createElement("div");
                btn.className = "vt-preset-del";
                btn.addEventListener("mousedown", (e) => e.stopPropagation());
                btn.addEventListener("click", async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  this.removeUserPreset(val);
                  new import_obsidian.Notice(t(this.app, "removed", { n: val }));
                  root.remove();
                  const list = e.currentTarget.closest(".menu")?.querySelector(".menu-items") || root.parentElement;
                  if (list && !list.querySelector(".menu-item.vt-preset-item")) {
                    list.querySelectorAll(".menu-separator").forEach((sep) => sep.remove());
                  }
                });
                root.appendChild(btn);
              }
            });
          });
          if (this.userPresets.length) sub.addSeparator();
          sub.addItem(
            (si) => si.setTitle(t(this.app, "fit")).onClick(async () => {
              const parent = host.parentElement ?? host;
              const pw = Math.round(parent.clientWidth || parent.getBoundingClientRect().width);
              this.applyWidth(host, v, pw);
              await this.saveWidth(notePath, key, pw);
            })
          );
          sub.addItem(
            (si) => si.setTitle(t(this.app, "natural")).onClick(async () => {
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
            (si) => si.setTitle(t(this.app, "add")).setIcon("plus").onClick(async () => {
              if (this.userPresets.length >= 5) return new import_obsidian.Notice("\u274C " + t(this.app, "maxReached"));
              new WidthPresetModal(this.app, async (n) => {
                if (n == null) return;
                this.addUserPreset(n);
                this.applyWidth(host, v, n);
                await this.saveWidth(notePath, key, n);
                new import_obsidian.Notice(t(this.app, "added", { n }));
              }).open();
            })
          );
        });
        menu.addItem(
          (i) => i.setTitle(t(this.app, "openLocation")).onClick(async () => {
            const tf = this.resolveTFile(notePath, src);
            if (!tf) return new import_obsidian.Notice(t(this.app, "fileNotFound"));
            const adapter = this.app.vault.adapter;
            if (adapter instanceof import_obsidian.FileSystemAdapter) {
              const full = adapter.getFullPath(tf.path);
              try {
                const shell = window.require?.("electron")?.shell;
                if (shell?.showItemInFolder) shell.showItemInFolder(full);
                else new import_obsidian.Notice(t(this.app, "shellDenied"));
              } catch {
                new import_obsidian.Notice(t(this.app, "shellDenied"));
              }
            } else new import_obsidian.Notice(t(this.app, "localOnly"));
          })
        );
      })
    );
    this.addCommand({
      id: "vt-ping",
      name: t(this.app, "cmdPing"),
      callback: () => new import_obsidian.Notice(t(this.app, "pingOk"))
    });
    const sb = this.addStatusBarItem();
    sb.setText(t(this.app, "sbReady"));
    sb.setAttr("title", t(this.app, "sbTitle"));
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
    const tname = tag.toLowerCase();
    if (el.tagName.toLowerCase() === tname) return true;
    if (el.querySelector(tname)) return true;
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

    .menu .menu-item.vt-preset-item { position: relative; padding-right: 30px; }
    .menu .menu-item.vt-preset-item .vt-preset-del {
      position:absolute; right:6px; top:50%; transform:translateY(-50%);
      width:20px; height:20px; border-radius:6px; display:flex; align-items:center; justify-content:center;
      opacity:.6; pointer-events:auto; cursor:pointer;
    }
    .menu .menu-item.vt-preset-item .vt-preset-del:hover { opacity:1; background:var(--background-modifier-hover); }
    .menu .menu-item.vt-preset-item .vt-preset-del::before { content:"\xD7"; font-size:14px; line-height:1; }
    `;
    const style = document.createElement("style");
    style.id = this.STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }
};
