/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

const store = {
  products: ['bread', 'cheese', 'milk', 'apples'],
  managers: ['poly', 'mango', 'ajax'],
  addManager(manager) {
    this.managers.push(manager);
    
    console.log(this.managers);
  },
  removeManager(manager) {
    const idx = this.managers.indexOf(manager);
    
    this.managers.splice(idx, 1);
    
    console.log(this.managers);
  },
  getProducts() {
    console.log(this.products);
    
    return this.products;
  }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']