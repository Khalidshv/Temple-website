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

/*=============== ADD BLUR HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/


/*=============== SAKURA ANIMATION ===============*/

