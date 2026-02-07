import { initModal } from "./components/modal.js";




document.addEventListener("DOMContentLoaded", () => {
  const categoriesContainer = document.getElementById("categories-container");

  if (categoriesContainer) {
    const categories = Object.keys(cardsData);

    categories.forEach(category => {
      const iconPath = `assets/images/card-icons/${category}.png`;
      categoriesContainer.innerHTML += createCategoryCard(category, iconPath);
    });
  }

  const childName = localStorage.getItem("childName");
  const childGender = localStorage.getItem("childGender");
  const childImage = localStorage.getItem("childImage");

  const nameEl = document.getElementById("child-name");
  const profileImg = document.getElementById("profile-image");
  const streakSpan = document.getElementById("streak-count");

  // Safety: if no setup done, send back
  if (!childName || !childGender) {
    window.location.href = "setup.html";
    return;
  }

  /* ------------------------------
      GREETING LOGIC
  --------------------------------*/
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = `Good morning, ${childName} 🌞`;
  } else if (hour < 18) {
    greeting = `Good afternoon, ${childName} 🌼`;
  } else {
    greeting = `Good evening, ${childName} 🌙`;
  }

  const randomMessages = [
    `Hey ${childName}! Let’s learn something fun 🎨`,
    `${childName}, ready for a little brain magic? ✨`,
    `Let’s gooo ${childName}! Learning time 🚀`,
    `${childName}, your flashcards are waiting 📚`,
    `Tiny steps, big wins — right ${childName}? 🌈`,
    `${childName}, let’s make today awesome 🌟`
  ];

  const useRandom = Math.random() > 0.4;
  nameEl.textContent = useRandom
    ? randomMessages[Math.floor(Math.random() * randomMessages.length)]
    : greeting;

  /* ------------------------------
      PROFILE IMAGE LOGIC
  --------------------------------*/
  if (childImage) {
    profileImg.src = childImage;
  } else {
    profileImg.src =
      childGender === "girl"
        ? "assets/images/girl-pfp.png"
        : "assets/images/boy-pfp.png";
  }
  /*-----------------------------
      EDIT PROFILE IMAGE
  -------------------------------*/
  const uploadInput = document.getElementById("image-upload");
  const profileContainer = document.querySelector(".profile-image");

 profileContainer.addEventListener("click", () => {
  uploadInput.click();
});


  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target.result;
      localStorage.setItem("childImage", e.target.result);
    };

    reader.readAsDataURL(file);
  });

  /* ------------------------------
      STREAK HELPERS
  --------------------------------*/
  function getTodayDate() {
    return new Date().toISOString().split("T")[0];
  }

  function markActivityCompleted() {
    localStorage.setItem("completedToday", "true");
  }

  /* ------------------------------
      STREAK CORE LOGIC
  --------------------------------*/
  function updateStreak() {
    const today = getTodayDate();

    // 🔒 First launch safety
    if (!localStorage.getItem("lastActiveDate")) {
      localStorage.setItem("lastActiveDate", today);
      localStorage.setItem("streakCount", 0);
    }

    let streak = parseInt(localStorage.getItem("streakCount")) || 0;
    const lastDate = localStorage.getItem("lastActiveDate");
    const completedToday =
      localStorage.getItem("completedToday") === "true";

    // New day detected
    if (lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastDate === yesterdayStr && completedToday) {
        streak += 1; // continue streak
      } else {
        streak = completedToday ? 1 : 0; // reset or start fresh
      }

      localStorage.setItem("streakCount", streak);
      localStorage.setItem("lastActiveDate", today);
      localStorage.setItem("completedToday", "false");
    }

    return streak;
  }

  /* ------------------------------
      APPLY STREAK TO UI
  --------------------------------*/
  const streak = updateStreak();
  streakSpan.textContent = `${streak}`;

  /* ------------------------------
      TEMP ACTIVITY TRIGGER
      (Replace later with real completion)
  --------------------------------*/
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      markActivityCompleted();
    });
  });
/* ------------------------------
    ANIMATE STREAK ICON
--------------------------------*/
const streakIcon = document.getElementById("streak-icon");

const previousStreak =
  parseInt(localStorage.getItem("previousStreak")) || 0;

// Always pulse by default
streakIcon.classList.add("pulse");

// If streak increased → do bump animation
if (streak > previousStreak) {
  streakIcon.classList.remove("pulse"); // pause pulse
  streakIcon.offsetHeight; // force reflow
  streakIcon.classList.add("bump");

  setTimeout(() => {
    streakIcon.classList.remove("bump");
    streakIcon.classList.add("pulse");
  }, 500);
}

localStorage.setItem("previousStreak", streak);

/* ------------------------------
   PROGRESS SYSTEM (HTML-driven)
--------------------------------*/

// Get all categories from HTML
function getAllCategories() {
  return Array.from(
    document.querySelectorAll(".progress-bar-fill")
  ).map(bar => bar.dataset.category);
}

function getProgressData() {
  const stored = JSON.parse(localStorage.getItem("progressData")) || {};
  const categories = getAllCategories();

  // Ensure every category exists
  categories.forEach(cat => {
    if (stored[cat] === undefined) {
      stored[cat] = 0;
    }
  });

  return stored;
}

function saveProgressData(data) {
  localStorage.setItem("progressData", JSON.stringify(data));
}

function updateProgress(category, amount = 10) {
  const progress = getProgressData();

  progress[category] = Math.min(100, progress[category] + amount);

  saveProgressData(progress);
  applyProgressToUI();
}

function applyProgressToUI() {
  const progress = getProgressData();

  document.querySelectorAll(".progress-bar-fill").forEach(bar => {
    const category = bar.dataset.category;
    const value = progress[category] || 0;

    bar.style.width = value + "%";
    bar.textContent = value + "%";
  });
}

// Click → progress increase
// document.querySelectorAll(".category-card").forEach(card => {
//   card.addEventListener("click", () => {
//     const category = card.dataset.category;
//     updateProgress(category, 10);
//   });
// });

// Run once on page load
applyProgressToUI();

// Render category cards FIRST
const categories = Object.keys(cardsData);

categories.forEach(category => {
  const iconPath = `assets/images/card-icons/${category}.png`;
  categoriesContainer.innerHTML += createCategoryCard(category, iconPath);
});

// Apply progress AFTER cards exist
applyProgressToUI();

// THEN initialize modal
initModal(cardsData, markActivityCompleted, updateProgress);




});
