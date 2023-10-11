// 1. Дан непустой массив чисел. Написать алгоритм (не исползьуя встроенные методы), который изменит исходный массив так, чтобы числа в нём шли в обратном порядке

console.clear();

const arr = [1, 2, 3, 4, 5, 6];
const arrReversed = [];

for (let i = arr.length - 1; i >= 0; --i) {
    arrReversed[i] = arr[arr.length - i - 1]
}

console.log(arrReversed);