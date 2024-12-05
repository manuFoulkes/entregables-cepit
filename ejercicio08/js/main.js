const saveBtn = document.querySelector(".save-btn");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");
let tasks = [];
let idTask = 0;

const saveTask = () => {
    const taskText =  taskInput.value.trim();

    if(taskText === "") {
        alert("Task can't be empty");
        taskInput.value = "";
        return;
    }

    idTask++;
    const task = {idTask, taskText};
    tasks.push(task);
    taskInput.value = "";
}

const showTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        taskList.innerHTML +=
            `<li>
                ${task.taskText}
                <button data-id="${task.idTask}" class="complete-btn">Complete</button>
                <button data-id="${task.idTask}" class="delete-btn">Delete</button> 
            </li>`;
    });
}

const deleteTask = (e) => {
        const button = e.target;
        const id = button.getAttribute("data-id");

        const li = button.parentElement;
        taskList.removeChild(li);

        tasks = tasks.filter(task => task.idTask != id);
}

const completeTask = (e) => {
    const li = e.target.parentElement;
    li.classList.toggle("completed");
}

taskList.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON" && e.target.classList.contains("delete-btn")) {
        deleteTask(e);
    } 

    if(e.target.tagName === "BUTTON" && e.target.classList.contains("complete-btn")) {
        completeTask(e);
    }
});

saveBtn.addEventListener("click", () => {
    saveTask();
    showTasks();
});