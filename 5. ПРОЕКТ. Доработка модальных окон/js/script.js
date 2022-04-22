window.addEventListener('DOMContentLoaded', ()=>{



const tabs = document.querySelectorAll('.tabheader__item'),   // выбираем все табы Фитнес, Премиум, Постное, Сбалансированное
      tabsContent = document.querySelectorAll('.tabcontent'),// выбираем все блоки менюf
      tabsParent = document.querySelector('.tabheader__items'); // выбираем родителя для табов.



// //       Задача 1. Скрыть вообще все блоки меню
// function hideTabContent () {
//     tabsContent.forEach(item => {
//         item.style.display ='none';
//     });
// //     убираем классы активностей у всех табов
//     tabs.forEach(item =>{
//         item.classList.remove('tabheader__item_active');
//     });
// }
// hideTabContent ();


// //         Задача 2. Функция показывающая один таб

// function showTabContent (i = 0){   // по дефолту при вызове функции будет выбран первый элемент
//     tabsContent[i].style.display = 'block';
// //     добавляем этому элементу класс активности
//     tabs[i].classList.add('tabheader__item_active');
// }
// showTabContent ();

// //         Задача 3.  Делегирование событий по клику

// tabsParent.addEventListener('click', (event)=>{ // навешиваем обработчик событий на родительский элемент
//     const target = event.target;   // создаем переменную, которая хранит значение event.target
//     if (target && target.classList.contains('tabheader__item')) { // проверяем условие: если кликнули конкретно на табы
//         tabs.forEach((item, i) => {   // то тогда перебираем псевдомассив табов и ищем совпадение 
//             if(target == item) {  // если таб совпадаем с тем местом куда мы кликнули
//                 hideTabContent ();  // то мы вызываем наши функции . Сначала всё прячем
//                 showTabContent (i);  // а потом показываем тот таб, индекс которого мы выбрали. 
//             }
//         });
//     }
// });



//  Вместо инлайн стилей будем использовать классы. Так правильней.








// Tabs


//       Задача 1. Скрыть вообще все блоки меню
function hideTabContent () {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade'); // удаляем так же два класса.
    });
    tabs.forEach(item =>{
        item.classList.remove('tabheader__item_active');
    });
}
hideTabContent ();


//         Задача 2. Функция показывающая один таб

function showTabContent (i = 0){  
    tabsContent[i].classList.add('show', 'fade');  // cюда добавляем сразу два класса. Второй для анимации
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}
showTabContent ();

//         Задача 3.  Делегирование событий по клику

tabsParent.addEventListener('click', (event)=>{ // 
    const target = event.target;   
    if (target && target.classList.contains('tabheader__item')) { 
        tabs.forEach((item, i) => {  
            if(target == item) {  
                hideTabContent (); 
                showTabContent (i); 
            }
        });
    }
});








// // Timer


// const deadline = '2022-04-30';

// function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date()); // получаем количество миллисекунд в нашем конечном времени
// //                                                             и отнимаем от него количество милисекунд от текущего времени.
//     const days = Math.floor(t / (1000*60*60*24)); // 1000*60 - в одной секунде. 1000*60*60 - в часе. 1000*60*60*24 - в дне
// //разделить количество милисекунд из t на количество милисекунд которые находятся в одном дне и округлить. Получим количество дней
//     const hours = Math.floor((t / (1000*60*60) % 24));//Результат может быть 2000 часов или 100. поэтому исп. % - вернуть остаток
//     const minutes = Math.floor((t / 1000*60) % 60); // тоже самое что и часы. Получаем кол. часов и берем остаток от деления на 60
//     const seconds = Math.floor((t / 1000) % 60); // получаем секунды и берем остаток от деления на 60
    
//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }

// function getZero(num) {
//     if (num >=0 && num <=10) {
//         return `0${num}`;
//     } else {
//         return num;
//     }
// }



// function setClock (selector, endtime) {
//     const timer = document.querySelector(selector); // в данном случае тут будет класс .timer 
//     const days = timer.querySelector('#days');
//     const hours = timer.querySelector('#hours');
//     const minutes = timer.querySelector('#minutes');
//     const seconds = timer.querySelector('#seconds');
//     let timeInterval = setInterval(updateClock, 1000); // ежесекундно обновляем таймер
    

//     // updateClock(); // вызываем функцию тут, чтобы она обновила время указанное в вёрстке. 

