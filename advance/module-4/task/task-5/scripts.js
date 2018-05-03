/*  
  Есть массив уникальных чисел uniqNumbers.
  
  Написать функцию, addUniqNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

"use strict"

const numbers  = [2, 1, 4, 9];
let uniqNumbers = [];

function addUniqNumbers ()  {
  let argum = Array.from(arguments);
  let number = numbers.concat(argum);
  uniqNumbers = number.filter((current, next) => number.indexOf(current) === next);

}

// Вызовы функции для проверки
addUniqNumbers(1, 2, 3);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 3]

addUniqNumbers(12, 2, 3, 19);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 12, 3, 19]

addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqNumbers
); // будет [2, 1, 4, 9, 5, 12, 3, 8]
