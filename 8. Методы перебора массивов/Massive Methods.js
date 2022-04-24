const people = [
    {name: 'George', age: 25, budget: 100000},
    {name: 'Alex', age: 30, budget: 20000},
    {name: 'Irina', age: 55, budget: 100},
    {name: 'Konstantin', age: 35, budget: 23500},
    {name: 'Vica', age: 50, budget: 500500},
    {name: 'Oleg', age: 17, budget: 8000}
];

// циклы

// for (let i = 0; i < people.length; i++) {     // ES5
//     console.log(people[i]);
// }

// for (let persone in people) {  // for in - перебирает ключи, а for off перебирает значения   // ES6
//     console.log(persone);
// }






// FOREACH

// people.forEach(person => console.log(person));  // простой перебор элементов






// MAP  . Преобразовывает текущий массив в новый

// const newPeople = people.map(persone => {   // вернем новый объект в переменную newPeople
//     return persone;
// });
// console.log(newPeople);

// const newPeople = people.map(persone => {  // каждое значения ключа будет преобразовано в строчку 'hello'
//     return 'hello';
// });
// console.log(newPeople);


// const newPeople = people.map(persone => {  // можно получить только имена людей
//     return persone.name;
// });
// console.log(newPeople);


// const newPeople = people.map(persone => {  // можно преобразовать наш массив
//     return `${persone.name} (${persone.age})`;
// });
// console.log(newPeople);





// FILTER . Фильтруем массив по какому-то свойству. Возвращает новый массив


// отфильтровать людей старше 18 лет

// 1) старый способ

// const adults = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >=18) {
//         adults.push(people[i]);
//     }
// }
// console.log(adults);


// 2) новый способ

// const adults = people.filter(persone => {
//     if(persone.age >= 18 ) {
//         return true;
//     }
// });
// console.log(adults);


// 2.1 

// const adults = people.filter(persone => persone.age >= 25); // оставляем только условие. Тоесть возвращается только те значния, которые описаны в условии
// console.log(adults);




// REDUCE . Получаев финальное значение совершив итерацию по всему массиву. 
// Изменяем значение total на каждой итерации начиная с 0

// ЗАДАЧА. Проссумировать бюджет всех людей.

// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget;
// }
// console.log(amount);




// const amount = people.reduce((total, people) => { // первый параметр коллбек функция. Внутри неё тоже 2 параметра - переменная и итерируемый объект.
//     return total + people.budget;
// }, 0); // второй аргумент - начальная позиция для total
// console.log(amount);

// ИЛИ ТАК

// const amount = people.reduce((total, people) => total + people.budget, 0); 
// console.log(amount);


// или так

const arr10 = [1,2,3,4];

console.log(arr10.reduce((acc, el) => el += acc, 0));

const arr11 = [
    {num:10, name: 'george'},
    {num:25, name: 'george'},
    {num:33, name: 'george'},
]

console.log(arr11.reduce((el, acc) => el + acc.num, 0));







// FIND. Находим элемент из массива по какому-то условию. В ЕДИНСТВЕННОМ ЧИСЛЕ!

// const george = people.find(persone => {
//     return persone.name === 'George';
// });
//console.log(george);

// ИЛИ

// const george = people.find(persone => persone.name === 'George');
// console.log(george);


// FINDINDEX. Находим элемент из массива по какому-то условию. В ЕДИНСТВЕННОМ ЧИСЛЕ. На выходе получаем индекс этого объекта

// const georgeIndex = people.findIndex(persone => {
//     return persone.name === 'George';
// });
// console.log(georgeIndex);




// ЗАДАЧА.    ОТФИЛЬТРОВАТЬ ЛЮДЕЙ ПО ИХ БЮДЖЕТУ. Создать новый массив с новыми данными.

// const people = [
//     {name: 'George', age: 25, budget: 100000},
//     {name: 'Alex', age: 30, budget: 20000},
//     {name: 'Irina', age: 55, budget: 100},
//     {name: 'Konstantin', age: 35, budget: 23500},
//     {name: 'Vica', age: 50, budget: 500500},
//     {name: 'Oleg', age: 17, budget: 8000}
// ];


// const filteredPeople = people.filter(person => person.budget > 10000);  // создасться новый массив из людей, у которых бюджет больше 10000. 

// const newFilteredPeople = filteredPeople.map(person => { // создаем новый массив с новыми данными
//     return {
//         info: `${person.name}(${person.age})`,
//         cash: person.budget
//     };
// });

// console.log(filteredPeople);
// console.log(newFilteredPeople);

// // можно посчитать общий бюджет

// const amount = newFilteredPeople.reduce((total, newFilteredPeople) => total + newFilteredPeople.cash, 0);
// console.log(amount);
// // const amount = people.reduce((total, people) => total + people.budget, 0); 







// const matrixArr = [  // матричный массив
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// console.log(matrixArr[2][0]);






// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл'); // добавить в конец
// console.log(styles);
// styles[Math.floor(styles.length -1) / 2] = 'Классика';  // заменить элемент в середине на значение.
// console.log(styles);
// styles.shift(); // убрать первый элемент
// console.log(styles);
// styles.unshift('Рэп','Рэгги'); // добавить в начала массива
// console.log(styles);





// let arr = [];

// function sumInput() {
//     while(true) {
//         let input = prompt('Введите число','');
//         if (input === '' || input === null || !isFinite(input)) break;
//         arr.push(+input);
//     }
// }
// sumInput();

// const sum = arr.reduce((total,arr) => total + arr, 0);

// console.log(arr);
// console.log(sum);


// преобразование массивов и объектов


// const obj = {
//     name: 'George',
//     age:20
// };

// // const arrObj = Object.values(obj);
// // const arrObj = {...obj};

// // const arrObjKeys = Object.keys(obj);


// const arr = Array.from('123491920201');

// console.log(arr);
// // console.log(arrObj);
// // console.log(arrObjKeys);



const arr1 = ['Name', 'Age', 'Country'];
const arr2 = ['George', 34, 'Russia'];

const obj = arr1.reduce((acc,n,i) => ({...acc, [n]: arr2[i]}), {});
const obj2 = Object.assign(...arr1.map((n, i) => ({ [n]: arr2[i] })))
console.log(obj);
console.log(obj2);


var keys = ['foo', 'bar', 'baz'];
var values = [11, 22, 33]

var result = {};
keys.forEach((key, i) => result[key] = values[i]);
console.log(result);





