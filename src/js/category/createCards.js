import { capitalizeFirstLetter, formatToSingleDecimal, truncateText } from './helpers.js';
import {
  maxLetterInnWorkoutStatsTarget,
  maxLetterInWorkoutDetailsDisc,
  maxLetterInWorkoutStatsCal,
} from './constants.js';
import icons from '../../images/icons.svg';

export function createCategoryCards(cards) {
  return cards
    .map(
      ({ imgURL, name, filter }) => `
         <li class="exr-category-card" data-category="${filter}" data-category-name="${name}">
        <img
          class="exr-category-card-img"
          src="${imgURL}"
          alt="${name}"
        />
       <div class="exr-category-card-text">
           <div class="exr-category-card-title">${capitalizeFirstLetter(name)}</div>
           <div class="exr-category-card-name">${filter}</div>
      </div>`,
    )
    .join('');
}

export function createExerciseCards(cards) {
  return cards
    .map(
      ({name, bodyPart, target, rating, burnedCalories, time }) => `
          <li class="exr-card">
      <div class="workout-title">
        <div class="workout-title-left">
          <p class="workout-title-name">WORKOUT</p>
          <p class="workout-rating">${formatToSingleDecimal(rating)}
            <svg class="workout-star" width="18" height="18">
              <use href="${icons}#rating-star"></use>
            </svg>
          </p>
        </div>
        <div class="workout-title-right">
          <button class="workout-start">Start
          <svg class="workout-arw" width="16" height="16">
            <use href="${icons}#arw-top"></use>
          </svg>
          </button>
        </div>
      </div>
      <div class="workout-details">
        <p class="workout-run-man-wrapper">
        <svg class="workout-run-man" width="16" height="16">
          <use href="${icons}#runn-man"></use>
        </svg>
        </p>
        <p class="workout-details-disc">${truncateText(name, maxLetterInWorkoutDetailsDisc)}</p>
      </div>
      <div class="workout-stats">
        <p><span class="workout-stats-title">Burned calories: </span>${truncateText(burnedCalories+'/'+time, maxLetterInWorkoutStatsCal)}</p>
        <p><span class="workout-stats-title">Body part: </span>${truncateText(bodyPart, maxLetterInWorkoutStatsCal)}</p>
        <p><span class="workout-stats-title">Target: </span>${truncateText(target, maxLetterInnWorkoutStatsTarget)}</p>
      </div>
    </li>`,
    )
    .join('');
}

