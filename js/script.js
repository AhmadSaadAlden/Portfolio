import translations from "./translations.js";

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .srvices-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
document.addEventListener("DOMContentLoaded", () => {
    new Typed('.multiple-text', { 
      strings: ["Front-End Developer"],
      typeSpeed: 100, 
      backSpeed: 100, 
      loop: true, 
      startDelay: 500, 
      backDelay: 1500
    });
  });
  
/*==================== translations js ====================*/
/* const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
    initializeTyped(selectedLanguage);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);
    initializeTyped(language);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-il8n]");
    elements.forEach((element) => {
    const translationKey = element.getAttribute("data-il8n");
    if (translationKey === "multiple-text") { 
      //initializeTyped(language);  
    } else { 
      element.textContent = translations[language][translationKey]; 
    }
    });

    document.dir = language === "ar" ? "rtl" : "ltr";
};
*/

