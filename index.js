/* Написать программу, которая на вход принимает два натуральных числа `(n, m)` и создаёт в HTML таблицу с `n` строками и
`m` ячейками в каждой строке */

console.clear();

function generateTable(line, column) {
    const table = document.createElement('table');
    const lines = [];

    for (let i = 0; i < line; ++i) {  
        lines.push(document.createElement('tr'));
    }

    for (const tableLine of lines) {
        table.appendChild(tableLine);
    }

    for (let i = 0; i < lines.length; ++i) {
        for (let j = 0; j < column; j++) {
            lines[i].appendChild(document.createElement('td'));
        }
    }

    document.body.append(table);
}

// ##################

generateTable(5, 3);
generateTable(3, 5);
generateTable(1, 10);
generateTable(6, 6);