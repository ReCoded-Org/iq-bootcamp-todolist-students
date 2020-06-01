// Elements selection
const dateToday = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('textInput');
const button = document.getElementById('button');
const deadlinedate = document.getElementById('deadline');
const priorityval = document.getElementById('priority');
const clear = document.getElementById('clear');
const today = new Date();

// CSS added if JS is added
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// Show header date
options = { weekday: 'long', month: 'short', day: 'numeric' }
dateToday.innerHTML = today.toLocaleDateString('en-US', options)
// Event listeners
// format date of deadline
document.addEventListener('DOMContentLoaded', datepicker);

// priority selector
document.addEventListener('DOMContentLoaded', priority);

// add toDo button
button.addEventListener('click', submit);

// check if it was complete or remove
list.addEventListener('click', check);

// clear all items
clear.addEventListener('click', removeAll);

// Functions

function datepicker() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, { minDate: new Date() });
}

function priority() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
}

// Add todo function
function addToDo(toDo, deadline, priority, id, done, trash) {

    if (trash) { return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const dueDate = new Date(deadline);
    const overDue = today >= dueDate;
    if (overDue) {
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

function submit() {
    const toDo = input.value
    const deadline = deadlinedate.value
    const priority = priorityval.value
    if (input.value === "" || deadlinedate.value === "") {
        alert("Add a ToDo & deadline")
    } else if (toDo) {
        addToDo(toDo, deadline, priority, id, false, false);

        LIST.push({
            name: toDo,
            deadline: deadline,
            priority: priority,
            id: id,
            done: false,
            trash: false
        });
        // add to local storage
        localStorage.setItem("TODO", JSON.stringify(LIST))
        id++
    }
    input.value = ""
    deadlinedate.value = ""
}

// Check and Uncheck toDo
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove toDo
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// check overdue
function check(event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "remove") {
        removeToDo(element);
    }

    // add to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST))
}
// localStorage
// Show items to the user
function loadList(arr) {
    arr.forEach(function (item) {
        addToDo(item.name, item.deadline, item.priority, item.id, item.done, item.trash)
    });
}

function removeAll() {
    localStorage.clear();
    location.reload();
}
// get items from local storage
let data = localStorage.getItem("TODO")
if (data) {
    LIST = JSON.parse(data)
    id = LIST.length;
    loadList(LIST)
} else {
    LIST = [];
    id = 0;
}