// // записываем данные на страничку 
// function updateClock() {
//     const t = getTimeRemaining(endtime);
//     if (t.days >=0 && t.days < 10) {//            добавить ноль перед днем
//     days.innerHTML = `0${t.days}`;
// } else { days.innerHTML = t.days;}
//     hours.innerHTML = getZero(t.hours);//  или с помощью функции
//     minutes.innerHTML = getZero(t.minutes);
//     seconds.innerHTML = getZero(t.seconds);

//     if(t.total <= 0) { // если таймер дошел до 0, или получает отрицательные значения
//         clearInterval(timeInterval);
// }
// }
// }

// setClock('.timer', deadline);



const deadline = '2022-04-16';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000*60*60*24));
    const hours = Math.floor((t / (1000*60*60) % 24) - 3);
    const minutes = Math.floor((t / (1000*60) % 60));
    const seconds = Math.floor((t / 1000) % 60);


    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes':minutes,
        'seconds':seconds
    };
}


function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

updateClock();

function updateClock() {
    const t = getTimeRemaining(endtime);
    if (t.days >=0 && t.days < 10) {
        days.innerHTML = `0${t.days}`;
    } else { days.innerHTML = t.days;
    }
    days.innerHTML = addZero(t.days);
    hours.innerHTML = addZero(t.hours);
    minutes.innerHTML = addZero(t.minutes);
    seconds.innerHTML = addZero(t.seconds);
     if(t.total <= 0) { // если таймер дошел до 0, или получает отрицательные значения
         clearInterval(timeInterval);
         const timer = document.querySelector('.timer');
         const timerMessage = document.querySelector('[data-message');
         timer.remove();
         timerMessage.innerHTML = `Акция закончилась ${deadline}`;
}
}
}
setClock('.timer', deadline);

// function updateClock() {
//     const t = getTimeRemaining(endtime);
//     if (t.days >=0 && t.days < 10) {//            добавить ноль перед днем
//     days.innerHTML = `0${t.days}`;
// } else { days.innerHTML = t.days;}
//     hours.innerHTML = getZero(t.hours);//  или с помощью функции
//     minutes.innerHTML = getZero(t.minutes);
//     seconds.innerHTML = getZero(t.seconds);




// модальное окно

// первым делом в html находим кнопки, по клику на которые будет показываться модальное окно. Сейчас оно display: hidden.
// потом прям в html с мощью data-modal навешиваем такие указатели на обе кнопки, чтобы потом по ним можно было легко с ними работать. 
// еще навешиваем дата атрибут на div с классом modal__close, чтобы потом это окно можно было закрыть. 

// const modalTrigger = document.querySelectorAll('[data-modal]'), // чтобы выбрать дата атрибут.
//       modalWindow = document.querySelector('.modal'),  // само модальное окно
//       closeModalWindow = document.querySelectorAll('[data-close');


// // 1 функция по появлению модального окна.
// modalTrigger.forEach( item => {//           перебираем массив элементов( 2 button)
//     item.addEventListener('click', () => { //   навешиваем на каждый элемент addEventListener, который по щелчку мышки
//         modalWindow.style.display = 'block'; // будет менять стиль у элемента с классом modal из переменной modalWindow
//     });
// });

// // 2 функция по закрытию модального окна. 
// closeModalWindow.forEach( item => {//           перебираем массив элементов( 2 button)
//     item.addEventListener('click', () => { //   навешиваем на каждый элемент addEventListener, который по щелчку мышки
//         modalWindow.style.display = 'none'; // будет менять стиль у элемента с классом modal из переменной modalWindow
//     });
// });


// // 1.2 или использовать классы, а не инлайн стили
// modalTrigger.forEach( item => {
//     item.addEventListener('click', () => { 
//         modalWindow.classList.add('show');
//         modalWindow.classList.remove('hide');
//         document.body.style.overflow = 'hidden'; // добавляем свойство overflow к тэгу body, чтобы нашу страничку нельзя было прокручивать, когда окно открыто
//     });
// });

// // 2.2 
// closeModalWindow.forEach( item => {
//     item.addEventListener('click', () => {
//         modalWindow.classList.add('hide');
//         modalWindow.classList.remove('show');
//         document.body.style.overflow = 'visible';  // сново возвращаем overflow к дефолтному значению, чтобы страничку можно было прокручивать дальше. Или оставть ''!!
//     });
// });






// // Если мы хотим, чтобы модальное окно закрывалось по нажатию не только крестика, а и по нажатию на подложку ( внешнюю часть модального окна) :

