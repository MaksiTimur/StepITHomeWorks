// hover галереи без CSS

console.clear();
 
const preview = document.querySelector('.preview');
const mainPhoto = document.querySelector('#photo');
 
const previews = document.querySelectorAll('[id^="preview-"]');
 
previews.forEach(previewElement => {
    previewElement.addEventListener('mouseenter', (event) => {
        const target = event.target;
       
        target.style.cursor = 'pointer';
        target.style.outline = '2px solid black';
    });
 
    previewElement.addEventListener('mouseleave', (event) => {
        const target = event.target;
       
        target.style.outline = 'none';
    });
});
 
preview.addEventListener('click', function (event) {
    const target = event.target;
 
    if (target.tagName !== 'IMG') return;
 
    mainPhoto.src = target.src;
});