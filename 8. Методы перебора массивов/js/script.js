'use strict';

// filter
// отфильтровать имена у которых длина имени меньше 5 символов

// const names =['Ivan', 'Ann', 'Ksenia', 'Volandemort'];

// const shortNames = names.filter(name => name.length < 5);
// console.log(shortNames);


// map
// создать новый массив с значением нижненго регистра

// const answers = ['AnNa', 'ivaN', 'Hello'];

// const newAnswers = answers.map(name => name.toLocaleLowerCase());
// console.log(newAnswers);


// можно перезаписать этот же массив. Но тогда нужно использовать let. Так лучше не делать
// let answers = ['AnNa', 'ivaN', 'Hello'];

// answers = answers.map(name => name.toLocaleLowerCase());
// console.log(answers);




// some/every
// some, если хотябы один элемент соответствует условию, то этот метод вернет true.

// const some = [0, 'hello', false, undefined,];
// console.log(some.some(num => typeof num == 'number'));
// console.log(some.some(num => typeof num === 'string'));
// console.log(some.some(num => typeof num === 'boolean'));
// console.log(some.some(num => typeof num === 'undefined'));

// console.log('--------------')
// // every, если все элементы соответствуют условию

// const every = [0, 'hello', false, undefined,];
// console.log(some.every(num => typeof num == 'number'));
// console.log(some.every(num => typeof num === 'string'));
// console.log(some.every(num => typeof num === 'boolean'));
// console.log(some.every(num => typeof num === 'undefined'));



// reduce, собирает массив в одно единое целое. 

// const arr = [16,44,13,2,5,7];
// const sum = arr.reduce((el,acc) => el + acc, 0);
// console.log(sum);

// const arr = ['apple', 'orange', 'mango'];
// // const sum = arr.reduce((el,acc) => el + ', ' + acc);
// const sum = arr.reduce((el,acc) => `${el},    ${acc}`);
// console.log(sum);




// Кейс

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     kubik: 'animal',
//     loki: 'animal'
// };


// // делаем матрицу. Массив массивов

// // const newArr = Object.entries(obj);
// // console.log(newArr);

// // используем методы по цепочке!
// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone') // перебираем наш матричный массив и фильтруем так, что ВТОРОЙ элемент в массиве строго равен 'persone'
// .map(item => item[0]);  // трансформируем наш полученный массив
// console.log(newArr);




const obj = {
    Name: 'George',
    Age: 23,
    Human: true,
};

const newArr = Object.entries(obj)
.map(item => `${item[0]}:${item[1]}`)
console.log(newArr);


