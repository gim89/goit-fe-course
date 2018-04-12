/*
  Есть две переменые a и b содержащие цифры 5 и 10,
  и переменная result в которую надо записать результат 
  математических операций над a и b.
  
  Используя синтаксис языка, последовательно присвоить 
  в result результат выполнения мат операций над a и b
  так, чтобы в консоли результат совпадал с комментарием 
  напротив console.log()
*/
"use strict"

const a = 6;
const b = 10;
let result;

result = a + b;
console.log(result); // 16
result = b - (b - a);
console.log(result); // 6
result = a * b;
console.log(result); // 60
result = a / b;
console.log(result); // 0.6

// использовать %
result = 10 % 6;
console.log(result); // 4