/* 
  Создать переменную message, в которую записать строку 
  результата запроса ввода пользователя (prompt)
   
  Затем для переменной inLowerCase надо присвоить
  результат вызова метода обработки строки message так,
  чтобы все символы строки были в нижнем регистре.
  
  Для переменной inUpperCase - в верхнем регистре.
*/

// Заменить '' на message и вызов метода
"use strict"

let message = prompt('Введите строку');
let inLowerCase = message.toLowerCase();
let inUpperCase = message.toUpperCase();

console.log(inLowerCase); 
console.log(inUpperCase);