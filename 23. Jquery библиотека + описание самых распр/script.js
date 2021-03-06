// документация https://page2page.lohmach.info/  . Использовать карту функции слева
// Очень старая библиотека и лучше ей не пользоваться. Но она может попасться в старых проектах. 
// Весь её функционал уже есть в нативном JS

// подключить библиотеку Jquery можно 2 способами

// скачать библиотеку поместить её в папку JS и потом обращаться к ней.
// можно использовать CDN сервера.Заходим за cdnjs.com и там находим скрипт Jquery библиотеки, который надо вставить в html код. Slim версия - укороченная
// с помощью npm пакета . npm i jquery --save . После чего она появляется в папке node_modules. Потом с помощью import подключаем её к файлу js

// import 'jquery'; // подключается так, но получаем ошибку
import $ from 'jquery'; // импортируем конкрутную сущность, а именно $ - функцию


// в нативном JS :    const btn = document.querySelector.('#btn');

// const btn = $('#btn');
// console.log(btn);

// в нативном JS : btn.addEventListener.('Click', () => {}) . С помощью Jquery - on();


// чтобы мы могли взаимодействовать с нашими элементами на странице, они уже должны быть сформированы в DOM дереве. 
// поэтому, чтобы всё отрабатывало правильно, нужно дождаться этого момента, а уже потом использовать наши скрипты
// раньше мы использовали window.addEventListener('DOMContentLoaded', function() {} и внутрь функции писали наш код

// теперь можно это делать с помощью $(document).ready(function() {
//}); 

$(function () {
    // вещаем обработчик события на кнопку. При наведении на неё вешается класс active, а при убираении мышки, класс убирается
    // среди всех элементов с этим классом выбираем первый с помощью :first
    // hover устарел, поэтому зачеркнут.
    $('.list-item:first').hover(function () { //$('.list-item:first').on("mouseenter mouseleave", function () {
        $(this).toggleClass('active');
    });

    // берем все четные изображения которые есть по классу и будем их скрывать
    // eq(2) - означает третий элемент с классом list-item
    $('.list-item:eq(2)').on('click', function () { // при нажатии на третью кнопку
        $('.image:even').fadeToggle(); // меняем прозрачность каждой четной картинки 
        // (Even - четный, но выбирается 1,3,5 элемент. Потому что нумерация начинается с нуля. Не четные - 0,2,4,6
    });

    $('.list-item:eq(4)').on('click', function () { // при нажатии на пятую кнопку
        $('.image:odd').animate( // пишем анимацию самостоятельно 
            {  // передаём объект со значениями
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);  // указываем время
    });

});