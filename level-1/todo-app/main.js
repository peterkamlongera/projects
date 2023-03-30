// Query Selectors
const input = document.getElementById("to-do-task");
const addItem = document.getElementById("to-do-list");
const appendItem = document.getElementById("to-do-list-container");
const removeItem = document.getElementById("to-do-list-item");
const deleteItem = document.deleteItem("li")

// Event Listeners
addItem.addEventListener("click", newTask());
appendItem.addEventListener("click", newTask());
removeItem.addEventListener("click", removeTask());

// OnClick Functions
function newTask() {
   var newListItem = document.createElement("li")
   newListItem.innerText = input.value;
   appendItem.appendChild(newListItem);
}

function deleteTask() {
   deleteItem
}