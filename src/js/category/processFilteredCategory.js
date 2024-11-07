import fetchFilters from '../utils/fetchFilters.js';
import { createCardsMarkup } from './createCardsMarkup.js';
import { exrListEl } from './constants.js';


export async function processFilteredCategory(filter) {
  const data = await fetchFilters(filter);
  if (data.totalPages === null) {
    exrListEl.innerHTML = 'Sorry, there are no category';
    return;
  }
  exrListEl.innerHTML = '';
  const cardMarkup = createCardsMarkup(data.results);
  exrListEl.insertAdjacentHTML('beforeend', cardMarkup);

  return data;
}