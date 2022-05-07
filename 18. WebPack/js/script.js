// чтобы импортировать модуль из файла main.js

const myModule = require('../main.js'); // в качестве аргумента указываем путь

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