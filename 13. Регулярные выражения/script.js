'use strict';

// Регулярные выражения позволяют очень удобно работать со строками. Удалять/добавлять части строк, искать по конкретному символу, ограничить ввод определенных знаков 

// Любое регулярное выражение состоит из двух частей: Паттерн и флаги.
// Паттерн - шаблон. Что мы ищем в этой строке. Что пытаемся удалить и т.д. 

// Регулярные выражения с помощью конструктора.

// new RegExp('pattern', 'flags');// классический синтаксиси которым НИКТО не пользуется.
// по другому: /patter/f  - такой синтаксис встречается в 99% случаев.


//--------------------------------------

// const ans = prompt('Введите Ваше Имя', '');

// const reg = /n/; 

// console.log(ans.search(reg)); // на полученную строку из переменной ans используем метод search и в качестве параметра этого метода исп. регулярное выражение
// на странице пишем Ann . В результате получаем 1. Это значит, что буква n была найдена и находится в индексе 1 у строки. 
// если напишем что-то, что не содержит n, то получим в результате -1. Даже если это буква N


// если мы хотим, например, найти все буквы n, или чтобы это не зависило от регистра будет использовать флаги

// три основных флага:

// i - в не зависимости от регистра
// g - несколько одинаковых совподений
// m - многострочный поиск, если строки перенесены например.


//--------------------------------------

// const ans = 'AnnN';
// // флаги можно писать в любом порядке. Слитно.
// const reg = /n/i; // флаг с g с методом search не пройдет.Потому что этот метод ВСЕГДА ищет ТОЛЬКО первое совпадение. 

// const reg2 = /[an]/ig;
// console.log(ans.search(reg));  // метод search вернет индекс элемента в строке. 
// console.log(ans.match(reg));  // метод match возвращает массив с полученными данными. C первым нахождение элемента
// console.log(ans.match(reg2));  // с глобальным флагом возвращает массив со всеми данными

//--------------------------------------

// используем метод replace. Он меняет результат на что-то ещё. 2 аргумента. 1- что заменяем. 2- на что заменяем. 

// const pass = prompt('Ваш пароль');
// // Это регулярное выражение с точкой /./ - означает выбрать все элементы
// // Если нужно выбрать просто точку, то мы экранируем спец символ - /\./ . Таких спецсимволов много, нужно читать документацию. 
// console.log(pass.replace(/./g, '*')); // можно создавать регулярное выражение прямо внутри аргумента. Все элементы(с флагом глобальности) меняем на *
// console.log(pass.replace(/\./g, '*')); // теперь только все точки в пароле поменяются на звездочки


//--------------------------------------


// убираем все дефисы из нашей строки:
// console.log('25-55-33'.replace(/-/g, '')); // дефис - не спец символ, поэтому можно не экранировать 

// меняем все дефисы на двоеточие:
// console.log('25-55-33'.replace(/-/g, ':')); 


//--------------------------------------
// методы у самих регулярных выражений


// метод test возвращает тру или фолс

// const ans = prompt('Введите Ваше Имя', '');

// const reg = /n/ig; 

// console.log(reg.test(ans));//узнаем есть ли хоть символ в нашей переменной с буквой n в любом регистре.Если ругулярное выражение из нескольких символом-то ищем всё




//--------------------------------------
// если мы хотим искать определенные классы. Символы, цифры, строки, то используем КЛАССЫ

// \d - ищем цифры
// \w - все буквы
// \s - ищем все пробелы


// const ans = prompt('Введите только число', '');

// // хотим найти только цифры
// const reg = /\d/g; 

// console.log(ans.match(reg).join('')); // вводим 200px . Получаем массив [2, 0, 0]. Потому его можно склеить ( методом join) и получить число 



// мы хотим вывести R2D2
// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/ig));// Паттерн - Сначала буква, потом цифра, потом опять буква и потом опять цифра. В конце g - глобально, чтобы было красивей вывод)

//--------------------------------------

// обатные классы!!! Не числа, не буквы, не пробелы.

// \D - ищем не цифры
// \W - все не буквы
// \S - ищем не все пробелы

// const str = 'My name is R2D2';

// console.log(str.match(/\W/)); // первая не буква - это пробел
// console.log(str.match(/\D/g)); // получим каждый символ включая пробелы. КРОМЕ ЦИФР