const openBtn = document.querySelector(".btn");

const model = document.querySelector(".model");

const closeBtn = document.querySelector(".close");

// console.log(closeBtn);

openBtn.addEventListener("click", openButton);


closeBtn.addEventListener("click", closeButton);

function closeButton() {
    model.classList.remove("show-model");
}

function openButton() {
    model.classList.add("show-model");
}
