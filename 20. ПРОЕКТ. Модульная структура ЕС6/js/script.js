// меняем синтаксис с 'module.export =' на 'export default' в наших модулях в конце.
// меняем синтаксис для импорта

// сейчас у нас на сайте ошибка openModal is not defined, потому что функционал описан в разных модулях.
// в modal.js вырезаем функции closeModal openModal и перемещаем на самый вверх. 
// в конце добавляем export {closeModal} и export {openModal}; ( можно одним экспортом через запятую)

// переходим в form.js и импортируем наши функции туда import {closeModal, openModal} from '/modal';
// получаем ошибку. нет переменной modal.
// в modal.js у нас есть 2 жетско забитые переменные modal и modalTrigger


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