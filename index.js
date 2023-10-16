/* 5. Дано неотрицательное целое число n. Написать функцию, которая на вход принимает данное число и возвращает n-ое число из ряда Фибоначчи */

console.clear();

const number = Number(prompt("Enter the number"));

let num1 = 0;
let num2 = 1;
let sum;

for (let i = 2; i < number; i++) { // Первые два числа уже напечатаны
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}

console.log(num2);