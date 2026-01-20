// Random Listening Practice
let allWords = [];
let filteredWords = [];
let currentWord = null;
let playHistory = [];
let isPlaying = false;
let showWord = false;
let repeatCount = 0;
let currentFilter = "all";
let currentCategory = "all";
let currentSort = "random";

// DOM Elements
const loadingScreen = document.getElementById("loadingScreen");
const appContent = document.getElementById("appContent");
const loadingBar = document.getElementById("loadingBar");
const themeToggle = document.getElementById("themeToggle");
const playBtn = document.getElementById("playBtn");
const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const repeatBtn = document.getElementById("repeatBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const wordReveal = document.getElementById("wordReveal");
const revealedHanzi = document.getElementById("revealedHanzi");
const revealedPinyin = document.getElementById("revealedPinyin");
const revealedMeaning = document.getElementById("revealedMeaning");
const revealedCategory = document.getElementById("revealedCategory");
const revealedLevel = document.getElementById("revealedLevel");
const historyList = document.getElementById("historyList");
const statsTotal = document.getElementById("statsTotal");
const statsPlayed = document.getElementById("statsPlayed");
const statsUnique = document.getElementById("statsUnique");
const statsFiltered = document.getElementById("statsFiltered");
const audioLoading = document.getElementById("audioLoading");
const repeatInfo = document.getElementById("repeatInfo");
const repeatCountElement = document.getElementById("repeatCount");

// NEW: Category and Sort DOM Elements
const categoryFilters = document.getElementById("categoryFilters");

// Speech synthesis configuration
const synth = window.speechSynthesis;
const voiceRates = {
  slow: 0.6,
  normal: 0.8,
  fast: 1.0,
};
let currentRate = "normal";

// Initialize
function init() {
  console.log("Initializing Listening Practice App...");
  simulateLoading();
}

function simulateLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(completeLoading, 500);
    }
    loadingBar.style.width = `${progress}%`;
  }, 200);
}

function completeLoading() {
  loadingScreen.style.opacity = "0";
  setTimeout(() => {
    loadingScreen.style.display = "none";
    appContent.style.display = "block";
    setupApp();
  }, 500);
}

function setupApp() {
  loadWords();
  loadThemePreference();
  loadPlayHistory();
  populateCategories(); // NEW: Populate categories
  setupEventListeners();
  updateStats();
  updateRepeatCount();
}

