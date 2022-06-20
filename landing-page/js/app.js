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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 */
// Selecting all the the sections found in the html code
let sections = document.querySelectorAll("section");

//identifing my unordered list for the nav background and storing it in a Variable
let mySectionsList = document.getElementById("navbar__list");

//how many sections in my landing page (identifying the length to use in for loops)
let numberOfSections = sections.length;


// Functional navigating menu
function createNav() {
  //a loop to iterate theough all the sections found
  for (let i = 1; i <= numberOfSections; i++) {
    // creating li element and saving it in a variable called list
    let list = document.createElement("li");
    //navigating to the clicked section
    let section = sections[i - 1];
    let sectionPlace = section.getAttribute('id');
    //Adding the class (the class found in the css file to get the style) and name of the list.
    //not only but also adding section nave to be visible in the nav bar and using sectionPlace variable to link to the section
    list.innerHTML = `<a class = "menu__link" href = "#${sectionPlace}">Section ${i}</a>`;

    // finally adding each list item to the parent which is the Unordered list
    mySectionsList.appendChild(list);
  }
}

//a function to scroll smoothly when a link is clicked
function clickNav() {
  //storing all hrefs in an erray so I can acces each on it own with forEach method
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(x) {
      x.preventDefault();
      //to scroll to the clicked section smoothly
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

window.addEventListener("scroll", function() {
  for (let section of sections) {
    let navLink = document.querySelector(`a[href="#${section.id}"]`);

    if (section.getBoundingClientRect().top > 0 && section.getBoundingClientRect().top <= 300) {
      section.classList.add("your-active-class");
      navLink.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
      navLink.classList.remove("your-active-class");

    }

  }
})

//Calling functions in the right order
createNav();
clickNav();
