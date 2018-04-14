/*
  Число участников лотореи 250 человек. 
  
  Переменной winner присвойте результат выражения, 
  на основе Math.random, которое вернет 
  целое число от 1 до 250 включительно.
*/
"use strict"
const min = 1;
const max = 251;
let winner;
winner = Math.floor(Math.random() * (max - min)) + min;
console.log(`Победитель является обладателем номера ${winner}!`);