function loadWords() {
  // HSK 1 vocabulary
  const hsk1Words = [
    {
      hanzi: "我",
      pinyin: "wǒ",
      meaning: "I, me",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "我们",
      pinyin: "wǒmen",
      meaning: "we, us",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "你",
      pinyin: "nǐ",
      meaning: "you",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "你们",
      pinyin: "nǐmen",
      meaning: "you (plural)",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "他",
      pinyin: "tā",
      meaning: "he, him",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "她",
      pinyin: "tā",
      meaning: "she, her",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "他们",
      pinyin: "tāmen",
      meaning: "they (male/mixed)",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "她们",
      pinyin: "tāmen",
      meaning: "they (female)",
      category: "pronouns",
      level: "HSK 1",
    },
    {
      hanzi: "哪",
      pinyin: "nǎ",
      meaning: "which",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "哪儿",
      pinyin: "nǎr",
      meaning: "where",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "谁",
      pinyin: "shéi",
      meaning: "who",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "什么",
      pinyin: "shénme",
      meaning: "what",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "怎么",
      pinyin: "zěnme",
      meaning: "how",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "怎么样",
      pinyin: "zěnmeyàng",
      meaning: "how about / how is it",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "几",
      pinyin: "jǐ",
      meaning: "how many (small numbers)",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "多少",
      pinyin: "duōshao",
      meaning: "how many / how much",
      category: "questions",
      level: "HSK 1",
    },
    {
      hanzi: "一",
      pinyin: "yī",
      meaning: "1",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "二",
      pinyin: "èr",
      meaning: "2",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "三",
      pinyin: "sān",
      meaning: "3",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "四",
      pinyin: "sì",
      meaning: "4",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "五",
      pinyin: "wǔ",
      meaning: "5",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "六",
      pinyin: "liù",
      meaning: "6",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "七",
      pinyin: "qī",
      meaning: "7",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "八",
      pinyin: "bā",
      meaning: "8",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "九",
      pinyin: "jiǔ",
      meaning: "9",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "十",
      pinyin: "shí",
      meaning: "10",
      category: "numbers",
      level: "HSK 1",
    },
    {
      hanzi: "个",
      pinyin: "gè",
      meaning: "(general classifier)",
      category: "measure",
      level: "HSK 1",
    },
    {
      hanzi: "本",
      pinyin: "běn",
      meaning: "classifier for books",
      category: "measure",
      level: "HSK 1",
    },
    {
      hanzi: "今天",
      pinyin: "jīntiān",
      meaning: "today",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "明天",
      pinyin: "míngtiān",
      meaning: "tomorrow",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "昨天",
      pinyin: "zuótiān",
      meaning: "yesterday",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "现在",
      pinyin: "xiànzài",
      meaning: "now",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "上午",
      pinyin: "shàngwǔ",
      meaning: "morning",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "中午",
      pinyin: "zhōngwǔ",
      meaning: "noon",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "下午",
      pinyin: "xiàwǔ",
      meaning: "afternoon",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "点",
      pinyin: "diǎn",
      meaning: "o'clock",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "分钟",
      pinyin: "fēnzhōng",
      meaning: "minute",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "岁",
      pinyin: "suì",
      meaning: "years old",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "年",
      pinyin: "nián",
      meaning: "year",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "月",
      pinyin: "yuè",
      meaning: "month",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "号",
      pinyin: "hào",
      meaning: "day of month (date)",
      category: "time",
      level: "HSK 1",
    },
    {
      hanzi: "家",
      pinyin: "jiā",
      meaning: "home / family",
      category: "places",
      level: "HSK 1",
    },
    {
      hanzi: "学校",
      pinyin: "xuéxiào",
      meaning: "school",
      category: "places",
      level: "HSK 1",
    },
    {
      hanzi: "医院",
      pinyin: "yīyuàn",
      meaning: "hospital",
      category: "places",
      level: "HSK 1",
    },
    {
      hanzi: "商店",
      pinyin: "shāngdiàn",
      meaning: "shop",
      category: "places",
      level: "HSK 1",
    },
    {
      hanzi: "饭馆",
      pinyin: "fànguǎn",
      meaning: "restaurant",
      category: "places",
      level: "HSK 1",
    },
    {
      hanzi: "北京",
      pinyin: "Běijīng",
      meaning: "Beijing",
      category: "places",
      level: "HSK 1",
    },
    {
      hanzi: "出租车",
      pinyin: "chūzūchē",
      meaning: "taxi",
      category: "transport",
      level: "HSK 1",
    },
    {
      hanzi: "火车站",
      pinyin: "huǒchēzhàn",
      meaning: "train station",
      category: "transport",
      level: "HSK 1",
    },
    {
      hanzi: "飞机",
      pinyin: "fēijī",
      meaning: "airplane",
      category: "transport",
      level: "HSK 1",
    },
    {
      hanzi: "水",
      pinyin: "shuǐ",
      meaning: "water",
      category: "food",
      level: "HSK 1",
    },
    {
      hanzi: "茶",
      pinyin: "chá",
      meaning: "tea",
      category: "food",
      level: "HSK 1",
    },
    {
      hanzi: "菜",
      pinyin: "cài",
      meaning: "dish / food",
      category: "food",
      level: "HSK 1",
    },
    {
      hanzi: "米饭",
      pinyin: "mǐfàn",
      meaning: "rice",
      category: "food",
      level: "HSK 1",
    },
    {
      hanzi: "苹果",
      pinyin: "píngguǒ",
      meaning: "apple",
      category: "food",
      level: "HSK 1",
    },
    {
      hanzi: "杯子",
      pinyin: "bēizi",
      meaning: "cup",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "钱",
      pinyin: "qián",
      meaning: "money",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "电脑",
      pinyin: "diànnǎo",
      meaning: "computer",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "电话",
      pinyin: "diànhuà",
      meaning: "telephone",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "电视",
      pinyin: "diànshì",
      meaning: "TV",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "电影",
      pinyin: "diànyǐng",
      meaning: "movie",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "桌子",
      pinyin: "zhuōzi",
      meaning: "table",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "椅子",
      pinyin: "yǐzi",
      meaning: "chair",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "衣服",
      pinyin: "yīfu",
      meaning: "clothes",
      category: "objects",
      level: "HSK 1",
    },
    {
      hanzi: "猫",
      pinyin: "māo",
      meaning: "cat",
      category: "animals",
      level: "HSK 1",
    },
    {
      hanzi: "狗",
      pinyin: "gǒu",
      meaning: "dog",
      category: "animals",
      level: "HSK 1",
    },
    {
      hanzi: "是",
      pinyin: "shì",
      meaning: "to be",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "有",
      pinyin: "yǒu",
      meaning: "to have",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "在",
      pinyin: "zài",
      meaning: "at / in",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "去",
      pinyin: "qù",
      meaning: "to go",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "来",
      pinyin: "lái",
      meaning: "to come",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "做",
      pinyin: "zuò",
      meaning: "to do",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "吃",
      pinyin: "chī",
      meaning: "to eat",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "喝",
      pinyin: "hē",
      meaning: "to drink",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "看",
      pinyin: "kàn",
      meaning: "to look",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "看见",
      pinyin: "kànjiàn",
      meaning: "to see",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "听",
      pinyin: "tīng",
      meaning: "to listen",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "说话",
      pinyin: "shuōhuà",
      meaning: "to speak",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "读",
      pinyin: "dú",
      meaning: "to read",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "写",
      pinyin: "xiě",
      meaning: "to write",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "买",
      pinyin: "mǎi",
      meaning: "to buy",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "坐",
      pinyin: "zuò",
      meaning: "to sit",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "住",
      pinyin: "zhù",
      meaning: "to live / stay",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "打电话",
      pinyin: "dǎ diànhuà",
      meaning: "to make a phone call",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "开",
      pinyin: "kāi",
      meaning: "to open / to drive",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "回",
      pinyin: "huí",
      meaning: "to return",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "进",
      pinyin: "jìn",
      meaning: "to enter",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "出",
      pinyin: "chū",
      meaning: "to exit",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "到",
      pinyin: "dào",
      meaning: "to arrive",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "走",
      pinyin: "zǒu",
      meaning: "to walk",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "跑步",
      pinyin: "pǎobù",
      meaning: "to run",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "想",
      pinyin: "xiǎng",
      meaning: "to want / think",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "认识",
      pinyin: "rènshi",
      meaning: "to know (a person)",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "知道",
      pinyin: "zhīdào",
      meaning: "to know (a fact)",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "会",
      pinyin: "huì",
      meaning: "can (learned skill)",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "能",
      pinyin: "néng",
      meaning: "can (ability)",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "爱",
      pinyin: "ài",
      meaning: "to love",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "喜欢",
      pinyin: "xǐhuan",
      meaning: "to like",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "觉得",
      pinyin: "juéde",
      meaning: "to feel / think",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "让",
      pinyin: "ràng",
      meaning: "to let / allow",
      category: "verbs",
      level: "HSK 1",
    },
    {
      hanzi: "大",
      pinyin: "dà",
      meaning: "big",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "小",
      pinyin: "xiǎo",
      meaning: "small",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "多",
      pinyin: "duō",
      meaning: "many",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "少",
      pinyin: "shǎo",
      meaning: "few",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "冷",
      pinyin: "lěng",
      meaning: "cold",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "热",
      pinyin: "rè",
      meaning: "hot",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "高",
      pinyin: "gāo",
      meaning: "tall",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "漂亮",
      pinyin: "piàoliang",
      meaning: "pretty",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "好",
      pinyin: "hǎo",
      meaning: "good",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "坏",
      pinyin: "huài",
      meaning: "bad",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "忙",
      pinyin: "máng",
      meaning: "busy",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "高兴",
      pinyin: "gāoxìng",
      meaning: "happy",
      category: "adjectives",
      level: "HSK 1",
    },
    {
      hanzi: "里",
      pinyin: "lǐ",
      meaning: "inside",
      category: "locations",
      level: "HSK 1",
    },
    {
      hanzi: "上",
      pinyin: "shàng",
      meaning: "on / above",
      category: "locations",
      level: "HSK 1",
    },
    {
      hanzi: "下",
      pinyin: "xià",
      meaning: "below / under",
      category: "locations",
      level: "HSK 1",
    },
    {
      hanzi: "前面",
      pinyin: "qiánmiàn",
      meaning: "in front",
      category: "locations",
      level: "HSK 1",
    },
    {
      hanzi: "后面",
      pinyin: "hòumiàn",
      meaning: "behind",
      category: "locations",
      level: "HSK 1",
    },
    {
      hanzi: "了",
      pinyin: "le",
      meaning: "completion particle",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "吗",
      pinyin: "ma",
      meaning: "question particle",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "呢",
      pinyin: "ne",
      meaning: "question particle",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "的",
      pinyin: "de",
      meaning: "possessive particle",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "和",
      pinyin: "hé",
      meaning: "and",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "很",
      pinyin: "hěn",
      meaning: "very",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "不",
      pinyin: "bù",
      meaning: "not",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "没",
      pinyin: "méi",
      meaning: "not (for 有 or past actions)",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "东西",
      pinyin: "dōngxi",
      meaning: "thing",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "医生",
      pinyin: "yīshēng",
      meaning: "doctor",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "朋友",
      pinyin: "péngyou",
      meaning: "friend",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "学生",
      pinyin: "xuésheng",
      meaning: "student",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "老师",
      pinyin: "lǎoshī",
      meaning: "teacher",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "汉语",
      pinyin: "Hànyǔ",
      meaning: "Chinese language",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "中国",
      pinyin: "Zhōngguó",
      meaning: "China",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "事",
      pinyin: "shì",
      meaning: "matter/thing",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "名字",
      pinyin: "míngzi",
      meaning: "name",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "水果",
      pinyin: "shuǐguǒ",
      meaning: "fruit",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "天气",
      pinyin: "tiānqì",
      meaning: "weather",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "星期",
      pinyin: "xīngqī",
      meaning: "week",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "运动",
      pinyin: "yùndòng",
      meaning: "sports",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "说",
      pinyin: "shuō",
      meaning: "to speak",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "工作",
      pinyin: "gōngzuò",
      meaning: "work/job",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "学习",
      pinyin: "xuéxí",
      meaning: "study",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "饭店",
      pinyin: "fàndiàn",
      meaning: "restaurant",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "时候",
      pinyin: "shíhou",
      meaning: "time/moment",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "再见",
      pinyin: "zàijiàn",
      meaning: "goodbye",
      category: "other",
      level: "HSK 1",
    },
    {
      hanzi: "请",
      pinyin: "qǐng",
      meaning: "please / invite",
      category: "other",
      level: "HSK 1",
    },
  ];

  // HSK 2 vocabulary
  const hsk2Words = [
    {
      hanzi: "爸爸",
      pinyin: "bàba",
      meaning: "father",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "妈妈",
      pinyin: "māma",
      meaning: "mother",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "儿子",
      pinyin: "érzi",
      meaning: "son",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "女儿",
      pinyin: "nǚ'ér",
      meaning: "daughter",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "哥哥",
      pinyin: "gēge",
      meaning: "older brother",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "弟弟",
      pinyin: "dìdi",
      meaning: "younger brother",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "姐姐",
      pinyin: "jiějie",
      meaning: "older sister",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "妹妹",
      pinyin: "mèimei",
      meaning: "younger sister",
      category: "family",
      level: "HSK 2",
    },
    {
      hanzi: "男人",
      pinyin: "nánrén",
      meaning: "man",
      category: "people",
      level: "HSK 2",
    },
    {
      hanzi: "女人",
      pinyin: "nǚrén",
      meaning: "woman",
      category: "people",
      level: "HSK 2",
    },
    {
      hanzi: "孩子",
      pinyin: "háizi",
      meaning: "child",
      category: "people",
      level: "HSK 2",
    },
    {
      hanzi: "先生",
      pinyin: "xiānsheng",
      meaning: "Mr., husband",
      category: "people",
      level: "HSK 2",
    },
    {
      hanzi: "小姐",
      pinyin: "xiǎojiě",
      meaning: "Miss, young lady",
      category: "people",
      level: "HSK 2",
    },
    {
      hanzi: "小时",
      pinyin: "xiǎoshí",
      meaning: "hour",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "时间",
      pinyin: "shíjiān",
      meaning: "time",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "早上",
      pinyin: "zǎoshang",
      meaning: "morning",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "晚上",
      pinyin: "wǎnshang",
      meaning: "evening, night",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "去年",
      pinyin: "qùnián",
      meaning: "last year",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "明年",
      pinyin: "míngnián",
      meaning: "next year",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "后来",
      pinyin: "hòulái",
      meaning: "afterwards",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "以前",
      pinyin: "yǐqián",
      meaning: "before, previously",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "以后",
      pinyin: "yǐhòu",
      meaning: "after, later",
      category: "time",
      level: "HSK 2",
    },
    {
      hanzi: "公司",
      pinyin: "gōngsī",
      meaning: "company",
      category: "places",
      level: "HSK 2",
    },
    {
      hanzi: "房间",
      pinyin: "fángjiān",
      meaning: "room",
      category: "places",
      level: "HSK 2",
    },
    {
      hanzi: "门口",
      pinyin: "ménkǒu",
      meaning: "doorway, entrance",
      category: "places",
      level: "HSK 2",
    },
    {
      hanzi: "旁边",
      pinyin: "pángbiān",
      meaning: "side, beside",
      category: "locations",
      level: "HSK 2",
    },
    {
      hanzi: "左边",
      pinyin: "zuǒbian",
      meaning: "left side",
      category: "locations",
      level: "HSK 2",
    },
    {
      hanzi: "右边",
      pinyin: "yòubian",
      meaning: "right side",
      category: "locations",
      level: "HSK 2",
    },
    {
      hanzi: "外面",
      pinyin: "wàimiàn",
      meaning: "outside",
      category: "locations",
      level: "HSK 2",
    },
    {
      hanzi: "里面",
      pinyin: "lǐmiàn",
      meaning: "inside",
      category: "locations",
      level: "HSK 2",
    },
    {
      hanzi: "水果",
      pinyin: "shuǐguǒ",
      meaning: "fruit",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "牛奶",
      pinyin: "niúnǎi",
      meaning: "milk",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "面包",
      pinyin: "miànbāo",
      meaning: "bread",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "鸡蛋",
      pinyin: "jīdàn",
      meaning: "egg",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "肉",
      pinyin: "ròu",
      meaning: "meat",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "鱼",
      pinyin: "yú",
      meaning: "fish",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "糖",
      pinyin: "táng",
      meaning: "sugar, candy",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "盐",
      pinyin: "yán",
      meaning: "salt",
      category: "food",
      level: "HSK 2",
    },
    {
      hanzi: "门",
      pinyin: "mén",
      meaning: "door",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "窗",
      pinyin: "chuāng",
      meaning: "window",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "床",
      pinyin: "chuáng",
      meaning: "bed",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "灯",
      pinyin: "dēng",
      meaning: "light, lamp",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "钥匙",
      pinyin: "yàoshi",
      meaning: "key",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "纸",
      pinyin: "zhǐ",
      meaning: "paper",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "笔",
      pinyin: "bǐ",
      meaning: "pen",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "包",
      pinyin: "bāo",
      meaning: "bag, package",
      category: "objects",
      level: "HSK 2",
    },
    {
      hanzi: "鞋",
      pinyin: "xié",
      meaning: "shoes",
      category: "clothing",
      level: "HSK 2",
    },
    {
      hanzi: "帽子",
      pinyin: "màozi",
      meaning: "hat, cap",
      category: "clothing",
      level: "HSK 2",
    },
    {
      hanzi: "裤子",
      pinyin: "kùzi",
      meaning: "pants",
      category: "clothing",
      level: "HSK 2",
    },
    {
      hanzi: "裙子",
      pinyin: "qúnzi",
      meaning: "skirt",
      category: "clothing",
      level: "HSK 2",
    },
    {
      hanzi: "红",
      pinyin: "hóng",
      meaning: "red",
      category: "colors",
      level: "HSK 2",
    },
    {
      hanzi: "黄",
      pinyin: "huáng",
      meaning: "yellow",
      category: "colors",
      level: "HSK 2",
    },
    {
      hanzi: "蓝",
      pinyin: "lán",
      meaning: "blue",
      category: "colors",
      level: "HSK 2",
    },
    {
      hanzi: "白",
      pinyin: "bái",
      meaning: "white",
      category: "colors",
      level: "HSK 2",
    },
    {
      hanzi: "黑",
      pinyin: "hēi",
      meaning: "black",
      category: "colors",
      level: "HSK 2",
    },
    {
      hanzi: "绿",
      pinyin: "lǜ",
      meaning: "green",
      category: "colors",
      level: "HSK 2",
    },
    {
      hanzi: "百",
      pinyin: "bǎi",
      meaning: "hundred",
      category: "numbers",
      level: "HSK 2",
    },
    {
      hanzi: "千",
      pinyin: "qiān",
      meaning: "thousand",
      category: "numbers",
      level: "HSK 2",
    },
    {
      hanzi: "零",
      pinyin: "líng",
      meaning: "zero",
      category: "numbers",
      level: "HSK 2",
    },
    {
      hanzi: "块",
      pinyin: "kuài",
      meaning: "yuan (money), piece",
      category: "measure",
      level: "HSK 2",
    },
    {
      hanzi: "元",
      pinyin: "yuán",
      meaning: "yuan (formal)",
      category: "measure",
      level: "HSK 2",
    },
    {
      hanzi: "件",
      pinyin: "jiàn",
      meaning: "item (for clothes, matters)",
      category: "measure",
      level: "HSK 2",
    },
    {
      hanzi: "张",
      pinyin: "zhāng",
      meaning: "sheet (for paper, tickets)",
      category: "measure",
      level: "HSK 2",
    },
    {
      hanzi: "只",
      pinyin: "zhī",
      meaning: "measure for animals, one of a pair",
      category: "measure",
      level: "HSK 2",
    },
    {
      hanzi: "帮助",
      pinyin: "bāngzhù",
      meaning: "to help",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "告诉",
      pinyin: "gàosu",
      meaning: "to tell",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "问",
      pinyin: "wèn",
      meaning: "to ask",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "回答",
      pinyin: "huídá",
      meaning: "to answer",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "说话",
      pinyin: "shuōhuà",
      meaning: "to speak",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "等",
      pinyin: "děng",
      meaning: "to wait",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "送",
      pinyin: "sòng",
      meaning: "to give, send",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "给",
      pinyin: "gěi",
      meaning: "to give",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "找",
      pinyin: "zhǎo",
      meaning: "to look for",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "用",
      pinyin: "yòng",
      meaning: "to use",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "玩",
      pinyin: "wán",
      meaning: "to play",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "跳舞",
      pinyin: "tiàowǔ",
      meaning: "to dance",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "唱歌",
      pinyin: "chànggē",
      meaning: "to sing",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "游泳",
      pinyin: "yóuyǒng",
      meaning: "to swim",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "运动",
      pinyin: "yùndòng",
      meaning: "to exercise",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "休息",
      pinyin: "xiūxi",
      meaning: "to rest",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "睡觉",
      pinyin: "shuìjiào",
      meaning: "to sleep",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "起床",
      pinyin: "qǐchuáng",
      meaning: "to get up",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "洗澡",
      pinyin: "xǐzǎo",
      meaning: "to bathe, shower",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "结婚",
      pinyin: "jiéhūn",
      meaning: "to marry",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "工作",
      pinyin: "gōngzuò",
      meaning: "to work",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "学习",
      pinyin: "xuéxí",
      meaning: "to study",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "教",
      pinyin: "jiāo",
      meaning: "to teach",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "开始",
      pinyin: "kāishǐ",
      meaning: "to begin",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "结束",
      pinyin: "jiéshù",
      meaning: "to end",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "完",
      pinyin: "wán",
      meaning: "to finish",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "懂",
      pinyin: "dǒng",
      meaning: "to understand",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "觉得",
      pinyin: "juéde",
      meaning: "to feel, think",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "希望",
      pinyin: "xīwàng",
      meaning: "to hope",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "要",
      pinyin: "yào",
      meaning: "to want, need",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "可以",
      pinyin: "kěyǐ",
      meaning: "can, may",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "应该",
      pinyin: "yīnggāi",
      meaning: "should",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "可能",
      pinyin: "kěnéng",
      meaning: "may, might",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "快",
      pinyin: "kuài",
      meaning: "fast",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "慢",
      pinyin: "màn",
      meaning: "slow",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "新",
      pinyin: "xīn",
      meaning: "new",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "旧",
      pinyin: "jiù",
      meaning: "old",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "长",
      pinyin: "cháng",
      meaning: "long",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "短",
      pinyin: "duǎn",
      meaning: "short",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "远",
      pinyin: "yuǎn",
      meaning: "far",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "近",
      pinyin: "jìn",
      meaning: "near",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "贵",
      pinyin: "guì",
      meaning: "expensive",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "便宜",
      pinyin: "piányi",
      meaning: "cheap",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "难",
      pinyin: "nán",
      meaning: "difficult",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "容易",
      pinyin: "róngyì",
      meaning: "easy",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "累",
      pinyin: "lèi",
      meaning: "tired",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "饿",
      pinyin: "è",
      meaning: "hungry",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "渴",
      pinyin: "kě",
      meaning: "thirsty",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "困",
      pinyin: "kùn",
      meaning: "sleepy",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "忙",
      pinyin: "máng",
      meaning: "busy",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "安静",
      pinyin: "ānjìng",
      meaning: "quiet",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "干净",
      pinyin: "gānjìng",
      meaning: "clean",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "脏",
      pinyin: "zāng",
      meaning: "dirty",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "对",
      pinyin: "duì",
      meaning: "correct",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "错",
      pinyin: "cuò",
      meaning: "wrong",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "真",
      pinyin: "zhēn",
      meaning: "real, true",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "假",
      pinyin: "jiǎ",
      meaning: "fake",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "重要",
      pinyin: "zhòngyào",
      meaning: "important",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "特别",
      pinyin: "tèbié",
      meaning: "special",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "一样",
      pinyin: "yíyàng",
      meaning: "same",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "不同",
      pinyin: "bùtóng",
      meaning: "different",
      category: "adjectives",
      level: "HSK 2",
    },
    {
      hanzi: "很",
      pinyin: "hěn",
      meaning: "very",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "太",
      pinyin: "tài",
      meaning: "too",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "最",
      pinyin: "zuì",
      meaning: "most",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "更",
      pinyin: "gèng",
      meaning: "more",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "还",
      pinyin: "hái",
      meaning: "still, also",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "就",
      pinyin: "jiù",
      meaning: "just, then",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "才",
      pinyin: "cái",
      meaning: "only then",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "一起",
      pinyin: "yìqǐ",
      meaning: "together",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "也",
      pinyin: "yě",
      meaning: "also",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "都",
      pinyin: "dōu",
      meaning: "all, both",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "只",
      pinyin: "zhǐ",
      meaning: "only",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "已经",
      pinyin: "yǐjīng",
      meaning: "already",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "正在",
      pinyin: "zhèngzài",
      meaning: "in the process of",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "总是",
      pinyin: "zǒngshì",
      meaning: "always",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "有时候",
      pinyin: "yǒu shíhou",
      meaning: "sometimes",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "然后",
      pinyin: "ránhòu",
      meaning: "then, after that",
      category: "connectives",
      level: "HSK 2",
    },
    {
      hanzi: "因为",
      pinyin: "yīnwèi",
      meaning: "because",
      category: "connectives",
      level: "HSK 2",
    },
    {
      hanzi: "所以",
      pinyin: "suǒyǐ",
      meaning: "so, therefore",
      category: "connectives",
      level: "HSK 2",
    },
    {
      hanzi: "但是",
      pinyin: "dànshì",
      meaning: "but",
      category: "connectives",
      level: "HSK 2",
    },
    {
      hanzi: "如果",
      pinyin: "rúguǒ",
      meaning: "if",
      category: "connectives",
      level: "HSK 2",
    },
    {
      hanzi: "为什么",
      pinyin: "wèishénme",
      meaning: "why",
      category: "questions",
      level: "HSK 2",
    },
    {
      hanzi: "怎么",
      pinyin: "zěnme",
      meaning: "how",
      category: "questions",
      level: "HSK 2",
    },
    {
      hanzi: "哪",
      pinyin: "nǎ",
      meaning: "which",
      category: "questions",
      level: "HSK 2",
    },
    {
      hanzi: "哪个",
      pinyin: "nǎge",
      meaning: "which one",
      category: "questions",
      level: "HSK 2",
    },
    {
      hanzi: "哪些",
      pinyin: "nǎxiē",
      meaning: "which ones",
      category: "questions",
      level: "HSK 2",
    },
    {
      hanzi: "东西",
      pinyin: "dōngxi",
      meaning: "thing",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "事情",
      pinyin: "shìqing",
      meaning: "matter, affair",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "问题",
      pinyin: "wèntí",
      meaning: "question, problem",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "意思",
      pinyin: "yìsi",
      meaning: "meaning",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "名字",
      pinyin: "míngzi",
      meaning: "name",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "钱",
      pinyin: "qián",
      meaning: "money",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "号",
      pinyin: "hào",
      meaning: "number, date",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "身体",
      pinyin: "shēntǐ",
      meaning: "body, health",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "生活",
      pinyin: "shēnghuó",
      meaning: "life, living",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "生日",
      pinyin: "shēngrì",
      meaning: "birthday",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "礼物",
      pinyin: "lǐwù",
      meaning: "gift",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "故事",
      pinyin: "gùshi",
      meaning: "story",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "新闻",
      pinyin: "xīnwén",
      meaning: "news",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "音乐",
      pinyin: "yīnyuè",
      meaning: "music",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "电影",
      pinyin: "diànyǐng",
      meaning: "movie",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "天气",
      pinyin: "tiānqì",
      meaning: "weather",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "季节",
      pinyin: "jìjié",
      meaning: "season",
      category: "other",
      level: "HSK 2",
    },
    {
      hanzi: "春天",
      pinyin: "chūntiān",
      meaning: "spring",
      category: "seasons",
      level: "HSK 2",
    },
    {
      hanzi: "夏天",
      pinyin: "xiàtiān",
      meaning: "summer",
      category: "seasons",
      level: "HSK 2",
    },
    {
      hanzi: "秋天",
      pinyin: "qiūtiān",
      meaning: "autumn",
      category: "seasons",
      level: "HSK 2",
    },
    {
      hanzi: "冬天",
      pinyin: "dōngtiān",
      meaning: "winter",
      category: "seasons",
      level: "HSK 2",
    },
    {
      hanzi: "东",
      pinyin: "dōng",
      meaning: "east",
      category: "directions",
      level: "HSK 2",
    },
    {
      hanzi: "西",
      pinyin: "xī",
      meaning: "west",
      category: "directions",
      level: "HSK 2",
    },
    {
      hanzi: "南",
      pinyin: "nán",
      meaning: "south",
      category: "directions",
      level: "HSK 2",
    },
    {
      hanzi: "北",
      pinyin: "běi",
      meaning: "north",
      category: "directions",
      level: "HSK 2",
    },
    {
      hanzi: "汽车",
      pinyin: "qìchē",
      meaning: "car",
      category: "transportation",
      level: "HSK 2",
    },
    {
      hanzi: "公共汽车",
      pinyin: "gōnggòng qìchē",
      meaning: "bus",
      category: "transportation",
      level: "HSK 2",
    },
    {
      hanzi: "地铁",
      pinyin: "dìtiě",
      meaning: "subway",
      category: "transportation",
      level: "HSK 2",
    },
    {
      hanzi: "自行车",
      pinyin: "zìxíngchē",
      meaning: "bicycle",
      category: "transportation",
      level: "HSK 2",
    },
    {
      hanzi: "英国",
      pinyin: "Yīngguó",
      meaning: "England, UK",
      category: "countries",
      level: "HSK 2",
    },
    {
      hanzi: "美国",
      pinyin: "Měiguó",
      meaning: "America, USA",
      category: "countries",
      level: "HSK 2",
    },
    {
      hanzi: "法国",
      pinyin: "Fǎguó",
      meaning: "France",
      category: "countries",
      level: "HSK 2",
    },
    {
      hanzi: "德国",
      pinyin: "Déguó",
      meaning: "Germany",
      category: "countries",
      level: "HSK 2",
    },
    {
      hanzi: "日本",
      pinyin: "Rìběn",
      meaning: "Japan",
      category: "countries",
      level: "HSK 2",
    },
    {
      hanzi: "韩国",
      pinyin: "Hánguó",
      meaning: "Korea",
      category: "countries",
      level: "HSK 2",
    },
    {
      hanzi: "英语",
      pinyin: "Yīngyǔ",
      meaning: "English",
      category: "languages",
      level: "HSK 2",
    },
    {
      hanzi: "法语",
      pinyin: "Fǎyǔ",
      meaning: "French",
      category: "languages",
      level: "HSK 2",
    },
    {
      hanzi: "日语",
      pinyin: "Rìyǔ",
      meaning: "Japanese",
      category: "languages",
      level: "HSK 2",
    },
    {
      hanzi: "韩语",
      pinyin: "Hányǔ",
      meaning: "Korean",
      category: "languages",
      level: "HSK 2",
    },
    {
      hanzi: "学校",
      pinyin: "xuéxiào",
      meaning: "school",
      category: "education",
      level: "HSK 2",
    },
    {
      hanzi: "大学",
      pinyin: "dàxué",
      meaning: "university",
      category: "education",
      level: "HSK 2",
    },
    {
      hanzi: "教室",
      pinyin: "jiàoshì",
      meaning: "classroom",
      category: "education",
      level: "HSK 2",
    },
    {
      hanzi: "考试",
      pinyin: "kǎoshì",
      meaning: "exam",
      category: "education",
      level: "HSK 2",
    },
    {
      hanzi: "成绩",
      pinyin: "chéngjì",
      meaning: "grade, score",
      category: "education",
      level: "HSK 2",
    },
    {
      hanzi: "商店",
      pinyin: "shāngdiàn",
      meaning: "shop, store",
      category: "shopping",
      level: "HSK 2",
    },
    {
      hanzi: "超市",
      pinyin: "chāoshì",
      meaning: "supermarket",
      category: "shopping",
      level: "HSK 2",
    },
    {
      hanzi: "市场",
      pinyin: "shìchǎng",
      meaning: "market",
      category: "shopping",
      level: "HSK 2",
    },
    {
      hanzi: "医院",
      pinyin: "yīyuàn",
      meaning: "hospital",
      category: "health",
      level: "HSK 2",
    },
    {
      hanzi: "医生",
      pinyin: "yīshēng",
      meaning: "doctor",
      category: "health",
      level: "HSK 2",
    },
    {
      hanzi: "药",
      pinyin: "yào",
      meaning: "medicine",
      category: "health",
      level: "HSK 2",
    },
    {
      hanzi: "生病",
      pinyin: "shēngbìng",
      meaning: "to get sick",
      category: "health",
      level: "HSK 2",
    },
    {
      hanzi: "健康",
      pinyin: "jiànkāng",
      meaning: "health, healthy",
      category: "health",
      level: "HSK 2",
    },
    {
      hanzi: "高兴",
      pinyin: "gāoxìng",
      meaning: "happy",
      category: "emotions",
      level: "HSK 2",
    },
    {
      hanzi: "快乐",
      pinyin: "kuàilè",
      meaning: "happy, joyful",
      category: "emotions",
      level: "HSK 2",
    },
    {
      hanzi: "难过",
      pinyin: "nánguò",
      meaning: "sad",
      category: "emotions",
      level: "HSK 2",
    },
    {
      hanzi: "生气",
      pinyin: "shēngqì",
      meaning: "angry",
      category: "emotions",
      level: "HSK 2",
    },
    {
      hanzi: "害怕",
      pinyin: "hàipà",
      meaning: "afraid",
      category: "emotions",
      level: "HSK 2",
    },
    {
      hanzi: "紧张",
      pinyin: "jǐnzhāng",
      meaning: "nervous",
      category: "emotions",
      level: "HSK 2",
    },
    {
      hanzi: "舒服",
      pinyin: "shūfu",
      meaning: "comfortable",
      category: "emotions",
      level: "HSK 2",
    },
    {
      hanzi: "不好意思",
      pinyin: "bù hǎoyìsi",
      meaning: "embarrassed, sorry",
      category: "emotions",
      level: "HSK 2",
    },
  ];

  allWords = [...hsk1Words, ...hsk2Words];
  updateFilteredWords();
  statsTotal.textContent = allWords.length;
}

