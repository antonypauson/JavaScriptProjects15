const icon = document.getElementById("icon");

const sidebar = document.querySelector(".sidebar"); 

const close = document.getElementById("close");

icon.addEventListener("click", showNav);
close.addEventListener("click", hideNav);

function showNav() {
    console.log("clicked");
    sidebar.classList.add("show"); 
}

function hideNav() {
    sidebar.classList.remove("show"); 
}

