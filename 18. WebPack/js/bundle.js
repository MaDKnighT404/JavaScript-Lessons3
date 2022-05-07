/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((module) => {


// собираем из нескольких файлов js один
// CommonJS

function myModule() {
    this.hello = function() {
        console.log('Hello!');
    };

    this.goodbye = function() {
        console.log('Goodbye!');
    };
}

// задача из файла main.js перенести эту функцию в index.js и применять её там.

// обращаемся к объекту module и экспортируем нашу функцию

module.exports = myModule;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
// чтобы импортировать модуль из файла main.js

const myModule = __webpack_require__(/*! ../main.js */ "./main.js"); // в качестве аргумента указываем путь

// создаем экземпляр модуля из скрипта находящегося в main.js

const myModuleInstance = new myModule(); 

myModuleInstance.hello();
myModuleInstance.goodbye();

// gaup - планировщик задач, который создаёт различный таски которые выполняются в различных обстоятельствах.
// он не умеет собирать скрипты, ни обрабатывать изображения и т.д.

// webpack - сборщик модулей. Он собирает проект. Они могут комбинироваться. 

// https://webpack.js.org/guides/getting-started/  

// устанавливаем вебпак к себе в проект с помощью npm пакетов.

//mkdir webpack-demo
// cd webpack-demo
// npm init -y
// npm install webpack webpack-cli --save-dev

// npx webpack
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map