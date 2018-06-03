// Используя createElement, написать функцию createUserCard() 
// которая динамически создает и возвращает дом узел для такой 
// карточки пользователя. Классы оформления добавляем через classList.

"use strict"

const createUserCard = () => {

    const   body      = document.querySelector("body"),
            cont      = document.createElement("div"),
            block     = document.createElement("div"),
            img       = document.createElement("img"),
            text      = document.createElement("p"),
            span      = document.createElement("span"),
            card      = document.createElement("div"),
            cardOne   = document.createElement("span"),
            cardTwo   = document.createElement("span"),
            cardThree = document.createElement("span"),
            imgOne    = document.createElement("img"),
            imgTwo    = document.createElement("img"),
            imgThree  = document.createElement("img"),
            iOne      = document.createElement("i"),
            iTwo      = document.createElement("i");

    body.prepend(cont);
    cont.prepend(block);
    block.prepend(img);
    img.after(text);
    text.after(span);
    span.after(card);
    card.prepend(cardOne);
    cardOne.after(cardTwo);
    cardTwo.after(cardThree);
    cardOne.prepend(imgOne);
    imgOne.after(iOne);
    cardTwo.prepend(imgTwo);
    imgTwo.after(iTwo);
    cardThree.prepend(imgThree);



    cont.classList.add("container");
    block.classList.add("block");

    img.classList.add("img");
    img.setAttribute("src", "img/img-one.jpg");

    text.textContent = "Claudia Cardenale";
    text.classList.add("text");

    span.textContent = "23 Philadelphia, PA";
    span.classList.add("span");

    card.classList.add("card");
    iOne.textContent = "19";
    iTwo.textContent = "5";
    iOne.classList.add("card-i");
    iTwo.classList.add("card-i");

    cardOne.classList.add("card-span");
    cardTwo.classList.add("card-span");
    cardThree.classList.add("card-span");

    imgOne.classList.add("card-img");
    imgTwo.classList.add("card-img");
    imgThree.classList.add("card-img");
    imgThree.classList.add("card-img-three");

    imgOne.setAttribute("src", "img/strawberry.png");
    imgTwo.setAttribute("src", "img/lime.png");
    imgThree.setAttribute("src", "img/interface.png");

}

createUserCard();