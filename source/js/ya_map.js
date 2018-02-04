(function () {
  var spinner = document.querySelector(".ymap-container .loader")
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте

  var myMap,
      myPlacemark;

  function init() {
    myMap = new ymaps.Map("map-yandex", {
      center: [55.73417581875655,37.592241395523075],
      zoom: 17,
      controls: ["zoomControl"]
    });
    myPlacemark = new ymaps.Placemark([55.73417581875655,37.592241395523075], {
          hintContent: '9Cloud',
          balloonContent: 'г. Москва, ул. Тимура Фрунзе, 18'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'assets/img/metka.svg',
          iconImageSize: [28, 36],
          iconImageOffset: [-10, -35]
        });

    myMap.behaviors.disable(['scrollZoom']);
    myMap.geoObjects.add(myPlacemark);

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMap.layers.get(0).get(0);

    // Решение по callback-у для определния полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.classList.remove('is-active');
    });

  }

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
            layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
            || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");

    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
            script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

// Основная функция, которая проверяет когда мы навели на блок с классом "ymap-container"
  var ymap = function() {
    var mapContainer = document.querySelector('.ymap-container');

    mapContainer.addEventListener("mouseenter", function(){
          if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

            // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
            check_if_load = true;

            // Показываем индикатор загрузки до тех пор, пока карта не загрузится
            spinner.classList.add('is-active');

            // Загружаем API Яндекс.Карт
            loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
              // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором "map-yandex"
              ymaps.load(init);
            });
          }
        }
    );
  }


  //Запускаем основную функцию
  window.onload = ymap;

})();
