/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/
"use strict"
const findLongestWord = str => {
  if (typeof str === "string") {
    if ((str.charCodeAt(0) >= 49 && str.charCodeAt(0) <= 57) || str.charCodeAt(0) === 0 || (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) || (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90)) {
      const strSplit = str.split(" ");
      const strMax = strSplit.reduce((one, two) => (one.length > two.length ? one : one.length === two.length ? one : two));
      return strMax;
    }
  }
}
// console.log("Z".charCodeAt(0));

// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'
