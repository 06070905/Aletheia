/* =========================================================
   梦间 · 字卡传讯
   ========================================================= */

"use strict";

/* ---------- Icons ---------- */

const ICON_PATHS = {
  back: '<path d="M15 18 9 12l6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  arrowUp: '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
  arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  send: '<path d="M21 3 10.5 13.5"/><path d="m21 3-7 18-3.5-7.5L3 10l18-7Z"/>',
  speak: '<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  trash: '<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  move: '<path d="M5 9h14M5 15h14"/><path d="m15 6 3 3-3 3"/><path d="m9 12 3 3-3 3"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="m3 3 18 18"/><path d="M10.6 6.1A10.8 10.8 0 0 1 12 6c6 0 9.5 6 9.5 6a16.9 16.9 0 0 1-2.2 2.8"/><path d="M6.5 6.5C3.9 8.4 2.5 12 2.5 12S6 18 12 18a9.8 9.8 0 0 0 4.2-.9"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 20h16"/>',
  upload: '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 20h16"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.7-4L3 10"/><path d="M3 5v5h5"/><path d="M4 13a8 8 0 0 0 14.7 4L21 14"/><path d="M21 19v-5h-5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  settings: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  cards: '<rect x="6" y="4" width="12" height="16" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h11"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  chat: '<path d="M20 11.5a8 8 0 0 1-8.5 8 9.4 9.4 0 0 1-4-1L3 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>',
  ledger: '<path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v18H7.5A2.5 2.5 0 0 1 5 18.5Z"/><path d="M5 6h14"/><path d="M9 10h6M9 14h4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  moments: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m6 18 4-4 3 3 2-2 3 3"/>',
  appearance: '<path d="M12 3a9 9 0 1 0 9 9c0-1.5-.4-3-1-4.2A6.5 6.5 0 0 1 12 3Z"/><path d="M17 3v3M15.5 4.5h3"/><path d="M7 15h.01M9 11h.01"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m21 15-5-5L5 20"/>',
  palette: '<path d="M12 3a9 9 0 0 0 0 18h1.5a1.8 1.8 0 0 0 1.4-3l-.2-.3a1.8 1.8 0 0 1 1.4-3H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z"/><circle cx="7.5" cy="10" r="1"/><circle cx="10" cy="6.8" r="1"/><circle cx="14.2" cy="6.8" r="1"/><circle cx="17" cy="10" r="1"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  transfer: '<path d="M4 8h14"/><path d="m15 5 3 3-3 3"/><path d="M20 16H6"/><path d="m9 13-3 3 3 3"/>',
  emoji: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9h.01M15 9h.01"/>',
  survey: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/><path d="m8 7 1 1 2-2"/>',
  continue: '<path d="M5 12h14"/><path d="m14 7 5 5-5 5"/>',
  quote: '<path d="M7 7H4v6h4v5H3V9a3 3 0 0 1 3-3h1Z"/><path d="M17 7h-3v6h4v5h-5V9a3 3 0 0 1 3-3h1Z"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  font: '<path d="M5 20 12 4l7 16"/><path d="M8 14h8"/>',
  bubble: '<path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L4 21l1.8-4.5A8.5 8.5 0 1 1 21 11.5Z"/>',
  receipt: '<path d="M5 3v18l3-2 4 2 4-2 3 2V3l-3 2-4-2-4 2-3-2Z"/><path d="M9 9h6M9 13h6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10"/><path d="M9 21v-7h6v7"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  sort: '<path d="M7 4v16M4 17l3 3 3-3"/><path d="M17 20V4M14 7l3-3 3 3"/>',
  filter: '<path d="M4 5h16l-6 7v6l-4 2v-8Z"/>',
  sparkle: '<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6Z"/><path d="M19 16v4M17 18h4"/>',
  reply: '<path d="M9 14 4 9l5-5"/><path d="M4 9h9a7 7 0 0 1 7 7v4"/>',
  wallet: '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2Z"/><path d="M16 10h5v5h-5a2.5 2.5 0 0 1 0-5Z"/><circle cx="17" cy="12.5" r=".6"/>',
  food: '<path d="M4 11h16a8 8 0 0 1-16 0Z"/><path d="M8 3v4M12 2v5M16 3v4"/><path d="M3 20h18"/>',
  entertainment: '<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
  study: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5Z"/><path d="M8 7h8M8 11h6"/>',
  transport: '<rect x="5" y="3" width="14" height="14" rx="4"/><path d="M5 10h14M9 17v3M15 17v3"/><circle cx="9" cy="13" r=".6"/><circle cx="15" cy="13" r=".6"/>',
  clothes: '<path d="M9 4 5 6 3 11l3 1v8h12v-8l3-1-2-5-4-2"/><path d="M9 4a3 3 0 0 0 6 0"/>',
  other: '<circle cx="12" cy="12" r="9"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>',
  today: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><circle cx="12" cy="15" r="2"/>',
  drag: '<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',
  select: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r=".8"/><circle cx="4" cy="12" r=".8"/><circle cx="4" cy="18" r=".8"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/>',
  inbox: '<path d="M4 4h16v16H4z"/><path d="M4 14h4l2 3h4l2-3h4"/>',
  sendMail: '<path d="M3 11 21 3l-8 18-2-8-8-2Z"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"/>',
};

function icon(name, size = 18) {
  const path = ICON_PATHS[name] || ICON_PATHS.other;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

/* ---------- App definitions ---------- */

const APP_DEFS = [
  { id: "cards", name: "字卡库", icon: "cards", tone: "paper" },
  { id: "appearance", name: "外观", icon: "appearance", tone: "mist" },
  { id: "chat", name: "微信", icon: "chat", tone: "ink", dot: true },
  { id: "mail", name: "邮箱", icon: "mail", tone: "rose" },
  { id: "ledger", name: "记账", icon: "ledger", tone: "paper" },
  { id: "calendar", name: "日历", icon: "calendar", tone: "stone" },
  { id: "moments", name: "朋友圈", icon: "moments", tone: "mist" },
  { id: "settings", name: "设置", icon: "settings", tone: "paper" },
];

const APP_MAP = Object.fromEntries(APP_DEFS.map((app) => [app.id, app]));

const MOODS = [
  { key: "bright", emoji: "☀️", label: "明亮" },
  { key: "calm", emoji: "☁️", label: "平静" },
  { key: "tired", emoji: "🌙", label: "疲惫" },
  { key: "low", emoji: "🌧️", label: "低落" },
  { key: "soft", emoji: "🫧", label: "心动" },
];

const CATEGORIES = [
  { key: "food", label: "饮食", icon: "food" },
  { key: "fun", label: "娱乐", icon: "entertainment" },
  { key: "study", label: "学习", icon: "study" },
  { key: "transport", label: "交通", icon: "transport" },
  { key: "clothes", label: "服装", icon: "clothes" },
  { key: "other", label: "其他", icon: "other" },
];

const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.key, c]));
const ACCENTS = ["#b57f88", "#8d9a8d", "#b19a67", "#8e8aa8", "#7f8c99", "#a86f6f"];
const SEPARATORS = [" · ", " / ", " — ", "，", "。", "…", " ~ ", " ﹒ "];
const STORAGE_KEY = "mengjian.dream.phone.v1";

/* ---------- Defaults ---------- */

function makeDefaultState() {
  const now = Date.now();
  const groups = [
    { id: "g_daily", name: "日常", blocked: false, order: 0 },
    { id: "g_miss", name: "想念", blocked: false, order: 1 },
    { id: "g_night", name: "夜谈", blocked: false, order: 2 },
  ];

  const cards = [
    ["g_daily", "text", "今天也好好吃饭了吗。"],
    ["g_daily", "text", "在想你，只有一点点。"],
    ["g_daily", "text", "刚刚看到一片很好看的云。"],
    ["g_daily", "text", "慢慢来，我在这里。"],
    ["g_miss", "text", "什么时候来见我？"],
    ["g_miss", "text", "今天也梦到你了。"],
    ["g_miss", "text", "有一点想你，不只是一点。"],
    ["g_miss", "text", "把今天不开心的事留给我。"],
    ["g_night", "text", "晚安，做个好梦。"],
    ["g_night", "text", "别熬夜。"],
    ["g_night", "text", "明天见。"],
    ["g_night", "text", "梦里也要记得我。"],
    ["g_daily", "emoji", "🌙"],
    ["g_daily", "emoji", "🫧"],
    ["g_daily", "emoji", "🤍"],
    ["g_miss", "emoji", "🌧️"],
    ["g_night", "emoji", "☕"],
    ["g_night", "emoji", "🐈‍⬛"],
    ["g_daily", "kaomoji", "( ˘ω˘ )"],
    ["g_daily", "kaomoji", "(*´▽`*)"],
    ["g_miss", "kaomoji", "(っ˘ω˘ς)"],
    ["g_night", "kaomoji", "ᵕ̈"],
  ].map(([groupId, type, text], index) => ({
    id: `c_default_${index}`,
    groupId,
    type,
    text,
    blocked: false,
    createdAt: now - (22 - index) * 86400000,
  }));

  return {
    version: 1,
    createdAt: now,
    profile: {
      userName: "我",
      partnerName: "沈昼",
      userAvatar: "",
      partnerAvatar: "",
    },
    appearance: {
      theme: "auto",
      fontSize: 15,
      accent: "#b57f88",
      uiFont: '"Songti SC", "STSong", "SimSun", "Noto Serif SC", serif',
      bubbleFont: "",
      fontUrl: "",
      homeBg: "",
      chatBg: "",
      bubbleStyle: "paper",
      bubbleCustom: false,
      bubbleMe: "#1c1b19",
      bubbleThem: "#fbfaf7",
      showPartnerName: true,
      showPartnerAvatar: true,
      showUserName: true,
      showUserAvatar: true,
      showTimestamps: false,
      showRead: true,
      readStyle: "text",
      readText: "已读",
    },
    home: {
      order: APP_DEFS.map((app) => app.id),
    },
    cards: {
      groups,
      cards,
    },
    chat: {
      messages: [
        {
          id: "m_welcome",
          sender: "partner",
          type: "text",
          text: "我在。",
          timestamp: now - 1000 * 60 * 18,
          read: true,
          quote: null,
        },
      ],
      pendingReply: null,
      nextProactiveAt: null,
    },
    settings: {
      replyDelayMin: 3,
      replyDelayMax: 9,
      replyCountMin: 1,
      replyCountMax: 3,
      quoteChance: 45,
      multiSentence: false,
      proactiveEnabled: false,
      proactiveMin: 25,
      proactiveMax: 70,
      quietEnabled: true,
      quietStart: "23:30",
      quietEnd: "07:30",
      transferEnabled: true,
      transferChance: 14,
      transferMin: 5.2,
      transferMax: 52,
      notify: false,
      typingText: "正在输入…",
    },
    mail: {
      letters: [],
      pending: [],
      nextProactiveAt: null,
      settings: {
        delayMin: 8,
        delayMax: 30,
        replyCountMin: 1,
        replyCountMax: 2,
        proactiveEnabled: false,
        proactiveMin: 180,
        proactiveMax: 480,
      },
    },
    ledger: {
      balance: 0,
      transactions: [],
    },
    calendar: {
      entries: {},
    },
    moments: {
      background: "",
      posts: [],
      pending: [],
    },
  };
}

/* ---------- State ---------- */

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(base, incoming) {
  if (Array.isArray(base)) {
    return Array.isArray(incoming) ? incoming : base;
  }
  if (isObject(base)) {
    const out = { ...base };
    if (isObject(incoming)) {
      for (const key of Object.keys(incoming)) {
        out[key] = key in base ? deepMerge(base[key], incoming[key]) : incoming[key];
      }
    }
    return out;
  }
  return incoming === undefined || incoming === null ? base : incoming;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return makeDefaultState();
    const parsed = JSON.parse(raw);
    return deepMerge(makeDefaultState(), parsed);
  } catch (error) {
    console.warn("Unable to read saved state", error);
    return makeDefaultState();
  }
}

let S = loadState();

const ui = {
  appStack: [],
  homeEditing: false,
  suppressOpen: false,
  typing: false,
  replyTimer: null,
  proactiveTimer: null,
  mailTimer: null,
  momentTimer: null,
  draft: "",
  quoteId: null,
  cardTab: "text",
  cardGroup: "all",
  cardSearch: "",
  cardSort: "new",
  cardSelectMode: false,
  selectedCards: new Set(),
  mailView: "list",
  mailOpenId: null,
  mailComposeSubject: "",
  calendarCursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  momentsReplyTo: null,
  introDone: false,
};

let homeDrag = null;

