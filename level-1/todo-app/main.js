// Query Selectors
const input = document.getElementById("to-do-task");
const addItem = document.getElementById("to-do-list");
const appendItem = document.getElementById("to-do-list-container");
const removeItem = document.getElementById("to-do-list-item");
const newListItem = document.createElement("li")

// let li = document.createElement("li")

// Event Listeners
addItem.addEventListener("click", newTask());
appendItem.addEventListener("click", newTask());
removeItem.addEventListener("click", removeTask());

// OnClick Functions
function newTask() {
   appendItem.appendChild(newListItem);
   newListItem.textContent = input.value;
}

function deleteTask() {

}

