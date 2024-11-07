import { capitalizeFirstLetter } from './capitalizeFirstLetter.js';

export function createCardsMarkup(cards) {
  return cards
    .map(
      ({ imgURL, name, filter }) => `
         <li class="exr-card" data-category="${filter}" data-category-name="${name}">
        <img
          class="exr-card-img"
          src="${imgURL}"
          alt="${name}"
        />
       <div class="exr-card-text">
           <div class="exr-card-title">${capitalizeFirstLetter(name)}</div>
           <div class="exr-card-category">${filter}</div>
      </div>`,
    )
    .join('');
}

