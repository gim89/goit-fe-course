/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

function getPx (str) {
  if (typeof str === "string") {
    // return parseInt(str);
    return parseFloat(str);
  } else if (typeof str !== "string"){
    return null;
  }
}

console.log(getPx("10px") === 10);
console.log( getPx("10.5") === 10.5 );
console.log( getPx("0") === 0 );
console.log( getPx(-1) );
console.log( getPx(10) );