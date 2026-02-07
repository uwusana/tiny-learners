function createCategoryCard(category, iconPath) {
  return `
    <div class="category-card" data-category="${category}">
      <img src="${iconPath}" alt="${category} icon">
      <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <div class="progress-bar">
        <div class="progress-bar-fill" data-category="${category}"></div>
      </div>
    </div>
  `;
}
