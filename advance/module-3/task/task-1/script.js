/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

//Деструктуризация массивов
const [valueOne = 'value', valueTwo = 'value', valueThree = 'value', valueFour = 'value'] = users;

console.log(users.length); // 4

console.log(`users[2] - ${users[1]}`); // Poly
console.log(`users[4] - ${users[3]}`); // Chelsey
console.log(`users[1] - ${users[0]}`); // Mango
console.log(`users[3] - ${users[2]}`); // Ajax

console.log(`valueTwo - ${valueTwo}`); // Poly
console.log(`valueFour - ${valueFour}`); // Chelsey
console.log(`valueOne - ${valueOne}`); // Mango
console.log(`valueThree - ${valueThree}`); // Ajax