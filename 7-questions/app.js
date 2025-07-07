//traversing the dom

//select question-btn
const buttons = document.querySelectorAll(".question-btn"); 

buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        // console.log(e.currentTarget.parentElement); //nearest parent
        const question = e.currentTarget.parentElement.parentElement; //parent's parent
        question.classList.toggle("show-text"); 
    })
});