//date set up
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(); 


const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links"); 
    const linksContainerHeight = linksContainer.getBoundingClientRect().height; 
    const linksHeight = links.getBoundingClientRect().height; 
    
    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0; 
    }
})

const navbar = document.getElementById("nav");
const backButton = document.querySelector(".top-link");


//pageYOffset : vertical scrolled pixels
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height; 
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav"); 
        linksContainer.style.height = 0; 
    } else {
        navbar.classList.remove("fixed-nav"); 
    }

    if (scrollHeight > 500) {
        backButton.classList.add('show-link');
    } else {
        backButton.classList.remove('show-link');
    }
});

const allLinks = document.querySelectorAll(".scroll-link");

allLinks.forEach((link) => {
    link.addEventListener("click", event => {
        //prevent default
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height; 
        const fixedNav = navbar.classList.contains("fixed-nav");

        
        const position = element.offsetTop - navHeight;

       

        window.scrollTo({
            left: 0, 
            top: position
        });
        linksContainer.style.height = 0; 
    })
})



