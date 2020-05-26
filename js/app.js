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
function scrollToSection(id) {
  let elmnt = document.getElementById(id);
  elmnt.scrollIntoView();
}


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
    navbarList.appendChild(li);
    const a = document.createElement('a');
    a.textContent = 'section' + i;
    a.id = 'menu__link';
    li.appendChild(a);
    navbarList.style.cssText = 'color: rgba(0,13,60,1); font-size: 20px';
    li.style.padding = '10px';
  }

  //add 4th section
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.id = 'section4';
  const div = document.createElement('div');
  div.class = 'landing__container';
  const h2 = document.createElement('h2');
  h2.textContent = 'Section 4';
  const p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellusimperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla egetbibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdietelit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leonunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestiesemper in tellus. Sed congue et odio sed euismod.';
  const p2 = document.createElement('p');
  p2.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, velluctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consecteturporttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

  main.appendChild(section);
  section.appendChild(div);
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(p2);
  //style the 4th section

  navbarList.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A') {
      scrollTo(event.target.textContent);
    }
  }
  );


});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollTo(elementId) {
  document.querySelector('#'+elementId).scrollIntoView({ behavior: 'smooth' })
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


