/*
  Есть 3 переменные в которых хранится  размер
  составляющих блочной модели в формате Npx,
  где N это целое число.
  
  Используя эти переменные, запишите в 
  переменную totalWidth общую ширину 
  блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/
"use strict"
const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + 'px';

console.log(totalWidth); // '125px'