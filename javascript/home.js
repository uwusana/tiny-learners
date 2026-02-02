document.addEventListener("DOMContentLoaded", () => {
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


});
