'use strict';
const toogleBtn = document.querySelector(".navbar .navbar__toogleBtn i");
const menu = document.querySelector(".navbar .navbar__menu");
const icon = document.querySelector(".navbar .navbar__icon");

toogleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});
