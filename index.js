/*
3. Дан некий объект и 10 попыток для пользователя, чтобы ввести названия полей этого объекта. Написать алгоритм, который по окончании выведет в консоль 2 массива:
    + Поля, которые были в объекте
    + Поля, которые не были в объекте
*/

console.clear();

const obj = {
    field1: "value",
    username: "Name",
    id: "1703",
    year: "1981"
}

const arrContained = [];
const arrNotContained = [];

for (let i = 1; i <= 10; ++i) {
    let fieldName = prompt("Введите название поля");

    if (fieldName in obj) {
        arrContained.push(fieldName);
    } else {
        arrNotContained.push(fieldName);
    }
}

console.log(arrContained, arrNotContained);