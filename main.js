const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function createTask() {
  const taskText = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  taskList.append(newTask);
  taskInput.value = "";
});

taskList.addEventListener(
  "click",
  function checkTask(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("completed");
    }
  }
);
