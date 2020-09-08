let parentElement = document.querySelectorAll('.transport-list__item');
let controlElement = document.querySelectorAll('.transport-list__label');
let checkBoxElement = document.querySelectorAll('.profile-catalog__choose');
let labelElement = document.querySelectorAll('.profile-catalog__like-icon');
let iconElement = document.querySelectorAll('.like-icon');
let formElement = document.querySelector('.js-form');
let textAreaElement = document.querySelectorAll('.js-text-area');
let errorMessageElement = document.querySelectorAll('.js-error');
let accordionBtn = document.querySelectorAll('.js-search-toggle');
let backgroundMap = document.querySelector('.js-background')
let chooseElement = document.querySelectorAll('.js-choose');
let openChooseField = document.querySelectorAll('.js-country-select');
let closeBtn = document.querySelectorAll('.js-country-close');
let removeBtn = document.querySelectorAll('.js-remove-btn');
let filterElement = document.querySelector('.js-filter');
let openFilterBtn = document.querySelector('.js-filter-toggle');
let closeFilterBtn = document.querySelector('.js-filter-close')
let labelFilterElement = document.querySelector('.js-filter-label')
let headerElement = document.querySelector('.js-header');
let logoElement = document.querySelector('.js-image');
let openMenuBtn = document.querySelector('.js-menu-toggle');
let popupElement = document.querySelector('.js-popup');
let openBtn = document.querySelector('.js-open-popup');
let closeBtnModal = document.querySelector('.js-close-popup');
let bodyPage = document.querySelector('body');
let sticky = 80;

// При успешной загрузке js снимается состояние без скрипта
bodyPage.classList.remove('no-js');

// Реализация открытия модального окна
if (popupElement) {
  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popupElement.classList.add('popup-show');
  });

  closeBtnModal.addEventListener('click', function (e) {
    e.preventDefault();
    popupElement.classList.remove('popup-show');
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      if (popupElement.classList.contains('popup-show')) {
        e.preventDefault();
        popupElement.classList.remove('popup-show');
      }
    }
  });
}

// Реализация открытия меню
if (openMenuBtn) {
  openMenuBtn.addEventListener('click', function (element) {
    element.preventDefault();
    headerElement.classList.toggle('open-menu');
    openMenuBtn.classList.toggle('close-menu');

    if (openMenuBtn.classList.contains('close-menu')) {
      logoElement.classList.add('hide');
    } else {
      logoElement.classList.remove('hide');
    }
  })
}

// Переключатель классов
function toggleFilter() {
  if(filterElement) {
    filterElement.classList.toggle('open-filter');
    openFilterBtn.classList.toggle('close-filter');
  }

  if(openMenuBtn.classList.contains('close-filter')) {
    labelFilterElement.setAttribute(aria-label, 'Закрыть фильтр');
  } else {
    labelFilterElement.setAttribute(aria-label, 'Открыть фильтр');
  }
}

// Реализация открытия фильтра
if (openFilterBtn) {
  openFilterBtn.addEventListener('click', function (element) {
    element.preventDefault();
    toggleFilter();
  })

  closeFilterBtn.addEventListener('click', function (element) {
    element.preventDefault();
    toggleFilter();
  })
}

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

// Открытие/Скрытие элементов в блоке поиск
for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function (element){
    element.preventDefault();
    this.classList.toggle('close-arrow');
    let panel = this.nextElementSibling;
    panel.classList.toggle('hidden-element');
  })
}

// Изменений цвета фона для иконки транспорта
function changeBackground(element, color) {
  if (element) {
    element.style.backgroundColor = color;
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

// Изменение цвета svg картинки для иконки Лайк
function changeHeartColor(elementFirst, elementSecond, elementThird) {
  if (elementFirst.checked) {
    elementSecond.style.color = '#f02323';
    elementSecond.style.fill = '#f02323';
    elementThird.style.backgroundColor = '#f9eaea';
  } else {
    elementSecond.style.color = 'rgba(25, 33, 68, 0.3)';
    elementSecond.style.fill = 'none';
    elementThird.style.backgroundColor = '#e2e5f2';
  }
}

// Обработка наведения на иконку Лайк
if (checkBoxElement) {
  for (let j = 0; j < checkBoxElement.length; j++) {
    changeHeartColor(checkBoxElement[j], iconElement[j], labelElement[j]);

    checkBoxElement[j].addEventListener('click', function () {
      changeHeartColor(checkBoxElement[j], iconElement[j], labelElement[j]);
    })

    labelElement[j].addEventListener('mousedown', function () {
      if (checkBoxElement[j].checked) {
        iconElement[j].style.color = 'rgba(240, 35, 35, 0.02)';
        iconElement[j].style.fill = 'rgba(240, 35, 35, 0.3)';
      } else {
        iconElement[j].style.color = 'rgba(25,33,68,.1)';
      }
    })

    labelElement[j].addEventListener('mouseup', function () {
      if (checkBoxElement[j].checked) {
        iconElement[j].style.color = '#f02323';
        iconElement[j].style.fill = '#f02323';
      } else {
        iconElement[j].style.color = 'rgba(25,33,68,.3)';
      }
    })

    labelElement[j].addEventListener('mouseover', function () {
      if (checkBoxElement[j].checked) {
        this.style.backgroundColor = '#f9d8d8';
        iconElement[j].style.color = '#f02323';
      } else {
        this.style.backgroundColor = '#e2e5f2';
        iconElement[j].style.color = '#192144';
      }
    })

    labelElement[j].addEventListener('mouseout', function () {
      if (checkBoxElement[j].checked) {
        this.style.backgroundColor = '#f9eaea';
        iconElement[j].style.color = '#f02323';
      } else {
        this.style.backgroundColor = '#e2e5f2';
        iconElement[j].style.color = 'rgba(25,33,68,.3)';
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

// Map
if (backgroundMap) {
  backgroundMap.style.display = 'none';

  ymaps.ready(init);
}

function init(){

  let myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 16,
      controls: []
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div>$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/map-marker.svg',
      iconImageSize: [41, 41],
      iconImageOffset: [-20, -25],
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

// Функция показа скрол меню
function scrollMenu() {
  if (window.pageYOffset > sticky) {
    headerElement.classList.add('sticky');
  } else {
    headerElement.classList.remove('sticky');
  }
}

// Скролл меню
window.onscroll = function() {
  scrollMenu()
};
