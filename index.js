/* Написать функцию, которая возвращает всю цепочку прототипов для любого объекта вплоть до null. После того как
показывается null в консоли программа завершает свою работу */

console.clear();

function getProtoChain(object) {
    let currentObj = object;

    while (Object.getPrototypeOf(currentObj) !== null) {
        console.log(Object.getPrototypeOf(currentObj).constructor.name);
        currentObj = Object.getPrototypeOf(currentObj);
    }

    console.log(Object.getPrototypeOf(currentObj));
}