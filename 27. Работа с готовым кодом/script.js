'use strict';

// использование готовых модулей и решений.
// лучше всего использовать те решния, которые не имеют зависимостей
// слайдеры

// owl carousel и slick slider( в обоих случаях надо подключать еще Jquery). Можно заменть на tiny-slider( чистый js ). Есть ещё Gallery, glideJs, Fotorama

// http://ganlanyuan.github.io/tiny-slider/   -- Tiny-slider

// устанавливаем
// npm install tiny-slider --save

// подключаем слайдер к проекту
import {
    tns
} from "./node_modules/tiny-slider/src/tiny-slider";

// вот таким образом в документации описано как надо спроектировать html документ, чтобы он работал. Только мы вместо дивов кладем картинки
/* <div class="my-slider">
  <div></div>
  <div></div>
  <div></div>
</div> */


// инициализируем наш слайдер
// настройки слайдера. Можно поменять настройки
tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
});


// подключаем webpack:
// npx webpack

// создаётся bundle.js. Подключаем его в html
// подключаем стили со странички tiny-slider 

// в style.css говорим, что ширина картинки 500px


// https://hammerjs.github.io/  -- Это готовое решение для драг и свайп событий. Можно перетаскивать что-то. Весит очень мало!