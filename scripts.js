function addTask() {
    var taskInput = document.getElementById("taskInput").value;
        if (taskInput.trim() !== '') {
    var taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerText = taskInput;
    taskElement.draggable = true;
    taskElement.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", taskInput);
    });
    
    var todoColumn = document.getElementById("todo");
    todoColumn.appendChild(taskElement);
    
    document.getElementById("taskInput").value = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var taskInput = event.dataTransfer.getData("text/plain");
    var taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerText = taskInput;
    taskElement.draggable = true;
    taskElement.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", taskInput);
    });
    event.target.appendChild(taskElement);
}

function toggleTaskStatus(event) {
    var taskElement = event.target;
    taskElement.classList.toggle("completed");
}
