/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num.
  В результате получается новый массив, только с подходящими
  числами.
*/
"use strict"
const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < num) {
    newNumbers.push(numbers[i]);
    console.log(newNumbers);
  }
}