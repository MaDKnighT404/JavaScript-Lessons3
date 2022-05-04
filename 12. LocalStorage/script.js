'use strict';


// // local storage - это объект в окне браузера, который хранит данные Ключ - Значения
// // Он существует только внутри одного домена и является для каждого домена уникальным. 
// // к нему можно обратится как window.localStorage. На самом деле это свойсво window
// // в него помещается около 5МБ информации
// // чтобы посмотреть, что хранится в localStorage, заходим в инструменты разработчика - F12 и переходим во вкладку Application. Слева будет Storage внутри localStorage


// // setItem - записываем в нашу внутреннюю базу данных информацию

// localStorage.setItem('number', 5); // первый аргумент - название нашего ключа, второй аргумент - значение ключа
// // теперь если перезагрузить страницу, то наши данные всё равно останутся в localStorage. И даже если мы закроем браузер, то эти данные там останутся. 



// // getItem - получаем информацию из нашей базы данных localStorage

// console.log(localStorage.getItem('number')) ; // тут только один аргумент. Сразу выведим это значение в консоль



// // removeItem - удаляем информацию из нашей базы данных.

// localStorage.removeItem('number'); // указываем название КЛЮЧА
// console.log(localStorage.getItem('number')) ;


// // clear() - полностью очищает наше локальное хранилище

// localStorage.clear(); // никакие аргументы не нужны.


// разбираем пример

const checkbox = document.querySelector('#checkbox'), // находим чекбокс в верстке
      form = document.querySelector('form'),
      change = document.querySelector('#color'); // кнопка


// при нажатии на чекбокс мы хотим, чтобы галочка сохранилась. 


checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true); // теперь при клике на чек бокс, каждый раз будет обновлятся ключ isChecked и становится true.
});

// проверяем как отображается чекбокс у пользователя и проверям у него ключ isChecked
if (localStorage.getItem('isChecked')) {  // если в локальном хранилище у ключа isCheked будет true, 
    checkbox.checked = true; // то присваем свойству checked - true. Т.е ставим галочку. (у чек бокса есть свойство cheked)
}


// Если пользователь поменял цвет, то он тоже останется

// сначала при заходе на страницу проверяем запись localStorage на ключ bg и если запись такая есть, мы перекрашиваем кнопку

if (localStorage.getItem('bg') === 'change') { // если условие выполнится и в нашем локалсторедже есть ключ со значением change
    form.style.backgroundColor = 'red';
}



// навешиваем обработчик событий на кнопку
change.addEventListener('click', () => {
    // если что-то есть в локалсторедж, то перекрашиваем в определенный цвет
    if (localStorage.getItem('bg') === 'change') { // если условие выполнится и в нашем локалсторедже есть ключ со значением change
        localStorage.removeItem('bg'); // тогда убираем это значение из локал сторедж
        form.style.backgroundColor = '#fff';
    // если ничего нет, то мы перекрашиваем форму в обратно в белый цвет и удаляем item из localStorage
    } else {
        localStorage.setItem('bg', 'change'); // записываем ключ bg со значением change
        form.style.backgroundColor = 'red';
    }
});




// в localStorage можно хранить и объекты и массивы. Только обязательно надо перевести эти объекты в JSON, а то на выходи получим просто Object

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);

localStorage.setItem('alex', serializedPersone); // ключ alex, а наш объект, превращенный в JSON, становится значением этого ключа.

console.log(JSON.parse(localStorage.getItem('alex')));  // выводим в консоль значения из localStorage с ключом alex и переводим его обратно из формата JSON в обычный. 

