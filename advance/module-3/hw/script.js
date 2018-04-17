// Используя даную строку с полным алфавитом, программно составить массив keyboard 
// содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.

// Массив keyboard будет иметь такую струтуру: 
// [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].

// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

// Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, 
// записать в переменные слова и вывести их в консоль:

// hello
// javascript
// trainer

"use strict"
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const keyboardTop = alphabet.substring(0, alphabet.indexOf("a"));
const keyboardMiddle = alphabet.substring(alphabet.indexOf("a"), alphabet.indexOf("z"));
const keyboardBottom = alphabet.substring(alphabet.indexOf("z"), alphabet.length);

const keyboard = [[keyboardTop], [keyboardMiddle], [keyboardBottom]];
console.log(keyboard);
const wordHello = keyboardMiddle[5] + keyboardTop[2] + keyboardMiddle[8] + keyboardMiddle[8] + keyboardTop[8];
const wordJavascript = keyboardMiddle[6] + keyboardMiddle[0] + keyboardBottom[3] + keyboardMiddle[0] + keyboardMiddle[1] + keyboardBottom[2] + keyboardTop[3] + keyboardTop[7] + keyboardTop[9] + keyboardTop[4];
const wordTrainer = keyboardTop[4] + keyboardTop[3] + keyboardMiddle[0] + keyboardTop[7] + keyboardBottom[5] + keyboardTop[2] + keyboardTop[3];

console.log(`wordHello - ${wordHello}`);
console.log(`wordJavascript - ${wordJavascript}`);
console.log(`wordTrainer - ${wordTrainer}`);