// Query Selectors
const input = document.getElementById("to-do-task");
const addItem = document.getElementById("to-do-list");
const appendItem = document.getElementById("to-do-list-container");
const removeItem = document.getElementById("to-do-list-item");

// Event Listeners
addItem.addEventListener("click", newTask());
appendItem.addEventListener("click", newTask());
removeItem.addEventListener("click", removeTask());

// OnClick Functions
function newTask() {
   var newListItem = document.createElement("li");
   newListItem.setAttribute("id", "tdl");
   const listItemCheckbox = document.createElement("input");
   listItemCheckbox.setAttribute("type","checkbox");
   newListItem.innerText = input.value;
   appendItem.appendChild(newListItem).appendChild(listItemCheckbox).setAttribute("id", "checkbox");
}

function deleteTask() {
   var getCheckedItems = document.getElementById("checkbox");
   var listedItems = document.getElementById("tdl");
   console.log(listedItems);

   if (getCheckedItems.checked) {
      listedItems.removeChild(getCheckedItems)
   }
}