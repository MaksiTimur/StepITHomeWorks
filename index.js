console.clear();

const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = generateColor();
    });

    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

function generateColor() {
    const color = Math.floor(Math.random() * 16777216).toString(16);
    
    return `#${color}`;
}