/* ---------- Utilities ---------- */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function uid(prefix = "id") {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randInt(min, max) {
  return Math.floor(rand(min, max + 1));
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function sample(list, count) {
  const copy = list.slice();
  const out = [];
  while (copy.length && out.length < count) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/\n/g, "&#10;");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function dateKey(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseDateKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatClock(date = new Date()) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatFullTime(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatDateDivider(timestamp) {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  if (dateKey(date) === dateKey(today)) return "今天";
  if (dateKey(date) === dateKey(yesterday)) return "昨天";
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatShortDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatRelative(timestamp) {
  const diff = Date.now() - timestamp;
  if (diff < 60 * 1000) return "刚刚";
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 60000)} 分钟前`;
  if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / 3600000)} 小时前`;
  return formatShortDate(timestamp);
}

function formatMoney(value) {
  return Number(value || 0).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function weekdayCN(date) {
  return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][date.getDay()];
}

function monthTitle(date) {
  return `${date.getFullYear()}年 ${date.getMonth() + 1}月`;
}

function normalizeText(text) {
  return String(text ?? "").replace(/\s+/g, " ").trim();
}

function hashString(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.split("").map((c) => c + c).join("") : value;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function shade(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const adjust = (channel) => clamp(Math.round(channel + (percent / 100) * 255), 0, 255);
  return `#${[adjust(r), adjust(g), adjust(b)].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

function contrastInk(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.58 ? "#1b1a18" : "#faf7f0";
}

function setRangeFill(input) {
  if (!input) return;
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const value = Number(input.value || 0);
  const progress = max === min ? 0 : ((value - min) / (max - min)) * 100;
  input.style.setProperty("--range-progress", `${progress}%`);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(S));
  } catch (error) {
    console.warn("Unable to save state", error);
    toast("存储空间不足");
  }
}

function commit() {
  saveState();
}

function avatarHTML(who, extraClass = "") {
  const isPartner = who === "partner";
  const name = isPartner ? S.profile.partnerName : S.profile.userName;
  const src = isPartner ? S.profile.partnerAvatar : S.profile.userAvatar;
  const initial = (name || "梦").trim().slice(-1) || "梦";
  const mono = isPartner ? "mono" : "";
  if (src) {
    return `<div class="avatar ${extraClass} ${mono}"><img src="${src}" alt=""></div>`;
  }
  return `<div class="avatar ${extraClass} ${mono}">${escapeHTML(initial)}</div>`;
}

function toast(message) {
  const host = $("#toastHost");
  if (!host) return;
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  host.appendChild(item);
  setTimeout(() => item.remove(), 2900);
}

function applyAppearance() {
  const appearance = S.appearance;
  const resolved = resolveTheme();
  const root = document.documentElement;
  root.dataset.theme = resolved;

  const accent = appearance.accent || "#b57f88";
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-ink", resolved === "dark" ? shade(accent, 22) : shade(accent, -26));
  root.style.setProperty("--accent-soft", rgba(accent, resolved === "dark" ? 0.16 : 0.13));
  root.style.setProperty("--fs", `${clamp(Number(appearance.fontSize) || 15, 12, 20)}px`);
  root.style.setProperty("--font-ui", appearance.uiFont || '"Songti SC", "STSong", "SimSun", serif');

  let bubbleFont = appearance.bubbleFont?.trim();
  if (!bubbleFont) bubbleFont = appearance.uiFont || '"Songti SC", "STSong", "SimSun", serif';
  if (appearance.fontUrl?.trim()) {
    bubbleFont = `"DreamCustom", ${bubbleFont}`;
  }
  root.style.setProperty("--font-bubble", bubbleFont);

  let fontStyle = document.getElementById("customFontStyle");
  if (appearance.fontUrl?.trim()) {
    if (!fontStyle) {
      fontStyle = document.createElement("style");
      fontStyle.id = "customFontStyle";
      document.head.appendChild(fontStyle);
    }
    fontStyle.textContent = `@font-face{font-family:"DreamCustom";src:url("${appearance.fontUrl.replace(/"/g, '\\"')}");font-display:swap;}`;
    root.style.setProperty("--font-ui", `"DreamCustom", ${appearance.uiFont || '"Songti SC", "STSong", "SimSun", serif'}`);
  } else if (fontStyle) {
    fontStyle.remove();
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", resolved === "dark" ? "#0d0d0e" : "#efede8");
}

function resolveTheme() {
  const theme = S.appearance.theme;
  if (theme === "dark") return "dark";
  if (theme === "light") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/* ---------- Home ---------- */

function greetingForHour(hour) {
  if (hour < 5) return "夜安";
  if (hour < 9) return "早安";
  if (hour < 12) return "上午好";
  if (hour < 14) return "午后好";
  if (hour < 18) return "下午好";
  if (hour < 22) return "晚上好";
  return "夜安";
}

function updateHomeInfo() {
  const now = new Date();
  const dateEl = $("#homeDate");
  const clockEl = $("#homeClock");
  const greetingEl = $("#homeGreeting");
  const profileEl = $("#homeProfile");
  const footerEl = $("#homeFooterMark");

  if (dateEl) {
    dateEl.textContent = `${now.getMonth() + 1}月${now.getDate()}日 · ${weekdayCN(now)}`;
  }
  if (clockEl) clockEl.textContent = formatClock(now);
  if (greetingEl) greetingEl.textContent = greetingForHour(now.getHours());
  if (footerEl) footerEl.textContent = (S.profile.partnerName || "M").trim().slice(0, 1) || "M";

  if (profileEl) {
    const showAvatar = S.appearance.showPartnerAvatar;
    const showName = S.appearance.showPartnerName;
    if (!showAvatar && !showName) {
      profileEl.innerHTML = "";
    } else {
      profileEl.innerHTML = `
        ${showAvatar ? avatarHTML("partner") : ""}
        ${showName ? `<span class="home-profile-name">${escapeHTML(S.profile.partnerName || "他")}</span>` : ""}
        <i class="home-profile-dot"></i>
      `;
    }
  }
}

function renderHome() {
  const grid = $("#appGrid");
  if (!grid) return;
  const order = S.home.order.filter((id) => APP_MAP[id]);
  for (const app of APP_DEFS) {
    if (!order.includes(app.id)) order.push(app.id);
  }
  S.home.order = order;

  grid.innerHTML = order.map((id) => {
    const app = APP_MAP[id];
    return `
      <button class="app-item tone-${app.tone}" data-appid="${app.id}" aria-label="${app.name}">
        <span class="app-icon">
          ${icon(app.icon, 30)}
          ${app.dot ? '<i class="icon-accent"></i>' : ""}
        </span>
        <span class="app-label">${app.name}</span>
      </button>
    `;
  }).join("");

  updateHomeInfo();

  const bg = $("#homeBg");
  if (bg) {
    if (S.appearance.homeBg) {
      bg.style.backgroundImage = `url("${S.appearance.homeBg}")`;
      bg.classList.add("has-image");
    } else {
      bg.style.backgroundImage = "";
      bg.classList.remove("has-image");
    }
  }

  updateHomeEditButton();
}

function updateHomeEditButton() {
  const button = $("#editHomeBtn");
  const home = $("#home");
  if (!button || !home) return;
  home.classList.toggle("editing", ui.homeEditing);
  button.innerHTML = ui.homeEditing ? icon("check", 17) : icon("grid", 17);
  button.setAttribute("aria-label", ui.homeEditing ? "完成整理" : "整理桌面");
}

function enterHomeEdit() {
  ui.homeEditing = true;
  updateHomeEditButton();
  if (navigator.vibrate) navigator.vibrate(12);
}

function exitHomeEdit() {
  ui.homeEditing = false;
  homeDrag = null;
  $$(".app-item.dragging, .app-item.drop-target").forEach((el) => {
    el.classList.remove("dragging", "drop-target");
  });
  updateHomeEditButton();
}

function bindHomeEvents() {
  const grid = $("#appGrid");
  const editButton = $("#editHomeBtn");
  if (!grid || !editButton) return;

  editButton.addEventListener("click", () => {
    if (ui.homeEditing) {
      exitHomeEdit();
      saveState();
    } else {
      enterHomeEdit();
    }
  });

  grid.addEventListener("click", (event) => {
    const item = event.target.closest(".app-item");
    if (!item) return;
    if (ui.homeEditing || ui.suppressOpen) return;
    openApp(item.dataset.appid);
  });

  grid.addEventListener("pointerdown", (event) => {
    const item = event.target.closest(".app-item");
    if (!item) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const state = {
      item,
      startX: event.clientX,
      startY: event.clientY,
      pointerId: event.pointerId,
      dragging: ui.homeEditing,
      moved: false,
      timer: null,
    };
    homeDrag = state;

    if (ui.homeEditing) {
      item.classList.add("dragging");
    } else {
      state.timer = setTimeout(() => {
        if (!homeDrag || homeDrag !== state) return;
        enterHomeEdit();
        state.dragging = true;
        state.moved = true;
        item.classList.add("dragging");
      }, 430);
    }

    window.addEventListener("pointermove", onHomePointerMove);
    window.addEventListener("pointerup", onHomePointerUp, { once: true });
    window.addEventListener("pointercancel", onHomePointerUp, { once: true });
  });
}

function onHomePointerMove(event) {
  if (!homeDrag) return;
  const state = homeDrag;
  const distance = Math.hypot(event.clientX - state.startX, event.clientY - state.startY);

  if (!state.dragging) {
    if (distance > 9 && state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }
    return;
  }

  state.moved = true;
  event.preventDefault();
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".app-item");
  if (!target || target === state.item) return;
  const grid = $("#appGrid");
  if (!grid) return;

  $$(".app-item.drop-target", grid).forEach((el) => el.classList.remove("drop-target"));
  target.classList.add("drop-target");

  const items = Array.from(grid.children);
  const from = items.indexOf(state.item);
  const to = items.indexOf(target);
  if (from < 0 || to < 0) return;
  if (from < to) {
    grid.insertBefore(state.item, target.nextSibling);
  } else {
    grid.insertBefore(state.item, target);
  }
}

function onHomePointerUp() {
  if (!homeDrag) return;
  const state = homeDrag;
  if (state.timer) clearTimeout(state.timer);
  state.item.classList.remove("dragging");
  $$(".app-item.drop-target").forEach((el) => el.classList.remove("drop-target"));

  if (state.moved) {
    ui.suppressOpen = true;
    setTimeout(() => {
      ui.suppressOpen = false;
    }, 320);
    const grid = $("#appGrid");
    if (grid) {
      S.home.order = Array.from(grid.children).map((el) => el.dataset.appid);
      saveState();
    }
  }

  homeDrag = null;
  window.removeEventListener("pointermove", onHomePointerMove);
}

/* ---------- Navigation ---------- */

function openApp(id, options = {}) {
  if (!APP_MAP[id]) return;
  if (!options.replace && ui.appStack[ui.appStack.length - 1] === id) return;
  if (options.replace) ui.appStack.pop();
  ui.appStack.push(id);
  if (id === "mail" && options.resetView !== false) {
    ui.mailView = "list";
    ui.mailOpenId = null;
  }
  renderApp();
  $("#appLayer")?.classList.add("active");
}

function backApp() {
  ui.appStack.pop();
  if (!ui.appStack.length) {
    $("#appLayer")?.classList.remove("active");
    setTimeout(() => {
      const layer = $("#appLayer");
      if (layer && !ui.appStack.length) layer.innerHTML = "";
    }, 520);
    renderHome();
    return;
  }
  renderApp();
}

function currentApp() {
  return ui.appStack[ui.appStack.length - 1] || null;
}

function refreshApp(id) {
  if (currentApp() === id) renderApp();
}

function renderApp() {
  const layer = $("#appLayer");
  const id = currentApp();
  if (!layer || !id) return;

  const renderers = {
    chat: renderChatApp,
    cards: renderCardApp,
    mail: renderMailApp,
    ledger: renderLedgerApp,
    calendar: renderCalendarApp,
    moments: renderMomentsApp,
    settings: renderSettingsApp,
    appearance: renderAppearanceApp,
  };

  layer.innerHTML = renderers[id] ? renderers[id]() : "";
  const app = layer.querySelector(".app");
  if (app) app.dataset.app = id;

  const backButton = layer.querySelector("[data-back]");
  if (backButton) backButton.addEventListener("click", backApp);

  bindCurrentApp(id);
}

function bindCurrentApp(id) {
  if (id === "chat") bindChatApp();
  if (id === "cards") bindCardApp();
  if (id === "mail") bindMailApp();
  if (id === "ledger") bindLedgerApp();
  if (id === "calendar") bindCalendarApp();
  if (id === "moments") bindMomentsApp();
  if (id === "settings") bindSettingsApp();
  if (id === "appearance") bindAppearanceApp();
}

/* ---------- Sheets ---------- */

function showSheet({ title = "", body = "", actions = "", className = "", onMount = null } = {}) {
  const host = $("#sheetHost");
  if (!host) return;
  host.innerHTML = `
    <div class="sheet-backdrop" data-sheet-close></div>
    <div class="sheet-panel ${className}" role="dialog" aria-modal="true">
      <div class="sheet-handle"></div>
      ${title ? `
        <div class="sheet-head">
          <div class="sheet-title">${title}</div>
          <button class="sheet-close" data-sheet-close aria-label="关闭">${icon("close", 15)}</button>
        </div>
      ` : ""}
      <div class="sheet-body">${body}</div>
      ${actions ? `<div class="sheet-actions">${actions}</div>` : ""}
    </div>
  `;
  host.hidden = false;
  requestAnimationFrame(() => host.classList.add("open"));
  host.querySelectorAll("[data-sheet-close]").forEach((el) => {
    el.addEventListener("click", closeSheet);
  });
  if (onMount) onMount(host);
  return host;
}

function closeSheet() {
  const host = $("#sheetHost");
  if (!host || host.hidden) return;
  host.classList.remove("open");
  setTimeout(() => {
    host.hidden = true;
    host.innerHTML = "";
  }, 380);
}

function showConfirm(title, message, confirmLabel, onConfirm, danger = false) {
  showSheet({
    title,
    body: `<p class="muted" style="margin:0;font-size:13px;line-height:1.8;letter-spacing:.04em">${escapeHTML(message)}</p>`,
    actions: `
      <button class="btn ghost" data-sheet-close>取消</button>
      <button class="btn ${danger ? "danger" : "primary"}" id="confirmAction">${escapeHTML(confirmLabel)}</button>
    `,
    onMount(host) {
      host.querySelector("#confirmAction").addEventListener("click", () => {
        closeSheet();
        setTimeout(onConfirm, 60);
      });
    },
  });
}

/* ---------- File helpers ---------- */

function pickFile(accept, callback) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = accept;
  input.style.display = "none";
  document.body.appendChild(input);
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (file) callback(file);
    setTimeout(() => input.remove(), 500);
  });
  input.click();
}

function downloadFile(filename, content, type = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function readFileText(file, callback) {
  const reader = new FileReader();
  reader.onload = () => callback(String(reader.result || ""));
  reader.readAsText(file, "utf-8");
}

function readImageFile(file, callback, maxSize = 1600) {
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      const ratio = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * ratio));
      canvas.height = Math.max(1, Math.round(image.height * ratio));
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      try {
        callback(canvas.toDataURL("image/jpeg", 0.84));
      } catch (error) {
        toast("图片读取失败");
      }
    };
    image.onerror = () => toast("图片读取失败");
    image.src = String(reader.result);
  };
  reader.readAsDataURL(file);
}

/* ---------- Intro ---------- */

function startIntro() {
  const intro = $("#intro");
  const stars = $("#introStars");
  const line = $("#introLine");
  if (!intro) return;
  if (line) line.textContent = `${S.profile.partnerName || "他"} 正在靠近`;
  if (stars) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 52; i += 1) {
      const star = document.createElement("i");
      const size = rand(1, 2.6);
      star.style.left = `${rand(4, 96)}%`;
      star.style.top = `${rand(3, 88)}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${rand(0, 1.8)}s`;
      star.style.animationDuration = `${rand(1.8, 3.4)}s`;
      fragment.appendChild(star);
    }
    stars.appendChild(fragment);
  }

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    intro.classList.add("leaving");
    ui.introDone = true;
    setTimeout(() => {
      intro.style.display = "none";
    }, 900);
  };

  const timer = setTimeout(close, 3400);
  intro.addEventListener("click", () => {
    clearTimeout(timer);
    close();
  });
}

/* =========================================================
   Chat
   ========================================================= */

function availableCards() {
  const blockedGroups = new Set(S.cards.groups.filter((g) => g.blocked).map((g) => g.id));
  return S.cards.cards.filter((card) => !card.blocked && !blockedGroups.has(card.groupId) && normalizeText(card.text));
}

function groupName(groupId) {
  return S.cards.groups.find((group) => group.id === groupId)?.name || "未分组";
}

function markUserMessagesRead() {
  let changed = false;
  for (const message of S.chat.messages) {
    if (message.sender === "me" && !message.read) {
      message.read = true;
      changed = true;
    }
  }
  return changed;
}

function isQuietNow(timestamp = Date.now()) {
  if (!S.settings.quietEnabled) return false;
  const start = S.settings.quietStart || "23:30";
  const end = S.settings.quietEnd || "07:30";
  if (start === end) return false;
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);
  const startValue = startHour * 60 + startMinute;
  const endValue = endHour * 60 + endMinute;
  const date = new Date(timestamp);
  const value = date.getHours() * 60 + date.getMinutes();
  if (startValue < endValue) return value >= startValue && value < endValue;
  return value >= startValue || value < endValue;
}

function nextQuietEnd(timestamp = Date.now()) {
  const [hour, minute] = (S.settings.quietEnd || "07:30").split(":").map(Number);
  const date = new Date(timestamp);
  date.setHours(hour, minute, 0, 0);
  if (date.getTime() <= timestamp) date.setDate(date.getDate() + 1);
  return date.getTime();
}

function nextProactiveTimestamp() {
  const min = Math.max(1, Number(S.settings.proactiveMin) || 25);
  const max = Math.max(min, Number(S.settings.proactiveMax) || 70);
  return Date.now() + randInt(min * 60000, max * 60000);
}

function requestNotificationPermission() {
  if (!("Notification" in window)) {
    toast("当前浏览器不支持通知");
    return Promise.resolve(false);
  }
  if (Notification.permission === "granted") return Promise.resolve(true);
  if (Notification.permission === "denied") {
    toast("通知权限已被关闭");
    return Promise.resolve(false);
  }
  return Notification.requestPermission().then((permission) => permission === "granted");
}

function notifyPartner(message) {
  if (!S.settings.notify) return;
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  if (document.visibilityState === "visible" && currentApp() === "chat") return;
  let body = message.text || "";
  if (message.type === "transfer") body = `向你转账 ¥${formatMoney(message.amount)}`;
  if (message.type === "questionnaire") body = message.question;
  if (message.type === "q_answer") body = message.selected?.join("、") || "";
  try {
    const notification = new Notification(S.profile.partnerName || "他", {
      body: String(body).slice(0, 90),
      tag: `mengjian-${Date.now()}`,
      silent: false,
    });
    setTimeout(() => notification.close(), 6500);
  } catch (error) {
    console.warn("Notification failed", error);
  }
}

function renderReadMark(message) {
  if (!S.appearance.showRead || message.sender !== "me" || !message.read) return "";
  if (S.appearance.readStyle === "checks") {
    return `<span class="read-checks"><svg viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m1 8 4 4L13 3"/><path d="m9 10 2 2L21 3"/></svg></span>`;
  }
  if (S.appearance.readStyle === "dots") {
    return `<span class="read-dots"><i></i><i></i><i></i></span>`;
  }
  return `<span class="read-text">${escapeHTML(S.appearance.readText || "已读")}</span>`;
}

function quoteHTML(quote) {
  if (!quote) return "";
  return `
    <div class="quote">
      <span class="quote-label">${quote.sender === "me" ? escapeHTML(S.profile.userName || "我") : escapeHTML(S.profile.partnerName || "他")}</span>
      ${escapeHTML(quote.text)}
    </div>
  `;
}

function messageHTML(message) {
  const isMe = message.sender === "me";
  const showPartnerAvatar = S.appearance.showPartnerAvatar;
  const showUserAvatar = S.appearance.showUserAvatar;
  const avatar = isMe
    ? (showUserAvatar ? `<div class="msg-avatar">${avatarHTML("me", "sm")}</div>` : "")
    : (showPartnerAvatar ? `<div class="msg-avatar">${avatarHTML("partner", "sm")}</div>` : "");

  let content = "";
  if (message.type === "transfer") {
    const isPending = message.status === "pending";
    const statusText = message.status === "accepted" ? "已收款" : message.status === "returned" ? "已退回" : "待收款";
    content = `
      <div class="transfer-bubble" data-msgid="${message.id}">
        <div class="transfer-top">${icon("transfer", 15)}<span>${isMe ? "转给对方" : "对方转账"}</span></div>
        <div class="transfer-amount">¥ ${formatMoney(message.amount)}</div>
        ${message.note ? `<div class="transfer-note">${escapeHTML(message.note)}</div>` : ""}
        <div class="transfer-status">
          <span>${statusText}</span>
          ${!isMe && isPending ? `
            <div class="transfer-actions">
              <button data-transfer-return="${message.id}">退回</button>
              <button data-transfer-accept="${message.id}">收款</button>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  } else if (message.type === "questionnaire") {
    content = `
      <div class="question-card" data-msgid="${message.id}">
        <div class="question-kicker">问卷</div>
        <div class="question-title">${escapeHTML(message.question)}</div>
        <div class="question-options">
          ${(message.options || []).map((option) => `
            <div class="question-option ${message.multiple ? "multiple" : ""}">
              <span class="mark"></span>${escapeHTML(option)}
            </div>
          `).join("")}
        </div>
      </div>
    `;
  } else if (message.type === "q_answer") {
    content = `
      <div class="question-card" data-msgid="${message.id}">
        <div class="question-kicker">回答</div>
        <div class="question-title">${escapeHTML(message.question)}</div>
        <div class="question-options">
          ${(message.options || []).map((option) => {
            const selected = (message.selected || []).includes(option);
            return `
              <div class="question-option ${message.multiple ? "multiple" : ""} ${selected ? "selected" : ""}">
                <span class="mark"></span>${escapeHTML(option)}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  } else {
    content = `<div class="bubble" data-msgid="${message.id}">${quoteHTML(message.quote)}<span class="bubble-text">${escapeHTML(message.text)}</span></div>`;
  }

  const metaParts = [];
  if (S.appearance.showTimestamps) metaParts.push(`<span>${formatTime(message.timestamp)}</span>`);
  const readMark = renderReadMark(message);
  if (readMark) metaParts.push(readMark);
  const meta = metaParts.length ? `<div class="msg-meta">${metaParts.join("")}</div>` : "";

  return `
    <div class="msg-row ${isMe ? "me" : "them"}" data-rowid="${message.id}">
      ${avatar}
      <div class="msg-stack">
        ${content}
        ${meta}
      </div>
    </div>
  `;
}

function messagesHTML() {
  const list = [];
  let lastDate = "";
  for (const message of S.chat.messages) {
    const key = dateKey(new Date(message.timestamp));
    if (key !== lastDate) {
      list.push(`<div class="date-divider">${formatDateDivider(message.timestamp)}</div>`);
      lastDate = key;
    }
    list.push(messageHTML(message));
  }
  if (ui.typing) {
    list.push(`
      <div class="typing-row">
        ${S.appearance.showPartnerAvatar ? `<div class="msg-avatar">${avatarHTML("partner", "sm")}</div>` : ""}
        <div class="typing-bubble">
          <span>${escapeHTML(S.settings.typingText || "正在输入…")}</span>
          <span class="typing-dots"><i></i><i></i><i></i></span>
        </div>
      </div>
    `);
  }
  return list.join("");
}

