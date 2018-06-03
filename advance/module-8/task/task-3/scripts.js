/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

'use strict'

const ul = document.querySelector('ul');
const link = document.querySelector('.menu-link');
link.classList.remove('menu-link-active');
const activeBtn = {
  node: null
};
const clickMenu = (event) => {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    if (activeBtn.node) {
      activeBtn.node.classList.remove('menu-link-active');
    }
      event.target.classList.add('menu-link-active');
      activeBtn.node = event.target;
  }
}

ul.addEventListener('click', clickMenu);