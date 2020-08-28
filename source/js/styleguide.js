let parentElement = document.querySelectorAll('.transport-list__item');
let controlElement = document.querySelectorAll('.transport-list__icon');

for (let i = 0; i < controlElement.length; i++) {
  controlElement[i].addEventListener('mousedown', function () {
    parentElement[i].style.backgroundColor = '#e2e5f1';
  })

  controlElement[i].addEventListener('mouseup', function () {
    parentElement[i].style.backgroundColor = '#ffffff';
  })
}