function composerQuoteHTML() {
  if (!ui.quoteId) return "";
  const message = S.chat.messages.find((item) => item.id === ui.quoteId);
  if (!message) {
    ui.quoteId = null;
    return "";
  }
  return `
    <div class="composer-quote">
      ${icon("quote", 12)}
      <span>${escapeHTML(message.sender === "me" ? message.text : `${S.profile.partnerName || "他"}：${message.text}`)}</span>
      <button id="clearQuote" aria-label="取消引用">${icon("close", 12)}</button>
    </div>
  `;
}

function renderChatApp() {
  const partnerName = S.profile.partnerName || "他";
  const nameVisible = S.appearance.showPartnerName;
  const avatarVisible = S.appearance.showPartnerAvatar;
  const bubbleClass = `bubble-style-${S.appearance.bubbleStyle || "paper"}`;
  const customBubble = S.appearance.bubbleCustom
    ? `--bubble-me:${S.appearance.bubbleMe};--bubble-me-ink:${contrastInk(S.appearance.bubbleMe)};--bubble-them:${S.appearance.bubbleThem};--bubble-them-ink:${contrastInk(S.appearance.bubbleThem)};--bubble-them-line:${rgba(contrastInk(S.appearance.bubbleThem) === "#1b1a18" ? "#1b1a18" : "#ffffff", 0.09)};`
    : "";
  const bgStyle = S.appearance.chatBg ? `background-image:url("${escapeAttr(S.appearance.chatBg)}")` : "";

  return `
    <div class="app chat-app ${bubbleClass}" style="${customBubble}">
      <header class="app-header chat-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="chat-peer">
          ${avatarVisible ? avatarHTML("partner", "sm") : ""}
          <div class="chat-peer-meta">
            <div class="chat-peer-name">${nameVisible ? escapeHTML(partnerName) : "微信"}</div>
            <div class="chat-status">${ui.typing ? escapeHTML(S.settings.typingText || "正在输入…") : ""}</div>
          </div>
        </div>
        <button class="icon-btn" id="chatMenuBtn" aria-label="对话菜单">${icon("more", 19)}</button>
      </header>

      <div class="chat-body ${S.appearance.chatBg ? "has-image" : ""}">
        <div class="chat-bg" style="${bgStyle}"></div>
        <div class="message-list" id="messageList">${messagesHTML()}</div>
      </div>

      <div class="composer-wrap">
        ${composerQuoteHTML()}
        <div class="composer">
          <button class="plus-btn" id="chatPlusBtn" aria-label="更多功能">${icon("plus", 19)}</button>
          <div class="input-shell">
            <textarea id="chatInput" rows="1" placeholder="说点什么…">${escapeHTML(ui.draft)}</textarea>
          </div>
          <button class="send-btn ${ui.draft.trim() ? "ready" : ""}" id="chatSendBtn" aria-label="发送">${icon("send", 18)}</button>
          <button class="speak-btn ${ui.typing ? "typing" : ""}" id="chatSpeakBtn" aria-label="让对方说话">${icon("speak", 20)}</button>
        </div>
      </div>
    </div>
  `;
}

function bindChatApp() {
  const list = $("#messageList");
  if (list) {
    requestAnimationFrame(() => {
      list.scrollTop = list.scrollHeight;
    });
  }

  const input = $("#chatInput");
  const sendButton = $("#chatSendBtn");
  if (input) {
    input.addEventListener("input", () => {
      ui.draft = input.value;
      input.style.height = "auto";
      input.style.height = `${Math.min(input.scrollHeight, 96)}px`;
      sendButton?.classList.toggle("ready", Boolean(input.value.trim()));
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendUserText(input.value);
      }
    });
    requestAnimationFrame(() => {
      input.style.height = "auto";
      input.style.height = `${Math.min(input.scrollHeight, 96)}px`;
    });
  }

  sendButton?.addEventListener("click", () => sendUserText(input?.value || ""));
  $("#chatSpeakBtn")?.addEventListener("click", () => triggerPartnerReply("speak"));
  $("#chatPlusBtn")?.addEventListener("click", openPlusMenu);
  $("#chatMenuBtn")?.addEventListener("click", openChatMenu);
  $("#clearQuote")?.addEventListener("click", () => {
    ui.quoteId = null;
    refreshApp("chat");
  });

  $("#messageList")?.addEventListener("click", (event) => {
    if (event.target.closest("[data-transfer-accept]")) {
      resolveTransfer(event.target.closest("[data-transfer-accept]").dataset.transferAccept, "accept");
      return;
    }
    if (event.target.closest("[data-transfer-return]")) {
      resolveTransfer(event.target.closest("[data-transfer-return]").dataset.transferReturn, "return");
      return;
    }
    const row = event.target.closest("[data-rowid]");
    if (!row) return;
    if (event.target.closest("button")) return;
    const message = S.chat.messages.find((item) => item.id === row.dataset.rowid);
    if (message) openMessageActions(message);
  });
}

function sendUserText(raw) {
  const text = String(raw || "").trim();
  if (!text) return;
  let quote = null;
  if (ui.quoteId) {
    const target = S.chat.messages.find((message) => message.id === ui.quoteId);
    if (target && target.type === "text") {
      quote = { id: target.id, sender: target.sender, text: target.text };
    }
  }
  S.chat.messages.push({
    id: uid("m"),
    sender: "me",
    type: "text",
    text,
    timestamp: Date.now(),
    read: false,
    quote,
  });
  ui.draft = "";
  ui.quoteId = null;
  saveState();
  refreshApp("chat");
}

function appendPartnerMessage(message, options = {}) {
  const full = {
    id: uid("m"),
    sender: "partner",
    timestamp: Date.now(),
    read: true,
    quote: null,
    ...message,
  };
  S.chat.messages.push(full);
  markUserMessagesRead();
  saveState();
  refreshApp("chat");
  if (options.notify !== false) notifyPartner(full);
  return full;
}

function buildCardReply(pending = {}) {
  const pool = availableCards();
  const fallback = [{ text: "我在。", type: "text" }];
  const source = pool.length ? pool : fallback;
  const countMin = clamp(Number(S.settings.replyCountMin) || 1, 1, 8);
  const countMax = clamp(Number(S.settings.replyCountMax) || 3, countMin, 8);
  const requestedCount = pending.count || randInt(countMin, countMax);
  const chosen = sample(source, Math.min(Math.max(1, requestedCount), source.length));

  let quote = null;
  if (pending.quote !== false && Math.random() * 100 < (Number(S.settings.quoteChance) || 0)) {
    const mine = S.chat.messages.filter((message) => message.sender === "me" && message.type === "text" && normalizeText(message.text)).slice(-10);
    if (mine.length) {
      const target = pick(mine);
      quote = { id: target.id, sender: "me", text: target.text };
    }
  }

  const messages = [];
  if (S.settings.multiSentence && chosen.length > 1) {
    const text = chosen.map((card) => card.text.trim()).join(pick(SEPARATORS));
    messages.push({ type: "text", text, quote });
  } else {
    chosen.forEach((card, index) => {
      messages.push({ type: "text", text: card.text, quote: index === 0 ? quote : null });
    });
  }
  return messages;
}

function triggerPartnerReply(source = "speak", options = {}) {
  if (S.chat.pendingReply) {
    toast("对方正在输入");
    return;
  }
  if (!availableCards().length) {
    toast("字卡库还没有可用字卡");
    return;
  }
  const min = Math.max(0, Number(S.settings.replyDelayMin) || 3);
  const max = Math.max(min, Number(S.settings.replyDelayMax) || 9);
  const delay = options.delay ?? randInt(min * 1000, max * 1000);
  S.chat.pendingReply = {
    dueAt: Date.now() + delay,
    source,
    count: options.count || null,
    quote: options.quote !== false,
    transfer: options.transfer !== false,
  };
  ui.typing = true;
  saveState();
  refreshApp("chat");
  scheduleReplyTimer();
}

function scheduleReplyTimer() {
  clearTimeout(ui.replyTimer);
  const pending = S.chat.pendingReply;
  if (!pending) {
    ui.typing = false;
    return;
  }
  const wait = Math.max(0, pending.dueAt - Date.now());
  ui.replyTimer = setTimeout(deliverPendingReply, wait);
}

async function deliverPendingReply() {
  const pending = S.chat.pendingReply;
  if (!pending) return;
  S.chat.pendingReply = null;
  saveState();

  if (pending.source === "questionnaire") {
    ui.typing = false;
    refreshApp("chat");
    await deliverQuestionnaireAnswer(pending.questionnaireId);
    scheduleProactiveChat();
    return;
  }

  const replies = buildCardReply(pending);
  for (let index = 0; index < replies.length; index += 1) {
    if (index > 0) {
      ui.typing = true;
      refreshApp("chat");
      await sleep(randInt(650, 1200));
    }
    ui.typing = false;
    appendPartnerMessage(replies[index]);
    await sleep(randInt(380, 700));
  }

  if (pending.transfer !== false && S.settings.transferEnabled && Math.random() * 100 < (Number(S.settings.transferChance) || 0)) {
    await sleep(randInt(550, 1000));
    const min = Math.max(0.01, Number(S.settings.transferMin) || 5.2);
    const max = Math.max(min, Number(S.settings.transferMax) || 52);
    appendPartnerMessage({
      type: "transfer",
      amount: Number(rand(min, max).toFixed(2)),
      note: pick(["给自己买点喜欢的。", "今天也要开心。", "收下。", "请你喝一杯。", "不许退回来。"]),
      status: "pending",
    });
  }

  ui.typing = false;
  refreshApp("chat");

  if (pending.source === "proactive") {
    S.chat.nextProactiveAt = nextProactiveTimestamp();
    saveState();
  }
  scheduleProactiveChat();
}

function deliverQuestionnaireAnswer(questionnaireId) {
  const question = S.chat.messages.find((message) => message.id === questionnaireId);
  if (!question || question.type !== "questionnaire") return;
  const options = (question.options || []).filter(Boolean);
  if (!options.length) return;
  let selected = [];
  if (question.multiple) {
    const count = Math.min(options.length, randInt(2, Math.min(3, options.length)));
    selected = sample(options, count);
  } else {
    selected = [pick(options)];
  }
  question.answered = true;
  const message = appendPartnerMessage({
    type: "q_answer",
    question: question.question,
    options,
    selected,
    multiple: question.multiple,
  });
  return message;
}

function resolveTransfer(messageId, action) {
  const message = S.chat.messages.find((item) => item.id === messageId);
  if (!message || message.type !== "transfer" || message.sender !== "partner" || message.status !== "pending") return;
  message.status = action === "accept" ? "accepted" : "returned";
  saveState();
  refreshApp("chat");
  setTimeout(() => {
    triggerPartnerReply("transferChoice", {
      delay: randInt(1600, 3200),
      count: 1,
      quote: false,
      transfer: false,
    });
  }, 450);
}

function openMessageActions(message) {
  const time = formatFullTime(message.timestamp);
  const actions = [];
  if (message.type === "text") {
    actions.push(`<button class="action-item" data-action="quote">${icon("quote", 17)}引用回复</button>`);
    if (message.sender === "me") {
      actions.push(`<button class="action-item" data-action="card">${icon("cards", 17)}加入字卡库</button>`);
    }
  }
  actions.push(`<button class="action-item danger" data-action="delete">${icon("trash", 17)}删除消息</button>`);

  showSheet({
    title: "消息",
    body: `
      <div class="msg-time-chip">${escapeHTML(time)}</div>
      <div class="action-list">${actions.join("")}</div>
    `,
    onMount(host) {
      host.querySelector('[data-action="quote"]')?.addEventListener("click", () => {
        ui.quoteId = message.id;
        closeSheet();
        setTimeout(() => refreshApp("chat"), 60);
      });
      host.querySelector('[data-action="card"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => openAddCardSheet({
          text: message.text,
          type: "text",
          onSaved: () => toast("已加入字卡库"),
        }), 120);
      });
      host.querySelector('[data-action="delete"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => {
          showConfirm("删除消息", "这条消息会从对话里消失。", "删除", () => {
            S.chat.messages = S.chat.messages.filter((item) => item.id !== message.id);
            if (ui.quoteId === message.id) ui.quoteId = null;
            saveState();
            refreshApp("chat");
          }, true);
        }, 100);
      });
    },
  });
}

function openChatMenu() {
  showSheet({
    title: "对话",
    body: `
      <div class="action-list">
        <button class="action-item" data-action="settings">${icon("settings", 17)}聊天设置</button>
        <button class="action-item" data-action="cards">${icon("cards", 17)}字卡库</button>
        <button class="action-item danger" data-action="clear">${icon("trash", 17)}清空所有消息</button>
      </div>
    `,
    onMount(host) {
      host.querySelector('[data-action="settings"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => openApp("settings"), 80);
      });
      host.querySelector('[data-action="cards"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => openApp("cards"), 80);
      });
      host.querySelector('[data-action="clear"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => {
          showConfirm("清空所有消息", "对话会被全部清空，无法恢复。", "清空", () => {
            S.chat.messages = [];
            S.chat.pendingReply = null;
            ui.typing = false;
            ui.quoteId = null;
            clearTimeout(ui.replyTimer);
            saveState();
            refreshApp("chat");
          }, true);
        }, 100);
      });
    },
  });
}

function openPlusMenu() {
  showSheet({
    title: "更多",
    body: `
      <div class="plus-menu">
        <button class="plus-item" data-plus="transfer">${icon("transfer", 23)}转账</button>
        <button class="plus-item" data-plus="cards">${icon("cards", 23)}字卡库</button>
        <button class="plus-item" data-plus="emoji">${icon("emoji", 23)}表情包</button>
        <button class="plus-item accent" data-plus="continue">${icon("continue", 23)}继续说</button>
        <button class="plus-item" data-plus="survey">${icon("survey", 23)}问卷</button>
      </div>
    `,
    onMount(host) {
      host.querySelectorAll("[data-plus]").forEach((button) => {
        button.addEventListener("click", () => {
          const action = button.dataset.plus;
          closeSheet();
          setTimeout(() => {
            if (action === "transfer") openUserTransferSheet();
            if (action === "cards") openApp("cards");
            if (action === "emoji") openEmojiPicker();
            if (action === "continue") triggerPartnerReply("speak");
            if (action === "survey") openQuestionnaireSheet();
          }, 100);
        });
      });
    },
  });
}

function openEmojiPicker() {
  const emojis = availableCards().filter((card) => card.type === "emoji" || card.type === "kaomoji");
  if (!emojis.length) {
    toast("还没有表情字卡");
    return;
  }
  showSheet({
    title: "表情",
    body: `<div class="emoji-grid">${emojis.map((card) => `
      <button class="emoji-cell ${card.type === "kaomoji" ? "kao" : ""}" data-emoji="${card.id}">${escapeHTML(card.text)}</button>
    `).join("")}</div>`,
    onMount(host) {
      host.querySelectorAll("[data-emoji]").forEach((button) => {
        button.addEventListener("click", () => {
          const card = S.cards.cards.find((item) => item.id === button.dataset.emoji);
          closeSheet();
          if (card) setTimeout(() => sendUserText(card.text), 100);
        });
      });
    },
  });
}

function openUserTransferSheet() {
  showSheet({
    title: "转账",
    body: `
      <div class="field">
        <label class="field-label">金额</label>
        <input class="input" id="userTransferAmount" type="number" min="0.01" step="0.01" inputmode="decimal" placeholder="0.00">
      </div>
      <div class="field">
        <label class="field-label">备注</label>
        <input class="input" id="userTransferNote" type="text" maxlength="24" placeholder="想说的话">
      </div>
    `,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="sendUserTransfer">转过去</button>`,
    onMount(host) {
      host.querySelector("#sendUserTransfer").addEventListener("click", () => {
        const amount = Number(host.querySelector("#userTransferAmount").value);
        if (!amount || amount <= 0) {
          toast("输入一个金额");
          return;
        }
        const note = host.querySelector("#userTransferNote").value.trim();
        const message = {
          id: uid("m"),
          sender: "me",
          type: "transfer",
          amount: Number(amount.toFixed(2)),
          note,
          status: "pending",
          timestamp: Date.now(),
          read: false,
        };
        S.chat.messages.push(message);
        saveState();
        closeSheet();
        refreshApp("chat");
        setTimeout(() => {
          const target = S.chat.messages.find((item) => item.id === message.id);
          if (target) {
            target.status = "accepted";
            target.read = true;
            saveState();
            refreshApp("chat");
          }
          triggerPartnerReply("transferChoice", {
            delay: randInt(1800, 3200),
            count: 1,
            quote: false,
            transfer: false,
          });
        }, 1700);
      });
    },
  });
}

function openQuestionnaireSheet() {
  let multiple = false;
  const body = `
    <div class="field">
      <label class="field-label">问题</label>
      <input class="input" id="surveyQuestion" type="text" maxlength="80" placeholder="想问对方什么？">
    </div>
    <div class="field">
      <label class="field-label">选项</label>
      <div id="surveyOptions" style="display:flex;flex-direction:column;gap:8px">
        <div class="survey-option-row"><input class="input" type="text" maxlength="40" placeholder="选项一"><button class="survey-option-remove" aria-label="删除选项">${icon("close", 13)}</button></div>
        <div class="survey-option-row"><input class="input" type="text" maxlength="40" placeholder="选项二"><button class="survey-option-remove" aria-label="删除选项">${icon("close", 13)}</button></div>
      </div>
      <button class="btn sm ghost" id="surveyAddOption" style="align-self:flex-start">${icon("plus", 14)}添加选项</button>
    </div>
    <div class="field">
      <label class="field-label">选择方式</label>
      <div class="segmented" id="surveyType">
        <button class="active" data-survey-type="single">单选</button>
        <button data-survey-type="multiple">多选</button>
      </div>
    </div>
  `;

  showSheet({
    title: "问卷",
    body,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="sendSurvey">发送</button>`,
    onMount(host) {
      const optionsContainer = host.querySelector("#surveyOptions");
      const bindRemove = (row) => {
        row.querySelector(".survey-option-remove").addEventListener("click", () => {
          if (optionsContainer.children.length <= 2) {
            toast("至少保留两个选项");
            return;
          }
          row.remove();
        });
      };
      optionsContainer.querySelectorAll(".survey-option-row").forEach(bindRemove);

      host.querySelector("#surveyAddOption").addEventListener("click", () => {
        if (optionsContainer.children.length >= 10) {
          toast("最多十个选项");
          return;
        }
        const row = document.createElement("div");
        row.className = "survey-option-row";
        row.innerHTML = `<input class="input" type="text" maxlength="40" placeholder="新的选项"><button class="survey-option-remove" aria-label="删除选项">${icon("close", 13)}</button>`;
        optionsContainer.appendChild(row);
        bindRemove(row);
        row.querySelector("input").focus();
      });

      host.querySelectorAll("[data-survey-type]").forEach((button) => {
        button.addEventListener("click", () => {
          multiple = button.dataset.surveyType === "multiple";
          host.querySelectorAll("[data-survey-type]").forEach((item) => item.classList.toggle("active", item === button));
        });
      });

      host.querySelector("#sendSurvey").addEventListener("click", () => {
        if (S.chat.pendingReply) {
          toast("等对方说完这句");
          return;
        }
        const question = host.querySelector("#surveyQuestion").value.trim();
        const options = Array.from(optionsContainer.querySelectorAll("input"))
          .map((input) => input.value.trim())
          .filter(Boolean);
        const unique = Array.from(new Set(options));
        if (!question) {
          toast("先写下问题");
          return;
        }
        if (unique.length < 2) {
          toast("至少填两个选项");
          return;
        }
        const message = {
          id: uid("m"),
          sender: "me",
          type: "questionnaire",
          question,
          options: unique.slice(0, 10),
          multiple,
          answered: false,
          timestamp: Date.now(),
          read: false,
        };
        S.chat.messages.push(message);
        S.chat.pendingReply = {
          dueAt: Date.now() + randInt(2600, 5200),
          source: "questionnaire",
          questionnaireId: message.id,
        };
        ui.typing = true;
        saveState();
        closeSheet();
        refreshApp("chat");
        scheduleReplyTimer();
      });
    },
  });
}

