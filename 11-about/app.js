const buttons = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id) {
        buttons.forEach((button) => {
            button.classList.remove("active");
            e.target.classList.add('active');
            // console.log(e.target.classList);
            
        }) 

        articles.forEach((article) => {
            article.classList.remove("active");
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})