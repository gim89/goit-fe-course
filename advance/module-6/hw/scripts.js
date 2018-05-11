// Создайте объект keyTrainer, содержащий свойство chars, 
// значением которого будет массив символов алфавита.
// chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

// Добавьте свойство charCount и метод setCharCount. 
// Метод делает запрос через prompt о количестве символов, 
// которые пользователь должен будет набрать.

// Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным числом. 
// Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. 
// Если ввод неверный, используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).

// Создайте свойство task и метод createTask, который создает массив длинной в charCount и 
// заполняет его случайными буквами из массива chars.

// Создайте метод startTask, который с помощью prompt выводит строку из массива task 
// и просит набрать эту строку в этом же prompt сообщении.

// Результат, полученный методом startTask запишите в свойство userInput и 
// затем сравните строки userInput и task посимвольно. 
// Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.

// Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, 
// если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.

// Все свойства и методы должны быть внутри одного объекта keyTrainer, 
// но вызов по очереди всех методов поместите внутри функции run и затем вызовите эту функцию.
"use strict";

let keyTrainer = {
  
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    checkPositiveInteger () {
      
        let bool = true;
          
        while (bool) {
          
            const num = +prompt("Введите количество символов");
            
            if (Number.isInteger(num) == true) {
                
                bool = false;
                this.charCount = num;
                console.log(`Количество символов = ${this.charCount}`);
            } 
            else {
              
                alert("Введите положительное целое число");
            }
        }
    },
    task: '', 
    createTask (charCountLength) {
        
        this.task = new Array(charCountLength).fill().map(() => this.chars[Math.floor(Math.random() * this.chars.length)]);
                                
    },
    startTask (task) {

        const strTask = task.join("");
        const start = prompt(`Наберите данную строку ${strTask}`);
        this.userInput = start.split("");
  
        let error = 0;
        let userError;

        this.task.map((elem, index) => {
          
            if (this.userInput[index] !== this.task[index]) {
              
                error++;
                userError = "Количество ошибок = " + error;
            } else {
              
                userError = "Поздравляю, количество ошибок 0";
              }
        });
      
        this.userErrors = userError;
        console.log(this.userErrors);
  },
  userInput: "",
  userErrors: ""
};

const run = () => {
    
    keyTrainer.checkPositiveInteger();
    keyTrainer.createTask(keyTrainer.charCount);
    keyTrainer.startTask(keyTrainer.task);
}

run();