//set today's date
const date = document.getElementById("date");
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);
/*var d = new Date();
var n = d.toLocaleString();
document.getElementById("date").innerHTML = n;
*/
//end of today's date
/*class="input"
class="btn"
class="task-content"
class="todo-list"
class="no-Msg"*/
let input = document.querySelector(".formContent .input");
let theButton = document.querySelector(".formContent .btn");
let todoList = document.querySelector(".todo-list");
let deadline = document.querySelector(".date2");

//after loading the input should be foucsed
window.onload = function () {
  input.focus();
};
todoList.addEventListener("click", deleteBtn);
theButton.onclick = function () {
  // If our input is Empty
  if (input.value === "") {
    console.log("No Value");
  } else {
    let noMsg = document.querySelector(".no-Msg");

    if (document.body.contains(document.querySelector(".no-Msg"))) {
      noMsg.remove();
    }

    //creating div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //creating li
    let taskItem = document.createElement("li");
    //taskItem.innerHTML = input.value;
    let text = document.createTextNode(input.value);
    //let deadLine = document.createTextNode(deadline.value);
    taskItem.appendChild(text);
    //taskItem.appendChild(deadLine);
    taskItem.classList.add("task-item");
    todoDiv.appendChild(taskItem);

    //creating check the task
    let completeBtton = document.createElement("button");
    completeBtton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completeBtton.classList.add("complete-btn");
    todoDiv.appendChild(completeBtton);
    //creating delete the task
    let deleteElement = document.createElement("button");
    deleteElement.innerHTML = '<i class="fa fa-trash" ></i>';
    deleteElement.classList.add("delete-btn");
    todoDiv.appendChild(deleteElement);
    todoList.appendChild(todoDiv);
    input.value = "";
    input.focus();
  }
};
function deleteBtn(e) {
  const t = e.target;
  if (t.classList[0] === "delete-btn") {
    const todo = t.parentElement;
    todo.remove();
  }
}
