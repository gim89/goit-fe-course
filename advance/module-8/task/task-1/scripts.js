/*
  Ознакомьтесь в вкладкой HTML и CSS.
  
  Напишите скрипт который:
    - При клике по изображению, меняет значение атрибута alt на 'Image has been clicked on!'
    - При клике по изображению, выводит alert со значением атрибута src
    
    - При клике на ссылку с надписью Google, в консоль выводится значение атрибута href.
    - Каждый клик по ссылке должен поочередно добавлять и удалять класс link-active
    - При этом не должен происходить переход по ссылке!
    
    - При фокусе текстового поля, в консоль должна выводится строка "Input is in focus!"
    - При наборе текста в текстовое поле, текущее его значение должно отображаться в
      абзаце с классом js-input-value
*/

"use strict"

const img = document.querySelector('.img');
const link = document.querySelector('.link');
const input = document.querySelector('.input');
const text = document.querySelector('.input-value');

const clickImg = (event) =>  {
  event.target.setAttribute('alt', "Image has been clicked on!");
  alert(event.target.getAttribute('src'));
}
img.addEventListener('click', clickImg);

const clickLink = (event) => {
  console.log(event.target.getAttribute('href'));
  event.preventDefault();
  event.target.classList.toggle("link-active");
}
link.addEventListener('click', clickLink);

const focusInput = (event) => {
  console.log("Input is in focus!");
}
input.addEventListener('focus', focusInput);

const keyupInput = (event) => {
  text.textContent = `Current input value: ${event.target.value}`;
}
input.addEventListener('keyup', keyupInput);

