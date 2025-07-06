//using queryselecterall
//using for loop to check if its +,- or none;
let countValue = 0; 

const counter = document.querySelector("#value"); 

const buttons = document.querySelectorAll(".btn"); 
// buttons.forEach((item) => console.log(item)) 
buttons.forEach((eachButton) => {
    eachButton.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList; 
        if (styles.contains('decrease')) {
            countValue--; 
            // console.log("count", countValue);
        }

        if (styles.contains('increase')) {
            countValue++; 
        } 

        if (styles.contains('reset')) {
            countValue = 0; 
        } 

        if (countValue > 0) {
            counter.style.color = 'green'; 
        }

        if (countValue < 0) {
            counter.style.color = 'red'; 
        }

        if (countValue === 0) {
            counter.style.color = '#222'
        }

        counter.textContent = countValue;  
    })
})