// NEW: Function to populate categories
function populateCategories() {
  // Get unique categories from all words
  const categories = [...new Set(allWords.map((word) => word.category))];
  categories.sort();

  // Clear existing category buttons (except "All")
  while (categoryFilters.children.length > 1) {
    categoryFilters.removeChild(categoryFilters.lastChild);
  }

  // Add category buttons
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.dataset.category = category;
    button.textContent = getCategoryDisplayName(category);
    categoryFilters.appendChild(button);
  });
}

// NEW: Function to get display name for categories
function getCategoryDisplayName(category) {
  const categoryNames = {
    pronouns: "Pronouns",
    questions: "Questions",
    numbers: "Numbers",
    measure: "Measure Words",
    time: "Time",
    places: "Places",
    transport: "Transport",
    food: "Food",
    objects: "Objects",
    animals: "Animals",
    verbs: "Verbs",
    adjectives: "Adjectives",
    locations: "Locations",
    particles: "Particles",
    other: "Other",
    family: "Family",
    people: "People",
    clothing: "Clothing",
    colors: "Colors",
    adverbs: "Adverbs",
    connectives: "Connectives",
    education: "Education",
    shopping: "Shopping",
    health: "Health",
    emotions: "Emotions",
    seasons: "Seasons",
    directions: "Directions",
    transportation: "Transportation",
    countries: "Countries",
    languages: "Languages",
  };

  return (
    categoryNames[category] ||
    category.charAt(0).toUpperCase() + category.slice(1)
  );
}