// modalWindow.addEventListener('click', (event) => {
//     if (event.target === modalWindow) {  // если объект события будет строго совпадать с modalWindow, тогда
//         modalWindow.classList.add('hide');
//         modalWindow.classList.remove('show');
//         document.body.style.overflow = '';
//     }
// });





// // В данный момент у нас имеется два участка кода, которые повторяются. В таком случае нужно такой участок когда заключить в функцию.

// тогда 

const modalTrigger = document.querySelectorAll('[data-modal]'), // чтобы выбрать дата атрибут.
      modalWindow = document.querySelector('.modal');  // само модальное окно


function openWindow() {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId); // сбрасываем таймер после первого открытия. Чтобы оно больше не появлялось по времени.
}

function closeWindow () {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

modalTrigger.forEach( item => {
    item.addEventListener('click', openWindow);
});



modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
        closeWindow();
    }
});


// Как сделать, чтобы при нажатии на ESC закрывалось модальное окно

document.addEventListener('keydown', (event) => { // таблицу кодов для разных кнопок можно посмотреть в интернете ( https://keycode.info/ )
    if (event.code === 'Escape' && modalWindow.classList.contains('show')) {  
        closeWindow ();
    }
});








// Модальное окно ч2. 


// сделать так, чтобы модальное окно вызвалось через определенное время

 const modalTimerId = setTimeout(openWindow, 50000); // вызываем функцию, которая открывает модальное окно через 15 секунд

// Если пользователь сам открыл окно, то через определенное время оно откроется ещё раз. Поэтому в функции openWindow добавляем clearInterval




// сделать так, чтобы модальное окно появилось, когда пользователь долистал страницу до конца.
// чтобы после прокрутки не появлялось модально окно каждый раз.


// pageYOffset - прокрученная часть. document.documentElement.clientHeight - видимая 
// складываем прокрутку справа и видимую часть на экране. Она должна быть равна или больше всей высоты прокрутки


// {once:true});  сработает один раз. Но тут это не подходит, потому что мы проверяем scroll, а он отрабатает один раз при движение колесика и всё. 

function showModalByScroll () {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openWindow();
        window.removeEventListener('scroll', showModalByScroll); // можно убрать eventlistener вот таким образом. Нужна функция для второго аргумента!
}
}


window.addEventListener('scroll', showModalByScroll);





//     Классы

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes ) { // добавляем в список аргументов на последнее место рест оператор!
        this.src = src;  
        this.alt = alt;  
        this.title = title; 
        this.descr = descr; 
        this.price = price; 
        this.parent = document.querySelector(parentSelector); 
        this.transfer = 80; 
        this.changeToRub();
        this.classes = classes; // ТУТ ПОЛУЧАЕМ МАССИВ ИЗ НОВЫХ АРГУМЕНТОВ ЕСЛИ ТАКИЕ ПРИДУТ. 
        }

    changeToRub() { 
        this.price = this.price * this.transfer; 
    } 

    render() {
        const element = document.createElement('div'); //  вся нашу структура с карточки оборачивает в один конкретный div

        if(this.classes.length === 0) {
            // this.classes[0] = 'menu__item'; можно так!!! МОЙ СПОСОБ
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => {  // перебираем массив из полученных новых аргументов
                element.classList.add(className); // добавляем каждый класс, который будет находится в этом массиве к класслисту нашего элемента( дива)
            });
        }




        // удаляем оберточный див из нашего элемента
        element.innerHTML = ` 
                
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                 </div>

        `;
        this.parent.append(element); 
    }
}



new MenuCard(  
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .menu__field .container',
    'menu__item', //  тут добавляем наш следующий элемент, который является классом, к нашему коду // Если не добавить эти классы, то будет ошибка.Параметры по умолчанию!
    'big' // проверям добавится ли ещё один класс, если указать его в качестве аргумента. 

    ).render(); 


new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .menu__field .container',
    'menu__item'
    ).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu .menu__field .container',
    // Убираем 'menu__item' , чтобы проверить, добавится ли обертка в виде дива на наши карточки. 
    ).render();





    // отправка данных на сервер. Старый вариант



// const forms = document.querySelectorAll('form'); // выбираем все формы с нашей html страницы

// const message = {  // создаем переменную с ответами для пользователя.
//     loading: 'Загрузка',
//     success: 'Спасибо, скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так'
// };

// forms.forEach(item => { // перебираем массив из форм ( из двух штук)
//     postData(item); // вызываем нашу функцию по отравке формы на сервер. Внутри скобок поочереди будут формы.
// });


