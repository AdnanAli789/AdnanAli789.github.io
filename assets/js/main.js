/*===== MENU SHOW =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    })
}

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

sr.reveal(`.home__data, .home__social, .home__img`);
sr.reveal(`.about__container, .education-card, .skills-container, .projects-container, .contact__container`, {interval: 200});