/* =========================================================
   Card library
   ========================================================= */

const CARD_TYPES = {
  text: "字卡",
  emoji: "表情",
  kaomoji: "颜文字",
};

function ensureGroup(name) {
  const clean = normalizeText(name) || "未分组";
  let group = S.cards.groups.find((item) => item.name === clean);
  if (group) return group;
  const order = S.cards.groups.length ? Math.max(...S.cards.groups.map((item) => item.order || 0)) + 1 : 0;
  group = { id: uid("g"), name: clean, blocked: false, order };
  S.cards.groups.push(group);
  return group;
}

function addCardRecord({ text, type = "text", groupId }) {
  const clean = String(text || "").trim();
  if (!clean) return false;
  const duplicate = S.cards.cards.some((card) => card.type === type && normalizeText(card.text) === normalizeText(clean));
  if (duplicate) return false;
  const group = S.cards.groups.find((item) => item.id === groupId) || S.cards.groups[0] || ensureGroup("未分组");
  S.cards.cards.push({
    id: uid("c"),
    groupId: group.id,
    type,
    text: clean,
    blocked: false,
    createdAt: Date.now(),
  });
  return true;
}

function cardItemsHTML() {
  const query = normalizeText(ui.cardSearch).toLowerCase();
  const groupMap = Object.fromEntries(S.cards.groups.map((group) => [group.id, group]));
  const groupOrder = Object.fromEntries(S.cards.groups.map((group) => [group.id, group.order || 0]));

  let cards = S.cards.cards.filter((card) => card.type === ui.cardTab);
  if (ui.cardGroup !== "all") cards = cards.filter((card) => card.groupId === ui.cardGroup);
  if (query) {
    cards = cards.filter((card) => {
      const group = groupMap[card.groupId];
      return `${card.text} ${group?.name || ""}`.toLowerCase().includes(query);
    });
  }

  cards.sort((a, b) => {
    if (ui.cardSort === "old") return a.createdAt - b.createdAt;
    if (ui.cardSort === "group") {
      const diff = (groupOrder[a.groupId] || 0) - (groupOrder[b.groupId] || 0);
      return diff || b.createdAt - a.createdAt;
    }
    if (ui.cardSort === "text") return a.text.localeCompare(b.text, "zh-CN");
    return b.createdAt - a.createdAt;
  });

  if (!cards.length) {
    return `<div class="empty">${icon("cards", 34)}<p>${query ? "没有找到" : "还没有字卡"}</p></div>`;
  }

  return cards.map((card) => {
    const selected = ui.selectedCards.has(card.id);
    const group = groupMap[card.groupId];
    return `
      <div class="card-item ${selected ? "selected" : ""} ${card.blocked ? "blocked" : ""}" data-cardid="${card.id}">
        ${ui.cardSelectMode ? `<span class="card-check ${selected ? "on" : ""}">${icon("check", 12)}</span>` : ""}
        <div class="card-content">
          <div class="card-text ${card.type === "kaomoji" ? "kao" : ""} ${card.type === "emoji" ? "emoji" : ""}">${escapeHTML(card.text)}</div>
          <div class="card-meta">
            <span>${escapeHTML(group?.name || "未分组")}</span>
            <span>${formatShortDate(card.createdAt)}</span>
            ${card.blocked ? '<span class="blocked-mark">已屏蔽</span>' : ""}
          </div>
        </div>
        ${ui.cardSelectMode ? "" : `<button class="card-more" data-card-more="${card.id}" aria-label="字卡操作">${icon("more", 16)}</button>`}
      </div>
    `;
  }).join("");
}

function renderCardItemsOnly() {
  const container = $("#cardListWrap");
  if (!container) return;
  container.innerHTML = cardItemsHTML();
  updateBulkCount();
}

function updateBulkCount() {
  const count = $("#bulkCount");
  if (count) count.textContent = `已选 ${ui.selectedCards.size}`;
}

function renderCardApp() {
  const total = S.cards.cards.filter((card) => card.type === ui.cardTab).length;
  const groups = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  const groupChips = [
    `<button class="chip ${ui.cardGroup === "all" ? "active" : ""}" data-group="all">全部</button>`,
    ...groups.map((group) => `<button class="chip ${ui.cardGroup === group.id ? "active" : ""} ${group.blocked ? "blocked" : ""}" data-group="${group.id}">${escapeHTML(group.name)}</button>`),
  ].join("");

  return `
    <div class="app card-app">
      <header class="app-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main">
          <div class="app-title">字卡库</div>
        </div>
        <div class="header-actions">
          ${ui.cardSelectMode
            ? `<button class="btn sm" id="cardSelectAll">全选</button><button class="btn sm primary" id="cardDone">完成</button>`
            : `<button class="icon-btn filled" id="cardAddBtn" aria-label="添加字卡">${icon("plus", 19)}</button><button class="icon-btn" id="cardMoreBtn" aria-label="更多">${icon("more", 19)}</button>`}
        </div>
      </header>

      <div class="app-body">
        <div class="segmented card-tabs">
          ${Object.entries(CARD_TYPES).map(([key, label]) => `
            <button class="${ui.cardTab === key ? "active" : ""}" data-card-tab="${key}">${label}</button>
          `).join("")}
        </div>

        <div class="card-tools">
          <div class="search-shell">
            ${icon("search", 15)}
            <input id="cardSearch" type="text" placeholder="搜索" value="${escapeAttr(ui.cardSearch)}">
          </div>
          <button class="icon-btn filled" id="cardSortBtn" aria-label="排序">${icon("sort", 18)}</button>
        </div>

        <div class="chip-scroll card-groups">${groupChips}</div>

        <div class="card-scroll" id="cardScroll">
          <div class="card-list" id="cardListWrap">${cardItemsHTML()}</div>
        </div>

        ${ui.cardSelectMode ? `
          <div class="bulk-bar">
            <span class="bulk-count" id="bulkCount">已选 ${ui.selectedCards.size}</span>
            <button data-bulk="move">移动</button>
            <button data-bulk="block">屏蔽</button>
            <button data-bulk="delete">删除</button>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

function bindCardApp() {
  $("#cardAddBtn")?.addEventListener("click", () => {
    openAddCardSheet({
      type: ui.cardTab,
      groupId: ui.cardGroup !== "all" ? ui.cardGroup : undefined,
      onSaved: () => refreshApp("cards"),
    });
  });

  $("#cardMoreBtn")?.addEventListener("click", openCardMoreMenu);
  $("#cardSortBtn")?.addEventListener("click", openCardSortSheet);
  $("#cardDone")?.addEventListener("click", () => {
    ui.cardSelectMode = false;
    ui.selectedCards.clear();
    refreshApp("cards");
  });
  $("#cardSelectAll")?.addEventListener("click", () => {
    const ids = $$("[data-cardid]", $("#cardScroll")).map((el) => el.dataset.cardid);
    const allSelected = ids.length && ids.every((id) => ui.selectedCards.has(id));
    ids.forEach((id) => {
      if (allSelected) ui.selectedCards.delete(id);
      else ui.selectedCards.add(id);
    });
    renderCardItemsOnly();
    $$("[data-cardid]", $("#cardScroll")).forEach((el) => {
      el.classList.toggle("selected", ui.selectedCards.has(el.dataset.cardid));
      el.querySelector(".card-check")?.classList.toggle("on", ui.selectedCards.has(el.dataset.cardid));
    });
  });

  $("#cardSearch")?.addEventListener("input", (event) => {
    ui.cardSearch = event.target.value;
    renderCardItemsOnly();
  });

  $$("[data-card-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      ui.cardTab = button.dataset.cardTab;
      ui.cardGroup = "all";
      ui.selectedCards.clear();
      refreshApp("cards");
    });
  });

  $$("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      ui.cardGroup = button.dataset.group;
      ui.selectedCards.clear();
      refreshApp("cards");
    });
  });

  $("#cardScroll")?.addEventListener("click", (event) => {
    const more = event.target.closest("[data-card-more]");
    if (more) {
      const card = S.cards.cards.find((item) => item.id === more.dataset.cardMore);
      if (card) openCardActions(card);
      return;
    }
    const item = event.target.closest("[data-cardid]");
    if (!item) return;
    if (ui.cardSelectMode) {
      const id = item.dataset.cardid;
      if (ui.selectedCards.has(id)) ui.selectedCards.delete(id);
      else ui.selectedCards.add(id);
      item.classList.toggle("selected", ui.selectedCards.has(id));
      item.querySelector(".card-check")?.classList.toggle("on", ui.selectedCards.has(id));
      updateBulkCount();
    } else {
      const card = S.cards.cards.find((entry) => entry.id === item.dataset.cardid);
      if (card) openCardActions(card);
    }
  });

  $$("[data-bulk]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.bulk;
      const ids = Array.from(ui.selectedCards);
      if (!ids.length) {
        toast("先选择字卡");
        return;
      }
      if (action === "move") openGroupPicker("移动字卡", (groupId) => {
        S.cards.cards.forEach((card) => {
          if (ui.selectedCards.has(card.id)) card.groupId = groupId;
        });
        ui.selectedCards.clear();
        saveState();
        refreshApp("cards");
        toast("已移动");
      });
      if (action === "block") {
        S.cards.cards.forEach((card) => {
          if (ui.selectedCards.has(card.id)) card.blocked = true;
        });
        ui.selectedCards.clear();
        saveState();
        refreshApp("cards");
        toast("已屏蔽");
      }
      if (action === "delete") {
        showConfirm("删除字卡", `将删除 ${ids.length} 张字卡。`, "删除", () => {
          S.cards.cards = S.cards.cards.filter((card) => !ui.selectedCards.has(card.id));
          ui.selectedCards.clear();
          saveState();
          refreshApp("cards");
        }, true);
      }
    });
  });
}

function openAddCardSheet({ text = "", type = "text", groupId, onSaved = null } = {}) {
  const groups = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  const selectedGroup = groups.find((group) => group.id === groupId)?.id || groups[0]?.id || "";
  showSheet({
    title: "添加字卡",
    body: `
      <div class="segmented" id="addCardType">
        ${Object.entries(CARD_TYPES).map(([key, label]) => `<button class="${type === key ? "active" : ""}" data-add-type="${key}">${label}</button>`).join("")}
      </div>
      <div class="field">
        <label class="field-label">内容</label>
        <textarea class="textarea" id="addCardText" placeholder="写下一句话">${escapeHTML(text)}</textarea>
      </div>
      <div class="field">
        <label class="field-label">分组</label>
        <select class="select" id="addCardGroup">
          ${groups.map((group) => `<option value="${group.id}" ${group.id === selectedGroup ? "selected" : ""}>${escapeHTML(group.name)}</option>`).join("")}
        </select>
      </div>
    `,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="saveCard">保存</button>`,
    onMount(host) {
      let currentType = type;
      host.querySelectorAll("[data-add-type]").forEach((button) => {
        button.addEventListener("click", () => {
          currentType = button.dataset.addType;
          host.querySelectorAll("[data-add-type]").forEach((item) => item.classList.toggle("active", item === button));
          const field = host.querySelector("#addCardText");
          field.placeholder = currentType === "emoji" ? "输入一个表情" : currentType === "kaomoji" ? "输入一段颜文字" : "写下一句话";
        });
      });
      host.querySelector("#saveCard").addEventListener("click", () => {
        const value = host.querySelector("#addCardText").value.trim();
        if (!value) {
          toast("还没有内容");
          return;
        }
        const groupIdValue = host.querySelector("#addCardGroup").value;
        if (!addCardRecord({ text: value, type: currentType, groupId: groupIdValue })) {
          toast("已经有这张字卡了");
          return;
        }
        saveState();
        closeSheet();
        if (onSaved) onSaved();
        else toast("已加入字卡库");
      });
    },
  });
}

function openCardActions(card) {
  showSheet({
    title: "字卡",
    body: `<div class="soft-panel" style="font-size:13px;line-height:1.7;white-space:pre-wrap">${escapeHTML(card.text)}</div>
      <div class="action-list">
        <button class="action-item" data-action="move">${icon("folder", 17)}移动到分组</button>
        <button class="action-item" data-action="block">${icon(card.blocked ? "eye" : "ban", 17)}${card.blocked ? "取消屏蔽" : "屏蔽这张字卡"}</button>
        <button class="action-item danger" data-action="delete">${icon("trash", 17)}删除</button>
      </div>`,
    onMount(host) {
      host.querySelector('[data-action="move"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => openGroupPicker("移动到分组", (groupId) => {
          card.groupId = groupId;
          saveState();
          refreshApp("cards");
          toast("已移动");
        }), 120);
      });
      host.querySelector('[data-action="block"]')?.addEventListener("click", () => {
        card.blocked = !card.blocked;
        saveState();
        closeSheet();
        setTimeout(() => refreshApp("cards"), 80);
      });
      host.querySelector('[data-action="delete"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => {
          showConfirm("删除字卡", "这张字卡会从字卡库里消失。", "删除", () => {
            S.cards.cards = S.cards.cards.filter((item) => item.id !== card.id);
            saveState();
            refreshApp("cards");
          }, true);
        }, 100);
      });
    },
  });
}

function openGroupPicker(title, callback) {
  const groups = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  showSheet({
    title,
    body: `<div class="action-list">${groups.map((group) => `
      <button class="action-item" data-group-pick="${group.id}">${icon("folder", 17)}${escapeHTML(group.name)}<span class="action-meta">${S.cards.cards.filter((card) => card.groupId === group.id).length}</span></button>
    `).join("")}</div>`,
    onMount(host) {
      host.querySelectorAll("[data-group-pick]").forEach((button) => {
        button.addEventListener("click", () => {
          closeSheet();
          setTimeout(() => callback(button.dataset.groupPick), 100);
        });
      });
    },
  });
}

function openCardSortSheet() {
  const options = [
    ["new", "最近添加"],
    ["old", "最早添加"],
    ["group", "按分组"],
    ["text", "按内容"],
  ];
  showSheet({
    title: "排序",
    body: `<div class="action-list">${options.map(([key, label]) => `
      <button class="action-item" data-sort="${key}">${icon("sort", 17)}${label}${ui.cardSort === key ? `<span class="action-meta">${icon("check", 14)}</span>` : ""}</button>
    `).join("")}</div>`,
    onMount(host) {
      host.querySelectorAll("[data-sort]").forEach((button) => {
        button.addEventListener("click", () => {
          ui.cardSort = button.dataset.sort;
          closeSheet();
          setTimeout(() => refreshApp("cards"), 100);
        });
      });
    },
  });
}

function openCardMoreMenu() {
  showSheet({
    title: "字卡库",
    body: `<div class="action-list">
      <button class="action-item" data-action="select">${icon("select", 17)}批量管理</button>
      <button class="action-item" data-action="batch">${icon("plus", 17)}批量添加</button>
      <button class="action-item" data-action="import">${icon("upload", 17)}导入 TXT</button>
      <button class="action-item" data-action="export">${icon("download", 17)}导出 TXT</button>
      <button class="action-item" data-action="groups">${icon("folder", 17)}管理分组</button>
      <button class="action-item" data-action="dedupe">${icon("sparkle", 17)}自动去重</button>
    </div>`,
    onMount(host) {
      host.querySelector('[data-action="select"]')?.addEventListener("click", () => {
        closeSheet();
        ui.cardSelectMode = true;
        ui.selectedCards.clear();
        setTimeout(() => refreshApp("cards"), 80);
      });
      host.querySelector('[data-action="batch"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => openBatchAddSheet(), 100);
      });
      host.querySelector('[data-action="import"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(importCardsTXT, 100);
      });
      host.querySelector('[data-action="export"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(exportCardsTXT, 100);
      });
      host.querySelector('[data-action="groups"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(openGroupManager, 100);
      });
      host.querySelector('[data-action="dedupe"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(dedupeCards, 100);
      });
    },
  });
}

function openBatchAddSheet() {
  const groups = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  showSheet({
    title: "批量添加",
    body: `
      <div class="field">
        <label class="field-label">类型</label>
        <select class="select" id="batchType">
          ${Object.entries(CARD_TYPES).map(([key, label]) => `<option value="${key}" ${ui.cardTab === key ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label class="field-label">默认分组</label>
        <select class="select" id="batchGroup">
          ${groups.map((group) => `<option value="${group.id}">${escapeHTML(group.name)}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label class="field-label">内容</label>
        <textarea class="textarea tall" id="batchText" placeholder="【日常】&#10;今天也好好吃饭了吗。&#10;刚刚看到一片云。&#10;&#10;【想念】&#10;什么时候来见我？"></textarea>
      </div>
    `,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="saveBatch">添加</button>`,
    onMount(host) {
      host.querySelector("#saveBatch").addEventListener("click", () => {
        const text = host.querySelector("#batchText").value;
        const type = host.querySelector("#batchType").value;
        const defaultGroup = host.querySelector("#batchGroup").value;
        const count = parseBatchCards(text, type, defaultGroup);
        saveState();
        closeSheet();
        refreshApp("cards");
        toast(count ? `已添加 ${count} 张` : "没有新的字卡");
      });
    },
  });
}

function parseBatchCards(text, type, defaultGroupId) {
  let groupId = defaultGroupId;
  let count = 0;
  const lines = String(text || "").split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const groupMatch = line.match(/^【(.+)】$/) || line.match(/^\[(.+)\]$/);
    if (groupMatch) {
      groupId = ensureGroup(groupMatch[1]).id;
      continue;
    }
    if (addCardRecord({ text: line, type, groupId })) count += 1;
  }
  return count;
}

function importCardsTXT() {
  pickFile(".txt,text/plain", (file) => {
    readFileText(file, (text) => {
      let type = "text";
      let groupId = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0))[0]?.id;
      let count = 0;
      for (const raw of text.split(/\r?\n/)) {
        const line = raw.trim();
        if (!line) continue;
        const section = line.match(/^#\s*(字卡|表情|颜文字)$/);
        if (section) {
          type = section[1] === "表情" ? "emoji" : section[1] === "颜文字" ? "kaomoji" : "text";
          continue;
        }
        const groupMatch = line.match(/^【(.+)】$/) || line.match(/^\[(.+)\]$/);
        if (groupMatch) {
          groupId = ensureGroup(groupMatch[1]).id;
          continue;
        }
        if (addCardRecord({ text: line, type, groupId })) count += 1;
      }
      saveState();
      refreshApp("cards");
      toast(count ? `已导入 ${count} 张` : "没有新的字卡");
    });
  });
}

