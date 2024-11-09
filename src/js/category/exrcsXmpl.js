import { pagination } from './pagination.js';
import { getLimitCategoryByPage, getLimitExerciseByPage } from './limitPerPage.js';
import {
  categoryList,
  exrListEl,
  firstCategory, paginationContainer,
  selectedCategory,
  selectedCategorySlash,
} from './constants.js';
import { processFetchCategory, processFetchExercises } from './processFetch.js';
import { capitalizeFirstLetter, getCategoryKey } from './helpers.js';

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

    selectedCategory.textContent = '';
    selectedCategorySlash.classList.add('hidden');

    document.querySelectorAll('.exr-category-item').forEach(category => category.classList.remove('active'));
    event.target.classList.add('active');
    const value = event.target.textContent;
    const filter = {
      filter: value,
      page: 1,
      limit: getLimitCategoryByPage(),
    };
    const data = await processFetchCategory(filter);
    if (data) {
      pagination(data.totalPages, filter, processFetchCategory);
    }
  }
}

async function handleCategoryElement(event) {
  paginationContainer.innerHTML = '';
  const clickedLi = event.target.closest('.exr-category-card');

  if (clickedLi) {
    const category = clickedLi.getAttribute('data-category');
    const categoryName = clickedLi.getAttribute('data-category-name');

    const filter =
      {
        [getCategoryKey(category)]: categoryName,
        page: 1,
        limit: getLimitExerciseByPage(),
      };

    const data = await processFetchExercises(filter);
    if (data) {
      selectedCategorySlash.classList.remove('hidden');
      selectedCategory.textContent = capitalizeFirstLetter(categoryName);
      pagination(data.totalPages, filter, processFetchExercises);
    }
  }
}

