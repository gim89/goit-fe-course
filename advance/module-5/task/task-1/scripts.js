/*  
  Напишите код, который, для объекта user, последовательно: 
 - добавляет поле mood со значением 'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user 
    циклом в формате ключ: значение
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "javascript";
delete user["premium"];
console.log(user);

// for (let key in user) {
//   console.log(`${key} : ${user[key]}`);
// }

// Object.keys(user).map(key => console.log(`${key} : ${user[key]}`));