function exportCardsTXT() {
  const lines = [];
  const groups = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  for (const [type, label] of Object.entries(CARD_TYPES)) {
    lines.push(`# ${label}`);
    for (const group of groups) {
      const cards = S.cards.cards.filter((card) => card.type === type && card.groupId === group.id);
      if (!cards.length) continue;
      lines.push(`【${group.name}】`);
      cards.forEach((card) => lines.push(card.text));
      lines.push("");
    }
  }
  downloadFile(`字卡库-${dateKey()}.txt`, lines.join("\n"));
  toast("已导出");
}

function dedupeCards() {
  const seen = new Set();
  const before = S.cards.cards.length;
  S.cards.cards = S.cards.cards.filter((card) => {
    const key = `${card.type}::${normalizeText(card.text)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const removed = before - S.cards.cards.length;
  saveState();
  refreshApp("cards");
  toast(removed ? `去掉了 ${removed} 张重复字卡` : "没有重复字卡");
}

function openGroupManager() {
  const groups = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  showSheet({
    title: "分组",
    body: `
      <div class="soft-panel" style="padding:4px 12px">
        ${groups.length ? groups.map((group, index) => `
          <div class="group-row">
            <div class="group-row-main">
              <div class="group-row-name">${escapeHTML(group.name)}</div>
              <div class="group-row-count">${S.cards.cards.filter((card) => card.groupId === group.id).length}</div>
            </div>
            <div class="group-row-actions">
              <button data-group-up="${group.id}" ${index === 0 ? "disabled" : ""} aria-label="上移">${icon("arrowUp", 15)}</button>
              <button data-group-down="${group.id}" ${index === groups.length - 1 ? "disabled" : ""} aria-label="下移">${icon("arrowDown", 15)}</button>
              <button data-group-rename="${group.id}" aria-label="重命名">${icon("edit", 15)}</button>
              <button class="${group.blocked ? "blocked" : ""}" data-group-block="${group.id}" aria-label="屏蔽">${icon(group.blocked ? "eye" : "ban", 15)}</button>
              <button data-group-delete="${group.id}" aria-label="删除">${icon("trash", 15)}</button>
            </div>
          </div>
        `).join("") : '<div class="empty" style="min-height:90px"><p>还没有分组</p></div>'}
      </div>
      <div class="schedule-add" style="margin-top:4px">
        <input class="input" id="newGroupName" type="text" maxlength="16" placeholder="新的分组">
        <button class="btn sm primary" id="addGroupBtn">添加</button>
      </div>
    `,
    onMount(host) {
      host.querySelector("#addGroupBtn").addEventListener("click", () => {
        const input = host.querySelector("#newGroupName");
        const name = input.value.trim();
        if (!name) return;
        if (S.cards.groups.some((group) => group.name === name)) {
          toast("分组已存在");
          return;
        }
        ensureGroup(name);
        saveState();
        refreshApp("cards");
        openGroupManager();
      });

      host.querySelectorAll("[data-group-block]").forEach((button) => {
        button.addEventListener("click", () => {
          const group = S.cards.groups.find((item) => item.id === button.dataset.groupBlock);
          if (!group) return;
          group.blocked = !group.blocked;
          saveState();
          refreshApp("cards");
          openGroupManager();
        });
      });

      host.querySelectorAll("[data-group-rename]").forEach((button) => {
        button.addEventListener("click", () => {
          const group = S.cards.groups.find((item) => item.id === button.dataset.groupRename);
          if (!group) return;
          openGroupRename(group);
        });
      });

      host.querySelectorAll("[data-group-delete]").forEach((button) => {
        button.addEventListener("click", () => {
          const group = S.cards.groups.find((item) => item.id === button.dataset.groupDelete);
          if (!group) return;
          showConfirm("删除分组", "分组和里面的字卡会一起消失。", "删除", () => {
            S.cards.groups = S.cards.groups.filter((item) => item.id !== group.id);
            S.cards.cards = S.cards.cards.filter((card) => card.groupId !== group.id);
            saveState();
            refreshApp("cards");
            openGroupManager();
          }, true);
        });
      });

      host.querySelectorAll("[data-group-up], [data-group-down]").forEach((button) => {
        button.addEventListener("click", () => {
          const id = button.dataset.groupUp || button.dataset.groupDown;
          const direction = button.dataset.groupUp ? -1 : 1;
          const ordered = S.cards.groups.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
          const index = ordered.findIndex((group) => group.id === id);
          const swap = index + direction;
          if (index < 0 || swap < 0 || swap >= ordered.length) return;
          const current = ordered[index];
          const target = ordered[swap];
          const temp = current.order;
          current.order = target.order;
          target.order = temp;
          S.cards.groups.forEach((group, i) => {
            if (!Number.isFinite(group.order)) group.order = i;
          });
          saveState();
          refreshApp("cards");
          openGroupManager();
        });
      });
    },
  });
}

function openGroupRename(group) {
  showSheet({
    title: "重命名",
    body: `<div class="field"><label class="field-label">分组名称</label><input class="input" id="renameGroupInput" type="text" maxlength="16" value="${escapeAttr(group.name)}"></div>`,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="renameGroupBtn">保存</button>`,
    onMount(host) {
      host.querySelector("#renameGroupBtn").addEventListener("click", () => {
        const name = host.querySelector("#renameGroupInput").value.trim();
        if (!name) return;
        if (S.cards.groups.some((item) => item.id !== group.id && item.name === name)) {
          toast("分组已存在");
          return;
        }
        group.name = name;
        saveState();
        closeSheet();
        refreshApp("cards");
        setTimeout(openGroupManager, 100);
      });
    },
  });
}

/* =========================================================
   Shared toggle
   ========================================================= */

function bindToggle(button, initial, onChange) {
  if (!button) return;
  let value = Boolean(initial);
  const paint = () => {
    button.classList.toggle("on", value);
    button.setAttribute("aria-pressed", value ? "true" : "false");
  };
  paint();
  button.addEventListener("click", () => {
    value = !value;
    paint();
    onChange(value);
  });
}

/* =========================================================
   Mail
   ========================================================= */

function renderMailApp() {
  if (ui.mailView === "compose") return renderMailCompose();
  if (ui.mailView === "read") return renderMailRead();
  return renderMailList();
}

function renderMailList() {
  const letters = S.mail.letters.slice().sort((a, b) => b.createdAt - a.createdAt);
  const unread = letters.filter((letter) => letter.sender === "partner" && !letter.read).length;
  return `
    <div class="app mail-app">
      <header class="app-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">邮箱</div></div>
        <div class="header-actions">
          <button class="icon-btn" id="mailSettingsBtn" aria-label="信件设置">${icon("settings", 18)}</button>
          <button class="icon-btn filled" id="mailComposeBtn" aria-label="写信">${icon("edit", 18)}</button>
        </div>
      </header>
      <div class="app-body">
        <div class="mail-intro">
          <div class="mail-intro-title">见字如面</div>
          <div class="mail-intro-sub">${unread ? `${unread} 封未读` : "纸短情长"}</div>
        </div>
        ${letters.length ? `
          <div class="mail-list">
            ${letters.map((letter) => `
              <button class="mail-card ${letter.sender === "partner" && !letter.read ? "unread" : ""}" data-letter="${letter.id}">
                <div class="mail-card-top">
                  ${letter.sender === "partner" && !letter.read ? '<i class="mail-unread-dot"></i>' : ""}
                  <span class="mail-card-from">${letter.sender === "me" ? escapeHTML(S.profile.userName || "我") : escapeHTML(S.profile.partnerName || "他")}</span>
                  <span class="mail-card-date">${formatShortDate(letter.createdAt)}</span>
                </div>
                <div class="mail-card-subject">${escapeHTML(letter.subject || "无题")}</div>
                <div class="mail-card-excerpt">${escapeHTML(letter.body)}</div>
              </button>
            `).join("")}
          </div>
        ` : `<div class="empty">${icon("mail", 34)}<p>还没有信</p></div>`}
      </div>
    </div>
  `;
}

function renderMailRead() {
  const letter = S.mail.letters.find((item) => item.id === ui.mailOpenId);
  if (!letter) {
    ui.mailView = "list";
    return renderMailList();
  }
  return `
    <div class="app mail-app">
      <header class="app-header">
        <button class="icon-btn" id="mailBack" aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">信</div></div>
        <div class="header-actions">
          <button class="icon-btn" id="mailReplyBtn" aria-label="回信">${icon("reply", 18)}</button>
          <button class="icon-btn" id="mailDeleteBtn" aria-label="删除信件">${icon("trash", 18)}</button>
        </div>
      </header>
      <div class="app-body">
        <div class="letter-paper">
          <div class="letter-head">
            <div class="letter-subject">${escapeHTML(letter.subject || "无题")}</div>
            <div class="letter-meta">${letter.sender === "me" ? escapeHTML(S.profile.userName || "我") : escapeHTML(S.profile.partnerName || "他")} · ${formatFullTime(letter.createdAt)}</div>
          </div>
          <div class="letter-body">${escapeHTML(letter.body)}</div>
          <div class="letter-sign">${letter.sender === "me" ? "寄出" : "来信"}</div>
        </div>
      </div>
    </div>
  `;
}

function renderMailCompose() {
  return `
    <div class="app mail-app">
      <header class="app-header">
        <button class="icon-btn" id="mailBack" aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">写信</div></div>
      </header>
      <div class="app-body mail-compose">
        <div class="field">
          <label class="field-label">主题</label>
          <input class="input" id="mailSubject" type="text" maxlength="60" value="${escapeAttr(ui.mailComposeSubject)}" placeholder="无题">
        </div>
        <div class="field">
          <label class="field-label">内容</label>
          <textarea class="textarea tall" id="mailBody" placeholder="写给 ${escapeAttr(S.profile.partnerName || "他")} 的信"></textarea>
        </div>
        <button class="btn primary wide" id="mailSendBtn">${icon("sendMail", 17)}寄出</button>
      </div>
    </div>
  `;
}

function bindMailApp() {
  if (ui.mailView === "list") {
    $("#mailComposeBtn")?.addEventListener("click", () => {
      ui.mailView = "compose";
      ui.mailComposeSubject = "";
      renderApp();
    });
    $("#mailSettingsBtn")?.addEventListener("click", openMailSettings);
    $$("[data-letter]").forEach((button) => {
      button.addEventListener("click", () => openMailLetter(button.dataset.letter));
    });
    return;
  }

  $("#mailBack")?.addEventListener("click", () => {
    ui.mailView = "list";
    ui.mailOpenId = null;
    renderApp();
  });

  if (ui.mailView === "read") {
    $("#mailReplyBtn")?.addEventListener("click", () => {
      const letter = S.mail.letters.find((item) => item.id === ui.mailOpenId);
      ui.mailView = "compose";
      ui.mailComposeSubject = letter?.subject ? `Re: ${letter.subject}` : "回信";
      renderApp();
    });
    $("#mailDeleteBtn")?.addEventListener("click", () => {
      const letter = S.mail.letters.find((item) => item.id === ui.mailOpenId);
      if (!letter) return;
      showConfirm("删除信件", "这封信会被永久删除。", "删除", () => {
        S.mail.letters = S.mail.letters.filter((item) => item.id !== letter.id);
        S.mail.pending = S.mail.pending.filter((item) => item.letterId !== letter.id);
        saveState();
        ui.mailView = "list";
        ui.mailOpenId = null;
        renderApp();
      }, true);
    });
    return;
  }

  if (ui.mailView === "compose") {
    $("#mailSendBtn")?.addEventListener("click", () => {
      const subject = $("#mailSubject").value.trim() || "无题";
      const body = $("#mailBody").value.trim();
      if (!body) {
        toast("信还是空的");
        return;
      }
      const letter = {
        id: uid("l"),
        sender: "me",
        subject,
        body,
        createdAt: Date.now(),
        read: true,
      };
      S.mail.letters.push(letter);
      const settings = S.mail.settings;
      const min = Math.max(1, Number(settings.delayMin) || 8);
      const max = Math.max(min, Number(settings.delayMax) || 30);
      S.mail.pending.push({
        id: uid("mp"),
        letterId: letter.id,
        dueAt: Date.now() + randInt(min * 60000, max * 60000),
      });
      saveState();
      ui.mailView = "list";
      ui.mailComposeSubject = "";
      renderApp();
      scheduleMailTimers();
      toast("信已寄出");
    });
  }
}

function openMailLetter(id) {
  const letter = S.mail.letters.find((item) => item.id === id);
  if (!letter) return;
  if (letter.sender === "partner" && !letter.read) {
    letter.read = true;
    saveState();
  }
  ui.mailView = "read";
  ui.mailOpenId = id;
  renderApp();
}

