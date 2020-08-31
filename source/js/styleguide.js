let parentElement = document.querySelectorAll('.transport-list__item');
let controlElement = document.querySelectorAll('.transport-list__icon');
let checkBoxElement = document.querySelectorAll('.profile-catalog__choose');
let labelElement = document.querySelectorAll('.profile-catalog__like-icon');
let iconElement = document.querySelectorAll('.like-icon');
let formElement = document.querySelector('.js-form');
let textAreaElement = document.querySelectorAll('.js-text-area');
let errorMessageElement = document.querySelectorAll('.js-error');

// Изменений цвета фона для иконки транспорта
function changeBackground(element, color) {
  if (element) {
    element.style.backgroundColor = color;
  }
}

// Изменение цвета svg картинки для иконки Лайк
function changeHeartColor(elementFirst, elementSecond) {
  if (elementFirst.checked) {
    elementSecond.style.color = '#f02323';
    elementSecond.style.fill = '#f02323';
  } else {
    elementSecond.style.color = 'rgba(25, 33, 68, 0.3)';
    elementSecond.style.fill = 'none';
  }
}

// Обработка наведения на иконку транспорта
if (controlElement) {
  for (let i = 0; i < controlElement.length; i++) {
    controlElement[i].addEventListener('mousedown', function () {
      changeBackground(parentElement[i], '#e2e5f1');
    })

    controlElement[i].addEventListener('mouseup', function () {
      changeBackground(parentElement[i], '#ffffff');
    })
  }
}

// Обработка наведения на иконку Лайк
if (checkBoxElement) {
  for (let j = 0; j < checkBoxElement.length; j++) {
    changeHeartColor(checkBoxElement[j], iconElement[j]);

    checkBoxElement[j].addEventListener('click', function () {
      changeHeartColor(checkBoxElement[j], iconElement[j]);
    })

    labelElement[j].addEventListener('mousedown', function () {
      if (checkBoxElement[j].checked) {
        iconElement[j].style.color = 'rgba(240, 35, 35, 0.02)';
        iconElement[j].style.fill = 'rgba(240, 35, 35, 0.3)';
      }
    })
    labelElement[j].addEventListener('mouseup', function () {
      if (checkBoxElement[j].checked) {
        iconElement[j].style.color = '#f02323';
        iconElement[j].style.fill = '#f02323';
      }
    })
  }
}

// Проверка и реализация ошибки при отправки формы со страницы Направления
if (formElement) {
  formElement.addEventListener('submit', function (element) {
    for (let a = 0; a < textAreaElement.length; a++) {
      if (!textAreaElement[a].value) {
        element.preventDefault();
        errorMessageElement[a].style.display = 'flex';
        textAreaElement[a].style.border = '1px solid #f47e7e'
      }
      textAreaElement[a].addEventListener('click', function () {
        errorMessageElement[a].style.display = 'none';
        textAreaElement[a].style.border = '1px solid #cbced9'
      })
    }
  })
}
