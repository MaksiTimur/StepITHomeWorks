/* 4. Пользователь вводит 2 строки: год и месяц. Написать программу, которая вернёт сколько всего дней в указанном месяце */

console.clear();

const year = Number(prompt("Enter year"));
const month = Number(prompt("Enter month number"));

const date = new Date(year, month, 0);

console.log(date.getDate());