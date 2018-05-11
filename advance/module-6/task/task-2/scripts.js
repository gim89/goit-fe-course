/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({ login, password, type = 'regular' }) {
  this.login = login;
  this.password = password;
  this.type = type;
  
  this.changePassword = function (newPassword) {
    password = newPassword;
    
    console.log(password);
  };
  
  this.getAccountInfo = function() {
    console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
};

const account = new Account({
  login: 'Mango',
  password: 'qwe123', 
  type: 'premium'
});

console.log( account.login ); // 'Mango'
console.log( account.password ); // 'qwe123'
console.log( account.type ); // 'premium'

console.log( account.changePassword('asdzxc') ); // 'asdzxc'

console.log( 
  account.getAccountInfo() 
); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'