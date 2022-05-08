/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sayBye),
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "sayHi": () => (/* binding */ sayHi),
/* harmony export */   "two": () => (/* binding */ two)
/* harmony export */ });
// из main.js будем что-то экспортировать, а в script.js будем импортировать
// При экспорте обязательно должно быть имя. У функций например

let one = 1; // первый способ


let two = 2;
 // именнованный синтаксис


function sayHi() {
    console.log('Hello');
}


// в модулях существует экспорт по умолчанию. Он может быть только один. 

function sayBye() { // добавляем default перед названием функции.
    console.log('GoodBye');
}



// в index HTML, можно подключить наши скрипты друг за другом и будет работать без webpack
// но в таком случае мы должны прописать в тэге script   type = 'module'

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./js/main.js");



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



// const number = 155;

// (function(){ // создаем собственную область видимости
//     let number = 1;
//     console.log(number);
//     console.log(number + 15);
// }());

// console.log(number);


// // 2 Метод с использованием объектного интерфейса. Модуль записываем в переменную и в неё возвращаем методы доступные снаружи.


// const user = (function(){
//         const privat = function() {
//             console.log('это функция приватная')
//         };

//         return { // наша анониманая самовызывающая функция, создаёт объект, который возвращает только те методы и свойства, которые нам нужны снаружи.
//             sayHello: privat
//         };
// }());

// user.sayHello();








// Модульность. Новый стандарт

// импортируем данные из main.js

// import{one, two} from './main.js';

// console.log(`${one} and ${two} `);

// всё это будет работать, но браузер не умеет собирать в один рабочий скрипт. Нужно обязательно пользоваться сборищиками ( webpack );
// запускаем npx webpack и получаем bundle.js. Его и запускаем



// при импорте чего-либо можно сразу переименовать.

// import{one as first} from './main.js';
// console.log(first);

// в main.js у нас есть 3 сущность. 2 переменные и функция. Чтобы импортировать абсолютно всё и сразу:



console.log(_main_js__WEBPACK_IMPORTED_MODULE_0__);

console.log(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main_js__WEBPACK_IMPORTED_MODULE_0__.two}`); // в таком случае обращаемся к нашим импортируемым данным вот так.
_main_js__WEBPACK_IMPORTED_MODULE_0__.sayHi();


// ипорт по умолчанию. В файле main.js была создана функция с ключевым словом default. Чтобы её импортировать:

 // экспортируется напрямую, а не как именнованный объект.

(0,_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map