function openMailSettings() {
  const settings = S.mail.settings;
  showSheet({
    title: "信件设置",
    body: `
      <div class="field">
        <label class="field-label">回信时间（分钟）</label>
        <div class="range-pair">
          <input class="input" id="mailDelayMin" type="number" min="1" max="999" value="${settings.delayMin}">
          <span>至</span>
          <input class="input" id="mailDelayMax" type="number" min="1" max="999" value="${settings.delayMax}">
        </div>
      </div>
      <div class="field">
        <label class="field-label">回信条数</label>
        <div class="range-pair">
          <input class="input" id="mailCountMin" type="number" min="1" max="8" value="${settings.replyCountMin}">
          <span>至</span>
          <input class="input" id="mailCountMax" type="number" min="1" max="8" value="${settings.replyCountMax}">
        </div>
      </div>
      <div class="toggle-row">
        <div class="toggle-copy"><div class="toggle-title">主动写信</div></div>
        <button class="toggle ${settings.proactiveEnabled ? "on" : ""}" id="mailProactiveToggle"></button>
      </div>
      <div class="field" id="mailProactiveFields" style="${settings.proactiveEnabled ? "" : "opacity:.45"}">
        <label class="field-label">主动写信间隔（分钟）</label>
        <div class="range-pair">
          <input class="input" id="mailProactiveMin" type="number" min="1" max="9999" value="${settings.proactiveMin}">
          <span>至</span>
          <input class="input" id="mailProactiveMax" type="number" min="1" max="9999" value="${settings.proactiveMax}">
        </div>
      </div>
    `,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="saveMailSettings">保存</button>`,
    onMount(host) {
      let proactive = Boolean(settings.proactiveEnabled);
      const toggle = host.querySelector("#mailProactiveToggle");
      toggle.addEventListener("click", () => {
        proactive = !proactive;
        toggle.classList.toggle("on", proactive);
        host.querySelector("#mailProactiveFields").style.opacity = proactive ? "1" : ".45";
      });

      host.querySelector("#saveMailSettings").addEventListener("click", () => {
        const delayMin = clamp(Number(host.querySelector("#mailDelayMin").value) || 8, 1, 999);
        const delayMax = clamp(Number(host.querySelector("#mailDelayMax").value) || 30, delayMin, 999);
        const countMin = clamp(Number(host.querySelector("#mailCountMin").value) || 1, 1, 8);
        const countMax = clamp(Number(host.querySelector("#mailCountMax").value) || 2, countMin, 8);
        const proactiveMin = clamp(Number(host.querySelector("#mailProactiveMin").value) || 180, 1, 9999);
        const proactiveMax = clamp(Number(host.querySelector("#mailProactiveMax").value) || 480, proactiveMin, 9999);
        settings.delayMin = delayMin;
        settings.delayMax = delayMax;
        settings.replyCountMin = countMin;
        settings.replyCountMax = countMax;
        settings.proactiveEnabled = proactive;
        settings.proactiveMin = proactiveMin;
        settings.proactiveMax = proactiveMax;
        if (proactive && !S.mail.nextProactiveAt) S.mail.nextProactiveAt = nextMailProactiveTimestamp();
        if (!proactive) S.mail.nextProactiveAt = null;
        saveState();
        closeSheet();
        scheduleMailTimers();
        toast("已保存");
      });
    },
  });
}

function nextMailProactiveTimestamp() {
  const settings = S.mail.settings;
  const min = Math.max(1, Number(settings.proactiveMin) || 180);
  const max = Math.max(min, Number(settings.proactiveMax) || 480);
  return Date.now() + randInt(min * 60000, max * 60000);
}

function scheduleMailTimers() {
  clearTimeout(ui.mailTimer);
  if (S.mail.settings.proactiveEnabled && !S.mail.nextProactiveAt) {
    S.mail.nextProactiveAt = nextMailProactiveTimestamp();
    saveState();
  }
  if (!S.mail.settings.proactiveEnabled) S.mail.nextProactiveAt = null;

  const times = [];
  if (S.mail.pending.length) times.push(Math.min(...S.mail.pending.map((item) => item.dueAt)));
  if (S.mail.settings.proactiveEnabled && S.mail.nextProactiveAt) times.push(S.mail.nextProactiveAt);
  if (!times.length) return;
  const next = Math.min(...times);
  ui.mailTimer = setTimeout(processMailTimers, Math.max(700, next - Date.now()));
}

function processMailTimers() {
  const now = Date.now();
  let changed = false;
  const due = S.mail.pending.filter((item) => item.dueAt <= now);
  if (due.length) {
    for (const pending of due) {
      const original = S.mail.letters.find((letter) => letter.id === pending.letterId);
      const reply = createMailReply(original);
      S.mail.letters.push(reply);
      changed = true;
    }
    S.mail.pending = S.mail.pending.filter((item) => item.dueAt > now);
  }

  if (S.mail.settings.proactiveEnabled && S.mail.nextProactiveAt && S.mail.nextProactiveAt <= now) {
    if (isQuietNow(now)) {
      S.mail.nextProactiveAt = nextQuietEnd(now) + randInt(5, 20) * 60000;
    } else {
      const letter = createProactiveMail();
      S.mail.letters.push(letter);
      S.mail.nextProactiveAt = nextMailProactiveTimestamp();
      changed = true;
    }
  }

  if (!S.mail.settings.proactiveEnabled) S.mail.nextProactiveAt = null;
  saveState();
  if (changed) refreshApp("mail");
  scheduleMailTimers();
}

function createMailReply(original) {
  const settings = S.mail.settings;
  const cards = availableCards();
  const min = clamp(Number(settings.replyCountMin) || 1, 1, 8);
  const max = clamp(Number(settings.replyCountMax) || 2, min, 8);
  const chosen = sample(cards, Math.min(randInt(min, max), cards.length));
  const body = chosen.length ? chosen.map((card) => card.text.trim()).join("\n\n") : "见字如面。";
  const letter = {
    id: uid("l"),
    sender: "partner",
    subject: original?.subject ? `回信 · ${original.subject}` : "回信",
    body,
    createdAt: Date.now(),
    read: false,
  };
  notifyPartner({ type: "text", text: `寄来一封信：${letter.subject}` });
  return letter;
}

function createProactiveMail() {
  const cards = availableCards();
  const chosen = sample(cards, Math.min(randInt(1, 2), cards.length));
  const body = chosen.length ? chosen.map((card) => card.text.trim()).join("\n\n") : "见字如面。";
  const letter = {
    id: uid("l"),
    sender: "partner",
    subject: pick(["见字如面", "今天想起你", "夜里的信", "随手写给你"]),
    body,
    createdAt: Date.now(),
    read: false,
  };
  notifyPartner({ type: "text", text: `寄来一封信：${letter.subject}` });
  return letter;
}

/* =========================================================
   Ledger
   ========================================================= */

function renderLedgerApp() {
  const transactions = S.ledger.transactions.slice().sort((a, b) => {
    if (a.date === b.date) return b.createdAt - a.createdAt;
    return a.date < b.date ? 1 : -1;
  });
  const monthPrefix = dateKey().slice(0, 7);
  const monthTransactions = transactions.filter((item) => item.date.startsWith(monthPrefix));
  const monthExpense = monthTransactions.filter((item) => item.type === "expense").reduce((sum, item) => sum + item.amount, 0);
  const monthIncome = monthTransactions.filter((item) => item.type === "income").reduce((sum, item) => sum + item.amount, 0);

  const expenseByCategory = CATEGORIES.map((category) => ({
    ...category,
    total: monthTransactions.filter((item) => item.type === "expense" && item.category === category.key).reduce((sum, item) => sum + item.amount, 0),
  })).filter((item) => item.total > 0).sort((a, b) => b.total - a.total);
  const maxCategory = expenseByCategory[0]?.total || 1;

  const groups = {};
  transactions.forEach((item) => {
    if (!groups[item.date]) groups[item.date] = [];
    groups[item.date].push(item);
  });

  return `
    <div class="app ledger-app">
      <header class="app-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">记账</div></div>
        <div class="header-actions"><button class="icon-btn filled" id="ledgerAddBtn" aria-label="记一笔">${icon("plus", 19)}</button></div>
      </header>
      <div class="app-body">
        <div class="balance-card">
          <button class="balance-edit" id="ledgerBalanceEdit" aria-label="调整存款">${icon("edit", 14)}</button>
          <div class="balance-label">存款</div>
          <div class="balance-amount"><small>¥</small>${formatMoney(S.ledger.balance)}</div>
          <div class="balance-foot">
            <span>本月支出 <strong>¥${formatMoney(monthExpense)}</strong></span>
            <span>收入 <strong>¥${formatMoney(monthIncome)}</strong></span>
          </div>
        </div>

        <div class="ledger-quick">
          <button id="ledgerExpenseBtn">${icon("minus", 15)}记支出</button>
          <button id="ledgerIncomeBtn">${icon("plus", 15)}记收入</button>
        </div>

        <div class="stats-card">
          <div class="stats-head">
            <div class="stats-title">本月支出</div>
            <div class="stats-total">¥${formatMoney(monthExpense)}</div>
          </div>
          ${expenseByCategory.length ? expenseByCategory.map((item) => `
            <div class="stat-row">
              <span>${item.label}</span>
              <div class="stat-track"><i style="width:${Math.max(4, (item.total / maxCategory) * 100)}%"></i></div>
              <span style="text-align:right">¥${formatMoney(item.total)}</span>
            </div>
          `).join("") : '<div class="muted" style="font-size:11px;padding:4px 0">还没有支出记录</div>'}
        </div>

        <div class="transactions">
          ${Object.keys(groups).length ? Object.entries(groups).map(([date, items]) => `
            <div class="transaction-date">${formatShortDate(parseDateKey(date).getTime())} · ${weekdayCN(parseDateKey(date))}</div>
            ${items.map((item) => {
              const category = CATEGORY_MAP[item.category] || CATEGORY_MAP.other;
              return `
                <div class="transaction-row" data-transaction="${item.id}">
                  <div class="transaction-icon">${icon(category.icon, 16)}</div>
                  <div class="transaction-main">
                    <div class="transaction-note">${escapeHTML(item.note || category.label)}</div>
                    <div class="transaction-cat">${category.label}</div>
                  </div>
                  <div class="transaction-amount ${item.type}">${item.type === "expense" ? "−" : "+"} ¥${formatMoney(item.amount)}</div>
                </div>
              `;
            }).join("")}
          `).join("") : `<div class="empty">${icon("ledger", 34)}<p>还没有记录</p></div>`}
        </div>
      </div>
    </div>
  `;
}

function bindLedgerApp() {
  $("#ledgerAddBtn")?.addEventListener("click", () => openTransactionSheet("expense"));
  $("#ledgerExpenseBtn")?.addEventListener("click", () => openTransactionSheet("expense"));
  $("#ledgerIncomeBtn")?.addEventListener("click", () => openTransactionSheet("income"));
  $("#ledgerBalanceEdit")?.addEventListener("click", openBalanceSheet);
  $$("[data-transaction]").forEach((row) => {
    row.addEventListener("click", () => {
      const transaction = S.ledger.transactions.find((item) => item.id === row.dataset.transaction);
      if (!transaction) return;
      openTransactionActions(transaction);
    });
  });
}

function openBalanceSheet() {
  showSheet({
    title: "存款",
    body: `<div class="field"><label class="field-label">当前存款</label><input class="input" id="balanceInput" type="number" step="0.01" inputmode="decimal" value="${S.ledger.balance}"></div>`,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="saveBalance">保存</button>`,
    onMount(host) {
      host.querySelector("#saveBalance").addEventListener("click", () => {
        const value = Number(host.querySelector("#balanceInput").value);
        if (!Number.isFinite(value)) return;
        S.ledger.balance = Number(value.toFixed(2));
        saveState();
        closeSheet();
        refreshApp("ledger");
      });
    },
  });
}

function openTransactionSheet(type = "expense") {
  let currentType = type;
  let currentCategory = "food";
  showSheet({
    title: "记一笔",
    body: `
      <div class="segmented" id="transactionType">
        <button class="${currentType === "expense" ? "active" : ""}" data-transaction-type="expense">支出</button>
        <button class="${currentType === "income" ? "active" : ""}" data-transaction-type="income">收入</button>
      </div>
      <div class="field">
        <label class="field-label">金额</label>
        <input class="input" id="transactionAmount" type="number" min="0.01" step="0.01" inputmode="decimal" placeholder="0.00">
      </div>
      <div class="field">
        <label class="field-label">分类</label>
        <div class="chip-row" id="transactionCategories">
          ${CATEGORIES.map((category) => `<button class="chip soft ${category.key === currentCategory ? "active" : ""}" data-category="${category.key}">${category.label}</button>`).join("")}
        </div>
      </div>
      <div class="field">
        <label class="field-label">备注</label>
        <input class="input" id="transactionNote" type="text" maxlength="40" placeholder="写点什么">
      </div>
      <div class="field">
        <label class="field-label">日期</label>
        <input class="input" id="transactionDate" type="date" value="${dateKey()}">
      </div>
    `,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="saveTransaction">保存</button>`,
    onMount(host) {
      host.querySelectorAll("[data-transaction-type]").forEach((button) => {
        button.addEventListener("click", () => {
          currentType = button.dataset.transactionType;
          host.querySelectorAll("[data-transaction-type]").forEach((item) => item.classList.toggle("active", item === button));
        });
      });
      host.querySelectorAll("[data-category]").forEach((button) => {
        button.addEventListener("click", () => {
          currentCategory = button.dataset.category;
          host.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("active", item === button));
        });
      });
      host.querySelector("#saveTransaction").addEventListener("click", () => {
        const amount = Number(host.querySelector("#transactionAmount").value);
        if (!amount || amount <= 0) {
          toast("输入一个金额");
          return;
        }
        const transaction = {
          id: uid("t"),
          type: currentType,
          amount: Number(amount.toFixed(2)),
          category: currentCategory,
          note: host.querySelector("#transactionNote").value.trim(),
          date: host.querySelector("#transactionDate").value || dateKey(),
          createdAt: Date.now(),
        };
        S.ledger.transactions.push(transaction);
        S.ledger.balance += currentType === "expense" ? -transaction.amount : transaction.amount;
        S.ledger.balance = Number(S.ledger.balance.toFixed(2));
        saveState();
        closeSheet();
        refreshApp("ledger");
      });
    },
  });
}

function openTransactionActions(transaction) {
  showSheet({
    title: "记录",
    body: `
      <div class="soft-panel" style="display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:12px">${escapeHTML(transaction.note || (CATEGORY_MAP[transaction.category]?.label || "其他"))}</span>
        <span style="font-size:16px;font-variant-numeric:tabular-nums">${transaction.type === "expense" ? "−" : "+"} ¥${formatMoney(transaction.amount)}</span>
      </div>
      <div class="action-list">
        <button class="action-item danger" data-action="delete">${icon("trash", 17)}删除记录</button>
      </div>
    `,
    onMount(host) {
      host.querySelector('[data-action="delete"]')?.addEventListener("click", () => {
        closeSheet();
        setTimeout(() => {
          showConfirm("删除记录", "这笔记录会从账本中移除，存款会同步还原。", "删除", () => {
            S.ledger.transactions = S.ledger.transactions.filter((item) => item.id !== transaction.id);
            S.ledger.balance += transaction.type === "expense" ? transaction.amount : -transaction.amount;
            S.ledger.balance = Number(S.ledger.balance.toFixed(2));
            saveState();
            refreshApp("ledger");
          }, true);
        }, 100);
      });
    },
  });
}

/* =========================================================
   Calendar
   ========================================================= */

function ensureCalendarEntry(key) {
  if (!S.calendar.entries[key]) {
    S.calendar.entries[key] = {
      period: false,
      anniversary: false,
      schedules: [],
      mood: "",
      partnerMood: "",
    };
  }
  const entry = S.calendar.entries[key];
  if (!Array.isArray(entry.schedules)) entry.schedules = [];
  if (!entry.partnerMood) {
    const date = parseDateKey(key);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date.getTime() <= today.getTime()) {
      entry.partnerMood = MOODS[hashString(key) % MOODS.length].key;
    }
  }
  return entry;
}

function ensurePartnerMoods(cursor) {
  let changed = false;
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= days; day += 1) {
    const date = new Date(year, month, day);
    if (date.getTime() > today.getTime()) continue;
    const key = dateKey(date);
    const before = S.calendar.entries[key]?.partnerMood;
    ensureCalendarEntry(key);
    if (S.calendar.entries[key].partnerMood !== before) changed = true;
  }
  return changed;
}

function renderCalendarApp() {
  const cursor = ui.calendarCursor;
  if (ensurePartnerMoods(cursor)) saveState();
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - offset);
  const todayKey = dateKey();
  const cells = [];

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = dateKey(date);
    const outside = date.getMonth() !== month;
    const entry = S.calendar.entries[key] || {};
    const userMood = entry.mood ? MOODS.find((mood) => mood.key === entry.mood) : null;
    const partnerMood = entry.partnerMood ? MOODS.find((mood) => mood.key === entry.partnerMood) : null;
    const dots = [];
    if (entry.period) dots.push('<i class="dot-period"></i>');
    if (entry.anniversary) dots.push('<i class="dot-anniv"></i>');
    if (entry.schedules?.length) dots.push('<i class="dot-plan"></i>');
    cells.push(`
      <button class="cal-cell ${outside ? "outside" : ""} ${key === todayKey ? "today" : ""}" data-calendar-day="${key}">
        <span class="cal-num">${date.getDate()}</span>
        <span class="cal-moods">
          ${userMood ? `<span class="cal-mood">${userMood.emoji}</span>` : ""}
          ${partnerMood ? `<span class="cal-mood partner">${partnerMood.emoji}</span>` : ""}
        </span>
        <span class="cal-dots">${dots.join("")}</span>
      </button>
    `);
  }

  return `
    <div class="app calendar-app">
      <header class="app-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">日历手账</div></div>
        <div class="header-actions"><button class="icon-btn" id="calendarToday" aria-label="回到今天">${icon("today", 18)}</button></div>
      </header>
      <div class="app-body">
        <div class="calendar-top">
          <div class="calendar-month">${month + 1}<small>${year}</small></div>
          <div class="calendar-nav">
            <button id="calendarPrev" aria-label="上个月">${icon("chevronLeft", 16)}</button>
            <button id="calendarNext" aria-label="下个月">${icon("chevronRight", 16)}</button>
          </div>
        </div>
        <div class="calendar-weekdays">${["一", "二", "三", "四", "五", "六", "日"].map((day) => `<span>${day}</span>`).join("")}</div>
        <div class="calendar-grid">${cells.join("")}</div>
        <div class="calendar-foot">
          <span><i class="dot-period"></i>经期</span>
          <span><i class="dot-anniv"></i>纪念日</span>
          <span><i class="dot-plan"></i>日程</span>
        </div>
      </div>
    </div>
  `;
}

function bindCalendarApp() {
  $("#calendarPrev")?.addEventListener("click", () => {
    ui.calendarCursor = new Date(ui.calendarCursor.getFullYear(), ui.calendarCursor.getMonth() - 1, 1);
    refreshApp("calendar");
  });
  $("#calendarNext")?.addEventListener("click", () => {
    ui.calendarCursor = new Date(ui.calendarCursor.getFullYear(), ui.calendarCursor.getMonth() + 1, 1);
    refreshApp("calendar");
  });
  $("#calendarToday")?.addEventListener("click", () => {
    const now = new Date();
    ui.calendarCursor = new Date(now.getFullYear(), now.getMonth(), 1);
    refreshApp("calendar");
  });
  $$("[data-calendar-day]").forEach((button) => {
    button.addEventListener("click", () => openDaySheet(button.dataset.calendarDay));
  });
}

function refreshCalendarViews(key) {
  saveState();
  refreshApp("calendar");
  openDaySheet(key);
}

function openDaySheet(key) {
  const entry = ensureCalendarEntry(key);
  const date = parseDateKey(key);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPastOrToday = date.getTime() <= today.getTime();
  const partnerMood = entry.partnerMood ? MOODS.find((mood) => mood.key === entry.partnerMood) : null;

  showSheet({
    title: `${date.getMonth() + 1}月${date.getDate()}日`,
    body: `
      ${isPastOrToday ? `
        <div class="day-partner-mood">
          <span class="mood-emoji">${partnerMood?.emoji || "—"}</span>
          <span>${escapeHTML(S.profile.partnerName || "他")}今天的心情 · ${partnerMood?.label || "未记"}</span>
        </div>
      ` : ""}
      <div class="field">
        <label class="field-label">我的心情</label>
        <div class="mood-picker">
          <button class="mood-option ${!entry.mood ? "active" : ""}" data-mood="">
            <span class="mood-emoji">·</span><span>未记</span>
          </button>
          ${MOODS.map((mood) => `
            <button class="mood-option ${entry.mood === mood.key ? "active" : ""}" data-mood="${mood.key}">
              <span class="mood-emoji">${mood.emoji}</span><span>${mood.label}</span>
            </button>
          `).join("")}
        </div>
      </div>
      <div class="day-flags">
        <button class="flag-btn ${entry.period ? "active" : ""}" data-flag="period"><i></i>经期</button>
        <button class="flag-btn ${entry.anniversary ? "active" : ""}" data-flag="anniversary"><i></i>纪念日</button>
      </div>
      <div class="field">
        <label class="field-label">日程</label>
        <div class="schedule-list" id="scheduleList">
          ${entry.schedules.length ? entry.schedules.map((schedule) => `
            <div class="schedule-row">
              <span>${escapeHTML(schedule.text)}</span>
              <button data-delete-schedule="${schedule.id}" aria-label="删除日程">${icon("close", 12)}</button>
            </div>
          `).join("") : '<div class="muted" style="font-size:11px">还没有日程</div>'}
        </div>
        <div class="schedule-add">
          <input class="input" id="scheduleInput" type="text" maxlength="40" placeholder="添加一条日程">
          <button class="btn sm primary" id="addScheduleBtn">添加</button>
        </div>
      </div>
    `,
    onMount(host) {
      host.querySelectorAll("[data-mood]").forEach((button) => {
        button.addEventListener("click", () => {
          entry.mood = button.dataset.mood;
          refreshCalendarViews(key);
        });
      });
      host.querySelectorAll("[data-flag]").forEach((button) => {
        button.addEventListener("click", () => {
          const flag = button.dataset.flag;
          entry[flag] = !entry[flag];
          refreshCalendarViews(key);
        });
      });
      host.querySelector("#addScheduleBtn").addEventListener("click", () => {
        const input = host.querySelector("#scheduleInput");
        const text = input.value.trim();
        if (!text) return;
        entry.schedules.push({ id: uid("s"), text });
        refreshCalendarViews(key);
      });
      host.querySelector("#scheduleInput").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          host.querySelector("#addScheduleBtn").click();
        }
      });
      host.querySelectorAll("[data-delete-schedule]").forEach((button) => {
        button.addEventListener("click", () => {
          entry.schedules = entry.schedules.filter((item) => item.id !== button.dataset.deleteSchedule);
          refreshCalendarViews(key);
        });
      });
    },
  });
}

/* =========================================================
   Moments
   ========================================================= */

function renderMomentsApp() {
  const posts = S.moments.posts.slice().sort((a, b) => b.createdAt - a.createdAt);
  const coverStyle = S.moments.background ? `background-image:url("${escapeAttr(S.moments.background)}")` : "";
  const name = S.profile.partnerName || "他";
  const showName = S.appearance.showPartnerName;
  const showAvatar = S.appearance.showPartnerAvatar;

  return `
    <div class="app moments-app">
      <header class="app-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">朋友圈</div></div>
        <div class="header-actions">
          <button class="icon-btn" id="momentsBgBtn" aria-label="更换封面">${icon("image", 18)}</button>
          <button class="icon-btn filled" id="momentsComposeBtn" aria-label="发朋友圈">${icon("plus", 19)}</button>
        </div>
      </header>
      <div class="app-body">
        <div class="moments-cover" style="${coverStyle}">
          <button class="moments-cover-edit" id="momentsCoverEdit" aria-label="更换封面">${icon("image", 15)}</button>
          <div class="moments-cover-info">
            ${showAvatar ? avatarHTML("partner", "sm") : ""}
            <div>
              ${showName ? `<div class="moments-cover-name">${escapeHTML(name)}</div>` : ""}
              <div class="moments-cover-sub">MOMENTS</div>
            </div>
          </div>
        </div>
        <div class="moments-feed">
          <button class="moment-compose" id="momentsComposeBar">
            ${avatarHTML("me", "sm")}
            <span class="compose-fake">这一刻的想法…</span>
            <span class="compose-btn">${icon("edit", 15)}</span>
          </button>
          ${posts.length ? posts.map((post) => momentPostHTML(post)).join("") : `<div class="empty">${icon("moments", 34)}<p>还没有动态</p></div>`}
        </div>
      </div>
    </div>
  `;
}

function momentPostHTML(post) {
  const partnerName = S.profile.partnerName || "他";
  const userName = S.profile.userName || "我";
  return `
    <div class="moment-post" data-postid="${post.id}">
      ${avatarHTML("me", "sm")}
      <div class="moment-body">
        <div class="moment-name">${escapeHTML(userName)}</div>
        <div class="moment-content">${escapeHTML(post.content)}</div>
        <div class="moment-time">${formatRelative(post.createdAt)}</div>
        ${post.comments?.length ? `
          <div class="moment-comments">
            ${post.comments.map((comment) => {
              const author = comment.author === "partner" ? partnerName : userName;
              const replyTo = comment.replyTo ? `<span class="reply-to">回复 ${escapeHTML(comment.replyTo)}：</span>` : "";
              return `
                <div class="moment-comment">
                  <strong>${escapeHTML(author)}</strong>：${replyTo}${escapeHTML(comment.text)}
                  ${comment.author === "partner" ? `<button class="comment-reply-btn" data-reply-comment="${comment.id}" data-post="${post.id}">回复</button>` : ""}
                </div>
              `;
            }).join("")}
          </div>
        ` : ""}
        <div class="moment-actions">
          <button data-delete-post="${post.id}">删除</button>
        </div>
      </div>
    </div>
  `;
}

function bindMomentsApp() {
  $("#momentsBgBtn")?.addEventListener("click", uploadMomentsBackground);
  $("#momentsCoverEdit")?.addEventListener("click", uploadMomentsBackground);
  $("#momentsComposeBtn")?.addEventListener("click", openMomentCompose);
  $("#momentsComposeBar")?.addEventListener("click", openMomentCompose);

  $$("[data-reply-comment]").forEach((button) => {
    button.addEventListener("click", () => {
      const post = S.moments.posts.find((item) => item.id === button.dataset.post);
      const comment = post?.comments?.find((item) => item.id === button.dataset.replyComment);
      if (post && comment) openMomentReplySheet(post, comment);
    });
  });

  $$("[data-delete-post]").forEach((button) => {
    button.addEventListener("click", () => {
      const post = S.moments.posts.find((item) => item.id === button.dataset.deletePost);
      if (!post) return;
      showConfirm("删除动态", "这条动态和下面的评论会一起消失。", "删除", () => {
        S.moments.posts = S.moments.posts.filter((item) => item.id !== post.id);
        S.moments.pending = S.moments.pending.filter((item) => item.postId !== post.id);
        saveState();
        refreshApp("moments");
      }, true);
    });
  });
}

function uploadMomentsBackground() {
  pickFile("image/*", (file) => {
    readImageFile(file, (dataUrl) => {
      S.moments.background = dataUrl;
      saveState();
      refreshApp("moments");
      toast("封面已更换");
    }, 1400);
  });
}

function openMomentCompose() {
  showSheet({
    title: "这一刻",
    body: `<div class="field"><label class="field-label">内容</label><textarea class="textarea tall" id="momentContent" placeholder="写下这一刻"></textarea></div>`,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="publishMoment">发布</button>`,
    onMount(host) {
      host.querySelector("#publishMoment").addEventListener("click", () => {
        const content = host.querySelector("#momentContent").value.trim();
        if (!content) {
          toast("还没有内容");
          return;
        }
        const post = {
          id: uid("p"),
          content,
          createdAt: Date.now(),
          comments: [],
        };
        S.moments.posts.push(post);
        S.moments.pending.push({
          id: uid("mop"),
          postId: post.id,
          kind: "comment",
          dueAt: Date.now() + randInt(4200, 9000),
        });
        saveState();
        closeSheet();
        refreshApp("moments");
        scheduleMomentTimers();
        toast("已发布");
      });
    },
  });
}

