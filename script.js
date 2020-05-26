// Elements selection
const dateToday = document.getElementById('date');
const today = new Date();
const list = document.getElementById('list');
const input = document.getElementById('textInput');
const button = document.getElementById('button');
const deadlinedate = document.getElementById('deadline');
const priorityval = document.getElementById('priority');
const clear = document.getElementById('clear');

// Check unCheck
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get items from local storage
let data = localStorage.getItem("TODO")
if (data){
    LIST =JSON.parse(data)
    id = LIST.length;
    loadList(LIST)
} else {
    LIST = [];
    id = 0;
}

// Show items to the user
function loadList(arr){
    arr.forEach(function(item){
        addToDo(item.name, item.deadline, item.priority, item.id, item.done, item.trash)
    });
}
// clear all items
clear.addEventListener('click', removeAll);
function removeAll(){
    localStorage.clear();
    location.reload();
}

// Show header date
options = {weekday : 'long', month : 'short', day : 'numeric'}

dateToday.innerHTML = today.toLocaleDateString('en-US', options)

// format date
document.addEventListener('DOMContentLoaded', datepicker);
function datepicker() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
}

// priority selector
document.addEventListener('DOMContentLoaded', priority);
function priority() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
}
// check overdue

// Add todo function
function addToDo(toDo, deadline, priority, id, done, trash){

    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const dueDate = new Date(deadline);
    const overDue = today >= dueDate;
    if (overDue){
    const item = `<li class="item">
                    <i class="fas ${DONE} com" job="complete" id="${id}"></i>
                    <p class="text red-color ${LINE}">${toDo} ${deadline} ${priority}</p>
                    <i class="fas fa-trash rem" job="remove" id="${id}"></i>
                  </li>
                  `;
    const position = 'beforeend';

    list.insertAdjacentHTML(position, item);
    } else {
        const item = `<li class="item">
                    <i class="fas ${DONE} com" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo} ${deadline} ${priority}</p>
                    <i class="fas fa-trash rem" job="remove" id="${id}"></i>
                  </li>
                  `;
    const position = 'beforeend';

    list.insertAdjacentHTML(position, item);
    }
    
}
// add toDo button
button.addEventListener('click', submit);

function submit(event) {
    const toDo = input.value
    const deadline = deadlinedate.value
    const priority = priorityval.value
    if (input.value === "" || deadlinedate.value === ""){
        alert("Add a ToDo & deadline")
    } else if (toDo){
        addToDo(toDo, deadline, priority, id, false, false);

        LIST.push({
            name: toDo,
            deadline : deadline,
            priority : priority,
            id : id,
            done : false,
            trash : false
        });
        // add to local storage
        localStorage.setItem("TODO", JSON.stringify(LIST))
        id++
    }
    input.value = ""
    deadlinedate.value = ""
}
// Check and Uncheck toDo
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}
// remove toDo
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}
// check if it was complete or remove
list.addEventListener('click', check);

function check(event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob == "complete"){
        completeToDo(element);
    } else if (elementJob == "remove"){
        removeToDo(element);
    }

    // add to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST))
}