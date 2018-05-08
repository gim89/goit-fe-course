/*  
  Напишите функцию countOwnProps(obj),
  считающую кол-во сообственных свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

const countOwnProps = obj => {
  return Object.keys(obj).length;
}
console.log(
  countOwnProps({})
); // 0

console.log(
  countOwnProps({a: 1, b: 3, c: 'hello'})
); // 3
