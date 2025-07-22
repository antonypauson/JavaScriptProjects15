
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const button = document.querySelector(".btn");
const mainSection = document.querySelector(".main-section");
const span = document.querySelector(".color-name");

button.addEventListener("click", generateColor);

function generateColor() {
    const randomCode = generateCode();
    const randomColor = "#" + randomCode; 
    console.log(randomColor);
    mainSection.style.backgroundColor = randomColor; 
    span.textContent = randomColor; 
}

function generateCode() {
    let code = ""; 
    for (let i = 0; i < 6; i++) {
        code += myArr[getRandomNumber()]; 
    }
    return code; 
}

function getRandomNumber() {
    return Math.floor(Math.random() * myArr.length); 
}