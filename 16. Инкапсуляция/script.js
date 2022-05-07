'use strict';

// Инкапсуляция - один из принципов ООП ( объектно-ориентированного программирования). Сокрытие состояния объекта от прямого доступа извне.
// По умолчанию все свойства объектов являются публичными, общедоступными, и мы к ним можем обратиться из любого места программы.

// 1) Защита от пользователя. Чтобы он не мог случайно или нарочно залезть и что-то поменять.
// 2) Мы всегда без последствий сможем улучшать и дорабатывать нашу программу.

// разбираем принцип работы на функции конструкторе.


// function User(name,age) {
//     this.name = name;
//     this.age = age;

//     this.say = function () {
//         console.log(`Имя пользователя:${this.name}, возраст: ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 25);

// console.log(ivan.name); // можно напрямую обратится к свойства объекта и узнать их значения
// console.log(ivan.age);

// ivan.say();


// // но мы можем и менять значения этих свойств:

// ivan.name = 'Alex';
// ivan.age = 40;

// ivan.say();







// чтобы такого не происходило и нельзы было менять значения и свойства у нашего объекта мы можем использовать инкапсуляцию.

// function User(name,age) {
//     this.name = name;
//     let userAge = age; // меняем this.age на объявление новой переменной

//     this.say = function () {
//         console.log(`Имя пользователя:${this.name}, возраст: ${userAge}`); // соответственно меняем вывод нашей переменной тут 
//     };
// }

// const ivan = new User('Ivan', 25);

// console.log(ivan.name); 
// console.log(ivan.userAge); // и тут

// ivan.say();

// // в этом случае НИЧЕГО не поменяется

// ivan.name = 'Alex';
// ivan.age = 40;

// ivan.say();


// // Дело в том, что при конструировании объекта мы создаем переменную к которой не можем даже доступ получить сейчас и получаем в результате undefined. 




// добавляем в нашу функцию геттеры и сеттеры, чтобы мы могли менять и получать значения свойств.

// function User(name,age) {
//     this.name = name;
//     let userAge = age; // 

//     this.say = function () {
//         console.log(`Имя пользователя:${this.name}, возраст: ${userAge}`); 
//     };

//     this.getAge = function() {  // раз мы не можем из вне обратится к этой переменной, создаем специальный метод, который сможет это делать
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {// сюда можно добавлять что угодно. Например проверку на число
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }

// const ivan = new User('Ivan', 25);

// console.log(ivan.name); 
// console.log(ivan.getAge()); // получаем возраст. getAge - это МЕТОД  

// ivan.setAge(35); // устанавливаем возвраст в 35 лет. В консоль ничего не выводим
// ivan.setAge(300);  // устанавливаем возвраст в 300 лет. В консоль ничего не выводим, и результат с 35 не изменяется

// console.log(ivan.getAge()); // выводим в консоль возраст, который остался 35


// ivan.say();






// Теперь проверям как это всё работает на классах. 



// class User {
//     constructor (name,age) {
//         this.name = name;
//         this.userAge = age;
//         }
        
//         say() {
//             console.log(`Имя пользователя:${this.name}, возраст: ${this.userAge}`); 
//         }
    
//         getAge() {
//             return this.userAge;
//         }
    
//         setAge(age) {
//             if (typeof age === 'number' && age > 0 && age < 110) {
//                 this.userAge = age;
//             } else {
//                 console.log('Недопустимое значение');
//             }
//         }
// }


// const ivan = new User('Ivan', 25);

// console.log(ivan.name);
// ivan.userAge = 99;
// console.log(ivan.getAge());  // как и в самом начале при использовании синтаксиса this мы делаем наш объект публичным и данные легко меняются снаружи (

// ivan.setAge(50);

// ivan.say();




// поэтому, чтобы избежать возможности изменения данных мы добавляем к нашим переменным _ . Это внегласное соглашение программистов


// class User {
//     constructor (name,age) {
//         this.name = name;
//         this._age = age;
//         }
        
//         say() {
//             console.log(`Имя пользователя:${this.name}, возраст: ${this._age}`); 
//         }
    
//         get age() { // меняем обычный метод на гет аксессор
//             return this._age;
//         }
    
//         set age(age) { // меняем обычный метод на set аксессор
//             if (typeof age === 'number' && age > 0 && age < 110) {
//                 this._age = age;
//             } else {
//                 console.log('Недопустимое значение');
//             }
//         }
// }


// const ivan = new User('Ivan', 25);


// // правильный подход
// // console.log(ivan.age); // используем геттер 
// // ivan.age = 99; // используем сеттер
// // console.log(ivan.age);
// // ivan.say();

// // НЕПРАВИЛЬНОЙ подход. Напрямую обращаться к свойствам. К сожалению он работает:

// console.log(ivan._age); // используем геттер 
// ivan._age = 99; // используем сеттер
// console.log(ivan._age);
// ivan.say();






// // эксперементальный синтаксис, который ещё не вошел в стандрарт. 

// class User {
//     constructor (name,age) {
//         this.name = name;
//         this._age = age;
//         }
        
//     surname = 'Bagdanov'; // свойство, которое записывается в новый объект, только без конструктора. Если открыть последнюю версию Chrome, то в консоле удивим его. 

//         say() {
//             console.log(`Имя пользователя:${this.name} ${this.surname} , возраст: ${this._age}`);  // запихнем его сюда
//         }
    
//         get age() { 
//             return this._age;
//         }
    
//         set age(age) { 
//             if (typeof age === 'number' && age > 0 && age < 110) {
//                 this._age = age;
//             } else {
//                 console.log('Недопустимое значение');
//             }
//         }
// }


// const ivan = new User('Ivan', 25);


// console.log(ivan.age);  
// ivan.age = 99; 
// console.log(ivan.age);
// ivan.say();


// Появится возможность создавать приватные свойства в классах. добавляем # перед названием свойсва у класса. 


// эксперементальный синтаксис, который ещё не вошел в стандрарт. 

// class User {
//     constructor (name,age) {
//         this.name = name;
//         this._age = age;
//         }
        
//     #surname = 'Bagdanov'; // свойство, которое записывается в новый объект, только без конструктора. Если открыть последнюю версию Chrome, то в консоле удивим его. 

//         say() {
//             console.log(`Имя пользователя:${this.name} ${this.#surname} , возраст: ${this._age}`);  // запихнем его сюда
//         }
    
//         get age() { 
//             return this._age;
//         }
    
//         set age(age) { 
//             if (typeof age === 'number' && age > 0 && age < 110) {
//                 this._age = age;
//             } else {
//                 console.log('Недопустимое значение');
//             }
//         }
// }


// const ivan = new User('Ivan', 25);

// console.log(ivan.surname); // пытаем снаружи достучаться до приватного свойства у нового объекта класса. ПОЛУЧАЕМ UNDEFINED

// ivan.say();



class City {
    constructor(name, age, popularity) {
        this.name = name;
        this.age = age;
        this.popularity = popularity;
    }

    #country = 'Russia';

    get country() {
        return this._country;
    }

    set country(country) {
        this.#country = country;
    }
}

const sochi = new City('Sochi', 300, 400000);


sochi.country = 'USA';
console.log(sochi);