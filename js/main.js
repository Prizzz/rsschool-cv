const icon = document.querySelector('.burger-icon');
const menu = document.querySelector('.burger-menu');
const list = document.querySelector('.burger-list');

icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    menu.classList.toggle('active');
});

list.addEventListener('click', () => {
    icon.classList.remove('active');
    menu.classList.remove('active');
});