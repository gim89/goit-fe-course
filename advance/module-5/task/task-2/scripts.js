/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки

// const isObjectEmpty = (obj) => {
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       return false;
//     }
//   }
//   return true;
// }

const isObjectEmpty = (obj) => {
  if (Object.keys(obj).length == 0) {
    return true;
  }
  return false;
}

console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({a: 1})
); // false

