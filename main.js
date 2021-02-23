//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const infoMenu = document.querySelector('.info-menu');
const navItems = document.querySelectorAll('.nav-item');


// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        infoMenu.classList.add('show');
        navItems.forEach(item => item.classList.add('show')); 

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        infoMenu.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        // Set Menu State
        showMenu = false;
    }
}