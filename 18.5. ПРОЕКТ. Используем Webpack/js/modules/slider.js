function slider() {
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
        if (offset == deleteNotDigits(width) * (slides.length - 1)) { // заменяем на регулярное выражение. Все не числа в этой строке заменяем на пустое место
            offset = 0;
        } else { //
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }


        changeValue();

        changeOpacitys(dots);
    });


    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        changeValue();

        changeOpacitys(dots);
    });

    // добавляем точки на слайдер
    const slider = document.querySelector('.offer__slider');
    const indicators = document.createElement('ol');
    const dots = [];
    slider.style.position = 'relative';

    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
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

            changeValue();

            changeOpacitys(dots);

        });
    });


    // создаем функции, которые избавят наш код от дублирования 

    // для удаления всех НЕЧИСЕЛ из строки. При подсчете длины. Там нам приходит строка с пикселями . '650px'
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    // для смены прозразности у элементов. У наших точек на слайдере
    function changeOpacitys(element) {
        element.forEach(el => el.style.opacity = '0.5');
        element[slideIndex - 1].style.opacity = 1;
    }

    // для изменения отображение цифр у слайдера.
    function changeValue() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }
}

module.exports = slider;