/* 
  Создайте поиск отелей.
  
  Пользователь с помощью prompt должен ввести число от 0 до 5.
  
  Проверить что пользователь ввел именно цифру от 0 до 5.
  Если введенные данные не валидны, вывести alert с текстом 
  "Неверный ввод, возможные варианты 0-5!"
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя if/else или switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
"use strict"
let prom = prompt("Ввести число от 0 до 5");
  switch (prom) {
      case "1": alert("Каталог Хостелов");
      break;
      case "2": alert("каталог бюджетных отелей");
      break;
      case "3": alert("Каталог отелей ***");
      break;
      case "4": alert("каталог отелей ****");
      break;
      case "5": alert("Каталог лучших отелей");
      break;
      default: alert("Введите правильное число");
  }