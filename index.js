

'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);



/*Customer Review*/
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;
const cardsPerView = 2; // Number of cards to show at a time

// Function to update the slider position
function updateSlider() {
    // Prevent overflow by looping within the card range
    if (currentIndex > totalCards - cardsPerView) {
        currentIndex = 0; // Reset to the start if we reach the end
    } else if (currentIndex < 0) {
        currentIndex = totalCards - cardsPerView; // Go to the last full view if we go back from the start
    }

    const offset = -currentIndex * (100 / cardsPerView);
    slider.style.transform = `translateX(${offset}%)`;
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    currentIndex += cardsPerView;
    updateSlider();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    currentIndex -= cardsPerView;
    updateSlider();
});

// Initial position of the slider
updateSlider();


/*Slider Part*/
// Script File


// Partners Section Starts 
$('.partners-slider').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      700:{
          items:3
      },
      1000:{
        items:5
      }
  }
})
// Partners Section Ends 