// UPDATED: Filter words based on level AND category
function updateFilteredWords() {
  // First filter by level
  let filteredByLevel =
    currentFilter === "all"
      ? [...allWords]
      : allWords.filter((word) => word.level === currentFilter);

  // Then filter by category
  filteredWords =
    currentCategory === "all"
      ? filteredByLevel
      : filteredByLevel.filter((word) => word.category === currentCategory);

  // Apply sorting
  applySorting();

  statsFiltered.textContent = filteredWords.length;
}

// NEW: Function to apply sorting
function applySorting() {
  switch (currentSort) {
    case "random":
      filteredWords = filteredWords.sort(() => Math.random() - 0.5);
      break;
    case "alphabetical":
      filteredWords.sort((a, b) => a.hanzi.localeCompare(b.hanzi));
      break;
    case "reverse":
      filteredWords.sort((a, b) => b.hanzi.localeCompare(a.hanzi));
      break;
    case "pinyin":
      filteredWords.sort((a, b) => a.pinyin.localeCompare(b.pinyin));
      break;
    case "category":
      filteredWords.sort((a, b) => {
        const categoryA = getCategoryDisplayName(a.category);
        const categoryB = getCategoryDisplayName(b.category);
        if (categoryA === categoryB) {
          return a.hanzi.localeCompare(b.hanzi);
        }
        return categoryA.localeCompare(categoryB);
      });
      break;
  }
}

