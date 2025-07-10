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
}

function addItem(event) {
    event.preventDefault();
    const value = input.value; 
    const id = new Date().getTime().toString();
    
    if (value !== "" && !editFlag) { //not editing
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
        displayAlert('item added', 'success');
        container.classList.add('show-container');

        addToLocalStorage(id,value);
        setBackToDefault();
            
    } else if (value !== "" && editFlag) {
        console.log("editing old stuff");
    } else {
        console.log("input is empty");
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
    console.log('edit button');
    
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
    // console.log('added to local storage', id, value);
}

function removeFromLocalStorage(id) {

}
// ****** SETUP ITEMS **********