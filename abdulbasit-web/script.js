const input = document.querySelector("#input-task");
const btnAdd = document.querySelector("#btn-add");
const btnDelete = document.querySelector(".fa-trash-alt");
const ul = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-counter");
const datePicker = document.querySelector("#date-picker");
// console.log(datePicker.value);

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const todo = input.value;
  const deadline = datePicker.value;
  //check if input is empty
  if (todo.length > 0) {
    const task = document.createElement("li");
    task.className = 
      "list-group-item my-2 rounded-pill";
    task.id = "task";
    task.innerHTML = `<div class="d-flex justify-content-between align-items-center ">
        <div class="d-flex align-items-center ">
            <i class="far fa-circle mr-3 pointer" ></i>
            <p class="m-0">${todo} .</p>
        </div>
        <div>
            <i  class="far fa-trash-alt text-danger  ml-3 pointer" ></i>
        </div>
    </div>
    <small class="mb-1 pl-3 ml-3 text-muted ">${deadline}</small>`;

    // task.appendChild(btn);
    ul.appendChild(task);

    //clear input after adding
    input.value = "";

    //count tasks
    taskCount.textContent = `${ul.childElementCount}`;
  }

  btnDelete.addEventListener("click", () => {
    document.querySelector(".rounded-pill").remove();
  //   console.log("work");
  
  });
});

//delete task function

//data and time setter
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

time.textContent = `${date.getHours()}:${date.getMinutes()}`;
day.textContent = `${days[date.getDay()]}, ${date.getDate()}th`;
month.textContent = `${monthNames[date.getMonth()]}`;

$(document).ready(function () {
  $(input).hide();
  $(datePicker).hide();
  $(btnAdd).click(() => {
    $(input).fadeIn("slow");
    $(datePicker).fadeIn("slow");
  });
});

//set min for datepicker
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date-picker").setAttribute("min", today);

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());
