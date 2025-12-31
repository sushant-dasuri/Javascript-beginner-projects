let todoInput = document.querySelector(".todoInput");
let addTask = document.querySelector(".addButton");
let todoList = document.querySelector("#todoList");
let errorDiv = document.querySelector(".errorDiv");
let taskParent = document.querySelector(".row");


addTask.addEventListener("click", function (event) {
  event.preventDefault();
  if (todoInput.value === "") {
    taskParent.classList.add("inputError");
    errorDiv.style.display = "block";
    todoList.classList.add("errorText");
  } else {
    taskParent.classList.remove("inputError");
    todoList.classList.remove("errorText");
    errorDiv.style.display = "none";
   
    let li = document.createElement("li");
let span = document.createElement("span");
    li.innerText = todoInput.value;
    todoList.appendChild(li);
    span.innerHTML = "\u00D7";
    span.className = "closeButton";
    li.appendChild(span);
  }
  todoInput.value = "";
  saveData();
});

todoList.addEventListener("click", function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
         saveData();
    }

    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
         saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("Data", todoList.innerHTML);
}

function showTasks() {
    todoList.innerHTML = localStorage.getItem("Data");
}

showTasks();