// Query Selectors
const appendItem = document.getElementById("to-do-list-container");

// Event Listeners
appendItem.addEventListener("click", newTask());

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
   const items = document.querySelectorAll('li input[type="checkbox"]:checked');
   items.forEach(element => {
      const listItem = element.closest('li');
      listItem.remove();
   })
}

function deleteAllTasks() {   
   const items = document.querySelectorAll('li input[type="checkbox"]');
   items.forEach(element => {
      const listItem = element.closest('li');
      listItem.remove();
   })
}