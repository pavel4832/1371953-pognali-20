let headerElement = document.querySelector('.js-header');
let openMenuBtn = document.querySelector('.js-menu-toggle');
let labelMenuElement = document.querySelector('.js-label')

  openMenuBtn.addEventListener('click', function (element) {
    element.preventDefault();
    headerElement.classList.toggle('open-menu');
    openMenuBtn.classList.toggle('close-menu');
    if(openMenuBtn.classList.contains('close-menu')) {
      labelMenuElement.textContent = 'Закрыть меню'
    } else {
      labelMenuElement.textContent = 'Открыть меню'
    }
  })
