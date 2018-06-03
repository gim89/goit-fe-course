/*
  Ознакомьтесь с HTML и CSS. 
  Есть список из 3-х ссылок и список из 3-х панелей.
  При клике в ссылку, должна отображаться соответствующая 
  ей панель.
  
  - Напишите скрипт реализующий переключение активной 
    панели при клике на ссылку Tab Link n.
  
  - Классы tabs__link--active и tabs__pane--active, 
    по умолчанию должны быть у первой ссылки и панели.
    Уберите их из HTML, это только для наглядности!
  
  - При клике в ссылку, ей добавляется tabs__link--active,
    а соответствующей ей панели tabs__pane--active.
  
  Подсказка: обратите внимание на href у ссылок и id у панелей.
  
  
  ***Дополнительное задание повышеной сложности, выполнять по желанию***
  
  - Реализуйте функционал как плагин, используя класс с полями и методами.
  - Класс Tabs получает все необходимые селекторы и номер изначально 
    активной панели (по умолчанию первая).
  - Реализует метод init, который вызывается сразу при инициализации 
    экземпляра и вешает обработчик клика на список ссылок, а также 
    методы setActiveLink и setActivePane, имена которых явно 
    описывают их функционал.
*/

'use strict';

const nav = document.querySelector('.tabs__nav');
const links = nav.querySelectorAll('.tabs__link');
const tab = document.querySelector('.tabs__content');
let panes = tab.querySelectorAll('.tabs__pane');

const showTabs = (event) => {
  let e = event.target;
  event.preventDefault();
  Array.from(links, elem => elem.classList.remove('tabs__link--active'));

  if (!e.classList.contains('tabs__link')) {
    return false;
  }
  e.classList.add('tabs__link--active');

  Array.from(panes, elem => elem.classList.add('tabs__pane--active'));
  panes = Array.from(document.querySelectorAll(".tabs__pane--active:not("+ e.getAttribute('href')+")"));
  panes.map((elem) => elem.classList.remove('tabs__pane--active'));
}
nav.addEventListener('click', showTabs);




