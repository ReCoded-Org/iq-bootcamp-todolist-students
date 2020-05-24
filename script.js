// Elements selection
const dateToday = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('textInput');
const button = document.getElementById('button');
const deadlinedate = document.getElementById('deadline')
const priorityval = document.getElementById('priority')

// Check unCheck
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";
// Variables
let LIST = []
    , id = 0;
// Show date
const today = new Date();
options = {weekday : 'long', month : 'short', day : 'numeric'}

dateToday.innerHTML = today.toLocaleDateString('en-US', options)

// Add todo function
function addToDo(toDo, deadline, priority, id, done, trash){

    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fas ${DONE} com" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo} ${deadline} ${priority}</p>
                    <i class="fas fa-trash rem" job="remove" id="${id}"></i>
                  </li>
                  `;
    
    const position = 'beforeend';

    list.insertAdjacentHTML(position, item);
}

button.addEventListener('click', function(event) {
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

        id++
    }
    input.value = ""
    deadlinedate.value = ""
});

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

list.addEventListener('click', function(event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob == "complete"){
        completeToDo(element);
    } else if (elementJob == "remove"){
        removeToDo(element);
    }
})