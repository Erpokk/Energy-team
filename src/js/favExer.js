import icons from '../images/icons.svg';


// Функция для форматирования числа до одного знака после запятой
function formatToSingleDecimal(num) {
    return parseFloat(num).toFixed(1);
  }
  
  // Функция для приведения первой буквы к верхнему регистру
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function createExerciseCardsFromLocalStorage() {
    // Получаем данные из localStorage
    const cards = JSON.parse(localStorage.getItem('favorites_exercises_ls_key')) || [];
  
    // Создаем HTML-код для карточек
    const cardsHtml = cards
      .map(
        ({ _id, name, bodyPart, target, rating, burnedCalories, time }) => `
          <li class="exr-card">
            <div class="workout-title">
              <div class="workout-title-left fav-workout-title-left">
                <p class="workout-title-name">WORKOUT</p>
                    <svg width="16" height="16">
                        <use href="${icons}#icon-trash"></use>
                    </svg>
                </p>
              </div>
              <div class="workout-title-right">
                <button class="workout-start" data-modal-open="${_id}">Start
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
              <p class="workout-details-disc">${capitalizeFirstLetter(name)}</p>
            </div>
            <div class="workout-stats">
              <p class="workout-stats-cal"><span class="workout-stats-title">Burned calories: </span>${burnedCalories} / ${time}</p>
              <p class="workout-stats-part"><span class="workout-stats-title">Body part: </span>${capitalizeFirstLetter(bodyPart)}</p>
              <p class="workout-stats-target"><span class="workout-stats-title">Target: </span>${capitalizeFirstLetter(target)}</p>
            </div>
          </li>`
      )
      .join('');
  
    // Вставляем HTML-код в блок с классом wrapper-secnd
    document.getElementById('wrapper-secnd').innerHTML = cardsHtml;
  }

  createExerciseCardsFromLocalStorage()