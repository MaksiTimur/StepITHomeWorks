/* В функцию конструктор MyArray добавить методы shift и unshift */

console.clear();

function MyArray(...args) {
    this.elements = {
        length: 0
    }

    this.push = function(...args) {
        for (const arg of args) {
            const index = this.elements.length;
            this.elements[index] = arg;
            ++this.elements.length;
        }

        return this.elements.length;
    }

    this.pop = function() {
        const length = this.elements.length;

        if (length === 0) return;

        const returnValue = this.elements[length - 1];
        delete this.elements[length - 1];
        --this.elements.length;

        return returnValue;
    }

    this.shift = function() {
        if (this.elements.length === 0) return;

        const returnValue = this.elements[0];
        delete this.elements[0];
        --this.elements.length;

        const keys = Object.keys(this.elements);
        for (const iterator of keys) {

            if (Number(isNaN(Number[iterator]))) {
                this.elements[Number(iterator) - 1] = this.elements[iterator];

                if (Number(iterator) === this.elements.length) {
                    delete this.elements[iterator];
                }
            }
        }

        return returnValue;
    }

    this.unshift = function(...args) {

        const length = this.elements.length;

        for (let i = this.elements.length - 1; i >= 0; --i) {
            this.elements[i + args.length] = this.elements[i];
        }

        for (let i = 0; i < args.length; ++i) {
            this.elements[i] = args[i];
            ++this.elements.length;
        }

        return this.elements.length;
    }

    this.push(...args);
}

const arr = new MyArray(5, 50, 500);
console.log(arr.elements);

console.log(arr.shift(), arr.elements);
console.log(arr.unshift(1, 5, 'a'), arr.elements);