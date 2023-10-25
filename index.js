/* 4. Написать функцию будильник. Функция должна принимать 1 аргумент:
	+ Время - строка формата HH:mm:ss
   Если хоть одна из частей времени не является формата - 2 цифры, то выводить ошибку и ничего не делать.
   При наступлении указанного времени выводить адекв */

console.clear();

let interval;

function clock(date) {
  if (date.length !== 8) return("Incorrect time format: hh:mm:ss");

  interval = setInterval(checkTime, 1000, date);
}

function checkTime(date) {
  const time = Date().split(' ')[4];

  if (date === time) {
    clearInterval(interval);
    console.log("Будильник!");
  }
}

clock("14:54:45");