function setupEventListeners() {
  themeToggle.addEventListener("click", toggleTheme);
  playBtn.addEventListener("click", () => playRandomWord());
  showBtn.addEventListener("click", toggleWordDisplay);
  nextBtn.addEventListener("click", () => {
    resetRepeatCount();
    playRandomWord();
  });
  repeatBtn.addEventListener("click", repeatCurrentWord);
  clearHistoryBtn.addEventListener("click", clearHistory);

  // HSK Level filter buttons
  const hskFilterButtons = document.querySelectorAll(
    ".filter-btn[data-filter]"
  );
  hskFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      hskFilterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      currentFilter = button.dataset.filter;
      updateFilteredWords();
    });
  });

  // NEW: Category filter buttons
  document.addEventListener("click", (e) => {
    if (e.target.matches(".filter-btn[data-category]")) {
      const categoryButtons = document.querySelectorAll(
        ".filter-btn[data-category]"
      );
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      updateFilteredWords();
    }
  });

  // NEW: Sort buttons
  const sortButtons = document.querySelectorAll(".filter-btn[data-sort]");
  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sortButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      currentSort = button.dataset.sort;
      updateFilteredWords();
    });
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      playRandomWord();
    } else if (e.code === "KeyS") {
      e.preventDefault();
      toggleWordDisplay();
    } else if (e.code === "KeyN") {
      e.preventDefault();
      resetRepeatCount();
      playRandomWord();
    } else if (e.code === "KeyR") {
      e.preventDefault();
      repeatCurrentWord();
    }
  });
}

