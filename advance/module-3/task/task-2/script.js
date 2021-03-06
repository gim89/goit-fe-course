/*
  Есть массив имен пользователей.
  Используя методы массива выполнить следующие операции.
*/
"use strict"
const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить из начала массива нулевой элемент и вывести в консоль результат.
console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент и вывести в консоль результат.
console.log(users.pop()); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
console.log(users.unshift("добавленое имя")); // ["добавленое имя", "Poly", "Ajax"]
console.log(users);

// Добавить в конец массива два любых имени за одну операцию
console.log(users.push("имя 1", "имя 2")); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
console.log(users);