// HSK 1 Vocabulary Data - All 150 words
const hsk1Vocabulary = [
  // People & Pronouns (人称代词)
  { hanzi: "我", pinyin: "wǒ", meaning: "I, me", category: "pronouns" },
  { hanzi: "我们", pinyin: "wǒmen", meaning: "we, us", category: "pronouns" },
  { hanzi: "你", pinyin: "nǐ", meaning: "you", category: "pronouns" },
  {
    hanzi: "你们",
    pinyin: "nǐmen",
    meaning: "you (plural)",
    category: "pronouns",
  },
  { hanzi: "他", pinyin: "tā", meaning: "he, him", category: "pronouns" },
  { hanzi: "她", pinyin: "tā", meaning: "she, her", category: "pronouns" },
  {
    hanzi: "他们",
    pinyin: "tāmen",
    meaning: "they (male/mixed)",
    category: "pronouns",
  },
  {
    hanzi: "她们",
    pinyin: "tāmen",
    meaning: "they (female)",
    category: "pronouns",
  },

  // Question Words (疑问词)
  { hanzi: "哪", pinyin: "nǎ", meaning: "which", category: "questions" },
  { hanzi: "哪儿", pinyin: "nǎr", meaning: "where", category: "questions" },
  { hanzi: "谁", pinyin: "shéi", meaning: "who", category: "questions" },
  { hanzi: "什么", pinyin: "shénme", meaning: "what", category: "questions" },
  { hanzi: "怎么", pinyin: "zěnme", meaning: "how", category: "questions" },
  {
    hanzi: "怎么样",
    pinyin: "zěnmeyàng",
    meaning: "how about / how is it",
    category: "questions",
  },
  {
    hanzi: "几",
    pinyin: "jǐ",
    meaning: "how many (small numbers)",
    category: "questions",
  },
  {
    hanzi: "多少",
    pinyin: "duōshao",
    meaning: "how many / how much",
    category: "questions",
  },

  // Numbers (数字)
  { hanzi: "一", pinyin: "yī", meaning: "1", category: "numbers" },
  { hanzi: "二", pinyin: "èr", meaning: "2", category: "numbers" },
  { hanzi: "三", pinyin: "sān", meaning: "3", category: "numbers" },
  { hanzi: "四", pinyin: "sì", meaning: "4", category: "numbers" },
  { hanzi: "五", pinyin: "wǔ", meaning: "5", category: "numbers" },
  { hanzi: "六", pinyin: "liù", meaning: "6", category: "numbers" },
  { hanzi: "七", pinyin: "qī", meaning: "7", category: "numbers" },
  { hanzi: "八", pinyin: "bā", meaning: "8", category: "numbers" },
  { hanzi: "九", pinyin: "jiǔ", meaning: "9", category: "numbers" },
  { hanzi: "十", pinyin: "shí", meaning: "10", category: "numbers" },

  // Measure Words (量词)
  {
    hanzi: "个",
    pinyin: "gè",
    meaning: "(general classifier)",
    category: "measure",
  },
  {
    hanzi: "本",
    pinyin: "běn",
    meaning: "classifier for books",
    category: "measure",
  },

  // Time Words (时间词)
  { hanzi: "今天", pinyin: "jīntiān", meaning: "today", category: "time" },
  { hanzi: "明天", pinyin: "míngtiān", meaning: "tomorrow", category: "time" },
  { hanzi: "昨天", pinyin: "zuótiān", meaning: "yesterday", category: "time" },
  { hanzi: "现在", pinyin: "xiànzài", meaning: "now", category: "time" },
  { hanzi: "上午", pinyin: "shàngwǔ", meaning: "morning", category: "time" },
  { hanzi: "中午", pinyin: "zhōngwǔ", meaning: "noon", category: "time" },
  { hanzi: "下午", pinyin: "xiàwǔ", meaning: "afternoon", category: "time" },
  { hanzi: "点", pinyin: "diǎn", meaning: "o'clock", category: "time" },
  { hanzi: "分钟", pinyin: "fēnzhōng", meaning: "minute", category: "time" },
  { hanzi: "岁", pinyin: "suì", meaning: "years old", category: "time" },
  { hanzi: "年", pinyin: "nián", meaning: "year", category: "time" },
  { hanzi: "月", pinyin: "yuè", meaning: "month", category: "time" },
  {
    hanzi: "号",
    pinyin: "hào",
    meaning: "day of month (date)",
    category: "time",
  },

  // Places (地点)
  { hanzi: "家", pinyin: "jiā", meaning: "home / family", category: "places" },
  { hanzi: "学校", pinyin: "xuéxiào", meaning: "school", category: "places" },
  { hanzi: "医院", pinyin: "yīyuàn", meaning: "hospital", category: "places" },
  { hanzi: "商店", pinyin: "shāngdiàn", meaning: "shop", category: "places" },
  {
    hanzi: "饭馆",
    pinyin: "fànguǎn",
    meaning: "restaurant",
    category: "places",
  },
  { hanzi: "北京", pinyin: "Běijīng", meaning: "Beijing", category: "places" },

  // Transportation (交通)
  {
    hanzi: "出租车",
    pinyin: "chūzūchē",
    meaning: "taxi",
    category: "transport",
  },
  {
    hanzi: "火车站",
    pinyin: "huǒchēzhàn",
    meaning: "train station",
    category: "transport",
  },
  {
    hanzi: "飞机",
    pinyin: "fēijī",
    meaning: "airplane",
    category: "transport",
  },

  // Food & Drinks (食物饮料)
  { hanzi: "水", pinyin: "shuǐ", meaning: "water", category: "food" },
  { hanzi: "茶", pinyin: "chá", meaning: "tea", category: "food" },
  { hanzi: "菜", pinyin: "cài", meaning: "dish / food", category: "food" },
  { hanzi: "米饭", pinyin: "mǐfàn", meaning: "rice", category: "food" },
  { hanzi: "苹果", pinyin: "píngguǒ", meaning: "apple", category: "food" },

  // Daily Objects (日常用品)
  { hanzi: "杯子", pinyin: "bēizi", meaning: "cup", category: "objects" },
  { hanzi: "钱", pinyin: "qián", meaning: "money", category: "objects" },
  {
    hanzi: "电脑",
    pinyin: "diànnǎo",
    meaning: "computer",
    category: "objects",
  },
  {
    hanzi: "电话",
    pinyin: "diànhuà",
    meaning: "telephone",
    category: "objects",
  },
  { hanzi: "电视", pinyin: "diànshì", meaning: "TV", category: "objects" },
  { hanzi: "电影", pinyin: "diànyǐng", meaning: "movie", category: "objects" },
  { hanzi: "桌子", pinyin: "zhuōzi", meaning: "table", category: "objects" },
  { hanzi: "椅子", pinyin: "yǐzi", meaning: "chair", category: "objects" },
  { hanzi: "衣服", pinyin: "yīfu", meaning: "clothes", category: "objects" },

  // Animals (动物)
  { hanzi: "猫", pinyin: "māo", meaning: "cat", category: "animals" },
  { hanzi: "狗", pinyin: "gǒu", meaning: "dog", category: "animals" },

  // Basic Verbs (动词)
  { hanzi: "是", pinyin: "shì", meaning: "to be", category: "verbs" },
  { hanzi: "有", pinyin: "yǒu", meaning: "to have", category: "verbs" },
  { hanzi: "在", pinyin: "zài", meaning: "at / in", category: "verbs" },
  { hanzi: "去", pinyin: "qù", meaning: "to go", category: "verbs" },
  { hanzi: "来", pinyin: "lái", meaning: "to come", category: "verbs" },
  { hanzi: "做", pinyin: "zuò", meaning: "to do", category: "verbs" },
  { hanzi: "吃", pinyin: "chī", meaning: "to eat", category: "verbs" },
  { hanzi: "喝", pinyin: "hē", meaning: "to drink", category: "verbs" },
  { hanzi: "看", pinyin: "kàn", meaning: "to look", category: "verbs" },
  { hanzi: "看见", pinyin: "kànjiàn", meaning: "to see", category: "verbs" },
  { hanzi: "听", pinyin: "tīng", meaning: "to listen", category: "verbs" },
  { hanzi: "说话", pinyin: "shuōhuà", meaning: "to speak", category: "verbs" },
  { hanzi: "读", pinyin: "dú", meaning: "to read", category: "verbs" },
  { hanzi: "写", pinyin: "xiě", meaning: "to write", category: "verbs" },
  { hanzi: "买", pinyin: "mǎi", meaning: "to buy", category: "verbs" },
  { hanzi: "坐", pinyin: "zuò", meaning: "to sit", category: "verbs" },
  { hanzi: "住", pinyin: "zhù", meaning: "to live / stay", category: "verbs" },
  {
    hanzi: "打电话",
    pinyin: "dǎ diànhuà",
    meaning: "to make a phone call",
    category: "verbs",
  },
  {
    hanzi: "开",
    pinyin: "kāi",
    meaning: "to open / to drive",
    category: "verbs",
  },
  { hanzi: "回", pinyin: "huí", meaning: "to return", category: "verbs" },
  { hanzi: "进", pinyin: "jìn", meaning: "to enter", category: "verbs" },
  { hanzi: "出", pinyin: "chū", meaning: "to exit", category: "verbs" },
  { hanzi: "到", pinyin: "dào", meaning: "to arrive", category: "verbs" },
  { hanzi: "走", pinyin: "zǒu", meaning: "to walk", category: "verbs" },
  { hanzi: "跑步", pinyin: "pǎobù", meaning: "to run", category: "verbs" },
  {
    hanzi: "想",
    pinyin: "xiǎng",
    meaning: "to want / think",
    category: "verbs",
  },
  {
    hanzi: "认识",
    pinyin: "rènshi",
    meaning: "to know (a person)",
    category: "verbs",
  },
  {
    hanzi: "知道",
    pinyin: "zhīdào",
    meaning: "to know (a fact)",
    category: "verbs",
  },
  {
    hanzi: "会",
    pinyin: "huì",
    meaning: "can (learned skill)",
    category: "verbs",
  },
  { hanzi: "能", pinyin: "néng", meaning: "can (ability)", category: "verbs" },
  { hanzi: "爱", pinyin: "ài", meaning: "to love", category: "verbs" },
  { hanzi: "喜欢", pinyin: "xǐhuan", meaning: "to like", category: "verbs" },
  {
    hanzi: "觉得",
    pinyin: "juéde",
    meaning: "to feel / think",
    category: "verbs",
  },
  { hanzi: "让", pinyin: "ràng", meaning: "to let / allow", category: "verbs" },

  // Adjectives (形容词)
  { hanzi: "大", pinyin: "dà", meaning: "big", category: "adjectives" },
  { hanzi: "小", pinyin: "xiǎo", meaning: "small", category: "adjectives" },
  { hanzi: "多", pinyin: "duō", meaning: "many", category: "adjectives" },
  { hanzi: "少", pinyin: "shǎo", meaning: "few", category: "adjectives" },
  { hanzi: "冷", pinyin: "lěng", meaning: "cold", category: "adjectives" },
  { hanzi: "热", pinyin: "rè", meaning: "hot", category: "adjectives" },
  { hanzi: "高", pinyin: "gāo", meaning: "tall", category: "adjectives" },
  {
    hanzi: "漂亮",
    pinyin: "piàoliang",
    meaning: "pretty",
    category: "adjectives",
  },
  { hanzi: "好", pinyin: "hǎo", meaning: "good", category: "adjectives" },
  { hanzi: "坏", pinyin: "huài", meaning: "bad", category: "adjectives" },
  { hanzi: "忙", pinyin: "máng", meaning: "busy", category: "adjectives" },
  {
    hanzi: "高兴",
    pinyin: "gāoxìng",
    meaning: "happy",
    category: "adjectives",
  },

  // Location Words (方位词)
  { hanzi: "里", pinyin: "lǐ", meaning: "inside", category: "locations" },
  {
    hanzi: "上",
    pinyin: "shàng",
    meaning: "on / above",
    category: "locations",
  },
  {
    hanzi: "下",
    pinyin: "xià",
    meaning: "below / under",
    category: "locations",
  },
  {
    hanzi: "前面",
    pinyin: "qiánmiàn",
    meaning: "in front",
    category: "locations",
  },
  {
    hanzi: "后面",
    pinyin: "hòumiàn",
    meaning: "behind",
    category: "locations",
  },

  // Time/Aspect Particles (语气词)
  {
    hanzi: "了",
    pinyin: "le",
    meaning: "completion particle",
    category: "particles",
  },
  {
    hanzi: "吗",
    pinyin: "ma",
    meaning: "question particle",
    category: "particles",
  },
  {
    hanzi: "呢",
    pinyin: "ne",
    meaning: "question particle",
    category: "particles",
  },
  {
    hanzi: "的",
    pinyin: "de",
    meaning: "possessive particle",
    category: "particles",
  },
  { hanzi: "和", pinyin: "hé", meaning: "and", category: "particles" },
  { hanzi: "很", pinyin: "hěn", meaning: "very", category: "particles" },
  { hanzi: "不", pinyin: "bù", meaning: "not", category: "particles" },
  {
    hanzi: "没",
    pinyin: "méi",
    meaning: "not (for 有 or past actions)",
    category: "particles",
  },

  // Other Useful Words (其他)
  { hanzi: "东西", pinyin: "dōngxi", meaning: "thing", category: "other" },
  { hanzi: "医生", pinyin: "yīshēng", meaning: "doctor", category: "other" },
  { hanzi: "朋友", pinyin: "péngyou", meaning: "friend", category: "other" },
  { hanzi: "学生", pinyin: "xuésheng", meaning: "student", category: "other" },
  { hanzi: "老师", pinyin: "lǎoshī", meaning: "teacher", category: "other" },
  {
    hanzi: "汉语",
    pinyin: "Hànyǔ",
    meaning: "Chinese language",
    category: "other",
  },
  { hanzi: "中国", pinyin: "Zhōngguó", meaning: "China", category: "other" },
  { hanzi: "事", pinyin: "shì", meaning: "matter/thing", category: "other" },
  { hanzi: "名字", pinyin: "míngzi", meaning: "name", category: "other" },
  { hanzi: "水果", pinyin: "shuǐguǒ", meaning: "fruit", category: "other" },
  { hanzi: "天气", pinyin: "tiānqì", meaning: "weather", category: "other" },
  { hanzi: "星期", pinyin: "xīngqī", meaning: "week", category: "other" },
  { hanzi: "运动", pinyin: "yùndòng", meaning: "sports", category: "other" },
  { hanzi: "说", pinyin: "shuō", meaning: "to speak", category: "other" },
  { hanzi: "工作", pinyin: "gōngzuò", meaning: "work/job", category: "other" },
  { hanzi: "学习", pinyin: "xuéxí", meaning: "study", category: "other" },
  {
    hanzi: "饭店",
    pinyin: "fàndiàn",
    meaning: "restaurant",
    category: "other",
  },
  {
    hanzi: "时候",
    pinyin: "shíhou",
    meaning: "time/moment",
    category: "other",
  },
  { hanzi: "再见", pinyin: "zàijiàn", meaning: "goodbye", category: "other" },
  {
    hanzi: "请",
    pinyin: "qǐng",
    meaning: "please / invite",
    category: "other",
  },
];

