/*
  Создайте функцию titleCase(str), которая 
  получает строку и возвращает предоставленную строку 
  с первой буквой каждого слова, заглавными. 
  Остальные буквы слова должны быть не заглавными.
*/
"use strict"

const titleCase = str => {
  if (!str || typeof str === "string") {
    const titleSplit = str.split(" ");
    const strUpper = titleSplit.map(str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
    return strUpper;
  }
}

// Вызовы функции для проверки
console.log( 
  titleCase("I'm a little tea pot")
); // вернет "I'm A Little Tea Pot"

console.log(
  titleCase("sHoRt AnD sToUt")
); // вернет "Short And Stout".

console.log(
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
); // вернет "Here Is My Handle Here Is My Spout".
