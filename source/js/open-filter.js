let filterElement = document.querySelector('.js-filter');
let openFilterBtn = document.querySelector('.js-filter-toggle');
let closeFilterBtn = document.querySelector('.js-filter-close')
let labelFilterElement = document.querySelector('.js-filter-label')

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
