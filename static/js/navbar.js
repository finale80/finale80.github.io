/*
 reside elements, and fade in/out avatar
*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#logo").addClass("logo-reducedsize");
    $("#navbar-right").addClass("navbar-right-reducedsize");
    $("#avatar").addClass("hidden");
  } else {
    $("#logo").removeClass("logo-reducedsize");
    $("#navbar-right").removeClass("navbar-right-reducedsize");
    $("#avatar").removeClass("hidden");
  }
}

/*
marker activation based on scrolling
*/

const sectionIDs = ['home', 'research', 'experience', 'education'];

var sections = [];
var navItems = {};

for (secID of sectionIDs) {
    sections.push(document.querySelector("#" + secID));
    navItems[secID] = document.querySelector("#navbar-link-" + secID);
}


// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: [0.5, 0.35, 0.5, 0.5],
};

function observerCallback(entries, observer) {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      //navItem.focus();
      // add 'active' class on the navItem
      navItem.classList.add('navbar-link-active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove('navbar-link-active');
        }
      });
    }
  });
}


const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));
