"use strict";

/***********************************************
 *                    Variables
 ***********************************************/

let photos = [
    {src: "1.jpg", legend: "Frères pandas"},
    {src: "2.jpg", legend: "Yoga on the top"},
    {src: "3.jpg", legend: "Lever de soleil"},
    {src: "4.jpg", legend: "Ciel étoilé"},
    {src: "5.jpg", legend: "Tea time"},
    {src: "6.jpg", legend: "Ca va péter le bide"}
];

let state = new Object();

/***********************************************
 *                    Fonctions
 ***********************************************/

function refreshSlider() {
 
    document.querySelector("#slider img").src = "images/" + photos[state.index].src;
    document.querySelector("#slider figcaption").textContent = photos[state.index].legend;
}

function onToolBarToogle() {
    document.querySelector(".toolbar ul").classList.toggle("hide");
    let icon = document.querySelector("#toolbar-toggle i");
    icon.classList.toggle('fa-arrow-right');
    icon.classList.toggle('fa-arrow-down');
}

function next() {
    state.index++;
    console.log(state.index);
     if(state.index == photos.length) state.index = 0;
    refreshSlider();   
}

function previous() {
    state.index--;
     if(state.index < 0) state.index = photos.length - 1;
    refreshSlider();  
}

function random() {
    let num; 
    do {
        num = getRandomInteger(0, photos.length - 1);
    }
    while(num == state.index) 
    state.index = num;
    refreshSlider();
}

function playpause() {
    if(state.timer == null) {
        state.timer = setInterval(next, 2000);
        this.title = "Arrêter le carrousel";
    } else {
        clearInterval(state.timer);
        state.timer = null;
        this.title = "Démarrer le carrousel";
    }

    let icon = document.querySelector("#slider-toggle i");
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');

}

/***********************************************
 *                    Code principal
 ***********************************************/
document.addEventListener("DOMContentLoaded", function() {
    state.index = 0;
    state.timer = null;
    refreshSlider();
    document.querySelector("#toolbar-toggle").addEventListener("click", onToolBarToogle);
    document.querySelector("#slider-next").addEventListener("click", next);
    document.querySelector("#slider-previous").addEventListener("click", previous);
    document.querySelector("#slider-random").addEventListener("click", random);
    document.querySelector("#slider-toggle").addEventListener("click", playpause);


});

