/* 
  В переменную num записывается случайное число
  
  Используя ветвления запишите в переменную type
  строку "even" если num четное, и "odd" если не четное.
*/
"use strict"
const num = Number.parseInt(Math.random() * 100);
let type = num % 2 === 0 ? "even" : "odd";
console.log(`${num} is ${type}`);