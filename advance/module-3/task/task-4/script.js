/*
  Создайте игру угадай число.
  Есть массив чисел numbers, содержащий "верные" числа.
  
  Числа в массиве всегда идут по возрастанию, 
  1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Пусть prompt говорит
  "Введите цифру между x и y", где x и y соотвественно самый
  маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, 
  необходимо проверить что было введено.
  Преобразовать input в числовой тип и проверить число ли это.
  
  Если нет - выводим alert с сообщением о том,
  что было введено не число.
  
  Если да - проверить содержит ли в себе массив numbers это число.
  
  Если содержит - выводим alert с сообщением 
  'Поздравляем, Вы угадали!'.
  
  Есл не содержит - выводим alert с сообщением 
  'Сожалеем, Вы не угадали!'.
*/
"use strict"
let numbers = [12, 15, 25, 37, 41];

console.log(numbers);
const prom = +prompt("Введите число от 12 до 41");

if (Number.isInteger(prom) && prom > 0) {
  switch (prom) {
    case 12: 
      if(prom === numbers[0]) {
        alert('Поздравляем, Вы угадали!');
      }
    break;
    case 15: 
      if(prom === numbers[1]) {
        alert('Поздравляем, Вы угадали!');
      }
    break;
    case 25: 
      if(prom === numbers[2]) {
        alert('Поздравляем, Вы угадали!');
      }
    break;
    case 37: 
      if(prom === numbers[3]) {
        alert('Поздравляем, Вы угадали!');
      }
    break;
    case 41: 
      if(prom === numbers[4]) {
        alert('Поздравляем, Вы угадали!');
      }
    break;
    default: alert('Сожалеем, Вы не угадали!');
  }
} else {
  alert("Введено не число");
}