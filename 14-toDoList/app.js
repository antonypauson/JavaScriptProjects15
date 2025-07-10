// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector('.grocery-form');
const input = document.getElementById("grocery"); //grocery is input
const submitButton = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearButton = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearButton.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setupItems);


// ****** FUNCTIONS **********
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    
    if (items.length > 0) {
        items.forEach((each) => {
            list.removeChild(each); //opposite of append child
        })
    }
    
    container.classList.remove('show-container');
    displayAlert("CLEARED ALL", "danger");
    setBackToDefault();
    localStorage.removeItem('list');
    
}

function addItem(event) {
    event.preventDefault();
    const value = input.value; 
    const id = new Date().getTime().toString();
    
    if (value !== "" && !editFlag) { //not editing
        createArticle(id, value);
        displayAlert('item added', 'success');
        container.classList.add('show-container');

        addToLocalStorage(id,value);
        setBackToDefault();
            
    } else if (value !== "" && editFlag) {
        editElement.textContent = value; 
        displayAlert('item edited', 'success');
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("EMTPY INPUT", "danger");
    }
}

function deleteItem(event) {
    const article = event.currentTarget.parentElement.parentElement; 
    const id = article.dataset.id;
    

    list.removeChild(article);
    displayAlert("item removed", 'danger');
    removeFromLocalStorage(id);
    
    const items = document.querySelectorAll(".grocery-item");
    if (items.length === 0) {
        clearItems();
    }

}

function editItem(event) {
    const article = event.currentTarget.parentElement.parentElement; 
    editElement = event.currentTarget.parentElement.previousElementSibling; //p tag
    input.value = editElement.textContent; //formil ptag value
    editFlag = true; 
    editID = article.dataset.id; 
    submitButton.textContent = 'Edit';
}

function setBackToDefault() {
    input.value = '';
    editFlag = false; 
    editID = "";
    submitButton.textContent = 'submit'; 
}
 
//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(function() {
    alert.textContent = ''; 
    alert.classList.remove(`alert-${action}`)
    }, 1200);
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const obj = {id, value};
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")): [];
    items.push(obj);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    items = items.filter((item) => {if (item.id !== id) return item});
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    items = items.map((item) => {
        if (item.id === id) {item.value = value}
        return item; 
    });
    localStorage.setItem("list", JSON.stringify(items)); 
}
// ****** SETUP ITEMS **********
// localStorage.setItem("orange", JSON.stringify(["first", "second"]));

// const oranges = JSON.parse(localStorage.getItem("orange"));

// console.log(oranges);

function setupItems() {
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem('list')):[];
    
    if (items.length > 0) {
        items.forEach((each) => {
            createArticle(each.id, each.value);
        })
        container.classList.add('show-container');
        
    }
}

function createArticle(id, value) {
    const article = document.createElement("article");
    article.classList.add("grocery-item");
    const dataId = document.createAttribute("data-id");
    dataId.value = id;
    article.setAttributeNode(dataId);
    article.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn" type="button">
            <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" type="button">
            <i class="fas fa-trash"></i>
            </button>
        </div>`;

    const deleteButton = article.querySelector(".delete-btn");
    const editButton = article.querySelector(".edit-btn");
    
    deleteButton.addEventListener("click", deleteItem);
    editButton.addEventListener("click", editItem);
    
    list.appendChild(article);
}