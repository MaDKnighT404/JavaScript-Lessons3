'use strict';

// Если в каком-то участке кода мы подезреваем, что может произойти ошибка, то используем там try catch конструкцию. 
// как поймать ошибку


// код после выполнения конструкии продолжит работать в любом случае
// try { // используем try
//     console.log('Normal');  // сюда помещается то действие, которое мы хотим выполнить. Если тут что-то пойдет не так, то выполнится блок кода Catch
//     console.log(a); // обращаемся к переменной, которая не объявлена - это ошибка. В этом месте выполнится блок catch
//     console.log('result') // этот код уже не выполнится. 
// } catch(e) { // Выполняется, когда возникла ошибка в блоке try и выполняет его
//     console.log('Error');
// }

// console.log('Still normal')



// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result')
// } catch (error) {
//     console.log(error);
// }
// console.log('Still normal');
// // если запустить в консоле увидем название ошибки на второй строчке.



// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result')
// } catch (error) { // у объекта error есть 3 свойства
//     console.log(error.name); // тип ошибки Referance error
//     console.log(error.message); // сообщение: a is not defined
//     console.log(error.stack); // цепочка событий, которая привела к ошибка. Тут пока только одно звено.
// } finally { // блок кода который выполнится в любом случае.

// }
// console.log('Still normal');
// // если запустить в консоле увидем название ошибки на второй строчке.


// разберем на примере.
// есть 2 странички. В одной есть кнопка, а в другой нет. 


try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('normal');
    });
} catch (e) {
    console.log(e)
}
console.log('Normal')

// там где есть эта кнопка, мы получаем в консоле Normal. А на той страничке где этого нет - ошибку
// поэтому помещяем такой код в try, а в catch помещаем ошибку.  Дальше наш скрипт на второй страничке продолжит работать, если не найдет кнопку. 