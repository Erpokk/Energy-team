import fetchFilters from '../utils/fetchFilters.js';
import { createCategoryCards, createExerciseCards } from './createCards.js';
import { exrListEl } from './constants.js';
import fetchExercises from '../utils/fetchExercises.js';


export async function processFetchCategory(filter) {
  const data = await fetchFilters(filter);
  if (data.totalPages === null) {
    exrListEl.innerHTML = 'Sorry, there are no category';
    return;
  }
  exrListEl.innerHTML = '';
  const cardMarkup = createCategoryCards(data.results);
  exrListEl.insertAdjacentHTML('beforeend', cardMarkup);

  return data;
}

export async function processFetchExercises(filter) {
  const data = await fetchExercises(filter);
  if (data.totalPages === null) {
    exrListEl.innerHTML = 'Sorry, there are no exercises';
    return;
  }
  exrListEl.innerHTML = '';
  const cardMarkup = createExerciseCards(data.results);
  exrListEl.insertAdjacentHTML('beforeend', cardMarkup);

  return data;
}