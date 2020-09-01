let headerElement = document.querySelector('.js-header');
let logoElement = document.querySelector('.js-image');
let openMenuBtn = document.querySelector('.js-menu-toggle');
let labelMenuElement = document.querySelector('.js-label')

// Реализация открытия меню
if (openMenuBtn) {
  openMenuBtn.addEventListener('click', function (element) {
    element.preventDefault();
    headerElement.classList.toggle('open-menu');
    openMenuBtn.classList.toggle('close-menu');

    if (openMenuBtn.classList.contains('close-menu')) {
      labelMenuElement.textContent = 'Закрыть меню';
      logoElement.classList.add('hide');
    } else {
      labelMenuElement.textContent = 'Открыть меню';
      logoElement.classList.remove('hide');
    }
  })
}
