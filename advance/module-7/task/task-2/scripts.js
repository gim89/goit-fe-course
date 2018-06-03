// Модифицировать createUserCard() так чтобы она использовала не createElement, 
// а возвращала строку с тегами, которую потом можно будет поставить в документ 
// через innerHTML или insertAdjacentHTML.

"use strict"

const createUserCard = () => {
    const post = `
    <div class="container">
        <div class="block">
            <img class="img" src="img/img-one.jpg">
            <p class="text">Claudia Cardenale</p>
            <span class="span">23 Philadelphia, PA</span>
            <div class="card">
                <span class="card-span">
                    <img class="card-img" src="img/strawberry.png">
                    <i class="card-i">19</i>
                </span>
                <span class="card-span">
                    <img class="card-img" src="img/lime.png">
                    <i class="card-i">5</i>
                </span>
                <span class="card-span">
                    <img class="card-img card-img-three" src="img/interface.png">
                </span>
            </div>
        </div>
    </div>
    `;

    return post;
}

const card      = createUserCard();
const body      = document.querySelector("body");
body.innerHTML  = card;