// App state
let currentVocabulary = [...hsk1Vocabulary];
let userProgress = {};
let showPinyin = true;
let currentFlashcardIndex = 0;
let isDarkMode = false;

// DOM elements
const loadingScreen = document.getElementById("loadingScreen");
const appContent = document.getElementById("appContent");
const loadingBar = document.getElementById("loadingBar");
const vocabularyGrid = document.getElementById("vocabularyGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const categoryFilter = document.getElementById("categoryFilter");
const shuffleBtn = document.getElementById("shuffleBtn");
const togglePinyinBtn = document.getElementById("togglePinyinBtn");
const totalWords = document.getElementById("totalWords");
const masteredWords = document.getElementById("masteredWords");
const reviewWords = document.getElementById("reviewWords");
const studiedWords = document.getElementById("studiedWords");
const themeToggle = document.getElementById("themeToggle");

// Practice elements
const startPractice = document.getElementById("startPractice");
const flashcardsBtn = document.getElementById("flashcardsBtn");
const quizBtn = document.getElementById("quizBtn");

// Flashcard elements
const flashcardModal = document.getElementById("flashcardModal");
const closeFlashcard = document.getElementById("closeFlashcard");
const flashcard = document.getElementById("flashcard");
const flashcardHanzi = document.getElementById("flashcardHanzi");
const flashcardPinyin = document.getElementById("flashcardPinyin");
const flashcardMeaning = document.getElementById("flashcardMeaning");
const prevCard = document.getElementById("prevCard");
const flipCard = document.getElementById("flipCard");
const nextCard = document.getElementById("nextCard");
const markMastered = document.getElementById("markMastered");
const cardProgress = document.getElementById("cardProgress");

// Initialize
function init() {
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
  loadUserProgress();
  loadThemePreference();
  renderVocabulary();
  updateStats();
  setupEventListeners();
  addActivity("📚", "Started vocabulary practice", "Just now");
}

function setupEventListeners() {
  searchInput.addEventListener("input", handleSearch);
  clearSearch.addEventListener("click", clearSearchHandler);
  categoryFilter.addEventListener("change", handleFilter);
  shuffleBtn.addEventListener("click", shuffleVocabulary);
  togglePinyinBtn.addEventListener("click", togglePinyinDisplay);
  themeToggle.addEventListener("click", toggleTheme);

  // Practice events
  flashcardsBtn.addEventListener("click", openFlashcards);
  startPractice.addEventListener("click", startPracticeSession);
  quizBtn.addEventListener("click", startQuiz);

  // Flashcard events
  closeFlashcard.addEventListener("click", closeFlashcards);
  flashcard.addEventListener("click", flipFlashcard);
  prevCard.addEventListener("click", showPreviousCard);
  nextCard.addEventListener("click", showNextCard);
  flipCard.addEventListener("click", flipFlashcard);
  markMastered.addEventListener("click", toggleMasteredStatus);
}

// Vocabulary rendering
function renderVocabulary() {
  vocabularyGrid.innerHTML = "";

  currentVocabulary.forEach((word, index) => {
    const card = createVocabularyCard(word, index);
    vocabularyGrid.appendChild(card);
  });
}

function createVocabularyCard(word, index) {
  const card = document.createElement("div");
  const status = userProgress[word.hanzi]?.status || "";
  card.className = `vocab-card ${status}`;

  const statusClass = status ? `vocab-status ${status}` : "vocab-status";

  card.innerHTML = `
        <div class="${statusClass}"></div>
        <div class="vocab-hanzi">${word.hanzi}</div>
        ${showPinyin ? `<div class="vocab-pinyin">${word.pinyin}</div>` : ""}
        <div class="vocab-meaning">${word.meaning}</div>
        <div class="vocab-category">${getCategoryName(word.category)}</div>
    `;

  card.addEventListener("click", () => {
    speakWord(word.hanzi);
    markAsStudied(word.hanzi);
  });

  return card;
}

function getCategoryName(category) {
  const categories = {
    pronouns: "People & Pronouns",
    questions: "Question Words",
    numbers: "Numbers",
    measure: "Measure Words",
    time: "Time Words",
    places: "Places",
    transport: "Transportation",
    food: "Food & Drinks",
    objects: "Daily Objects",
    animals: "Animals",
    verbs: "Verbs",
    adjectives: "Adjectives",
    locations: "Location Words",
    particles: "Particles",
    other: "Other Words",
  };
  return categories[category] || category;
}

// Search and filter functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  filterVocabulary(searchTerm, categoryFilter.value);
}

