/*======   Menu show y hidden   ======*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close') 

/*======   MENU SHOW   ======*/      
/*   Validate if Constant Exists   */
if (navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })

}

/*======  Make nav white while scrolling ======*/
// Select the navbar element
const navbar = document.querySelector('.nav');

// Function to handle the scroll event
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);


/*======   MENU HIDDEN   ======*/      
/*   Validate if Constant Exists   */
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*======   REMOVE MENU MOBILE   ======*/      
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link, we remove the show menu-class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*======   ACCORDION SKILLS   ======*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})

/*======   QUALIFICATION TABS   ======*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*======   SERVICES MODAL   ======*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}    

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*======   PORTFOLIO SWIPER   ======*/
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next', // Corrected property name
        prevEl: '.swiper-button-prev', // Corrected property name
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*======   TESTIMONIAL   ======*/
let swiperTestimonial = new Swiper('.testimonial_container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination-testimonial',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPreView:2,
        }
    }
});


/*======   SCROLL SECTION ACTIVE LINK   ======*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id'); // Added quotes around 'id'

        const navLink = document.querySelector('.nav_menu a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active'); // Add the 'active' class
        } else {
            navLink.classList.remove('active'); // Remove the 'active' class
        }
    });
}

window.addEventListener('scroll', scrollActive);
 
/*======   CHANGE BACKGROUND HEADER   ======*/
document.addEventListener('DOMContentLoaded', function() {
    function scrollHeader() {
        const nav = document.getElementById('header');

        if (this.scrollY >= 80) {
            nav.classList.add('scroll-header');
        } else {
            nav.classList.remove('scroll-header');
        }
    }

    window.addEventListener('scroll', scrollHeader);
});


/*======   SHOW SCROLL UP   ======*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-top');

    if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/*=== DARK LIGHT THEME ===*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic (if user selected)
const selectedTheme = localstorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-moon'

// We validate if the user previously chose a topic 
if (selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});