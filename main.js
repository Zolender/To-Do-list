//creating the necesary variables;
const task = document.getElementById("task");
const list = document.querySelector(".inputContainer .tasksContainer");// since taskContainer is not a direct child of the body
const button = document.getElementById("button");
//creating the add function
function addTask(){
    if(task.value.trim() === ""){
        alert("You need to enter a task first!");
    }else{
        var par = document.createElement('p');
        par.textContent= task.value;
        //giving to par a class name so we could be able to style it later;
        par.classList.add('parag');
        list.appendChild(par);
        task.value = "";
    }
}




//creating a save function
function dataSave(){
    const savedData = localStorage.getItem("data");
    if (savedData) {
        list.innerHTML = savedData;
         // Add event listeners to the paragraph elements
        const paragraphs = list.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.addEventListener('click', function(){
                paragraph.style.textDecoration = 'line-through';
            });
        }
    )}
}

//Running datasave while loading the page, note
document.addEventListener("DOMContentLoaded", dataSave);



//Assigning the function to the buttton
button.addEventListener('click', addTask);