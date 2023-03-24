// Selectors
const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// Event listeners
addTaskBtn.addEventListener("click", addTask);
todoList.addEventListener("click", handleListClick);

// Functions
function addTask() {
  // Get the value of the input
  const taskText = newTaskInput.value;

  // Create a new list item
  const newListItem = document.createElement("li");
  newListItem.innerText = taskText;

  // Add a class to the new list item
  newListItem.classList.add("todo-item");

  // Create a checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  // Append the checkbox and the new list item to the todo list
  newListItem.prepend(checkbox);
  todoList.appendChild(newListItem);

  // Clear the input
  newTaskInput.value = "";
}

function handleListClick(event) {
  const clickedElement = event.target;

  // If the clicked element is a checkbox, toggle the class on the parent element
  if (clickedElement.classList.contains("checkbox")) {
    const listItem = clickedElement.parentElement;
    listItem.classList.toggle("completed");
  }

  // If the clicked element is a delete button, remove the parent element from the todo list
  if (clickedElement.classList.contains("delete-btn")) {
    const listItem = clickedElement.parentElement;
    todoList.removeChild(listItem);
  }
}
