import { processFilteredCategory } from './processFilteredCategory.js';
import { paginationContainer } from './constants.js';


export function pagination(totalPages, filter) {
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('li');
    pageButton.classList.add('page-button');
    pageButton.textContent = i;

    pageButton.addEventListener('click', async () => {
      document.querySelectorAll('.page-button').forEach(button => button.classList.remove('active'));
      pageButton.classList.add('active');
      filter.page = i;
      await processFilteredCategory(filter);
    });

    paginationContainer.appendChild(pageButton);
  }
  paginationContainer.firstChild.classList.add('active');
}


