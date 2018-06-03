// Визуализируем клавиатуру.
// Написать метод createLayout() который создает клавиатуру состоящую из 3-х строк, 
// в каждой строке такое кол-во кнопок как длины topRow/middleRow и bottomRow полей.
// Можно использовать либо createElement либо создавать строку из тегов и вешать 
// через insertAdjacentHTML или innerHTML.
// Добавить минимальное оформление на свой вкус.

"use strict"

const keyboard = {
  topRow: "qwertyuiop",
  middleRow: "asdfghjkl",
  bottomRow: "zxcvbnm",
  createLayout (kb) {
    const body = document.querySelector("body");
    let ul = document.createElement("ul");
    for (let i = 0; i < kb.length; i += 1) {
      let li = document.createElement("li");
      li.textContent = kb[i];
      ul.append(li);
    }
    body.append(ul);
  }
}

keyboard.createLayout(keyboard.topRow);
keyboard.createLayout(keyboard.middleRow);
keyboard.createLayout(keyboard.bottomRow);
