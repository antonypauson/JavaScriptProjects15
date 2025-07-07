// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle"); 
// console.log(navToggle); 
const links = document.querySelector(".links"); 
// console.log(links); 

navToggle.addEventListener("click", function() {
    //show-links puts height back if its there
    console.log(links.classList); 
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links"); 
    } else {
        links.classList.add("show-links"); 
    }
})