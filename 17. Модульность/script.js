'use strict';


// С помощью модулей можно разделить наш код из проекта на разный функционал и поместить в отдельный файл. 

// Модуль может быть легко заменен или вообще удален без потери остальной функциональности. 
// Чистота глобального пространства. При создании скрипта мы объявляем переменные которые заносятся в глобальную обл.видимости. Их должно быть как можно меньше
// Помогают избежать конфликтов с одинаковыми именами. Все имена переменных находятся внутри собственной области видимости модуля. 




// Сейчас у нас подключены 2 файла скриптов: основной script.js и доп.библиотека lib.js
// в доп.библиотеке объявлена переменная app 


// объявляем такую же переменную в нашем основном скрипте:

// const app = 123;


// получаем ошибку Uncaught SyntaxError: Identifier 'app' has already been declared (at script.js:1:1)
// потому что такая переменная уже объявлена в глобальном пространстве из подключаемой библиотеки.
// в этом и заключается загрязнение глобального пространства.


// создание модулей через нативную реализацию. 



//  1 . Используем анонимную самовызывающуюся функцию

// (function(){

// }()); // вот так это выглядит.



const number = 155;

(function(){ // создаем собственную область видимости
    let number = 1;
    console.log(number);
    console.log(number + 15);
}());

console.log(number);


// 2 Метод с использованием объектного интерфейса. Модуль записываем в переменную и в неё возвращаем методы доступные снаружи.


const user = (function(){
        const privat = function() {
            console.log('это функция приватная')
        };

        return { // наша анониманая самовызывающая функция, создаёт объект, который возвращает только те методы и свойства, которые нам нужны снаружи.
            sayHello: privat
        };
}());

user.sayHello();
