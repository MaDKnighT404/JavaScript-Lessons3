function closeModal(modalSelector) { // добавляем аргумент
    const modal = document.querySelector(modalSelector); // добавляем сюда значение из функции modal
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) { // добавляем аргумент. Добавляем второй аргумент для починки таймера
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) { // если у нас есть значение для modalTimerId, то только тогда запускаем функцию clearInterval
        clearInterval(modalTimerId);
    }
}



function modal(triggerSelector, modalSelector, modalTimerId) { // передаём 2 аргумента
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => { // было ('click', openModal)
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId)); //добавляем сюда аргумент.Сейчас она выполнится сразу при загрузке страницы.Надо обернуть другой функцией
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId); // сюда тоже подставляем селектор
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {
    closeModal
};
export {
    openModal
};