function playRandomWord() {
  if (filteredWords.length === 0) {
    alert(`No words available with current filters!`);
    return;
  }

  // Hide previous word
  showWord = false;
  wordReveal.classList.remove("show");
  showBtn.textContent = "Show Word";

  // Get random word from filtered list
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  currentWord = filteredWords[randomIndex];

  // Reset repeat count
  repeatCount = 0;
  updateRepeatCount();

  // Show loading
  audioLoading.classList.add("active");
  playBtn.disabled = true;
  playBtn.style.opacity = "0.5";

  // Play audio after a short delay
  setTimeout(() => {
    speakWord(currentWord.hanzi);

    // Add to history (only on first play)
    addToHistory(currentWord);

    // Update stats
    updateStats();

    // Remove loading state
    setTimeout(() => {
      audioLoading.classList.remove("active");
      playBtn.disabled = false;
      playBtn.style.opacity = "1";
    }, 1000);
  }, 500);
}

function repeatCurrentWord() {
  if (!currentWord) {
    alert("Please select a word first!");
    return;
  }

  repeatCount++;
  updateRepeatCount();
  speakWord(currentWord.hanzi);

  // Add to history on each repeat
  addToHistory(currentWord);
}

function updateRepeatCount() {
  repeatCountElement.textContent = repeatCount;
  repeatInfo.style.display = repeatCount > 0 ? "block" : "none";
}

