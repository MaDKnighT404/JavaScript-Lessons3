'use strict';

// геттеры позволяют получать свойства, а сеттеры устанавливать свойства у объекта.

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {  // когда мы будем вызывать метод userAge, мы будем получать значение свойства age
        return this.age;
    },

    set userAge(number) { // у сеттера обязательно должен быть указан аргумент, который передаётся из вне. get и set могут называться одинаково
        this.age = number;
    }
};

console.log(persone.userAge); // геттер позволяет нам работать с функцией как с обычным свойством, поэтому скобки не нужны . Свойство аксессор


console.log(persone.userAge = 30); // применение сеттера. 
console.log(persone.userAge); // применение сеттера. 

// свойства объекта геттер и сеттер выглядят как самые обычные свойства объекта, а не методы.
// эти свойства полезны при планировании сложного функционала. Например может сразу переводить одну валюту в другую умножая на переменную с курсом ( currensy, например)