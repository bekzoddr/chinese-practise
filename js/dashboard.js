// Dashboard functionality
let isDarkMode = false;

// DOM elements
const loadingScreen = document.getElementById("loadingScreen");
const appContent = document.getElementById("appContent");
const loadingBar = document.getElementById("loadingBar");
const themeToggle = document.getElementById("themeToggle");

// Initialize dashboard
function initDashboard() {
  simulateLoading();
}

// Simulate loading process
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
    loadDashboardData();
    setupEventListeners();
  }, 500);
}

function loadDashboardData() {
  // Load progress from localStorage
  const listeningProgress = localStorage.getItem("listeningProgress") || "0";
  const vocabProgress = JSON.parse(
    localStorage.getItem("hsk1VocabularyProgress") || "{}"
  );

  // Update stats
  updateStats(listeningProgress, vocabProgress);
  updateProgressBars(listeningProgress, vocabProgress);
  loadRecentActivity();
}

function updateStats(listeningProgress, vocabProgress) {
  const masteredWords = Object.values(vocabProgress).filter(
    (p) => p.status === "mastered"
  ).length;

  document.getElementById("listeningProgress").textContent =
    listeningProgress + "%";
  document.getElementById("vocabMastered").textContent = masteredWords;

  // Calculate study time (placeholder)
  const studyTime = localStorage.getItem("totalStudyTime") || "0";
  document.getElementById("studyTime").textContent = studyTime + "min";

  // Calculate streak (placeholder)
  const streak = localStorage.getItem("studyStreak") || "0";
  document.getElementById("streakCount").textContent = streak;
}

function updateProgressBars(listeningProgress, vocabProgress) {
  const masteredWords = Object.values(vocabProgress).filter(
    (p) => p.status === "mastered"
  ).length;
  const vocabProgressPercent = Math.round((masteredWords / 150) * 100);

  // Update listening progress
  const listeningBar = document.getElementById("listeningBar");
  const listeningText = document.getElementById("listeningText");
  if (listeningBar) listeningBar.style.width = listeningProgress + "%";
  if (listeningText)
    listeningText.textContent = listeningProgress + "% complete";

  // Update vocabulary progress
  const vocabBar = document.getElementById("vocabBar");
  const vocabText = document.getElementById("vocabText");
  if (vocabBar) vocabBar.style.width = vocabProgressPercent + "%";
  if (vocabText) vocabText.textContent = masteredWords + "/150 words";
}

function loadRecentActivity() {
  const activityList = document.getElementById("activityList");
  const activities = JSON.parse(
    localStorage.getItem("recentActivities") || "[]"
  );

  if (activities.length === 0) {
    // Show default welcome message
    activityList.innerHTML = `
            <div class="activity-item">
                <div class="activity-icon">🚀</div>
                <div class="activity-content">
                    <p>Welcome to HSK 1 Learning Center!</p>
                    <span>Start your learning journey today</span>
                </div>
            </div>
        `;
    return;
  }

  activityList.innerHTML = activities
    .slice(0, 3)
    .map(
      (activity) => `
        <div class="activity-item">
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <p>${activity.description}</p>
                <span>${activity.time}</span>
            </div>
        </div>
    `
    )
    .join("");
}

// Practice functions
function startDailyReview() {
  addActivity("📖", "Started daily review", "Just now");
  alert("Daily Review: Practice 10 random words and 2 dialogues");
}

function startRandomPractice() {
  addActivity("🎯", "Started random practice", "Just now");
  const pages = ["listening.html", "vocabulary.html"];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  location.href = randomPage;
}

function startFlashcards() {
  addActivity("🃏", "Started flashcard practice", "Just now");
  location.href = "vocabulary.html#flashcards";
}

function startListeningPractice() {
  addActivity("🎧", "Started quick listening practice", "Just now");
  location.href = "listening.html";
}

function startQuickQuiz() {
  addActivity("🧠", "Started quick quiz", "Just now");
  alert("Quick Quiz: Test your knowledge with 10 random questions");
}

function showGrammarGuide() {
  addActivity("📝", "Viewed grammar guide", "Just now");
  alert("Grammar Guide: Learn HSK 1 sentence patterns and structures");
}

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
  loadRecentActivity();
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

function setupEventListeners() {
  themeToggle.addEventListener("click", toggleTheme);
  loadThemePreference();
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", initDashboard);
