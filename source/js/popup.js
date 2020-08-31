let popupElement = document.querySelector('.js-popup');
let openBtn = document.querySelector('.js-open-popup');
let closeBtn = document.querySelector('.js-close-popup');

// Реализация открытия модального окна
if (popupElement) {
  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popupElement.classList.add('popup-show');
  });

  closeBtn.addEventListener('click', function (e) {
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
