document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create li element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Onclick to remove the li
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for add button
  addButton.addEventListener("click", addTask);

  // Event listener for Enter key in input
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
