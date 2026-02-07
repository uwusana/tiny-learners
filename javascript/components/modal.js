let currentCategory = "";
let currentIndex = 0;

export function initModal(cardsData, markActivityCompleted, updateProgress) {
  const modal = document.getElementById("card-modal");
  const modalTitle = document.getElementById("modal-title");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");

  function openCategory(category) {
    currentCategory = category;

    const savedIndex = localStorage.getItem("lastCard_" + category);
    currentIndex = savedIndex ? parseInt(savedIndex) : 0;

    modalTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1);

    modal.classList.remove("hidden");
    renderCard();
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  function renderCard() {
    const cards = cardsData[currentCategory];
    if (!cards) return;

    const card = cards[currentIndex];
    cardImage.src = card.image;
    cardTitle.textContent = card.title;

    localStorage.setItem(
      "lastCard_" + currentCategory,
      currentIndex
    );
  }

  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      openCategory(category);
      markActivityCompleted();
    });
  });

  document
    .getElementById("close-modal")
    .addEventListener("click", closeModal);

  document.getElementById("next-card").addEventListener("click", () => {
    const cards = cardsData[currentCategory];
    currentIndex = (currentIndex + 1) % cards.length;

    updateProgress(currentCategory, 5);
    renderCard();
  });

  document.getElementById("prev-card").addEventListener("click", () => {
    const cards = cardsData[currentCategory];
    currentIndex =
      (currentIndex - 1 + cards.length) % cards.length;

    renderCard();
  });
}
