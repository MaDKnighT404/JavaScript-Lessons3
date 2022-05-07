function calc() {
    const result = document.querySelector('.calculating__result span'); // находим поле вывода. Div с классом, а внутри него span

    let sex, height, weight, age, ratio;

    // работа с LS
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }

            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


    // общая функция, которая будет заниматься подсчетом, куда мы запишем формулу из статьи. 
    // И функциональность для получения этих значений из наших элементов 

    // общая функциональность
    function calcTotal() {
        //предусматриваем момент, чтобы пользователь ввёл абсолютно все данные, иначе наша формула работать не будет
        if (!sex || !height || !weight || !age || !ratio) { // если хотя бы в одной переменной получаем false, т.е она не заполнена ничем или заполнена не правильно
            result.textContent = '0'; // тогда выводим в наш результирующий блок эту запись.
            return; // делаем для того, чтобы дальнейшую работу функции прервать
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio); // берем формулу и подставляем туда наши переменные. Коэффиценты теже.
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal();


    // получение данных . Создаем функцию, которая будет работать в обоих боках. ( Мужчина, женщина) и (4 блока активности)
    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector); // внутри этого родителя будет получать все дивы

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => { // навешиваем обработчик на родительский элемент, который содержит все Div
                // если мы работаем с первым блоком, то обращаемся к ID. А если ко второму то к data атрибутам
                // делаем так. Если в родительском блоке есть дивы с data-ratio, то мы их меняем. Если нет, то меням id
                if (e.target.getAttribute('data-ratio')) { // если такой атрибут присутствует у объекта события
                    ratio = +e.target.getAttribute('data-ratio'); // то при клике на эту активность, мы берем значение data атрибута и присваеваем его переменной ratio

                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')); //записываем в LS новую запись ключ ratio со значением из data атрибута

                } else {
                    sex = e.target.getAttribute('id'); // в противном случае мы в переменную sex записываем значение id у элементов. Мужчина или женщина
                    localStorage.setItem('sex', e.target.getAttribute('id')); // записываем в LS новую запись ключ sex со значением из id атрибута
                }

                elements.forEach(elem => { // перебираем наши дивы, и убираем у всех у них класс активности(чтобы не был никто зеленым)
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass); // , а потом добавляем класс одному, который выбран.

                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active'); // paranetSelector выбираем див обертку с id = 'gender'. Второй параметр - класс активности
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active'); // для нижнего блока



    // создаем новую функцию для инпутов из второго блока "Ваша конституция"
    function getDinamicInformation(selector) { // функция будет принимать в себя только один элемент - тот инпут который выбран
        const input = document.querySelector(selector); // получаем инпут со страницы

        input.addEventListener('input', () => { // навешиваем обработчик, когда пользователь что-то вводит

            if (input.value.match(/\D/g)) { // если содержимое нашего выражение содержит не число, глобально
                input.style.border = '1px solid red'; // обводим наш инпут красным цветом
            } else {
                input.style.border = 'none'; // в противном случае, если всё в инпуте есть числа, то красной границы не будет
            }

            switch (input.getAttribute('id')) { // проверяем уникальный идентификатор. Рост, вес или возвраст
                // теперь когда мы что-то вводим в наши инпуты, мы будем ориентрироваться на наши id
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });

    }
    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');

    // функция calcTotal должна срабатывать каждый раз, когда пользователь что-то вводит или меняет в нашей форме.





    // калькулятор ч.2 
    // Регулярные выражение и localStorage
    // работаем с инпутами, а конкретно с функцией getDinamicInformationet и создаем там условие с регулярным выражением

    // добавляем данные в localStorage, чтобы они там хранились у каждого пользователи и при заходе на страницу они у него сонхранялись.
    // для этого переходим в функцию getStaticInformation и там добавляем новый код

}

module.exports = calc;