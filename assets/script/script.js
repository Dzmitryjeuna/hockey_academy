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
    menuBtn.classList.remove('open');
    menu.classList.remove('menu-open');
  });
});

const qan = document.querySelector('.questions__items');
const qanTitles = document.querySelectorAll('.questions__item-caption');

let currentQuestion = null;

qanTitles.forEach(function (qanTitle) {
  qanTitle.addEventListener('click', function() {
    const currentItem = qanTitle.parentElement;
    const currentText = currentItem.querySelector('.questions__item-text');

    if (currentQuestion && currentQuestion !== currentItem) {
      const currentQuestionText = currentQuestion.querySelector('.questions__item-text');
      currentQuestion.querySelector('.questions__item-caption').classList.remove('questions__item-caption--active');
      currentQuestionText.classList.remove('questions__item-text--visible');
      currentQuestionText.style.maxHeight = null;
      currentQuestion.style.paddingBottom = null;
    }

    if (currentQuestion !== currentItem) {
      currentQuestion = currentItem;
      qanTitle.classList.add('questions__item-caption--active');
      currentText.classList.add('questions__item-text--visible');
      currentItem.style.paddingBottom = '15px';
      currentText.style.maxHeight = currentText.scrollHeight + 'px';
    } else {
      currentQuestion = null;
      qanTitle.classList.remove('questions__item-caption--active');
      currentText.classList.remove('questions__item-text--visible');
      currentText.style.maxHeight = null;
      currentItem.style.paddingBottom = null;
    }
  });
});


var message="";
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2) {
(message);
return false;}}}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS;
}else{
document.onmouseup=clickNS;
document.oncontextmenu=clickIE;
}
document.oncontextmenu=new Function("return false");