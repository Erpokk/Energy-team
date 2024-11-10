import { processFetchExercises } from './processFetch.js';
import { createExerciseCards } from './createCards.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search-btn');
const exrListEl = document.querySelector('.exr-list');
const exrPaginationEl = document.getElementById('exr-pagination');
const selectedCategoryEl = document.querySelector('.selected-category');
let currentPage = 1;
let itemsPerPage = 10;

function getSelectedCategory() {
  return selectedCategoryEl ? selectedCategoryEl.textContent : '';
}

async function searchExercises() {
  const searchKeyword = searchInput.value.trim();
  const category = getSelectedCategory();
  
  const filter = {
    keyword: searchKeyword,
    category: category,
    page: currentPage,
    limit: itemsPerPage,
  };
  
  const data = await processFetchExercises(filter);
  
  if (data && data.results) {
    // Clear the current exercises and pagination
    exrListEl.innerHTML = '';
    exrPaginationEl.innerHTML = '';
    
    // Render exercise cards
    const exerciseMarkup = createExerciseCards(data.results);
    exrListEl.insertAdjacentHTML('beforeend', exerciseMarkup);
    
    // Render pagination
    renderPagination(data.totalPages);
  }
}

// Function to render pagination buttons
function renderPagination(totalPages) {
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.add('pagination-btn');
    if (i === currentPage) pageButton.classList.add('active');
    
    pageButton.addEventListener('click', () => {
      currentPage = i;
      searchExercises(); // Fetch exercises for the selected page
    });
    
    exrPaginationEl.appendChild(pageButton);
  }
}

// Event listener for search button click
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  currentPage = 1; // Reset to first page on new search
  searchExercises();
});

// Event listener for search input "Enter" key
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    currentPage = 1; // Reset to first page on new search
    searchExercises();
  }
});
