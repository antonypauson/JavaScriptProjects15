
const icon = document.getElementById("icon");

const navLinks = document.querySelector(".list");

icon.addEventListener("click", toggleNav);

function toggleNav() {
    navLinks.classList.toggle("show")
}

