/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const blurHeader = () =>{
    const header = document.getElementById ('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}
window. addEventListener ('scroll', blurHeader)
/*=============== ADD BLUR HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/


/*=============== SAKURA ANIMATION ===============*/

