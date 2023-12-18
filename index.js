console.clear();

// 6. Подсчёт совпадений

let count = 0;
const regexp = /\w+/g;
const string = 'test123 45 lz1g75f 21a a azza a'

function countMatches(str, regexp) {
    while (regexp.test(str)) count++;

    console.log(count);
}

countMatches(string, regexp);