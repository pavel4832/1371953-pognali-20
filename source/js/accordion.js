let accordionBtn = document.querySelectorAll('.js-search-toggle');

// Открытие/Скрытие элементов в блоке поиск
for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function (element){
    element.preventDefault();
    this.classList.toggle('close-arrow');
    let panel = this.nextElementSibling;
    panel.classList.toggle('hidden-element');
  })
}
