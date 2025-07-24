const questions = document.querySelectorAll(".question-card");


questions.forEach((each) => {
    const button = each.querySelector(".btn");

    button.addEventListener("click", function buttonClicked() {
        each.classList.toggle("show");
    });
})


