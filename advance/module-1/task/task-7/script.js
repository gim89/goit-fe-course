/*
  Реализовать скрипт подсчета общей суммы покупки
  
  Всегда есть 2 числа с плавающей запятой, после запятой 
  всегда 2 знака!
  Необходимо сложить и вывести результат в консоль.
*/
"use strict"
const a = 0.1;
const b = 0.2;
const c = 0.3;

// Исправить вычисления
let summ = a + b + c;
summ = summ * 10;
summ = summ.toFixed(0);
summ = summ / 10;

let x = 15.2;
let y = 15.3;
const z = x + y;
console.log(z.toFixed(2));
console.log(0.6 === summ); // должно быть true