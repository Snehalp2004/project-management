// Function to add a task to the task list
function addTask(task, assignedTo) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.textContent = `Task: ${task} (Assigned to: ${assignedTo})`;
    taskList.appendChild(taskItem);
}

// Event listener for assigning a task
document.getElementById("assign-task").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input");
    const assignTo = document.getElementById("assign-to");
    const task = taskInput.value;
    const assignedTo = assignTo.value;

    if (task && assignedTo) {
        addTask(task, assignedTo);
        // Clear input fields
        taskInput.value = "";
        assignTo.value = "";
    }
});

// Add user (Placeholder for further implementation)
document.getElementById("user-list").addEventListener("click", function () {
    alert("User selected (Placeholder).");
});
