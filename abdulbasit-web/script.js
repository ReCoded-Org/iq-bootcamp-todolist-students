const input = document.querySelector("#input-task");
const btnAdd = document.querySelector("#btn-add");
const btnDelete = document.querySelector("i.delete");
const ul = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-counter");
const datePicker = document.querySelector("#date-picker");
const setPriority = document.querySelector("#set-priority");


let todoArr = JSON.parse(localStorage.getItem("tasks"))||[];

//empty task list  warning text
if(todoArr.length==0){
  const h3 = document.createElement("h3");
  h3.innerHTML =`<h3 class="text-center ">You don't have any task <i class="fas fa-smile text-pink"></i></h3>`;
  ul.appendChild(h3);
}

//count tasks
taskCount.textContent = todoArr.length;



//add item to array
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  
  const todo = input.value;
  const deadline = datePicker.value;
  const priorityValue = setPriority.value;
//  if(Date.parse(deadline)>Date.parse(new Date())){
//    console.log("sdvsgh");
//  }

  //check if input is empty
  if (todo.length > 0) {   
    addItemToArray(todo , deadline , priorityValue);
    createElement(todoArr[0].todo,todoArr[0].deadline,todoArr[0].priorityValue);
  }
  //add priority 
  addPriority(priorityValue);

});



document.addEventListener("DOMContentLoaded" , ()=>{
  let reversedArr=todoArr.reverse();
  for (let todoItem of reversedArr){
    createElement( todoItem.todo,todoItem.deadline,todoItem.priorityValue)
  }
});






function createElement(todo,deadline,priorityValue){
    ul.insertAdjacentHTML("afterbegin" , `
    <li class="list-group-item my-2 rounded-pill pb-1 ">
    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center ">
            <i class="far fa-circle mr-3 pointer"  onClick="doneTask(this)"></i>
            <p class="m-0">${todo}</p>
        </div>
        <div class="icon">
        <i class="far fa-trash-alt text-danger   ml-3 pointer" onClick="deleteTask(this)"></i>
        </div>
    </div>
    <small class="mb-1 pl-3 ml-3 text-muted ">${deadline}</small>
    <small class="mb-1 pl-3 ml-3 text-mute " id="priority-value">${priorityValue}</small></li>`);

    //empty the input field
    input.value = "";
}




function addItemToArray(todo , deadline , priorityValue){
  let arrObj = {
    todo:todo,
    deadline:deadline,
    priorityValue:priorityValue
  };

  todoArr.unshift(arrObj);
  localStorage.setItem("tasks" , JSON.stringify(todoArr));
}


//delete item from array and DOM
function deleteTask(x){
  let listItem = x.closest("li");
  let paragraph = document.querySelector("p")
  for(let todoItem of todoArr){
    if(todoItem.todo == paragraph.innerText){
      let index = todoArr.indexOf(todoItem);
      todoArr.splice(index,1);
      listItem.remove();
    
    }
  }
  localStorage.setItem("tasks" , JSON.stringify(todoArr));
  window.location.reload();
}


//complete task
function doneTask(x){
  let li = x.closest("li"); 
  li.classList.toggle("done");
  x.classList.toggle("text-success");
  x.classList.toggle("fas");
  x.parentElement.lastChild.previousElementSibling.classList.toggle("p")
}



//add priority
function addPriority(priorityValue){
  setPriority.addEventListener("change" , ()=>{
    if(priorityValue==="High Priority"){
      // document.querySelector("#priority-value").classList.add("text-danger");
    }
    // console.log(priorityValue);
    
  })
}














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

time.textContent = `${date.getUTCHours()+3}:${date.getUTCMinutes()}`
day.textContent = `${days[date.getDay()]}, ${date.getDate()}th`;
month.textContent = `${monthNames[date.getMonth()]}`;

const toda = new Date();
const tomorrow = new Date(toda);
tomorrow.setDate(tomorrow.getDate() + 1)
console.log(tomorrow);



//Jquery 
$(document).ready(function () {
  $(input).hide();
  $(datePicker).hide();
  $(setPriority).hide();
  $(btnAdd).click(() => {
    $("ul>h3").fadeOut("fast");
    $(input).fadeToggle("slow");
    $(datePicker).fadeToggle("slow");
    $(setPriority).fadeToggle("slow")
  });
});


//set min value for datepicker
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












