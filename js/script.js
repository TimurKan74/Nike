const gamburger = document.querySelector(".gamburger");
const navLink = document.querySelector(".nav__links");
const navTools = document.querySelector('.nav__tools');
const navLogo = document.querySelector('.nav__logo');
const linkAll = document.querySelectorAll('.nav__links a');
const buttonAll = document.querySelectorAll('.nav__tools button');
gamburger.onclick = function() {
    gamburger.classList.toggle("gamburger_active"); 
    navLink.classList.toggle("nav__links_active");
    navTools.classList.toggle("nav__tools_active");
    navLogo.classList.toggle("nav__logo_active");
}
navLogo.onclick = function() {
    navLogo.classList.remove("nav__logo_active");
    gamburger.classList.remove("gamburger_active");
    navTools.classList.remove("nav__tools_active");
    navLink.classList.remove("nav__links_active");
}
for(let i = 0; i<linkAll.length;i++){
    linkAll[i].onclick = function() {
        gamburger.classList.remove("gamburger_active"); 
        navLink.classList.remove("nav__links_active");
        navTools.classList.remove("nav__tools_active");
        navLogo.classList.remove("nav__logo_active");
    }
}
for(let i = 0; i<buttonAll.length;i++){
    buttonAll[i].onclick = function() {
        gamburger.classList.remove("gamburger_active"); 
        navLink.classList.remove("nav__links_active");
        navTools.classList.remove("nav__tools_active");
        navLogo.classList.remove("nav__logo_active");
    }
}