function handleFilter() {
  filterVocabulary(searchInput.value.toLowerCase(), categoryFilter.value);
}

function filterVocabulary(searchTerm, category) {
  currentVocabulary = hsk1Vocabulary.filter((word) => {
    const matchesSearch =
      !searchTerm ||
      word.hanzi.toLowerCase().includes(searchTerm) ||
      word.pinyin.toLowerCase().includes(searchTerm) ||
      word.meaning.toLowerCase().includes(searchTerm);

    const matchesCategory = category === "all" || word.category === category;

    return matchesSearch && matchesCategory;
  });

  renderVocabulary();
}

function clearSearchHandler() {
  searchInput.value = "";
  categoryFilter.value = "all";
  filterVocabulary("", "all");
}

function shuffleVocabulary() {
  currentVocabulary = [...hsk1Vocabulary].sort(() => Math.random() - 0.5);
  renderVocabulary();
  addActivity("🔀", "Shuffled vocabulary", "Just now");
}

function togglePinyinDisplay() {
  showPinyin = !showPinyin;
  togglePinyinBtn.textContent = showPinyin ? "Hide Pinyin" : "Show Pinyin";
  renderVocabulary();
}

// Progress tracking
function loadUserProgress() {
  const saved = localStorage.getItem("hsk1VocabularyProgress");
  if (saved) {
    userProgress = JSON.parse(saved);
  }
}

