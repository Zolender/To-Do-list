//creating the necesary variables;
const task = document.getElementById("task");
const list = document.querySelector(".inputContainer .tasksContainer");// since taskContainer is not a direct child of the body
const button = document.getElementById("button");
//creating the add function
function addTask(){
    if(task.value.trim() === ""){
        alert("You need to enter a task first!");
    }else{
        const par = document.createElement('p');
        par.textContent= task.value;
        //giving to par a class name so we could be able to style it later;
        par.classList.add('parag');
        list.appendChild(par);
        task.value = "";
       
        par.addEventListener('click', function(){
            par.style.textDecoration='line-through';
        });
        par.addEventListener('dblclick',function(){
            list.removeChild(par);
        });
        saveTask(par.textContent);
    }
}

// The following functions are for saving and retrieving tasks from localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Retrieve tasks from localStorage and display them
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const par = document.createElement('p');
        par.textContent = task;
        par.classList.add('parag');
        list.appendChild(par);

        par.addEventListener('click', function() {
            par.style.textDecoration = 'line-through';
        });

        par.addEventListener('dblclick', function() {
            list.removeChild(par);
            removeTask(par.textContent); // Remove the task from localStorage
        });
    });
}

// Remove a task from localStorage
function removeTask(taskContent) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskContent); // Filter the tasks
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//calling the loadTasks function
document.addEventListener("DOMContentLoaded", loadTasks);

//Assigning the function to the buttton
button.addEventListener('click', addTask);