// function postData (form) {  // создаем функцию, которая будет принимать в качестве аргумента форму из html страницы
//     form.addEventListener('submit', (event) => { // навешиваем eventListener на каждую такую форму. Срабатывает при отправке - submit
//         event.preventDefault(); // отменяем стандартное поведение у формы, чтобы она не перезагружала страницу после отправки формы.

//         const statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         statusMessage.textContent = message.loading; // как только пользователь нажал кнопку отправит, появится сообщение, что началась загрузка.
//         form.append(statusMessage); // добавляем к форме наше сообщение


//         const request = new XMLHttpRequest(); // помещаем запрос в переменную request
//         request.open('POST','server.php'); // настраиваем запрос. 1 аргумент - это метод. 2 - url куда отправляется запрос


//         // request.setRequestHeader('Content-type', 'multipart/form-data');  // для POST запроса заголовки устанавливать не нужно!!!


//         // специальный объект, который позволяет сформировать все данные для отправки на сервер. Можно с помощью JSON - в зависимости от сервера и бэкенда
//         const formData = new FormData(form); // в HTML разметке при обращении к инпуту у него ВСЕГДА должен быть атрибут name !!!! Без него FormData не сработает
//         request.send(formData); // отправляем наш запрос на сервер.

//         request.addEventListener('load', () => { // отслеживаем конечную загрузку запроса
//             if(request.status === 200) {
//                 console.log(request.response);
//                 statusMessage.textContent = message.success;
//                 form.reset(); // очистить наши инпуты после загрузги запроса
//                 setTimeout(() => { // убираем сообщение с итогом через 2 секунды
//                     statusMessage.remove();
//                 }, 2000); 
//             } else {
//                 statusMessage.textContent = message.failure;
//             }
//         });
    
//     }); 
// }
// });




// в случае если надо отправить данные в формате JSON . Заголовки НУЖНЫ!



const forms = document.querySelectorAll('form'); // выбираем все формы с нашей html страницы

const message = {  // создаем переменную с ответами для пользователя.
    loading: 'img/form/spinner.svg',
    success: 'Спасибо, скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};

forms.forEach(item => { // перебираем массив из форм ( из двух штук)
    postData(item); // вызываем нашу функцию по отравке формы на сервер. Внутри скобок поочереди будут формы.
});


function postData (form) {  // создаем функцию, которая будет принимать в качестве аргумента форму из html страницы
    form.addEventListener('submit', (event) => { // навешиваем eventListener на каждую такую форму. Срабатывает при отправке - submit
        event.preventDefault(); // отменяем стандартное поведение у формы, чтобы она не перезагружала страницу после отправки формы.

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = ` 
            display: block;
            margin: 0 auto;
        `; // как только пользователь нажал кнопку отправит, появится сообщение, что началась загрузка.
        form.insertAdjacentElement('afterend', statusMessage);


        const request = new XMLHttpRequest();
        request.open('POST','server.php'); 


        request.setRequestHeader('Content-type', 'application/json'); 
        const formData = new FormData(form); 

        // из-за того что объект полученные по FornData - спецефический, мы должны его сложным образом перегнать в JSON
        // сначала создаем пустой объект. Потом перебераем данные из переменной formData, полученные путем конструктора FormData, и записываем их в новый объект
        const obj = {}
        formData.forEach((value,key) => {
            obj[key] = value;
        });

        // потом уже новый объект переводим в формат JSON

        const json = JSON.stringify(obj);


        request.send(json);  // вставляем сюда объект в json формате

        request.addEventListener('load', () => { // отслеживаем конечную загрузку запроса
            if(request.status === 200) {
                console.log(request.response);
                showThanksModal(message.success);
                form.reset(); // очистить наши инпуты после загрузги запроса
                statusMessage.remove();
            } else {
                showThanksModal(message.failure);
            }
        });
    }); 
}
    function showThanksModal (message) { // создаем функцию, при вызове которой будет появлятся новое модальное окно с благодарностью, что всё прошло успешно
        const prevModalDialog = document.querySelector('.modal__dialog')
        
        prevModalDialog.classList.add('hide'); // скрываем предыдущие модальное окно
        openWindow(); // открывает пустое модальное окно

        const thanksModal = document.createElement('div'); // создаем обертку для нашего нового модального окна
        thanksModal.classList.add('modal__dialog'); // добавляем нашему новому диву класс модального окна
        thanksModal.innerHTML = ` 
            <div class="modal__content">
                <div class="modal__close" data-close> × </div>
                <div class="modal__title">${message}</div>

            </div>
        `; // записываем HTML код в наш див
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeWindow();
        }, 4000);
    }
});






