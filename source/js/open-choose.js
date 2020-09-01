let chooseElement = document.querySelectorAll('.js-choose');
let openChooseField = document.querySelectorAll('.js-country-select');
let closeBtn = document.querySelectorAll('.js-country-close');
let removeBtn = document.querySelectorAll('.js-remove-btn');

// Открытие выбора списка стран
function openElement(element) {
  for (let i = 0; i < chooseElement.length; i++) {
    if (chooseElement[i].dataset.number === element.dataset.number) {
      chooseElement[i].classList.add('open-choose');
      removeBtn[i].classList.add('visually-hidden');
    }
  }
}

// Закрытие списка стран
function closeElement(element) {
  for (let a = 0; a < chooseElement.length; a++) {
    if (chooseElement[a].dataset.number === element.dataset.number) {
      chooseElement[a].classList.remove('open-choose');
      removeBtn[a].classList.remove('visually-hidden');
    }
  }
}

// Реализация для всех списков
if (openChooseField) {
  for (let i = 0; i < openChooseField.length; i++) {
    openChooseField[i].addEventListener('click', function (element) {
      element.preventDefault();
      for (let j = 0; j < openChooseField.length; j++) {
        chooseElement[j].classList.remove('open-choose');
      }
      openElement(this);
    })
  }

  for (let a = 0; a < closeBtn.length; a++) {
    closeBtn[a].addEventListener('click', function (element) {
      element.preventDefault();
      closeElement(this);
    })
  }
}
