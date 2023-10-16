/* 3. Бесконечно спрашивать у пользователя ввод строки. После каждого ввода строки юзером в консоль печатать противоположную строку, т.е. порядок должен идти в обратном
   порядке, а так же регистр букв должен быть инвертирован*/

console.clear();

while (true) {
    const stringArr = prompt("Enter any string").split('');
    const reversedArr = [];
    
    for (let i = 0; i < stringArr.length; ++i) {
        let arrSymbol = stringArr[stringArr.length - i - 1];

        if (arrSymbol === arrSymbol.toUpperCase()) {
            arrSymbol = arrSymbol.toLowerCase();
        } else {
            arrSymbol = arrSymbol.toUpperCase();
        }

        reversedArr[i] = arrSymbol;
    }

    console.log(reversedArr.join(''));
}