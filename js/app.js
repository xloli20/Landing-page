/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let activeLink = null;
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


document.addEventListener('DOMContentLoaded', function () {
  const navbarList = document.getElementById('navbar__list');

  // build the nav
  for (let i = 1; i <= 4; i++) {
    const li = document.createElement('li');
    navbarList.appendChild(li);
    const a = document.createElement('a');
    a.textContent = 'section' + i;
    a.id = 'menu__link';
    li.appendChild(a);
    navbarList.style.cssText = 'color: rgba(0,13,60,1); font-size: 20px';
    li.style.padding = '10px';
  }

  //add listener to the links in the nav
  navbarList.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A') {
      setActiveLink(event.target);
      //scroll to the appropriate section when link a clicked
      scrollTo(event.target.textContent);
    }
  });

  // change the section color when section is viewed while scrolling through the page.
  window.addEventListener("scroll", function () {
    for (let section of sections) {
      if (isElementInViewport(section)) {
        activeLink = section.id;
        activeLink.style.cssText = 'color: rgba(0,13,60,1)';
      } else {
        activeLink.style.cssText = 'color: rgba(136,203,171,1)';
        activeLink = null;
      }
    }
  });

});

//check if the element in the viewport
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= 0.4 * (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Add class 'active' to section when near top of viewport
function setActiveLink(clickedLink) {
  if (activeLink !== null) {
    activeLink.style.cssText = 'color: rgba(0,13,60,1)';
    activeLink = null;
  }
  activeLink = clickedLink;
  activeLink.style.cssText = 'color: rgba(136,203,171,1)';
}

// Scroll to anchor ID using scrollTO event
function scrollTo(elementId) {
  document.querySelector('#' + elementId).scrollIntoView({ behavior: 'smooth' })
}