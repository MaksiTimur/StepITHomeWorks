console.clear();

const button = document.querySelector('button');

let userNumber;

do {
    userNumber = +prompt('Введите число от 1 до 10');
} while (isNaN(userNumber) || userNumber > 10 || userNumber < 1);

button.addEventListener('click', (e) => {
    const number = 1;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 2;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 3;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 4;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 5;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 6;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 7;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 8;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', (e) => {
    const number = 9;
    console.log(number);

    if (number === userNumber) e.stopImmediatePropagation();
});

button.addEventListener('click', () => {
    const number = 10;
    console.log(number);
});