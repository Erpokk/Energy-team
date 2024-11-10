import { processFetchExercises } from './processFetch.js';
import { createExerciseCards } from './createCards.js';
import { filterStore } from './store-filter.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search-btn');
const exrListEl = document.querySelector('.exr-list');
const exrPaginationEl = document.getElementById('exr-pagination');
const selectedCategoryEl = document.querySelector('.selected-category');
let currentPage = 1;
let itemsPerPage = 10;

function getFilterParams() {
  const keyword = searchInput.value.trim();
  const category = selectedCategoryEl ? selectedCategoryEl.textContent : '';

  return {
    keyword,
    category,
    page: currentPage,
    limit: itemsPerPage,
  };
}

async function searchExercises() {
  const filter = filterStore.filter;
  if (!filter.keyword && !filter.category) {
    filter.keyword = searchInput.value.trim();
  }

  const data = await processFetchExercises(filter);

  if (data && data.results) {
    exrListEl.innerHTML = '';
    exrPaginationEl.innerHTML = '';
    const exerciseMarkup = createExerciseCards(data.results);
    exrListEl.insertAdjacentHTML('beforeend', exerciseMarkup);
    renderPagination(data.totalPages);
  }
}

function renderPagination(totalPages) {
  exrPaginationEl.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.add('pagination-btn');
    if (i === currentPage) pageButton.classList.add('active');
    
    pageButton.addEventListener('click', () => {
      currentPage = i;
      filterStore.updateFilter({ page: currentPage });
      searchExercises();
    });

    exrPaginationEl.appendChild(pageButton);
  }
}

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  currentPage = 1;
  const filter = getFilterParams();
  filterStore.updateFilter(filter);
  searchExercises();
});

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    currentPage = 1;
    const filter = getFilterParams();
    filterStore.updateFilter(filter);
    searchExercises();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (!searchInput.value && !selectedCategoryEl.textContent) {
    const cachedFilter = filterStore.filter;
    if (cachedFilter) {
      searchInput.value = cachedFilter.keyword || '';
      selectedCategoryEl.textContent = cachedFilter.category || '';
    }
  }
  searchExercises();
});
