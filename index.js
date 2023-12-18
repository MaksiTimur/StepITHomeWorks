console.clear();

// 4. Используя regexp и replace, заменить в строке все цифры на знак D

const regexp = /\d+/g;
const string = 'test123 45 lz1g75f'

function replaceByRegExp(str, regexp) {
    return str.replace(regexp, 'N');
}

console.log(replaceByRegExp(string, regexp));