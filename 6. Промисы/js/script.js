'use strict';
// ПРО ПРОМИСУ ЛУЧШЕ СМОТРЕТЬ ЮТУБ И ЧИТАТЬ ЛЕКЦИЮ В ONENOTE


// промисы позволяют удобно работать с асинхронными операциями. В setTimeout например. Или работа с сервером. 
// Если произошло что-то, то выполнится какое-то действие.
// делаем запрос на сервер - получаем данные - выполняем действия с этими данными - отправляем опять на сервер
// можно использоваться и колбекфункции для всех этих действий, но это сложно читать

// САМОЕ ГЛАВНОЕ МЫ МОЖЕМ ВЫПОЛНЯТЬ КОД ПОСЛЕДОВАТЕЛЬНО




// console.log('запрос данных'); // код синхронный и выполнится сразу.

// setTimeout(() => {
//     console.log('Подготовка данных...'); 
//     const product = {
//         name: 'TV',
//         price: 10000
//     };
//     setTimeout(() => {  // разрастается дерево колбеков
//         product.status = 'ordered';
//         console.log(product);
//     }, 2000);
// }, 2000); // код асинхронный. Выполнится через 2 секунды






// console.log('запрос данных'); 

// const req = new Promise(function(resolve, reject){   // колбек функция у промиса принимает два аргумента. Функции resolve (выполнено) и reject (отклонено)
//     setTimeout(() => {
//         console.log('Подготовка данных...'); 
//         const product = {
//             name: 'TV',
//             price: 10000
//         };
//         resolve(product);
//     }, 2000); 
// }); 

// req.then ((product) => {  // метод then выполняется на промисе в случае положительного исхода (resolve). Принимает внутри себя аргумент с функцией resolve
//     setTimeout(() => {  // разрастается дерево колбеков
//         product.status = 'ordered';
//         console.log(product);
//     }, 2000);
// });




// ИСПОЛЬЗОВАНИЕ ДВУХ ПРОМИСОВ ДРУГ В ДРУГЕ

// console.log('запрос данных'); 

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...'); 
//         const product = {
//             name: 'TV',
//             price: 10000
//         };
//         resolve(product);
//     }, 2000); 
// }); 

// req.then ((product) => {  
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
//     req2.then(data => {
//         console.log(data);
//     }); 
// });



// конечный вариант . Можно не создавать новую переменную req2, а сразу возвращать промис

// console.log('запрос данных'); 

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...'); 
//         const product = {
//             name: 'TV',
//             price: 10000
//         };
//         resolve(product);
//     }, 2000); 
// }); 

// req.then ((product) => {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
//     }).then(data => {
//         console.log(data);
//     });


// если добавляем ещё один then. Выполняем какие-то действия по цепочке

// console.log('запрос данных'); 

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...'); 
//         const product = {
//             name: 'TV',
//             price: 10000
//         };
//         resolve(product);
//     }, 2000); 
// }); 

// req.then ((product) => {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
//     }).then(data => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     });





// reject

// console.log('запрос данных'); 

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...'); 
//         const product = {
//             name: 'TV',
//             price: 10000
//         };
//         resolve(product);
//     }, 2000); 
// }); 

// req.then ((product) => {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             product.status = 'ordered';
//             reject(product);
//         }, 2000);
//     });
//     }).then(data => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     }).catch(() => {
//         console.error('произошла ошибка');
//     });



// finnaly . Выполниться при любом исходе промиса. Это участок структуры где можно очистить форму

// console.log('запрос данных'); 

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...'); 
//         const product = {
//             name: 'TV',
//             price: 10000
//         };
//         resolve(product);
//     }, 2000); 
// }); 

// req.then ((product) => {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
//     }).then(data => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     }).catch(() => {
//         console.error('произошла ошибка');
//     }).finally(() => {
//         console.log('finally');
//     });



// методы All    race

const test = time => {
    return new Promise(resolve => {  // если нам reject не нужен, что бывает ОООООЧЕНЬ редко, можно оставить один resolve
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 мс'));
// test(2000).then(() => console.log('2000 мс'));

// Promise.all([test(1000), test(2000)]).then(() =>{  // Принимает массив с промисами. дожидаемся загрузки всех данных и потом одновременно их выполняет
//     console.log('ALL')
// });

Promise.race([test(1000), test(2000)]).then(() =>{  // дожидаемся когда один из промисов выполнится первым, а потом выполняемяем блок кода then
    console.log('ALL');
});