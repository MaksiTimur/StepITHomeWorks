console.clear();

const buttonsBlock = document.querySelector('.buttons-block');
const buttons = document.querySelectorAll('button');
const names = document.querySelector('ul');

let link = 'https://rickandmortyapi.com/api/character';
let json;

buttonsBlock.addEventListener('click', (e) => {
    if (!(e.target && e.target.tagName === 'BUTTON')) return;

    if (e.target.classList[0] === 'next') {
        link = json.info.next;
    }

    if (e.target.classList[0] === 'prev') {
        link = json.info.prev;
    }

    nextRequest();
});

async function makeRequest() {
    try {
        buttons.forEach(button => {
            button.disabled = true;
        });

        const response = await fetch(link);
        json = await response.json();
        const results = json.results;

        results.forEach(character => {
            names.innerHTML += `<li>${character.name}</li>`;
        });
    } catch (error) {
        console.log(error);
    } finally {
        console.log('FINISH WORK WITH REQUEST');

        buttons.forEach(button => {
            button.disabled = false;
        });
    }
}

function nextRequest() {
    if (!link) return;
    console.log(link);
    names.innerHTML = '';
    makeRequest();
}

makeRequest();