let filterElement = document.querySelector('.js-filter');
let openFilterBtn = document.querySelector('.js-filter-toggle');
let closeFilterBtn = document.querySelector('.js-filter-close')
let labelFilterElement = document.querySelector('.js-filter-label')

function toggleFilter() {
  if(filterElement) {
    filterElement.classList.toggle('open-filter');
    openFilterBtn.classList.toggle('close-filter');
  }

  if(openMenuBtn.classList.contains('close-filter')) {
    labelFilterElement.textContent = 'Закрыть фильтр';
  } else {
    labelFilterElement.textContent = 'Открыть фильтр';
  }
}

openFilterBtn.addEventListener('click', function (element) {
  element.preventDefault();
  toggleFilter();
})

closeFilterBtn.addEventListener('click', function (element) {
  element.preventDefault();
  toggleFilter();
})
