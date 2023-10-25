/* 1. Реализовать setInterval с помощью setTimeout */

console.clear();

function customInterval(ms, message) {
  console.log(message);

  setTimeout(customInterval, ms, ms, message);
}

customInterval(1000, 'Hi');