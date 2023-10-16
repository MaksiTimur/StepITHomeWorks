/* 3. Дано действительное неотрицательное число. Написать программу, которая при каждом запуске, будет возвращать случайную
  строку заданной длины. Строка может состоять, только из букв английского алфавита и цифр */

console.clear();

const alphabet =
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
'a', 'b', 'c', 'd', 'b', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const count = 20;
const resultString = [];

for (let i = 0; i < count; ++i) {
    const randomIndex = Math.round(Math.random() * (alphabet.length - 1));
    resultString.push(alphabet[randomIndex]);
}

console.log(resultString.join(''));