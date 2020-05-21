
const priority = [1, 2, 3]
const monthsNames =
    [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

const tasksArray = [];

let currentDate = new Date();

let dateH = document.getElementById('current-date');
dateH.innerHTML = monthsNames[currentDate.getMonth()] + ' ' + currentDate.getDate();
// dateH.innerText = currentDate.getDate() + '/' + (currentDate.getMonth() +1) +'/'+currentDate.getFullYear();

let deadlineInput = document.getElementById('deadline');
let prioritySelector = document.getElementById('priority-selector');

deadlineInput.min = currentDate.toISOString().split('T')[0];

let taskForm = document.getElementById('task-form');
let showFormButton = document.getElementById('show-form-button');


function showForm() {
    taskForm.classList.remove('hide');
    showFormButton.style.display = 'none';
}

function hideForm() {
    taskForm.classList.add('hide');
    showFormButton.style.display = 'block';

}


function addTask(event) {
    let description = document.getElementById('description').value;
    let deadline = deadlineInput.value;
    let priority = prioritySelector.value;
    if (description === '' || deadline === '') {
        alert('Make sure to fill all of the fields');
        return;
    }
    tasksArray.push({ description: description, deadline: deadline, done: false, priority: priority });
    drawArray();
}


function drawArray() {
    localStorage.setItem('myTasks', JSON.stringify(tasksArray));

    const oldTasks = document.querySelectorAll('#tasks-list *');
    for (let i = 0; i < oldTasks.length; i++) {
        oldTasks[i].remove();
    }

    for (let i = 0; i < tasksArray.length; i++) {
        const taskObject = tasksArray[i];
        let description = taskObject.description;
        let deadline = taskObject.deadline;
        let priority = taskObject.priority;

        let task = document.createElement('li');
        let lineThrough = taskObject.done ? 'line-through' : '';
        let checked = taskObject.done ? 'checked' : '';

        let isInThePast = (new Date(taskObject.deadline)).getTime() < currentDate.getTime();
        let backgroundColor = isInThePast?'red lighten-4 padding s1 rounded-corners':'';
        let priorityStyles = {'1':'red-text','2':'yellow-text text-darken-2','3':'green-text text-accent-2'}
        let priorityStyle = priorityStyles[priority.toString()]
        task.innerHTML = `<div class="row block-underline ">
        <div class="col left">
        <div class="valign-wrapper">
        <label class="">
        <input type="checkbox" class="filled-in valign-wrapper"  onclick="changeState(${i})" ${checked} />
        <span></span></label>
            <div class="" ><div class="${lineThrough} ${backgroundColor}">${description}</div>
            <div >${deadline} <span class="${priorityStyle}">Priority ${priority}</span></div>
            </div>
            </div>
            </div>
            <div class="col right-align right"><i class="small material-icons " onclick="removeTask(${i})">delete</i> </div>

           
            
            </div>`;
        let tasksList = document.getElementById('tasks-list');
        tasksList.appendChild(task);
        document.getElementById('deadline').value = '';
        document.getElementById('description').value = '';
        document.getElementById('no-tasks-message').style.display = 'none';
    }
    hideForm();
}

function changeState(i) {
    console.log(i);
    console.log(tasksArray[i].done);

    const taskObject = tasksArray[i];
    taskObject.done = !taskObject.done;


    drawArray();

}
function removeTask(i) {
    tasksArray.splice(i, 1);
    drawArray();
}

let elems = document.querySelectorAll('.datepicker');
let instances = M.Datepicker.init(elems, {
    autoClose: true,
    minDate: new Date(),
    // setDefaultDate: new Date(2000,01,31),
    format: 'mmm dd, yyyy',
    onSelect: function (datee) {
        console.log(datee);

    }
});


document.addEventListener('DOMContentLoaded', function () {
    var elemss = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elemss, {});
});
console.log(localStorage.getItem('myTasks'));
console.log(Array.isArray(localStorage.getItem('myTasks')));

if (Array.isArray(JSON.parse(localStorage.getItem('myTasks')))) {

    tasksArray.push(...JSON.parse(localStorage.getItem('myTasks')));
    drawArray();
}
// localStorage.clear();