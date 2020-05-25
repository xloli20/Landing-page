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

// build the nav

document.addEventListener('DOMContentLoaded', function () {
  const navbarList = document.getElementById('navbar__list');

  // create <li> elements
  for (let i = 1; i <= 4; i++) {
    const li = document.createElement('li');
    li.textContent = 'section ' + i;
    navbarList.appendChild(li);
    navbarList.style.cssText = 'color: rgba(0,13,60,1); font-size: 20px';
    li.style.padding = '10px';
  }
});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