function saveUserProgress() {
  localStorage.setItem("hsk1VocabularyProgress", JSON.stringify(userProgress));
}

function markAsStudied(hanzi) {
  if (!userProgress[hanzi]) {
    userProgress[hanzi] = {
      status: "studied",
      studiedAt: new Date().toISOString(),
    };
  } else if (userProgress[hanzi].status === "need-review") {
    userProgress[hanzi].status = "studied";
  }
  saveUserProgress();
  updateStats();
  renderVocabulary();

  // Update study time
  const currentTime = parseInt(localStorage.getItem("totalStudyTime") || "0");
  localStorage.setItem("totalStudyTime", (currentTime + 1).toString());
}

function toggleMasteredStatus() {
  const currentWord = currentVocabulary[currentFlashcardIndex];
  if (userProgress[currentWord.hanzi]?.status === "mastered") {
    userProgress[currentWord.hanzi].status = "studied";
    addActivity("📝", `Unmarked ${currentWord.hanzi} as mastered`, "Just now");
  } else {
    userProgress[currentWord.hanzi] = {
      status: "mastered",
      masteredAt: new Date().toISOString(),
    };
    addActivity("⭐", `Mastered ${currentWord.hanzi}`, "Just now");
  }
  saveUserProgress();
  updateStats();
  updateFlashcardDisplay();
  renderVocabulary();
}

