

// // selecting button and then moving up
// const buttons = document.querySelectorAll(".question-btn"); 
// buttons.forEach((button) => {
//     button.addEventListener("click", function(e) {
//         // console.log(e.currentTarget.parentElement); //nearest parent
//         const question = e.currentTarget.parentElement.parentElement; //parent's parent
//         question.classList.toggle("show-text"); 
//     })
// });

// selecting question and then moving down
// better approach
const questions = document.querySelectorAll(".question"); 
questions.forEach((question) => {
    const button = question.querySelector(".question-btn"); 
    button.addEventListener("click", function(e) {
        // console.log(e.currentTarget.classList); 
        question.classList.toggle("show-text"); 
    })
})