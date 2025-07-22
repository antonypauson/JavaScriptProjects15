// console.log("HI")

const colors = ["salmon", "pink", "khaki", "red", "yellow", "grey", "violet", "magenta", "brown", "navyblue"];


const button = document.querySelector(".btn");
const mainSection = document.querySelector(".main-section");
const span = document.querySelector(".color-name");

button.addEventListener("click", randomColor);

function randomColor() {
    const randColor = colors[getRandomNumber()];

    // const computedStyles = window.getComputedStyle(mainSection);
    // console.log(computedStyles.backgroundColor);
    
    mainSection.style.backgroundColor = randColor; 
    span.textContent = randColor; 
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}