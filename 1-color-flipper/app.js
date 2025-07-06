const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn"); 
const color = document.querySelector(".color"); //span vechu ithu iduthu

button.addEventListener("click", () => {
    
    const randNumber = getRandomNumber();
    // console.log("Randome Number: ", randNumber); 

    document.body.style.backgroundColor = colors[randNumber]; 
    color.textContent = colors[randNumber]; 
})


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); 
}
