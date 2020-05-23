// inputs
const dateInput = document.getElementById("date-input");
const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority-options");

//checkboxes
const boldCheckbox = document.getElementById("bold-checkbox");
const italicCheckbox = document.getElementById("italic-checkbox");

const dateHeader = document.getElementById("current-date");
let currentDate = moment().format("LL");

const listUl = document.getElementById("list-group");
const htmlLang = document.getElementsByTagName("html")[0].getAttribute("lang");

let todoArray = JSON.parse(localStorage.getItem("tasks")) || [];
//eventListners
document.getElementById("form").addEventListener("submit", addList);
document.addEventListener("DOMContentLoaded", init);
// function
function init() {
  dateInput.setAttribute("min", getCurrentDate());
  dateHeader.innerText = currentDate;
  loadPrivewsTodos();
}

function getCurrentDate() {
  let today = new Date(),
    day = today.getDate(),
    month = today.getMonth() + 1,
    year = today.getFullYear();
  day < 10 ? (day = "0" + day) : day;
  month < 10 ? (month = "0" + month) : month;
  return `${year}-${month}-${day}`;
}

function removeList(item) {
  taskList = item.closest("li");
  let span = document.querySelector("span").innerText;
  itemIndex = getIndexOfTodoArr(span, todoArray);
  todoArray.splice(itemIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(todoArray));
  taskList.remove();
}

function getIndexOfTodoArr(description, array) {
  let itemIndex;
  for (let todo of array) {
    if (todo.description == description.innerText) {
      itemIndex = array.indexOf(todo);
    }
  }
  return itemIndex;
}

function fontStyle(boldBtn, italicBtn) {
  let italic;
  let bold;
  boldBtn.checked ? (bold = "bold") : (bold = "");
  italicBtn.checked ? (italic = "italic") : (italic = "");
  return `${italic} ${bold}`;
}

function addList(e) {
  e.preventDefault();
  addlistToArr(
    taskInput,
    dateInput,
    priorityInput,
    fontStyle(boldCheckbox, italicCheckbox)
  );
  createTodo(
    todoArray[todoArray.length - 1].description,
    todoArray[todoArray.length - 1].deadline,
    todoArray[todoArray.length - 1].priority,
    todoArray[todoArray.length - 1].style
  );

  updateLocalStorage();
  resetInput();
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(todoArray));
}

function addlistToArr(description, deadline, priority, style) {
  todoArray.push({
    description: description.value,
    deadline: moment(deadline.value).format("LL"),
    priority: priority.value,
    style: style,
    completed: false,
  });
}

function resetInput() {
  dateInput.value = null;
  taskInput.value = null;
  boldCheckbox.checked = false;
  italicCheckbox.checked = false;
}

function oldTask(todo, paragraph) {
  if (Date.parse(todo) < Date.parse(currentDate)) {
    paragraph.classList.add("expired-task");
  }
}

function completeTask(btn) {
  let paragraph = btn.closest("li").children[0];
  let description = paragraph.children[0];
  let itemIndex = getIndexOfTodoArr(description, todoArray);
  if (btn.checked == true) {
    todoArray[itemIndex].completed = true;
    paragraph.classList.add("completed");
  } else {
    todoArray[itemIndex].completed = false;
    paragraph.classList.remove("completed");
  }
  updateLocalStorage();
}

function btn_animate() {
  document.querySelector(".submit-btn").classList.add("btn-animate");

  setTimeout(function () {
    document.querySelector(".submit-btn").classList.remove("btn-animate");
  }, 500);
}

function createTodo(description, deadline, priority, style) {
  listUl.insertAdjacentHTML(
    "afterbegin",
    `<li class="list-group-item d-flex list-animate mt-1 justify-content-between align-items-center"> 
      <p  class="${style} m-0 w-75 text-center">
        <span>${description}</span>  &nbsp&nbsp&nbsp&nbsp
        <span>${deadline}</span>  &nbsp&nbsp
        <span>${priority}</span>  
      </p>
      <div>
        <div class="pretty p-jelly p-svg p-curve">
          <input type="checkbox" class="complete-checkboox" onclick=" completeTask(this)">
          <div class="state p-success">
            <svg class="svg svg-icon" viewBox="0 0 20 20">
              <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white; fill: white;"></path>
            </svg>
            <label></label>
          </div>
        </div>
        <button onclick="removeList(this)"  class="btn delete-btn">
          <i class="fa fa-trash text-danger" aria-hidden="true"></i>
        </button>
      </div>
    </li>`
  );
}

function loadPrivewsTodos() {
  for (let todoItem of todoArray) {
    createTodo(
      todoItem.description,
      todoItem.deadline,
      todoItem.priority,
      todoItem.style
    );

    let paragraph = document.querySelector("p");
    let completeChekbox = document.querySelector(".complete-checkboox");
    oldTask(todoItem.deadline, paragraph);
    if (todoItem.completed == true) {
      completeChekbox.checked = true;
      paragraph.classList.add("completed");
    }
    if (todoItem.completed == false) {
      completeChekbox.checked = false;
      paragraph.classList.remove, "completed";
    }
  }
}
