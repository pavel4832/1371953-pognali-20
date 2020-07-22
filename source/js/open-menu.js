let menuElement = document.querySelector('.main-nav__wrapper');
let openMenuBtn = document.querySelector('.main-nav__toggle');
let labelMenuElement = document.querySelector('.js-label')

  openMenuBtn.addEventListener('click', function (element) {
    element.preventDefault();
    menuElement.classList.toggle('open-menu');
    openMenuBtn.classList.toggle('close-menu');
    if(openMenuBtn.classList.contains('close-menu')) {
      labelMenuElement.textContent = 'Закрыть меню'
    } else {
      labelMenuElement.textContent = 'Открыть меню'
    }
  })
