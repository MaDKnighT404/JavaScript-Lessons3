// из main.js будем что-то экспортировать, а в script.js будем импортировать
// При экспорте обязательно должно быть имя. У функций например

export let one = 1; // первый способ


let two = 2;
export {two}; // именнованный синтаксис


export function sayHi() {
    console.log('Hello');
}


// в модулях существует экспорт по умолчанию. Он может быть только один. 

export default function sayBye() { // добавляем default перед названием функции.
    console.log('GoodBye');
}



// в index HTML, можно подключить наши скрипты друг за другом и будет работать без webpack
// но в таком случае мы должны прописать в тэге script   type = 'module'