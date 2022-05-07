
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