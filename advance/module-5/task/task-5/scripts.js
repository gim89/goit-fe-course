/*  
  Напишите функцию getAllPropValues(prop), 
  которая берет массив объектов и 
  возвращает массив значений определенного поля prop
*/

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];

function getAllPropValues (prop) {
  return Object.keys(users).map(key => users[key][prop]);
}
// console.log(getAllPropValues(users));
// Вызовы функции для проверки
console.log(
  getAllPropValues('name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues('mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues('active')
); // []
