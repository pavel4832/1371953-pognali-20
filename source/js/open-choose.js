let chooseElement = document.querySelectorAll('.js-choose');
let openChooseField = document.querySelectorAll('.js-country-select');
let closeBtn = document.querySelectorAll('.js-country-close');
let removeBtn = document.querySelectorAll('.js-remove-btn');

function openElement(element) {
  for (var i = 0; i < chooseElement.length; i++) {
    if (chooseElement[i].dataset.number === element.dataset.number) {
      chooseElement[i].classList.add('open-choose');
      removeBtn[i].classList.add('visually-hidden');
    }
  }
}

function closeElement(element) {
  for (var a = 0; a < chooseElement.length; a++) {
    if (chooseElement[a].dataset.number === element.dataset.number) {
      chooseElement[a].classList.remove('open-choose');
      removeBtn[a].classList.remove('visually-hidden');
    }
  }
}

for (var i = 0; i < openChooseField.length; i++) {
  openChooseField[i].addEventListener('click', function (element) {
    element.preventDefault();
    openElement(this);
  })
}

for (var a = 0; a < closeBtn.length; a++) {
  closeBtn[a].addEventListener('click', function (element) {
    element.preventDefault();
    closeElement(this);
  })
}
