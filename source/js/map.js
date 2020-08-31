let backgroundMap = document.querySelector('.js-background')

backgroundMap.style.display = 'none';

ymaps.ready(init);

function init(){

  let myMap = new ymaps.Map("map", {
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
    iconContentLayout: MyIconContentLayout
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}