function openMomentReplySheet(post, comment) {
  showSheet({
    title: "回复",
    body: `
      <div class="soft-panel" style="font-size:11px;line-height:1.6;color:var(--muted)">${escapeHTML(comment.text)}</div>
      <div class="field"><label class="field-label">回复</label><textarea class="textarea" id="momentReplyText" placeholder="说点什么"></textarea></div>
    `,
    actions: `<button class="btn ghost" data-sheet-close>取消</button><button class="btn primary" id="sendMomentReply">发送</button>`,
    onMount(host) {
      host.querySelector("#sendMomentReply").addEventListener("click", () => {
        const text = host.querySelector("#momentReplyText").value.trim();
        if (!text) return;
        const reply = {
          id: uid("cm"),
          author: "me",
          text,
          replyTo: S.profile.partnerName || "他",
          createdAt: Date.now(),
        };
        post.comments.push(reply);
        S.moments.pending.push({
          id: uid("mop"),
          postId: post.id,
          kind: "reply",
          parentCommentId: comment.id,
          dueAt: Date.now() + randInt(3200, 7000),
        });
        saveState();
        closeSheet();
        refreshApp("moments");
        scheduleMomentTimers();
      });
    },
  });
}

function scheduleMomentTimers() {
  clearTimeout(ui.momentTimer);
  if (!S.moments.pending.length) return;
  const next = Math.min(...S.moments.pending.map((item) => item.dueAt));
  ui.momentTimer = setTimeout(processMomentTimers, Math.max(700, next - Date.now()));
}

function processMomentTimers() {
  const now = Date.now();
  const due = S.moments.pending.filter((item) => item.dueAt <= now);
  if (!due.length) {
    scheduleMomentTimers();
    return;
  }
  let changed = false;
  for (const pending of due) {
    const post = S.moments.posts.find((item) => item.id === pending.postId);
    if (!post) continue;
    if (!Array.isArray(post.comments)) post.comments = [];
    if (pending.kind === "reply") {
      const cards = availableCards();
      const text = cards.length ? pick(cards).text.trim() : "嗯，我在。";
      post.comments.push({
        id: uid("cm"),
        author: "partner",
        text,
        replyTo: S.profile.userName || "我",
        createdAt: Date.now(),
      });
      notifyPartner({ type: "text", text: `回复了你的评论：${text}` });
    } else {
      const cards = availableCards();
      const count = cards.length ? randInt(1, Math.min(2, cards.length)) : 1;
      const chosen = cards.length ? sample(cards, count) : [{ text: "看到了。" }];
      chosen.forEach((card, index) => {
        post.comments.push({
          id: uid("cm"),
          author: "partner",
          text: card.text.trim(),
          replyTo: "",
          createdAt: Date.now() + index * 900,
        });
      });
      notifyPartner({ type: "text", text: `评论了你的朋友圈：${chosen[0].text.trim()}` });
    }
    changed = true;
  }
  S.moments.pending = S.moments.pending.filter((item) => item.dueAt > now);
  saveState();
  if (changed) refreshApp("moments");
  scheduleMomentTimers();
}

/* =========================================================
   Settings
   ========================================================= */

