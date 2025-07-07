const toggleButton = document.querySelector(".sidebar-toggle"); 
const sidebar = document.querySelector(".sidebar"); 
const closeButton = document.querySelector(".close-btn"); 
// console.log(closeButton); 
closeButton.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar"); 
})
toggleButton.addEventListener("click", function() {
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar"); 
    } else {
        sidebar.classList.add("show-sidebar"); 
    }
})

