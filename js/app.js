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
  const sections = document.getElementsByTagName('section');
  for (const section of sections) {
    let sectionId = section.getAttribute("id");

    const li = document.createElement('li');
    navbarList.appendChild(li);
    const a = document.createElement('a');
    a.textContent = sectionId;
    a.class = 'menu__link';
    a.href = '#'+sectionId;
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

      const activeLink2 = document.querySelector(
        `a[href="#${section.getAttribute("id")}"]`
      );

      if (isElementInViewport(section)) {
        section.classList.add("your-active-class");
        activeLink2.classList.add("menu__link_active");
      } else {
        section.classList.remove("your-active-class");
        activeLink2.classList.remove("menu__link_active");
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