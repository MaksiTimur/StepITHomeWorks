/* В функции myMath добавить:
  1. Проверку на то что переданная операция - это функция. Напрмер Math есть константы типа Math.PI и если я щас передам 'PI'
   как `operation`, то он его найдёт и выведет ошибку, а надо чтобы просто вернул значение Math.PI
  2. Если передана не существушая операция (ни в Math ни в switch), то вывести ошибку, что такой операции нет
  3. Написать логику для multiply, division и subtract. Начальные значения 1, 1 и 0 соответсвенно */

console.clear();

console.clear();

function myMath(operation, ...args) {
    const isOperationAlreadyExist = operation in Math;
    const mathOperation = Math[operation];

    if (isOperationAlreadyExist) {
        if (typeof mathOperation === Function) {
            return mathOperation(...args);
        } else {
            return mathOperation;
        }
    }

    switch(operation) {
        case 'sum': {
            let sum = 0;

            for (let i = 0; i < args.length; ++i) {
                sum += args[i];
            }

            return sum;
        }

        case 'subtract': {
            let subtract = 0;

            for (let i = 0; i < args.length; ++i) {
                subtract -= args[i];
            }

            return subtract;
        }

        case 'multiply': {
            let product = 1;

            for (let i = 0; i < args.length; ++i) {
                product *= args[i];
            }

            return product;
        }

        case 'division': {
            let product = args[0];

            for (let i = 1; i < args.length; ++i) {
                product /= args[i];
            }

            return product;
        }


        default: {
            return "Invalid operation";
        }
    }
}

console.log(myMath('subtract', 1, 2, 3, 4, 5));
console.log(myMath('multiply', 2, 4, 2));
console.log(myMath('division', 4, 2, 2));
console.log(myMath('PI', -1, 0, 1));