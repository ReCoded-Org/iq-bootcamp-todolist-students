let todo = [];
let ulList = document.getElementById("list");
document.addEventListener("DOMContentLoaded", function () {
  todo = JSON.parse(localStorage.getItem("todoList")) ?? [];
  renderTodos();
});

function renderTodos() {
  ulList.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    taskList = todo[i];
    addTask(taskList);
  }
}

function Today() {
  let dateH1 = document.getElementById("header");
  let todayH1 = document.getElementById("today");
  let updatedDate = new Date();
  let day = String(updatedDate.getDate()).padStart(2, "0");
  console.log(day);
  let month = String(updatedDate.getMonth() + 1).padStart(2, "0");
  let year = updatedDate.getFullYear();
  updatedDate = month + "/" + day + "/" + year;
  todayH1.innerText = updatedDate;
}
Today();
const form = document.getElementById("task-form");
let taskList;

function intializeTask() {
  let todos = {
    id: Date.now(),
    task: document.getElementById("todo-input").value,
    deadline: document.getElementById("todo-deadline").value,
    priorty: document.getElementById("Priorties").value,
  };

  todo.push(todos);
  // local storage
  localStorage.setItem("todoList", JSON.stringify(todo));

  renderTodos();
}

function addTask(taskItem) {
  let updatedDate = new Date();
  let day = String(updatedDate.getDate()).padStart(2, "0");
  let month = String(updatedDate.getMonth() + 1).padStart(2, "0");
  let year = updatedDate.getFullYear();
  updatedDate = `${year}-${month}-${day}`;

  let emptyStatus = document.getElementById("no-tasks");
  let listItem = document.createElement("li");
  let checker = document.createElement("input");
  let deadlineView = document.createElement("p");
  let priortyView = document.createElement("p");
  let deleteBtn = document.createElement("button");
  let deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  deleteBtn.setAttribute("key", taskItem.id);

  checker.type = "checkbox";
  checker.value = 1;

  ulList.appendChild(listItem);

  listItem.innerHTML = taskItem.task;
  if (listItem !== "") {
    emptyStatus.style.display = "none";
  }

  if (taskItem.deadline !== updatedDate) {
    deadlineView.style.backgroundColor = "red";
  }
  deadlineView.innerHTML = taskItem.deadline;

  if (taskItem.priorty === "high priorty") {
    priortyView.style.color = "red";
  } else if (taskItem.priorty === "med priorty") {
    priortyView.style.color = "orange";
  } else {
    priortyView.style.color = "green";
  }
  priortyView.innerText = taskItem.priorty;

  listItem.appendChild(deadlineView);
  listItem.appendChild(priortyView);
  listItem.appendChild(checker);
  deleteBtn.appendChild(deleteIcon);
  listItem.appendChild(deleteBtn);
  listItem.style.listStyle = "none";
  function taskChecker() {
    checker.addEventListener("change", function (e) {
      if (checker.checked) {
        listItem.style.textDecoration = "line-through";
      } else {
        listItem.style.textDecoration = "none";
      }
    });
  }
  taskChecker();
  function taskRemover() {
    deleteBtn.addEventListener("click", function () {});
  }
  taskRemover();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  intializeTask();
  addTask(taskList);
});
