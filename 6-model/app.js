// select modal-btn, modal-overaly, close-btn
// click event on two buttons
//add and remove open-modal class 
let flag = false; 

const openButton = document.querySelector(".modal-btn"); 
const overlap = document.querySelector(".modal-overlay"); 
const closeButton = document.querySelector(".close-btn"); 


openButton.addEventListener("click", function () {
    flag = true; 
    changeOverlap(flag); 
})

closeButton.addEventListener("click", function () {
    flag = false; 
    changeOverlap(flag); 
})

function changeOverlap(flag) {
    if (flag) {
        overlap.classList.add("open-modal"); 
    } else {
        overlap.classList.remove("open-modal"); 
    }
} 