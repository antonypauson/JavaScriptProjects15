const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


const image = document.querySelector("#person-img"); 
const name = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const buttons = document.querySelectorAll(".btn-ctrl"); 

const randomButton = document.querySelector(".random-btn");

let currentValue = 0; 

buttons.forEach(each => {
    each.addEventListener("click", buttonClickFun);
})

randomButton.addEventListener("click", randomClick);

window.addEventListener("DOMContentLoaded", setStuff(currentValue)); 

function randomClick() {
    currentValue = generateRandom();
    setStuff(currentValue);
}

function generateRandom() {
    return Math.floor(Math.random() * reviews.length);
}

function buttonClickFun(event) {
    if (event.target.id == "prev-btn") {
        console.log("PREV");
        currentValue--; 
    } 

    if (event.target.id == "next-btn") {
        console.log("NEXT");
        currentValue++; 
    }

    if (currentValue < 0) {
        currentValue = reviews.length - 1; 
    }

    if (currentValue > reviews.length - 1) {
        currentValue = 0; 
    }

    setStuff(currentValue); 
}

function setStuff(value) {
    const review = reviews[value];
    image.src = review.img; 
    name.textContent = review.name; 
    job.textContent = review.job; 
    info.textContent = review.text;
}