const monthSmall = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let list = document.querySelector("ul")
let list1 = document.querySelector("ul")
list1 = JSON.parse(localStorage.getItem("todo-list")); 
 console.log(list1.innerHTML)
const d = new Date();
const header = document.getElementById("today");
header.innerText = `${
  monthSmall[d.getMonth()]
} ${d.getDate()}, ${d.getFullYear()}`;
const discriptionBtn = document.querySelector("#discription-btn");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
let state = false;
let close = document.getElementsByClassName("close");
let checkbox = document.getElementsByClassName("checkbox");
const addBtn = document.querySelector(".addButton > button");
const discription = document.querySelector(".discription-container");
let priortySection = document.querySelector("#priorty");


openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(
    ".project-discription-container.active"
  );
  document.getElementById("form").reset();
  priortySection.style.backgroundColor = "red";
  modals.forEach((modal) => {
    closeModal(modal);
    discription.classList.remove("active");
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".project-discription-container");
    closeModal(modal);
    discription.classList.remove("active");
    document.getElementById("form").reset();
    priortySection.style.backgroundColor = "red";
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

discriptionBtn.addEventListener("click", function () {
   discription.classList.toggle("active");
});

addBtn.addEventListener("click", () => {
  const li = document.createElement("LI");
  let projectName = document.getElementById("project-name");
  let projectNameNode = document.createElement("small");
  let projectDiscription = document.querySelector(".discription");
  let projectDiscriptionNode = document.createElement("small");
  let deadline = document.querySelector("#deadline");
  let deadlineNode = document.createElement("small");
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  let priorty = document.querySelector("#priorty").value;
  let priortyCheck = document.createElement("div");
  let checkboxDiv = document.createElement("div");
  span.style.fontSize='35px'
  projectNameNode.innerText = projectName.value;
  deadlineNode.innerText = deadline.value;
  projectDiscriptionNode.innerText = projectDiscription.value;
  priortyCheck.classList.add("priorty-check");
  priortyCheck.style.background = priorty;
  let dd = new Date(`${deadlineNode.innerText}`);

  if (dd <= d) {
    projectNameNode.style.padding = "0 1rem";
    projectNameNode.style.borderRadius = "20px";
    projectNameNode.style.backgroundColor = "#DAA520";
  }

  if (projectNameNode.innerText == "" || deadlineNode.innerText == "") {
    alert("please enter a project");
  } else {
    li.appendChild(checkboxDiv);
    li.appendChild(projectNameNode);
    li.appendChild(deadlineNode);
    li.appendChild(priortyCheck);
    list.appendChild(li);
    localStorage.setItem("todo-list", JSON.stringify(list));
    span.className = "close";
    checkboxDiv.className = "checkbox";
    span.appendChild(txt);
    li.appendChild(span);
    document.getElementById("form").reset();
    priortySection.style.backgroundColor = "red";
    localStorage.setItem("my_colors", JSON.stringify(list));
  }
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let parentDiv = this.parentElement.parentElement;
      let div = this.parentElement;
      div.remove();
      localStorage.setItem("todo-list", JSON.stringify(parentDiv));
      console.log(parentDiv)
    };
  }

  for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = function () {
      //let parentDiv = this.parentElement;
      let div = this.parentElement.childNodes;
      div[0].classList.toggle("checked");
      div[1].classList.toggle("checked");
      div[2].classList.toggle("checked");
    };
  }
});
function changeBackgound() {
  priortySection.style.backgroundColor = document.querySelector(
    "#priorty"
  ).value;
}
// I used vazhin's code to format the date
$(document).ready(function () {
    var date_input = $('input[name="date"]');
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

    date_input.datepicker({
        startDate: today,
        format: 'MM dd, yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})