function updateStats() {
  const total = hsk1Vocabulary.length;
  const mastered = Object.values(userProgress).filter(
    (p) => p.status === "mastered"
  ).length;
  const studied = Object.values(userProgress).filter(
    (p) => p.status === "studied"
  ).length;
  const needReview = Object.values(userProgress).filter(
    (p) => p.status === "need-review"
  ).length;

  totalWords.textContent = total;
  masteredWords.textContent = mastered;
  studiedWords.textContent = studied;
  reviewWords.textContent = needReview;
}

// Text-to-speech
function speakWord(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
}

// Flashcard functionality
function openFlashcards() {
  currentFlashcardIndex = 0;
  flashcardModal.classList.add("active");
  updateFlashcardDisplay();
  addActivity("🃏", "Started flashcards", "Just now");
}

function closeFlashcards() {
  flashcardModal.classList.remove("active");
  resetFlashcardFlip();
}

function resetFlashcardFlip() {
  flashcard.classList.remove("flipped");
}

function updateFlashcardDisplay() {
  if (currentVocabulary.length === 0) {
    flashcardHanzi.textContent = "No words";
    flashcardPinyin.textContent = "";
    flashcardMeaning.textContent = "No vocabulary to display";
    cardProgress.textContent = "0/0";
    return;
  }

  const word = currentVocabulary[currentFlashcardIndex];
  flashcardHanzi.textContent = word.hanzi;
  flashcardPinyin.textContent = word.pinyin;
  flashcardMeaning.textContent = word.meaning;
  cardProgress.textContent = `${currentFlashcardIndex + 1}/${
    currentVocabulary.length
  }`;

  // Update mastered button
  const isMastered = userProgress[word.hanzi]?.status === "mastered";
  markMastered.textContent = isMastered ? "Unmark Mastered" : "Mark Mastered";
  markMastered.className = isMastered ? "btn ghost" : "btn";

  // Reset flip state
  resetFlashcardFlip();
}

function flipFlashcard() {
  flashcard.classList.toggle("flipped");
}

function showPreviousCard() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    updateFlashcardDisplay();
  }
}

function showNextCard() {
  if (currentFlashcardIndex < currentVocabulary.length - 1) {
    currentFlashcardIndex++;
    updateFlashcardDisplay();
  }
}

// Practice session functions
function startPracticeSession() {
  addActivity("📖", "Started vocabulary practice session", "Just now");
  alert("Practice Session: Review 20 random words with audio pronunciation");
}

function startQuiz() {
  addActivity("🧠", "Started vocabulary quiz", "Just now");
  alert("Vocabulary Quiz: Test your knowledge with 20 random questions");
}

// Activity tracking
function addActivity(icon, description, time) {
  const activities = JSON.parse(
    localStorage.getItem("recentActivities") || "[]"
  );
  activities.unshift({ icon, description, time });

  // Keep only last 5 activities
  if (activities.length > 5) {
    activities.pop();
  }

  localStorage.setItem("recentActivities", JSON.stringify(activities));
}

// Theme functionality
function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  localStorage.setItem("darkMode", isDarkMode);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("darkMode");
  if (savedTheme !== null) {
    isDarkMode = JSON.parse(savedTheme);
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", init);
