const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn"); 
const color = document.querySelector(".color"); 

button.addEventListener("click", () => {
    // const randNumber = getRandomNumber();
    const randumHex = getRandomHex(); 
    console.log(randumHex); 
    document.body.style.backgroundColor = randumHex; 
    color.textContent = randumHex; 
})

function getRandomHex() {
    let str = "#"; 
    while (str.length < 7) {
        const randomHex = hex[getRandomNumber()]; 
        str += randomHex; 
    }
    return str; 
}
function getRandomNumber() {
    return Math.floor (Math.random() * hex.length); 
}