function renderSettingsApp() {
  const settings = S.settings;
  return `
    <div class="app settings-app">
      <header class="app-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">设置</div></div>
      </header>
      <div class="app-body">
        <div class="settings-profile">
          <button class="avatar-upload" data-avatar="partner" aria-label="更换对方头像">
            ${avatarHTML("partner", "lg")}
            <span class="upload-mark">${icon("plus", 10)}</span>
          </button>
          <div class="settings-profile-main">
            <div class="settings-profile-name">${escapeHTML(S.profile.partnerName || "他")}</div>
            <div class="settings-profile-sub">与 ${escapeHTML(S.profile.userName || "我")}</div>
          </div>
          <button class="avatar-upload" data-avatar="me" aria-label="更换我的头像">
            ${avatarHTML("me", "lg")}
            <span class="upload-mark">${icon("plus", 10)}</span>
          </button>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">资料</div></div>
          <div class="section-body">
            <div class="field">
              <label class="field-label">对方名称</label>
              <input class="input" id="partnerNameInput" type="text" maxlength="16" value="${escapeAttr(S.profile.partnerName)}">
            </div>
            <div class="field">
              <label class="field-label">我的名称</label>
              <input class="input" id="userNameInput" type="text" maxlength="16" value="${escapeAttr(S.profile.userName)}">
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">对话</div></div>
          <div class="setting-list">
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">连句</div></div>
              <button class="toggle ${settings.multiSentence ? "on" : ""}" data-settings-toggle="multiSentence"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">系统通知</div></div>
              <button class="toggle ${settings.notify ? "on" : ""}" id="notifyToggle"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">主动发消息</div></div>
              <button class="toggle ${settings.proactiveEnabled ? "on" : ""}" data-settings-toggle="proactiveEnabled"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">安静时间</div></div>
              <button class="toggle ${settings.quietEnabled ? "on" : ""}" data-settings-toggle="quietEnabled"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">随机转账</div></div>
              <button class="toggle ${settings.transferEnabled ? "on" : ""}" data-settings-toggle="transferEnabled"></button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">回复</div></div>
          <div class="setting-list">
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">回复延迟（秒）</span></div>
              <div class="range-pair">
                <input class="input" data-setting-number="replyDelayMin" type="number" min="0" max="120" value="${settings.replyDelayMin}">
                <span>至</span>
                <input class="input" data-setting-number="replyDelayMax" type="number" min="0" max="120" value="${settings.replyDelayMax}">
              </div>
            </div>
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">回复条数</span></div>
              <div class="range-pair">
                <input class="input" data-setting-number="replyCountMin" type="number" min="1" max="8" value="${settings.replyCountMin}">
                <span>至</span>
                <input class="input" data-setting-number="replyCountMax" type="number" min="1" max="8" value="${settings.replyCountMax}">
              </div>
            </div>
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">引用概率</span><span class="range-value" id="quoteChanceValue">${settings.quoteChance}%</span></div>
              <input class="range" id="quoteChanceRange" type="range" min="0" max="100" step="1" value="${settings.quoteChance}">
            </div>
            <div class="setting-field-row">
              <span class="row-label">输入文案</span>
              <input class="input wide" id="typingTextInput" type="text" maxlength="20" value="${escapeAttr(settings.typingText)}">
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">主动</div></div>
          <div class="setting-list">
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">主动间隔（分钟）</span></div>
              <div class="range-pair">
                <input class="input" data-setting-number="proactiveMin" type="number" min="1" max="9999" value="${settings.proactiveMin}">
                <span>至</span>
                <input class="input" data-setting-number="proactiveMax" type="number" min="1" max="9999" value="${settings.proactiveMax}">
              </div>
            </div>
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">安静时间</span></div>
              <div class="range-pair">
                <input class="input" id="quietStartInput" type="time" value="${settings.quietStart}">
                <span>至</span>
                <input class="input" id="quietEndInput" type="time" value="${settings.quietEnd}">
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">转账</div></div>
          <div class="setting-list">
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">转账概率</span><span class="range-value" id="transferChanceValue">${settings.transferChance}%</span></div>
              <input class="range" id="transferChanceRange" type="range" min="0" max="100" step="1" value="${settings.transferChance}">
            </div>
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">金额范围</span></div>
              <div class="range-pair">
                <input class="input" data-setting-number="transferMin" type="number" min="0.01" max="99999" step="0.01" value="${settings.transferMin}">
                <span>至</span>
                <input class="input" data-setting-number="transferMax" type="number" min="0.01" max="99999" step="0.01" value="${settings.transferMax}">
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">数据</div></div>
          <div class="data-actions">
            <button class="btn" id="exportAllBtn">${icon("download", 16)}导出全部</button>
            <button class="btn" id="importAllBtn">${icon("upload", 16)}导入全部</button>
          </div>
          <div class="danger-zone" style="margin-top:12px">
            <button class="btn danger" id="resetAllBtn">${icon("refresh", 16)}重置所有数据</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindSettingsApp() {
  $("#partnerNameInput")?.addEventListener("input", (event) => {
    S.profile.partnerName = event.target.value;
    saveState();
    updateHomeInfo();
  });
  $("#partnerNameInput")?.addEventListener("change", () => {
    renderHome();
    saveState();
  });
  $("#userNameInput")?.addEventListener("input", (event) => {
    S.profile.userName = event.target.value;
    saveState();
  });

  $$("[data-avatar]").forEach((button) => {
    button.addEventListener("click", () => {
      const who = button.dataset.avatar;
      pickFile("image/*", (file) => {
        readImageFile(file, (dataUrl) => {
          if (who === "partner") S.profile.partnerAvatar = dataUrl;
          else S.profile.userAvatar = dataUrl;
          saveState();
          refreshApp("settings");
          renderHome();
          toast("头像已更换");
        }, 500);
      });
    });
  });

  $$("[data-settings-toggle]").forEach((button) => {
    const key = button.dataset.settingsToggle;
    bindToggle(button, S.settings[key], (value) => {
      S.settings[key] = value;
      if (key === "proactiveEnabled") {
        if (value && !S.chat.nextProactiveAt) S.chat.nextProactiveAt = nextProactiveTimestamp();
        if (!value) {
          S.chat.nextProactiveAt = null;
          clearTimeout(ui.proactiveTimer);
        }
        scheduleProactiveChat();
      }
      saveState();
    });
  });

  const notifyToggle = $("#notifyToggle");
  if (notifyToggle) {
    notifyToggle.classList.toggle("on", S.settings.notify);
    notifyToggle.addEventListener("click", async () => {
      if (!S.settings.notify) {
        const granted = await requestNotificationPermission();
        if (!granted) return;
        S.settings.notify = true;
      } else {
        S.settings.notify = false;
      }
      notifyToggle.classList.toggle("on", S.settings.notify);
      saveState();
    });
  }

  $$("[data-setting-number]").forEach((input) => {
    input.addEventListener("change", () => {
      const key = input.dataset.settingNumber;
      let value = Number(input.value);
      if (!Number.isFinite(value)) return;
      if (["replyDelayMin", "replyDelayMax"].includes(key)) value = clamp(value, 0, 120);
      else if (["replyCountMin", "replyCountMax"].includes(key)) value = clamp(Math.round(value), 1, 8);
      else if (["proactiveMin", "proactiveMax"].includes(key)) value = clamp(Math.round(value), 1, 9999);
      else if (["transferMin", "transferMax"].includes(key)) value = clamp(value, 0.01, 99999);
      S.settings[key] = value;
      if (S.settings.replyDelayMin > S.settings.replyDelayMax) {
        if (key === "replyDelayMin") S.settings.replyDelayMax = value;
        else S.settings.replyDelayMin = value;
      }
      if (S.settings.replyCountMin > S.settings.replyCountMax) {
        if (key === "replyCountMin") S.settings.replyCountMax = value;
        else S.settings.replyCountMin = value;
      }
      if (S.settings.proactiveMin > S.settings.proactiveMax) {
        if (key === "proactiveMin") S.settings.proactiveMax = value;
        else S.settings.proactiveMin = value;
      }
      if (S.settings.transferMin > S.settings.transferMax) {
        if (key === "transferMin") S.settings.transferMax = value;
        else S.settings.transferMin = value;
      }
      saveState();
      scheduleProactiveChat();
      refreshApp("settings");
    });
  });

  const quoteRange = $("#quoteChanceRange");
  if (quoteRange) {
    setRangeFill(quoteRange);
    quoteRange.addEventListener("input", () => {
      S.settings.quoteChance = Number(quoteRange.value);
      const label = $("#quoteChanceValue");
      if (label) label.textContent = `${quoteRange.value}%`;
      setRangeFill(quoteRange);
      saveState();
    });
  }

  const transferRange = $("#transferChanceRange");
  if (transferRange) {
    setRangeFill(transferRange);
    transferRange.addEventListener("input", () => {
      S.settings.transferChance = Number(transferRange.value);
      const label = $("#transferChanceValue");
      if (label) label.textContent = `${transferRange.value}%`;
      setRangeFill(transferRange);
      saveState();
    });
  }

  $("#typingTextInput")?.addEventListener("change", (event) => {
    S.settings.typingText = event.target.value.trim() || "正在输入…";
    saveState();
  });

  $("#quietStartInput")?.addEventListener("change", (event) => {
    S.settings.quietStart = event.target.value || "23:30";
    saveState();
    scheduleProactiveChat();
  });
  $("#quietEndInput")?.addEventListener("change", (event) => {
    S.settings.quietEnd = event.target.value || "07:30";
    saveState();
    scheduleProactiveChat();
  });

  $("#exportAllBtn")?.addEventListener("click", exportAllData);
  $("#importAllBtn")?.addEventListener("click", importAllData);
  $("#resetAllBtn")?.addEventListener("click", resetAllData);
}

/* =========================================================
   Appearance
   ========================================================= */

function renderAppearanceApp() {
  const appearance = S.appearance;
  const fontPresets = [
    ["宋体", '"Songti SC", "STSong", "SimSun", serif'],
    ["楷体", '"KaiTi", "STKaiti", "Kaiti SC", serif'],
    ["仿宋", '"FangSong", "STFangsong", serif'],
    ["黑体", '"PingFang SC", "Microsoft YaHei", sans-serif'],
  ];
  const bubblePresets = [
    ["跟随系统", ""],
    ["宋体", '"Songti SC", "STSong", "SimSun", serif'],
    ["楷体", '"KaiTi", "STKaiti", "Kaiti SC", serif'],
    ["黑体", '"PingFang SC", "Microsoft YaHei", sans-serif'],
  ];
  const bubbleStyles = [
    ["paper", "纸感"],
    ["line", "描边"],
    ["mist", "柔雾"],
    ["minimal", "极简"],
  ];

  return `
    <div class="app appearance-app">
      <header class="app-header">
        <button class="icon-btn" data-back aria-label="返回">${icon("back", 20)}</button>
        <div class="header-main"><div class="app-title">外观</div></div>
      </header>
      <div class="app-body">
        <div class="section">
          <div class="section-head"><div class="section-title">主题</div></div>
          <div class="theme-options">
            ${[
              ["auto", "跟随系统"],
              ["light", "日间"],
              ["dark", "夜间"],
            ].map(([key, label]) => `
              <button class="theme-option ${appearance.theme === key ? "active" : ""}" data-theme-choice="${key}">
                <span class="theme-swatch">
                  <i class="${key === "dark" ? "swatch-dark" : key === "light" ? "swatch-light" : "swatch-light"}"></i>
                  <i class="${key === "auto" ? "swatch-dark" : key === "dark" ? "swatch-dark" : "swatch-light"}"></i>
                </span>
                <span>${label}</span>
              </button>
            `).join("")}
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">背景</div></div>
          <div class="section-body">
            <div class="image-setting">
              <div class="image-thumb" style="${appearance.homeBg ? `background-image:url('${escapeAttr(appearance.homeBg)}')` : ""}">${appearance.homeBg ? "" : icon("home", 20)}</div>
              <div class="image-setting-main">
                <div class="image-setting-title">主屏幕</div>
                <div class="image-setting-actions">
                  <button class="btn sm" id="uploadHomeBg">${icon("image", 14)}更换</button>
                  ${appearance.homeBg ? `<button class="btn sm ghost" id="removeHomeBg">移除</button>` : ""}
                </div>
              </div>
            </div>
            <div class="image-setting">
              <div class="image-thumb" style="${appearance.chatBg ? `background-image:url('${escapeAttr(appearance.chatBg)}')` : ""}">${appearance.chatBg ? "" : icon("chat", 20)}</div>
              <div class="image-setting-main">
                <div class="image-setting-title">聊天背景</div>
                <div class="image-setting-actions">
                  <button class="btn sm" id="uploadChatBg">${icon("image", 14)}更换</button>
                  ${appearance.chatBg ? `<button class="btn sm ghost" id="removeChatBg">移除</button>` : ""}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">字体</div></div>
          <div class="section-body">
            <div class="range-block">
              <div class="range-block-head"><span class="row-label">字号</span><span class="range-value" id="fontSizeValue">${appearance.fontSize}px</span></div>
              <input class="range" id="fontSizeRange" type="range" min="12" max="20" step="1" value="${appearance.fontSize}">
            </div>
            <div class="field">
              <label class="field-label">系统字体</label>
              <div class="font-presets" id="uiFontPresets">
                ${fontPresets.map(([label, value]) => `<button class="font-preset ${appearance.uiFont === value ? "active" : ""}" data-ui-font="${escapeAttr(value)}">${label}</button>`).join("")}
              </div>
              <input class="input" id="uiFontCustom" type="text" value="${escapeAttr(appearance.uiFont)}" placeholder="CSS font-family">
            </div>
            <div class="field">
              <label class="field-label">字体文件 URL</label>
              <input class="input" id="fontUrlInput" type="url" value="${escapeAttr(appearance.fontUrl || "")}" placeholder="https://…">
            </div>
            <div class="field">
              <label class="field-label">气泡字体</label>
              <div class="font-presets" id="bubbleFontPresets">
                ${bubblePresets.map(([label, value]) => `<button class="font-preset ${appearance.bubbleFont === value ? "active" : ""}" data-bubble-font="${escapeAttr(value)}">${label}</button>`).join("")}
              </div>
              <input class="input" id="bubbleFontCustom" type="text" value="${escapeAttr(appearance.bubbleFont || "")}" placeholder="CSS font-family">
            </div>
            <div class="font-preview" id="fontPreview">梦里收到一条消息。</div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">气泡</div></div>
          <div class="section-body">
            <div class="bubble-presets">
              ${bubbleStyles.map(([key, label]) => `
                <button class="bubble-preset ${key} ${appearance.bubbleStyle === key ? "active" : ""}" data-bubble-style="${key}">
                  <div class="bubble-preview"><i></i><i></i></div>
                  <span>${label}</span>
                </button>
              `).join("")}
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">自定义颜色</div></div>
              <button class="toggle ${appearance.bubbleCustom ? "on" : ""}" data-appearance-toggle="bubbleCustom"></button>
            </div>
            <div class="color-swatches" style="${appearance.bubbleCustom ? "" : "opacity:.45"}">
              <label class="color-swatch" style="background:${appearance.bubbleMe}" title="我的气泡">
                <input class="color-input" id="bubbleMeColor" type="color" value="${appearance.bubbleMe}" style="opacity:0;width:100%;height:100%">
              </label>
              <label class="color-swatch" style="background:${appearance.bubbleThem}" title="对方气泡">
                <input class="color-input" id="bubbleThemColor" type="color" value="${appearance.bubbleThem}" style="opacity:0;width:100%;height:100%">
              </label>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">点缀</div></div>
          <div class="color-swatches">
            ${ACCENTS.map((color) => `<button class="color-swatch ${appearance.accent === color ? "active" : ""}" data-accent="${color}" style="background:${color}" aria-label="${color}"></button>`).join("")}
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">显示</div></div>
          <div class="setting-list">
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">对方名称</div></div>
              <button class="toggle ${appearance.showPartnerName ? "on" : ""}" data-appearance-toggle="showPartnerName"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">对方头像</div></div>
              <button class="toggle ${appearance.showPartnerAvatar ? "on" : ""}" data-appearance-toggle="showPartnerAvatar"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">我的名称</div></div>
              <button class="toggle ${appearance.showUserName ? "on" : ""}" data-appearance-toggle="showUserName"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">我的头像</div></div>
              <button class="toggle ${appearance.showUserAvatar ? "on" : ""}" data-appearance-toggle="showUserAvatar"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">时间戳</div></div>
              <button class="toggle ${appearance.showTimestamps ? "on" : ""}" data-appearance-toggle="showTimestamps"></button>
            </div>
            <div class="toggle-row">
              <div class="toggle-copy"><div class="toggle-title">已读</div></div>
              <button class="toggle ${appearance.showRead ? "on" : ""}" data-appearance-toggle="showRead"></button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-head"><div class="section-title">已读样式</div></div>
          <div class="read-style-grid">
            ${[
              ["text", "文字"],
              ["checks", "双勾"],
              ["dots", "圆点"],
            ].map(([key, label]) => `
              <button class="read-style-option ${appearance.readStyle === key ? "active" : ""}" data-read-style="${key}">
                ${key === "checks" ? `<svg viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m1 8 4 4L13 3"/><path d="m9 10 2 2L21 3"/></svg>` : key === "dots" ? '<span class="dot-demo"><i></i><i></i><i></i></span>' : "已读"}
                <span>${label}</span>
              </button>
            `).join("")}
          </div>
          <div class="field" style="margin-top:12px">
            <label class="field-label">文字</label>
            <input class="input" id="readTextInput" type="text" maxlength="8" value="${escapeAttr(appearance.readText || "已读")}">
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindAppearanceApp() {
  $$("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      S.appearance.theme = button.dataset.themeChoice;
      applyAppearance();
      $$("[data-theme-choice]").forEach((item) => item.classList.toggle("active", item === button));
      saveState();
    });
  });

  $("#uploadHomeBg")?.addEventListener("click", () => {
    pickFile("image/*", (file) => {
      readImageFile(file, (dataUrl) => {
        S.appearance.homeBg = dataUrl;
        saveState();
        renderHome();
        refreshApp("appearance");
        toast("壁纸已更换");
      }, 1800);
    });
  });
  $("#uploadChatBg")?.addEventListener("click", () => {
    pickFile("image/*", (file) => {
      readImageFile(file, (dataUrl) => {
        S.appearance.chatBg = dataUrl;
        saveState();
        refreshApp("appearance");
        toast("聊天背景已更换");
      }, 1800);
    });
  });
  $("#removeHomeBg")?.addEventListener("click", () => {
    S.appearance.homeBg = "";
    saveState();
    renderHome();
    refreshApp("appearance");
  });
  $("#removeChatBg")?.addEventListener("click", () => {
    S.appearance.chatBg = "";
    saveState();
    refreshApp("appearance");
  });

  const fontSizeRange = $("#fontSizeRange");
  if (fontSizeRange) {
    setRangeFill(fontSizeRange);
    fontSizeRange.addEventListener("input", () => {
      S.appearance.fontSize = Number(fontSizeRange.value);
      const label = $("#fontSizeValue");
      if (label) label.textContent = `${fontSizeRange.value}px`;
      setRangeFill(fontSizeRange);
      applyAppearance();
      saveState();
    });
  }

  $$("[data-ui-font]").forEach((button) => {
    button.addEventListener("click", () => {
      S.appearance.uiFont = button.dataset.uiFont;
      applyAppearance();
      $$("[data-ui-font]").forEach((item) => item.classList.toggle("active", item === button));
      const input = $("#uiFontCustom");
      if (input) input.value = S.appearance.uiFont;
      saveState();
    });
  });
  $("#uiFontCustom")?.addEventListener("change", (event) => {
    S.appearance.uiFont = event.target.value.trim() || '"Songti SC", "STSong", "SimSun", serif';
    applyAppearance();
    saveState();
  });
  $("#fontUrlInput")?.addEventListener("change", (event) => {
    S.appearance.fontUrl = event.target.value.trim();
    applyAppearance();
    saveState();
  });

  $$("[data-bubble-font]").forEach((button) => {
    button.addEventListener("click", () => {
      S.appearance.bubbleFont = button.dataset.bubbleFont;
      applyAppearance();
      $$("[data-bubble-font]").forEach((item) => item.classList.toggle("active", item === button));
      const input = $("#bubbleFontCustom");
      if (input) input.value = S.appearance.bubbleFont;
      saveState();
    });
  });
  $("#bubbleFontCustom")?.addEventListener("change", (event) => {
    S.appearance.bubbleFont = event.target.value.trim();
    applyAppearance();
    saveState();
  });

  $$("[data-bubble-style]").forEach((button) => {
    button.addEventListener("click", () => {
      S.appearance.bubbleStyle = button.dataset.bubbleStyle;
      $$("[data-bubble-style]").forEach((item) => item.classList.toggle("active", item === button));
      saveState();
    });
  });

  $$("[data-accent]").forEach((button) => {
    button.addEventListener("click", () => {
      S.appearance.accent = button.dataset.accent;
      applyAppearance();
      $$("[data-accent]").forEach((item) => item.classList.toggle("active", item === button));
      saveState();
    });
  });

  $$("[data-appearance-toggle]").forEach((button) => {
    const key = button.dataset.appearanceToggle;
    bindToggle(button, S.appearance[key], (value) => {
      S.appearance[key] = value;
      if (["showPartnerName", "showPartnerAvatar"].includes(key)) renderHome();
      if (key === "bubbleCustom") {
        const swatches = button.closest(".section-body")?.querySelector(".color-swatches");
        if (swatches) swatches.style.opacity = value ? "1" : ".45";
      }
      saveState();
    });
  });

  $("#bubbleMeColor")?.addEventListener("input", (event) => {
    S.appearance.bubbleMe = event.target.value;
    event.target.closest(".color-swatch").style.background = event.target.value;
    saveState();
  });
  $("#bubbleThemColor")?.addEventListener("input", (event) => {
    S.appearance.bubbleThem = event.target.value;
    event.target.closest(".color-swatch").style.background = event.target.value;
    saveState();
  });

  $$("[data-read-style]").forEach((button) => {
    button.addEventListener("click", () => {
      S.appearance.readStyle = button.dataset.readStyle;
      $$("[data-read-style]").forEach((item) => item.classList.toggle("active", item === button));
      saveState();
    });
  });
  $("#readTextInput")?.addEventListener("change", (event) => {
    S.appearance.readText = event.target.value.trim() || "已读";
    saveState();
  });
}

/* =========================================================
   Data import / export / reset
   ========================================================= */

function exportAllData() {
  const payload = {
    ...S,
    exportedAt: new Date().toISOString(),
    source: "梦间",
  };
  downloadFile(`梦间-全部数据-${dateKey()}.json`, JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
  toast("已导出全部数据");
}

function importAllData() {
  pickFile(".json,application/json", (file) => {
    readFileText(file, (text) => {
      try {
        const parsed = JSON.parse(text);
        if (!isObject(parsed)) throw new Error("invalid");
        showConfirm("导入全部数据", "当前所有内容会被导入的数据覆盖。", "导入", () => {
          const merged = deepMerge(makeDefaultState(), parsed);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            location.reload();
          } catch (error) {
            toast("导入失败，存储空间不足");
          }
        });
      } catch (error) {
        toast("文件无法读取");
      }
    });
  });
}

function resetAllData() {
  showConfirm("重置所有数据", "字卡、消息、信件、账本和手账都会被清空。", "重置", () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }, true);
}

/* =========================================================
   Proactive chat
   ========================================================= */

function scheduleProactiveChat() {
  clearTimeout(ui.proactiveTimer);
  if (!S.settings.proactiveEnabled) {
    S.chat.nextProactiveAt = null;
    return;
  }
  if (!S.chat.nextProactiveAt) {
    S.chat.nextProactiveAt = nextProactiveTimestamp();
    saveState();
  }
  const wait = Math.max(900, S.chat.nextProactiveAt - Date.now());
  ui.proactiveTimer = setTimeout(fireProactiveChat, wait);
}

function fireProactiveChat() {
  if (!S.settings.proactiveEnabled) return;
  if (isQuietNow()) {
    S.chat.nextProactiveAt = nextQuietEnd() + randInt(4, 18) * 60000;
    saveState();
    scheduleProactiveChat();
    return;
  }
  if (S.chat.pendingReply) {
    S.chat.nextProactiveAt = Date.now() + randInt(2, 6) * 60000;
    saveState();
    scheduleProactiveChat();
    return;
  }
  if (!availableCards().length) {
    S.chat.nextProactiveAt = Date.now() + randInt(10, 30) * 60000;
    saveState();
    scheduleProactiveChat();
    return;
  }
  S.chat.pendingReply = {
    dueAt: Date.now() + randInt(1300, 3200),
    source: "proactive",
    count: null,
    quote: true,
    transfer: true,
  };
  ui.typing = true;
  saveState();
  refreshApp("chat");
  scheduleReplyTimer();
}

/* =========================================================
   Init
   ========================================================= */

function init() {
  applyAppearance();
  renderHome();
  bindHomeEvents();
  startIntro();

  setInterval(updateHomeInfo, 30000);

  if (S.chat.pendingReply) {
    ui.typing = true;
    scheduleReplyTimer();
  }
  scheduleProactiveChat();
  scheduleMailTimers();
  scheduleMomentTimers();

  if (window.matchMedia) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if (S.appearance.theme === "auto") {
        applyAppearance();
        renderHome();
      }
    };
    if (media.addEventListener) media.addEventListener("change", listener);
    else if (media.addListener) media.addListener(listener);
  }

  window.addEventListener("beforeunload", saveState);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}


