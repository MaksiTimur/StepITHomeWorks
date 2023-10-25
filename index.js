/* 2. Дан массив. Написать функцию, которая будет каждую секунду выводить в консоль элементы массива, пока они не закончатся
   Функция должна принимать на вход 1 аргумент: массив */

console.clear();

let i = 0;

function parseArray(array) {
  if (i >= array.length) {
    i = 0;
    clearInterval(interval);
    return;
  }

  console.log(array[i]);
  ++i;
}

const interval = setInterval(parseArray, 1000, [0, 1, 2, 3, 4, 5]);