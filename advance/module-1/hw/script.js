// Создать три const - строки, содержащие символы клавиатуры верхнего, 
// среднего и нижнего ряда английского языка. 

// Например для верхнего ряда русской раскладки строка будет выглядеть 'йцукенгшщзхъ'.

// Создать три const переменные с числом, содержащим длинну строк, полученных ранее.
// Используя charAt, для каждой строки получить первый и последний символ для каждой из трех строк, 
// используйте имеющиеся константы.

// Сделайте поиск позиции для символов [ и ] с помощью indexOf и сохраните результат в переменных.

// Используя многострочную шаблонную строку, вывести названия всех переменных и полученные значения за один console.log.
"use strict"

const message = 'Welcome to Bahamas!';

const topRow =     'qwertyuiop[]';
const averageRow = 'asdfghjkl;\'';
const bottomRow =  'zxcvbnm,./';

const topRowLength =     topRow.length;
const averageRowLength = averageRow.length;
const bottomRowLength =  bottomRow.length;

const topFirst =     topRow.charAt(0);
const averageFirst = averageRow.charAt(0);
const bottomFirst =  bottomRow.charAt(0);

const topLast =     topRow.charAt(topRowLength - 1);
const averageLast = averageRow.charAt(averageRowLength - 1);
const bottomLast =  bottomRow.charAt(bottomRowLength - 1);

const searchFirst =  topRow.indexOf('[');
const searchSecond = topRow.indexOf(']');

console.log(`
  topRow -           ${topRow}
  averageRow -       ${averageRow}
  bottomRow -        ${bottomRow}
  topRowLength -     ${topRowLength}
  averageRowLength - ${averageRowLength}
  bottomRowLength -  ${bottomRowLength}
  topFirst -         ${topFirst}
  averageFirst -     ${averageFirst}
  bottomFirst -      ${bottomFirst}
  topLast -          ${topLast}
  averageLast -      ${averageLast}
  bottomLast -       ${bottomLast}
  searchfirst -      ${searchFirst}
  searchSecond -     ${searchSecond}
`);