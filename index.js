/* 2. Дан объект. Бесконечно спрашивать у пользователя ввод строки. Введённая строка является названием поля в объекте. Нужно в консоль выводить true или false
   в зависимости от того, есть ли в объекте поле с таким названием или нет. Сложность заключается в том, что регистр букв не должен учитываться ни в введёной строке
   ни в названии поля*/
   
const obj = {
    name: 'Alex',
    surName: 'Max',
    AGE: 40
}

while (true) {
    let fieldName = prompt("Enter field name");
    let isFieldExist = false;

    for (const iterator in obj) {
        if (iterator.toLowerCase() === fieldName.toLowerCase()) { // toLowerCase приводит строку к нижнему регистру
            isFieldExist = true;
            break;
        }
    }

    console.log(isFieldExist);
}