// 2. Дан массив и переменная с неким значением. Реализовать алгоритм встроенного метода unshift, не используя встроенные методы

console.clear();

const arr = [1, 2, 3, 4, 5];
const element = "string";

for (let i = arr.length - 1; i >= 0; --i) {
    arr[i + 1] = arr[i];
}

arr[0] = element;

console.log(arr);