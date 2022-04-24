window.addEventListener('DOMContentLoaded', ()=>{

    const tabs = document.querySelectorAll('.tabheader__item'),   // выбираем все табы Фитнес, Премиум, Постное, Сбалансированное
        tabsContent = document.querySelectorAll('.tabcontent'),// выбираем все блоки менюf
        tabsParent = document.querySelector('.tabheader__items'); // выбираем родителя для табов.

// Tabs


    function hideTabContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); 
        });
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
    }
    hideTabContent ();

    function showTabContent (i = 0){  
        tabsContent[i].classList.add('show', 'fade');  // cюда добавляем сразу два класса. Второй для анимации
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    showTabContent ();

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

    const modalTrigger = document.querySelectorAll('[data-modal]'), 
        modalWindow = document.querySelector('.modal'); 


    function openWindow() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId); 
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


    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modalWindow.classList.contains('show')) {  
            closeWindow ();
        }
    });








// Модальное окно 

    const modalTimerId = setTimeout(openWindow, 50000); 

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openWindow();
            window.removeEventListener('scroll', showModalByScroll);
    }
    }


    window.addEventListener('scroll', showModalByScroll);


    //     Классы

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes ) {
            this.src = src;  
            this.alt = alt;  
            this.title = title; 
            this.descr = descr; 
            this.price = price; 
            this.parent = document.querySelector(parentSelector); 
            this.transfer = 80; 
            this.changeToRub();
            this.classes = classes; 
            }

        changeToRub() { 
            this.price = this.price * this.transfer; 
        } 

        render() {
            const element = document.createElement('div');

            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => {  
                    element.classList.add(className); 
                });
            }

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
        'menu__item', 
        'big'

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
        ).render();





    // отправка данных на сервер. 
    // в случае если надо отправить данные в формате JSON . Заголовки НУЖНЫ!



    const forms = document.querySelectorAll('form'); 

    const message = {  
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => { 
        postData(item); 
    });


    function postData (form) { 
        form.addEventListener('submit', (event) => { 
            event.preventDefault(); 

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = ` 
                display: block;
                margin: 0 auto;
            `; 
            form.insertAdjacentElement('afterend', statusMessage);




            const formData = new FormData(form); 

            const obj = {};
            formData.forEach((value,key) => {
                obj[key] = value;
            });


            fetch('server.php', {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(obj)
            }).then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove(); 
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });



        }); 
    }

    function showThanksModal (message) { 
        const prevModalDialog = document.querySelector('.modal__dialog');
        
        prevModalDialog.classList.add('hide');
        openWindow();

        const thanksModal = document.createElement('div'); 
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = ` 
            <div class="modal__content">
                <div class="modal__close" data-close> × </div>
                <div class="modal__title">${message}</div>

            </div>
        `; 
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeWindow();
        }, 4000);
    }
    // NPM пакеты лежат на отдельных серверах и можем загружать их к себе в проекты

    // создаем NPM пакет в нашем проекте открываем терминал и прописываем npm init
    // можем задавать имя, версию, описание. Или с помощью Enter оставляем дефолтные названия


    // Устанавливаем первый пакет JSON сервер! Пакеты можно устанавливать локально и глобально (-g)( после json-server ).Чаще устанавливаем ЛОКАЛЬНО (ничего не указываем)
    // устанавливаем ключ --save-dev.Это зависимость для разработки. Если нужно чтобы подключаемые пакеты работали внутри, а не для разработки(REACT, Jquery)тогда  --save
    // так как у нас фейковый сервер устанавливаем рабочую зависимость

    // В терминале npm install json-server --save-dev

    // Появляесят файл package-lock.json и папка node_modules . Подтянулся паке json server и с собой он подтянул более малкие пакеты для своей работы. 


    // ПАПКУ node_modules  НИКОДА НЕ ТРОГАЕМ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // НИКОГДА НЕ ПУШИМ В GITHUB ЭТУ ПАПКУ, ОНА ВЕСИТ ОЧЕНЬ МНОГО. 
    // Для этого добавляем её в .git_ignore
    // Особенность. В ручную эту папку не удалить. Есть специальная команда 

    // Например мы запушим наш проект в гитхаб. Кто-то его скачает, но у него не будет папки node_modules и ничего работать не будет.
    // поэтому ему надо зайти в терминал и прописать     npm i 
    // после чего все зависимые пакеты для этого проекта скачаются автоматически (они прочитаются в файле package.json)


    // есть ещё файл package-lock.json
    // это большой файл с зависимостями от пакетов с путями. 
    // ЕГО ТОЖЕ НЕ ТРОГАЕМ


    // Добавляем в проект маленькую базу данных db.json
    // там описаны карточки товаров и поле request
    // в нем записиваются обращения пользователя, когда он отправляет форму с сайта.
    // https://github.com/typicode/json-server  - тут можно почитать документацию о нашем сервере.

    fetch('http://localhost:3000/menu')  // обращаемся к нашей базе данных
        .then(data => data.json()) // получаем от неё ответ в формате JSON и превращаем его в объект
        .then(res => console.log(res)); // выводим полученный результат в консоль

    //всё работает, но заполнить request без POST запроса мы не можем, для этого нужен сервер 

    // теперь можно запускать наш json сервер. 
    // открываем терминал и указываем путь к базе данных для нашего сервера:   json-server db.json
});



