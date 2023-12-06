console.clear();

const buttons = document.querySelectorAll('button');
const table = document.querySelector('table');

let lockRows = false;
let lockCols = false;

buttons[0].addEventListener('click', addRow);
buttons[1].addEventListener('click', addCol);
buttons[2].addEventListener('click', removeRow);
buttons[3].addEventListener('click', removeCol);

function addRow() {
    const rows = document.querySelectorAll('table tr');
    console.log(rows);
    const lastRow = rows[rows.length - 1];
    const lastRowClone = lastRow.cloneNode(true);

    table.append(lastRowClone);
}

function addCol() {
    const cols = document.querySelectorAll('table tr');
    const newCell = document.createElement('td');

    cols.forEach(col => {
        col.append(newCell.cloneNode());
    });
}

function removeRow() {
    if (lockRows) return;

    const rows = document.querySelectorAll('table tr');
    const lastRow = rows[rows.length - 1];

    lastRow.remove();
    checkRowsAndCols();
}

function removeCol() {
    if (lockCols) return;

    const cols = document.querySelectorAll('tr td:last-child');

    cols.forEach(col => {
        col.remove();
    });

    checkRowsAndCols();
}

function checkRowsAndCols() {
    if (!lockCols) {
        const cols = document.querySelectorAll('tr:first-of-type td');

        if (cols.length === 1) lockCols = true;
    }

    if (!lockRows) {
        const rows = document.querySelectorAll('table tr');

        if (rows.length === 1) lockRows = true;
    }

    console.log(lockCols, lockRows);
}