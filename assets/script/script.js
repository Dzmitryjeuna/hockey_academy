const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav__items');
const menuLinks = document.querySelectorAll('.nav__items a');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
 
});

const btn = document.querySelector('.burger');
const nav = document.querySelector('.nav__items');

btn.addEventListener('click', () => {
  nav.classList.toggle('menu-open')
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open'); // Убираем класс "open" у кнопки
    menu.classList.remove('menu-open'); // Закрываем меню
  });
});