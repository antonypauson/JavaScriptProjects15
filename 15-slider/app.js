const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".nextBtn");
const prevButton = document.querySelector(".prevBtn");

slides.forEach((each, index) => {
    each.style.left = `${index * 100}%`; 
}); 

let counter = 0; 

nextButton.addEventListener("click", function() {
    counter++; 
    move();
})

prevButton.addEventListener("click", function() {
    counter--; 
    move();
})

function move() {

    if (counter == slides.length) {
        counter = 0; 
    }

    if (counter < 0) {
        counter = slides.length - 1; 
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
