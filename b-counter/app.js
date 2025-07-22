const value = document.querySelector("#value");

const buttons = document.querySelectorAll(".btn");

let currentValue = 0; 

buttons.forEach((each) => {
    each.addEventListener("click", buttonPressed)
})

function buttonPressed(event) {
    const classList = event.currentTarget.classList; 

    if (classList.contains("decrease")) {
        console.log("DEC"); 
        currentValue--; 
    } 

    if (classList.contains("increase")) {
        console.log("INC");
        currentValue++; 
    }

    if (classList.contains("reset")) {
        console.log("RESET");
        currentValue = 0; 
    }

    if (currentValue > 0) {
        value.style.color = 'green'; 
    }

    if (currentValue < 0) {
        value.style.color = 'red'; 
    }

    value.textContent = currentValue; 
}