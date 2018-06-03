// Модифицировать createUserCard(user) так чтобы она принимала объект 
// с данными для заполнения полей в карточке. Используя createUserCard 
// создать карточки для 3-х разных пользователей и повесить их в документ. 
// Формат обьекта указан ниже.

// const user = {
//     img: 'link/to/user-image',
//     name: 'Claudia Cardinale',
//     age: 29,
//     location: 'Philadelphia, PA',
//     strawberries: 19,
//     lemons: 5
//   };

// "use strict"


const userOne = {

    img: 'img/img-one.jpg',
    name: 'Claudia Cardinale',
    age: 29,
    location: 'Philadelphia, PA',
    strawberries: 19,
    lemons: 5
}

const userTwo = {

    img: 'img/img-two.jpg',
    name: 'Dgenifer Ponola',
    age: 41,
    location: 'California, PA',
    strawberries: 20,
    lemons: 6
}

const userThree = {

    img: 'img/img-three.jpg',
    name: 'Filana Guful',
    age: 23,
    location: 'California, PA',
    strawberries: 21,
    lemons: 7
}

const createUserCard = (user) => {
    this.img = user.img;
    this.name = user.name;
    this.age = user.age;
    this.locat = user.location;
    this.strawberries = user.strawberries;
    this.lemons = user.lemons;

    return `
            <div class="container">
                <div class="block">
                    <img class="img" src="${this.img}">
                    <p class="text">${this.name}</p>
                    <span class="span">${this.age} ${this.locat}</span>
                    <div class="card">
                        <span class="card-span">
                            <img class="card-img" src="img/strawberry.png">
                            <i class="card-i">${this.strawberries}</i>
                        </span>
                        <span class="card-span">
                            <img class="card-img" src="img/lime.png">
                            <i class="card-i">${this.lemons}</i>
                        </span>
                        <span class="card-span">
                            <img class="card-img card-img-three" src="img/interface.png">
                        </span>
                    </div>
                </div>
            </div>
        `;
}

const body = document.querySelector('body');
body.innerHTML = createUserCard(userOne);
body.innerHTML += createUserCard(userTwo);
body.innerHTML += createUserCard(userThree);