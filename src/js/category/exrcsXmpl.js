import { pagination } from './pagination.js';
import { getLimitByPage } from './limitPerPage.js';
import { categoryList, exrListEl, firstCategory } from './constants.js';
import { processFilteredCategory } from './processFilteredCategory.js';

categoryList.addEventListener('click', handleFilter);
if (exrListEl) {
  exrListEl.addEventListener('click', handleCategoryElement);
}

function triggerDefaultCategory() {
  if (firstCategory) {
    firstCategory.click();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  triggerDefaultCategory();
});

async function handleFilter(event) {
  if (event.target.classList.contains('exr-category-item')) {
    document.querySelectorAll('.exr-category-item').forEach(category => category.classList.remove('active'));
    event.target.classList.add('active');
    const value = event.target.textContent;
    const filter = {
      filter: value,
      page: 1,
      limit: getLimitByPage(),
    };
    const data = await processFilteredCategory(filter);
    pagination(data.totalPages, filter);
  }
}

async function handleCategoryElement(event) {
  const clickedLi = event.target.closest('.exr-card');

  if (clickedLi) {
    const category = clickedLi.getAttribute('data-category');
    const categoryName = clickedLi.getAttribute('data-category-name');
    console.log('Категория:', category);
    console.log('Имя:', categoryName);
  }
}

