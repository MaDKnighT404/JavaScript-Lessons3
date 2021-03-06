'use strict';
// Event loop - событийный цикл


console.log(1);

setTimeout(() => { // первый аргумент - функция, второй время
    console.log('Timeout_2000');
}, 2000);


setTimeout(() => { // первый аргумент - функция, второй время
    console.log('Timeout_4000');
}, 4000);

console.log(2);

// асинхронные операции - запускаются с течением времени (setTimeout). Запросы на сервер. Все колбеки - тоже асинхронные. 


// ------------------------------


// http://latentflip.com/loupe/ - тут можно посмотреть как работает асинхронный код

// Call Stack - те операции которые выполняются в данный момент

// Web Apis - контейнер в браузере, который хранит промежуточные данные

// Callback Queue - очередь. Все операции первым делом попадают сюда и становятся в очередь. Паралельного выполнятся не могут. 
// Если например мы будет перебирать массив с помощью forEach, то произойдет следующее:
// метод forEach подпадает в Callback Queue, потом идёт Call Stack. А потом начинает обрабатывать наши элементы и вот они уже не попадают в Callback Queue,
// а сразу выполняются в Call Stack. Если мы будет делать что-то ещё на странице, то все операции будут ждать завершения метода forEach


// после выполнения строки обработчика событий ( это синхронный код ), он попадает в Web Apis, где ждет, пока мы кликнем на кнопку.


// ------------------------

setTimeout(() => { // так как это колбек функция, она сначала попадёт в web Apis, а потом встанет в общую очередь, в котороу же загрузились наши console.logi
    console.log(1);
}, 0); // даже если установим 0 секунд, то код выполнится всё равно после всех синхронных действий.
// если JS видит в setTimeout значение 0, то он автоматически подставит 4мл. Сделано это для совместимости с разными браузерами.

console.log(2);
console.log(3);
console.log(4);