function resetRepeatCount() {
  repeatCount = 0;
  updateRepeatCount();
}

function speakWord(text) {
  if (!synth) {
    alert("Text-to-speech not supported in your browser");
    return;
  }

  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = voiceRates[currentRate];
  utterance.volume = 1;

  const voices = synth.getVoices();
  const chineseVoice = voices.find(
    (voice) => voice.lang === "zh-CN" || voice.lang === "zh-TW"
  );

  if (chineseVoice) {
    utterance.voice = chineseVoice;
  }

  synth.speak(utterance);
}

function toggleWordDisplay() {
  if (!currentWord) {
    alert("Please play a word first!");
    return;
  }

  showWord = !showWord;

  if (showWord) {
    revealedHanzi.textContent = currentWord.hanzi;
    revealedPinyin.textContent = currentWord.pinyin;
    revealedMeaning.textContent = currentWord.meaning;
    revealedCategory.textContent = getCategoryDisplayName(currentWord.category);
    revealedLevel.textContent = currentWord.level;
    wordReveal.classList.add("show");
    showBtn.textContent = "Hide Word";
  } else {
    wordReveal.classList.remove("show");
    showBtn.textContent = "Show Word";
  }
}

function addToHistory(word) {
  const historyItem = {
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    category: word.category,
    level: word.level,
    timestamp: new Date().toISOString(),
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  playHistory.unshift(historyItem);

  if (playHistory.length > 50) {
    playHistory.pop();
  }

  savePlayHistory();
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  historyList.innerHTML = "";

  if (playHistory.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "history-empty";
    emptyMessage.textContent = "No words played yet. Click play to start!";
    historyList.appendChild(emptyMessage);
    return;
  }

  playHistory.forEach((item) => {
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";

    historyItem.innerHTML = `
      <div class="history-hanzi">${item.hanzi}</div>
      <div class="history-details">
        <div class="history-pinyin">${item.pinyin}</div>
        <div class="history-meaning">${item.meaning}</div>
        <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
          ${item.level} • ${getCategoryDisplayName(item.category)} • ${
      item.time
    }
        </div>
      </div>
    `;

    historyList.appendChild(historyItem);
  });
}

function clearHistory() {
  if (confirm("Clear all playback history?")) {
    playHistory = [];
    savePlayHistory();
    updateHistoryDisplay();
    updateStats();
  }
}

function updateStats() {
  const uniqueWords = new Set(playHistory.map((item) => item.hanzi));
  statsPlayed.textContent = playHistory.length;
  statsUnique.textContent = uniqueWords.size;
}

function savePlayHistory() {
  localStorage.setItem("listeningPlayHistory", JSON.stringify(playHistory));
}

function loadPlayHistory() {
  const saved = localStorage.getItem("listeningPlayHistory");
  if (saved) {
    playHistory = JSON.parse(saved);
    updateHistoryDisplay();
  }
}

function toggleTheme() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  localStorage.setItem("darkMode", isDarkMode);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("darkMode");
  if (savedTheme !== null) {
    const isDarkMode = JSON.parse(savedTheme);
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", init);
