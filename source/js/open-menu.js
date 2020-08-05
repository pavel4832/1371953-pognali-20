let headerElement = document.querySelector('.js-header');
let logoElement = document.querySelector('.js-image');
let openMenuBtn = document.querySelector('.js-menu-toggle');
let labelMenuElement = document.querySelector('.js-label')

openMenuBtn.addEventListener('click', function (element) {
  element.preventDefault();

  if(headerElement) {
    headerElement.classList.toggle('open-menu');
    openMenuBtn.classList.toggle('close-menu');
  }

  if(openMenuBtn.classList.contains('close-menu')) {
    labelMenuElement.textContent = 'Закрыть меню';
    logoElement.classList.add('hide');
  } else {
    labelMenuElement.textContent = 'Открыть меню';
    logoElement.classList.remove('hide');
  }
})
