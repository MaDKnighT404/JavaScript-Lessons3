// меняем синтаксис с 'module.export =' на 'export default' в наших модулях в конце.
// меняем синтаксис для импорта

// сейчас у нас на сайте ошибка openModal is not defined, потому что функционал описан в разных модулях.
// в modal.js вырезаем функции closeModal openModal и перемещаем на самый вверх. 
// в конце добавляем export {closeModal} и export {openModal}; ( можно одним экспортом через запятую)

// переходим в form.js и импортируем наши функции туда import {closeModal, openModal} from '/modal';
// получаем ошибку. нет переменной modal.
// в modal.js у нас есть 2 жетско забитые переменные modal и modalTrigger
require('es6-promise').polyfill(); // первый способ
import 'nodelist-foreach-polyfill'; // второй. Особый синтаксис для npm пакета. У файлов другой - как ниже
// когда мы устанавливаем npm пакеты внутрь своего проекта, то они заносятся в папку node_modules и уже оттуда имортируеются сюда.


import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/form';
import slider from './modules/slider';
import {
    openModal
} from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-06-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});

// Преобразуем наш код в старый формат.

// https://babeljs.io/
// Первая технология - транспритер (babel). Переводит код в старый формат.
// Вторая технология - полифилы. В старый браузерах метода forEach не существует. С помощью полифилов можно сэмулировать работу этого метода.

// Есть два способа использования Babel. 

// 1 Каждый файл прогонять через эту программу. Никто так не делает
// 2. Подключаем эту утилиту к сборщику проектов. Находим на сайте Usage guide

// npm install --save-dev @babel/core @babel/cli @babel/preset-env

// core - основная утилита с ядром babel 
// cli - позволяет запускать babel прямо из командной строки
// preset-env - пресет env. Набор настроек. env - самый популярный

// дальше нужно создать файл babel.config.json и поместить туда объект.
// но так как мы используем webpack, то положим этот объект прямо туда, перед этим добавив скрипт для работы с babel в свойстве module
// устанавливаем npm пакет babel loader.  npm i --save-dev babel-loader

// заходим в package.json и создаем ещё одно свойство

// "browserslist": ["> 1%"], // добавляем эту строчку. Заходим на https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
// через поисковик смотри браузеры которые используют больше 1% пользователь.   >1%




// Чтобы добавить самостоятельно полифилы
// гуглим promise polifils
// находим npm пакет npm install es6-promise    https://www.npmjs.com/package/es6-promise
// находим способ установки. Добавляем require('es6-promise').polyfill();  в начало нашего скрипта.
// 


// Теперь пробуем найти полифил для forEach для IE через гугл и добавим его через импорт. 
// точно также устанавливаем пакет npm i nodelist-foreach-polyfill
// и наверху скрипта пишем import 'nodelist-foreach-polyfill';
