
window.addEventListener('DOMContentLoaded', function() {


    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    
    // Timer

    const deadline = '2022-06-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);
    // Изменил значение, чтобы не отвлекало

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    // Используем классы для создание карточек меню

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); 
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
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

    axios.get('http://localhost:3000/menu')
        .then(data => { 
            data.data.forEach(({img, altimg, title, descr, price}) => { 
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });

    // getResource('http://localhost:3000/menu') 
    //     .then(data => { 
    //         data.forEach(({img, altimg, title, descr, price}) => { 
    //             new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    //         });
    //     });

    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');

    //         element.classList.add("menu__item");

    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;
    //         document.querySelector(".menu .container").append(element);
    //     });
    // }

    // Forms

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => { // создаем функцию с запросом
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
    
        return await res.json();
    };

    async function getResource(url) {  // функция запроса на наш сервер в базу данных db.json 
        let res = await fetch(url); // ожидание ответа
    
        if (!res.ok) { // если у свойства промиса ok не ответ 200, то мы будет ловить ошибку
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); // throw, чтобы выпала из функции 
        }
    
        return await res.json();
    }

    function bindPostData(form) { // переименовываем функцию
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
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

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    // подключаем библиотеку axios. Удобная библиотека для рабоыт с сервером
    //Заходим на https://github.com/axios/axios  и  копируем https://github.com/axios/axios 
    // Заходим в html и вставляем туда этот скрипт. Обязательно перед нашим главным скриптом!!!!!!!


    // Слайдер

    // мой вариант 
//     const pictures = document.querySelectorAll('.offer__slide');

 
//     const arrowNext = document.querySelector('.offer__slider-next');
//     const arrowPrev = document.querySelector('.offer__slider-prev');
//     const sliderNumber = document.querySelector('#current');
//     let number = 1;
//     sliderNumber.textContent = `0${number}`;


//     function addNumber() {
//         if (number >= 1 && number < 4) {
//             number++;
//             if (number < 10) {
//                 sliderNumber.textContent = `0${number}`;
//                 hideSliders(number);
//                 showSlider(number);

//           } else {sliderNumber.textContent = number;
//           }
//     }
//     }

//     function remNumber() {
//         if (number > 1 && number <= 4) {
//             number--;
//             if (number < 10) {
//             sliderNumber.textContent = `0${number}`;
//             hideSliders(number);
//             showSlider(number);
//       } else { sliderNumber.textContent = number;
//     }
//    }
//     }

//         arrowNext.addEventListener('click', addNumber);
//         arrowPrev.addEventListener('click', remNumber);

//     function hideSliders () {
//         pictures.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show');
//         });
//     }

//     function showSlider(number = 1) {
//         pictures[number - 1].classList.add('show');
//         pictures[number - 1].classList.remove('hide');
//     }

//     hideSliders();
//     showSlider();


// как надо:

    // const slides = document.querySelectorAll('.offer__slide'),
    //       prev = document.querySelector('.offer__slider-prev'),
    //       next = document.querySelector('.offer__slider-next'),
    //       total = document.querySelector('#total'),
    //       current = document.querySelector('#current');
    // let slideIndex = 1;

    // showSlides(slideIndex);


    // // не добаляем этот функционал в функцию, чтобы общее количество слайдов не мигало при каждом переключении. 
    // if (slides.length < 10) {   // если общее количество слайдов меньше десяти
    //     total.textContent = `0${slides.length}`; // добавляем 0 перед числом слайдом
    // } else {
    //     total.textContent = slides.length; // иначе пишем общее количество слайдов без ноля
    // }


    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';


    //     // этот функционал добавляем в функцию, чтобы он каждый раз обновлялся при нажатии на стрелочки
    //     if (slides.length < 10) {   
    //         current.textContent = `0${slideIndex}`; // тут выбираем нашу переменную.
    //     } else {
    //         current.textContent = slideIndex; 
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });







    // слайдер №2 с каруселями! Более красиый и сложный вариант
    // в HTML все наши слайды оборачиваем еще в один div offer__slider-inner. 
    // Мы основному диву дадим overflow: hidden, а через другой будем смотреть и листать

    const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'), 
          slidesField = document.querySelector('.offer__slider-inner'), 
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0; 

    if (slides.length < 10) {   
        total.textContent = `0${slides.length}`; 
        current.textContent = `0${slideIndex}`; 
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex; 
    }

    slidesField.style.width = 100 * slides.length + '%'; 
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all ';

    slidesWrapper.style.overflow = 'hidden'; 

    slides.forEach(slide => {
        slide.style.width = width; 
    });

    
    next.addEventListener('click', () => {
        if(offset == deleteNotDigits(width) * (slides.length - 1)) { // заменяем на регулярное выражение. Все не числа в этой строке заменяем на пустое место
            offset = 0; 
        } else { //
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1; 
        }else { 
            slideIndex++; 
        }


        changeValue ();

        changeOpacitys (dots);
    });

        
    prev.addEventListener('click', () => {
        if(offset == 0) { 
            offset = deleteNotDigits(width) * (slides.length - 1); 
        } else { 
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex == 1) {
            slideIndex = slides.length; 
        }else { 
            slideIndex--; 
        }

        changeValue ();

        changeOpacitys (dots);
    });

    // добавляем точки на слайдер
    const slider = document.querySelector('.offer__slider'); 
    const indicators = document.createElement('ol'); 
    const dots = [];
    slider.style.position = 'relative';

    indicators.classList.add('carousel-indicators'); 
    slider.append(indicators); 

    for (let i = 0 ; i < slides.length; i++) {  
        const dot = document.createElement('li'); 
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot'); 
        
        if (i == 0) {
        dot.style.opacity = 1;
        }

        indicators.append(dot); 
        dots.push(dot); 
        // ДОБАВЛЯЕМ ФУНКЦИОНАЛ ДЛЯ ТОЧЕК В КАЖДЫЙ ИВЕНТ ЛИСТЕНЕР У СТРЕЛОК
    }
    // теперь пробуем навесить ивент листенеры на наши точки, чтобы перемещаться на нужный слайд при клике по ней.

    dots.forEach(dot => { 
        dot.addEventListener('click', (e) => { 
            const slideTo = e.target.getAttribute('data-slide-to'); 

            slideIndex = slideTo; 
            
            offset = deleteNotDigits(width) * (slideTo - 1); 
            slidesField.style.transform = `translateX(-${offset}px)`; 

            changeValue ();

            changeOpacitys (dots);

        });
    });


    // создаем функции, которые избавят наш код от дублирования 
   
   // для удаления всех НЕЧИСЕЛ из строки. При подсчете длины. Там нам приходит строка с пикселями . '650px'
    function deleteNotDigits (str) {  
       return +str.replace(/\D/g, '');
    } 

    // для смены прозразности у элементов. У наших точек на слайдере
    function changeOpacitys (element) {
        element.forEach(el => el.style.opacity = '0.5');
        element[slideIndex - 1].style.opacity = 1;
    }

    // для изменения отображение цифр у слайдера.
    function changeValue () {
        if (slides.length < 10) { 
            current.textContent = `0${slideIndex}`; 
        } else { 
            current.textContent = slideIndex;
        }
    }
});


