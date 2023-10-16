/* 1. Дан массив. Написать программу, которая при каждом запуске будет возвращать случайное значение из этого массива. Если
  массив пустой, то выдать об этом сообщение*/

console.clear();

const arr = [0, 1, 2, 3, 4, 5];

if (arr.length === 0) {
    console.log("Массив пустой!");
} else {
    const randomIndex = Math.round(Math.random() * (arr.length - 1));
    console.log(arr[randomIndex]);
}