'use strict';

// функция генаратор генерирует результат последовательно

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator(); // помещаем функцию генератор в переменную

// // при вызове функции есть встроенный метод next. 
// // При каждом вызове будем получать следующее значание из yield.Второе значение done - говорит, выполнилась ли наша функция полностью
// console.log(str.next());
// console.log(str.next().value); // можем вместо обеъкта со свойства value и done сразу получить значение свойства value
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next()); // все значение value из свойства yeild будут выполнены, но done по прежнему false
// console.log(str.next()); // value - undefined, а вот done наконец-то станет true 


// -----------------------


// function* count(n) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value); // в результате получим 0 1 2. Цикл будет останавливаться при каждой итерации.


// -------------------------


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// можно перебрать нашу функции с помощью for of

for (let k of count(7)) { // в таком случае результат будет 0 1 2 3 4 5 6
    console.log(k);
}


