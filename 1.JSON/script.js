'use strict';

const persone = {
    name: 'Alex',
    telephone: '+79182001010'
};

// напрямую такой объект серверу мы передать не можем.
// необходимо этот объект превратить в читаемый текст для бэкэнда ( сервера )

// Метод stringify  превращает объекты из JS в нужный формат.

console.log(JSON.stringify(persone)); // берем объект JSON применяем на него метод stringify, а в качестве аргумента передаем значения переменной содержащей объект

// от сервера на наш сайт может прийти информация в формате JSON. Чтобы её обработать и превратить в объект используется метод parse

const serverAnswer = JSON.stringify(persone); // создаем переменную и присваеваем ей значение полученное от объекта JSON, на котором был пременем метод stringify с аргум

console.log(JSON.parse(serverAnswer)); // смотрим что получилось

const convertServerAnswer = JSON.parse(serverAnswer); // созаем переменную и присваемваем ей значение полученное от объекта JSON, на котором был пременем метод parse

convertServerAnswer.human = true; // добавляем новое свойство полученному объекту

console.log(convertServerAnswer); // смотрим результат




// С помощью JSON можно получать глубокие копии объекта ( если есть вложенность )

const food = {
    icecreem: 1,
fruits: {
    banana: 10,
    apple: 5,
},
vegetables: {
    carrot:4,
    potato: 3.5
    }
};

const food2 = JSON.parse(JSON.stringify(food));

food.icecreem = 500;
food2.fruits.cocos = 4;


console.log(food);
console.log(food2);










