// CSS не умеет анимировать canvas элементы. Рваную или не стандартную анимацию тоже
// requestAnimationFrame подстраивать обновление анимации под framerate монитора. Нагрузка очень сильно снижается
// https://learn.javascript.ru/js-animation - тут можно посмотреть как задавать рваные анимации
// раньше r s r s // r - рендер браузера. s - перерисовка анимации. Раньше чередовались

// а теперь идут синхронно.
// r r r r
// s s s s
// s s s s // если запустили ещё одну анимацию, то всё будет синхронно

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) { // функция выполнится 300 раз, после чего анимация прекратится
        requestAnimationFrame(myAnimation); // принимает только один аргумент
    }

}


btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); // обязательно обернуть в другю колбек. Потому что без него выполнится сразу!!!

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

