// Random Listening Practice
let allWords = [];
let currentWord = null;
let playHistory = [];
let isPlaying = false;
let showWord = false;

// DOM Elements
const loadingScreen = document.getElementById("loadingScreen");
const appContent = document.getElementById("appContent");
const loadingBar = document.getElementById("loadingBar");
const themeToggle = document.getElementById("themeToggle");
const playBtn = document.getElementById("playBtn");
const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
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
const audioLoading = document.getElementById("audioLoading");

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
  setupEventListeners();
  updateStats();
  addActivity("🎧", "Started listening practice", "Just now");
}

function loadWords() {
  // Combine HSK 1 and HSK 2 vocabulary
  const hsk1Words = [
    {
      hanzi: "我",
      pinyin: "wǒ",
      meaning: "I, me",
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
      hanzi: "好",
      pinyin: "hǎo",
      meaning: "good",
      category: "adjectives",
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
      hanzi: "不",
      pinyin: "bù",
      meaning: "not",
      category: "particles",
      level: "HSK 1",
    },
    {
      hanzi: "在",
      pinyin: "zài",
      meaning: "at/in",
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
      hanzi: "人",
      pinyin: "rén",
      meaning: "person",
      category: "people",
      level: "HSK 1",
    },
  ];

  const hsk2Words = [
    {
      hanzi: "很",
      pinyin: "hěn",
      meaning: "very",
      category: "adverbs",
      level: "HSK 2",
    },
    {
      hanzi: "会",
      pinyin: "huì",
      meaning: "can/know how",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "能",
      pinyin: "néng",
      meaning: "can/able",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "要",
      pinyin: "yào",
      meaning: "to want",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "想",
      pinyin: "xiǎng",
      meaning: "to want/think",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "做",
      pinyin: "zuò",
      meaning: "to do",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "走",
      pinyin: "zǒu",
      meaning: "to walk",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "来",
      pinyin: "lái",
      meaning: "to come",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "去",
      pinyin: "qù",
      meaning: "to go",
      category: "verbs",
      level: "HSK 2",
    },
    {
      hanzi: "看",
      pinyin: "kàn",
      meaning: "to look",
      category: "verbs",
      level: "HSK 2",
    },
  ];

  allWords = [...hsk1Words, ...hsk2Words];
  statsTotal.textContent = allWords.length;
}

function setupEventListeners() {
  themeToggle.addEventListener("click", toggleTheme);
  playBtn.addEventListener("click", playRandomWord);
  showBtn.addEventListener("click", toggleWordDisplay);
  nextBtn.addEventListener("click", playRandomWord);
  clearHistoryBtn.addEventListener("click", clearHistory);

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
      playRandomWord();
    }
  });
}

function playRandomWord() {
  if (allWords.length === 0) {
    alert("No words available!");
    return;
  }

  // Hide previous word
  showWord = false;
  wordReveal.classList.remove("show");

  // Get random word
  const randomIndex = Math.floor(Math.random() * allWords.length);
  currentWord = allWords[randomIndex];

  // Show loading
  audioLoading.classList.add("active");
  playBtn.disabled = true;

  // Play audio after a short delay
  setTimeout(() => {
    speakWord(currentWord.hanzi);

    // Add to history
    addToHistory(currentWord);

    // Update stats
    updateStats();

    // Remove loading state
    setTimeout(() => {
      audioLoading.classList.remove("active");
      playBtn.disabled = false;
    }, 1000);

    addActivity("🔊", `Played: ${currentWord.hanzi}`, "Just now");
  }, 500);
}

function speakWord(text) {
  if (!synth) {
    alert("Text-to-speech not supported in your browser");
    return;
  }

  // Cancel any ongoing speech
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = voiceRates[currentRate];
  utterance.volume = 1;

  // Get Chinese voice if available
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
    // Reveal word
    revealedHanzi.textContent = currentWord.hanzi;
    revealedPinyin.textContent = currentWord.pinyin;
    revealedMeaning.textContent = currentWord.meaning;
    revealedCategory.textContent = currentWord.category;
    revealedLevel.textContent = currentWord.level;
    wordReveal.classList.add("show");
    showBtn.textContent = "Hide Word";
    addActivity("👁️", `Revealed: ${currentWord.hanzi}`, "Just now");
  } else {
    // Hide word
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

  // Keep only last 50 items
  if (playHistory.length > 50) {
    playHistory.pop();
  }

  savePlayHistory();
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  historyList.innerHTML = "";

  playHistory.forEach((item) => {
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";

    historyItem.innerHTML = `
            <div class="history-hanzi">${item.hanzi}</div>
            <div class="history-details">
                <div class="history-pinyin">${item.pinyin}</div>
                <div class="history-meaning">${item.meaning}</div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                    ${item.level} • ${item.time}
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
    addActivity("🗑️", "Cleared playback history", "Just now");
  }
}

function updateStats() {
  const uniqueWords = new Set(playHistory.map((item) => item.hanzi));

  statsTotal.textContent = allWords.length;
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

// Theme functionality
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

// Activity tracking
function addActivity(icon, description, time) {
  const activities = JSON.parse(
    localStorage.getItem("recentActivities") || "[]"
  );
  activities.unshift({ icon, description, time });

  if (activities.length > 5) {
    activities.pop();
  }

  localStorage.setItem("recentActivities", JSON.stringify(activities));
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", init);
