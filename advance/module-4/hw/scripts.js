// Используя логику создания массива клавиатурных строк, 
// создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит 
// и возвращает массив-массивов клавиатурных строк.

// Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает 
// случайную букву из этой строки.

// Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard;
console.log(addKeyboardLayout (alphabet));
function addKeyboardLayout (alphabet) {
  const keyboardTop = alphabet.substring(0, alphabet.indexOf("a"));
  const keyboardMiddle = alphabet.substring(alphabet.indexOf("a"), alphabet.indexOf("z"));
  const keyboardBottom = alphabet.substring(alphabet.indexOf("z"), alphabet.length);
  keyboard = [keyboardTop, keyboardMiddle, keyboardBottom];
  return keyboard;
}
console.log(getRandCharInRow (keyboard));
function getRandCharInRow (row) {
  let  rowTop = row[0].replace(/[^a-z]/g).charAt(Math.random() * row[0].length);
  let  rowMiddle = row[1].replace(/[^a-z]/g).charAt(Math.random() * row[1].length);
  let  rowBottom = row[2].replace(/[^a-z]/g).charAt(Math.random() * row[2].length);
  return [rowTop, rowMiddle, rowBottom];
}
console.log(getRandCharInAlph ());
function getRandCharInAlph () {
  const keyboardRandom = alphabet.replace(/[^a-z]/g).charAt(Math.random() * alphabet.length);
  return keyboardRandom;
}



