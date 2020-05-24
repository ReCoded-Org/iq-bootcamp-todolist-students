let makeTodo = document.querySelector(".new"),
  input = document.querySelector(".input"),
  ul = document.querySelector("ul"),
  todoInput = document.querySelector(".todo-input"),
  cancel = document.querySelector(".cancel"),
  ok = document.querySelector(".ok"),
  date = document.querySelector(".date"),
  today = new Date().toLocaleDateString();

date.textContent = today;

cancel.addEventListener("click", function (e) {
  e.preventDefault();
  input.classList.add("hide");
  makeTodo.classList.remove("hide");
  todoInput.value = "";
});
//select date

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, options);
});

makeTodo.addEventListener("click", function (e) {
  e.preventDefault();
  input.classList.remove("hide");
  makeTodo.classList.add("hide");
});

ok.addEventListener("click", function (e) {
  if (todoInput.value != "") {
    e.preventDefault();
    const li = document.createElement("li");

    const doneBtn = document.createElement("input");
    doneBtn.type = "checkbox";
    doneBtn.classList.add("done");

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = todoInput.value;

    const delBtn = document.createElement("div");
    delBtn.classList.add("del");

    ul.appendChild(li).append(doneBtn, text, delBtn);
    letsDone(doneBtn);
    listenDeleteTodo(delBtn);

    makeTodo.classList.remove("hide");
    input.classList.add("hide");
    todoInput.value = "";
  }
});

function letsDone(element) {
  element.addEventListener("click", function () {
    if (
      element.parentElement.children[1].style.textDecoration != "line-through"
    ) {
      element.parentElement.children[1].style.textDecoration = "line-through";
    } else {
      element.parentElement.children[1].style.textDecoration = "";
    }
  });
}

function listenDeleteTodo(element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    element.parentElement.remove();
  });
}

let body = document.querySelector("body"),
  backgrounds = ["white"],
  dot = document.querySelectorAll(".dot");

body.style.backgroundColor = backgrounds[0];
dot[0].classList.add("dot-active");

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", function () {
    for (let j = 0; j < dot.length; j++) {
      dot[j].classList.remove("dot-active");
    }
    dot[i].classList.add("dot-active");
    body.style.backgroundColor = backgrounds[i];
  });
}
