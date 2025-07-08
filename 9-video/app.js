const button = document.querySelector(".switch-btn"); 
const video = document.querySelector(".video-container");

button.addEventListener("click", () => {
    if (button.classList.contains("slide")) {
        button.classList.remove("slide"); 
        video.play(); 
    } else {
        button.classList.add("slide")
        video.pause(); 
    }
})

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
})

