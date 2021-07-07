


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

const currentDate = new Date();
let isEditMode = false;
let editItemIndex = 0;

const dateH1 = document.getElementById('current-date');
// Display the current date
dateH1.innerHTML = monthsNames[currentDate.getMonth()] + ' ' + currentDate.getDate();



const taskForm = document.getElementById('task-form');
const showFormButton = document.getElementById('show-form-button');


const descriptionInput = document.getElementById('description');
const deadlineInput = document.getElementById('deadline');
const prioritySelector = document.getElementById('priority-selector');

// init the date picker
const elems = document.querySelectorAll('.datepicker');
const instances = M.Datepicker.init(elems, {
    autoClose: true,
    minDate: new Date(),
    format: 'mmm dd, yyyy',
    onSelect: function (selectedDate) {
        console.log(selectedDate);
    }
});







function showForm() {
    taskForm.classList.remove('hide');
    showFormButton.style.display = 'none';
}

function hideForm() {
    taskForm.classList.add('hide');
    showFormButton.style.display = 'block';
    descriptionInput.value = '';
    deadlineInput.value = '';
    prioritySelector.value = 1;
    isEditMode = false;


}


function addTask(event) {
    const description = descriptionInput.value;
    const deadline = deadlineInput.value;
    const priority = prioritySelector.value;
    if (description === '' || deadline === '') {
        alert('Make sure to fill all of the fields');
        return;
    }



    // Delete the old item if edit is enabled
    if (isEditMode) {
        tasksArray.splice(editItemIndex, 1);
    }
    // Adding the new task to its correct timeline position 
    let lastTime = -1;
    const newTask = { description: description, deadline: deadline, done: false, priority: priority }
    const newTaskTime = (new Date(deadline)).getTime();

    // For the first ever task to be added
    if (tasksArray.length === 0) {
        tasksArray.push(newTask);
    } else {
        for (let i = 0; i < tasksArray.length; i++) {
            const taskObject = tasksArray[i];
            const taskTime = (new Date(taskObject.deadline)).getTime();

            if (lastTime < newTaskTime && taskTime > newTaskTime) {

                tasksArray.splice(i, 0, newTask);
                break;
            } else if (i === tasksArray.length - 1) {
                tasksArray.push(newTask);
                break;

            }


        }
    }


    saveToStorage();
    drawArray();
}



function editTask(i) {
    showForm();
    const taskObject = tasksArray[i];

    descriptionInput.value = taskObject.description;
    deadlineInput.value = taskObject.deadline;
    prioritySelector.value = taskObject.priority;
    isEditMode = true;
    editItemIndex = i;

}

function drawArray() {

    // Select and delete the old tasks form dom 
    const oldTasks = document.querySelectorAll('#tasks-list *');
    for (let i = 0; i < oldTasks.length; i++) {
        oldTasks[i].remove();
    }

    // Rendering all the tasks to the dom 
    for (let i = 0; i < tasksArray.length; i++) {
        const taskObject = tasksArray[i];
        const description = taskObject.description;
        const deadline = taskObject.deadline;
        const priority = taskObject.priority;

        const task = document.createElement('li');
        const lineThrough = taskObject.done ? 'line-through' : '';
        const checked = taskObject.done ? 'checked' : '';

        const isInThePast = (new Date(taskObject.deadline)).getTime() < currentDate.getTime();
        const backgroundColor = isInThePast ? 'red lighten-4 padding s1 rounded-corners' : '';
        const priorityStyles = { '1': 'red-text', '2': 'yellow-text text-darken-2', '3': 'green-text text-accent-2' }
        const priorityStyle = priorityStyles[priority.toString()]
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
            <div class="col right-align right"><i class="small material-icons " onclick="editTask(${i})">edit</i> </div>

           
            
            </div>`;
        let tasksList = document.getElementById('tasks-list');
        tasksList.appendChild(task);

    }


    hideForm();
    showHideMessage();

}
function saveToStorage() {
    localStorage.setItem('myTasks', JSON.stringify(tasksArray));

}
function showHideMessage() {
    if (tasksArray.length === 0) {
        document.getElementById('no-tasks-message').style.display = 'block';

    } else {
        document.getElementById('no-tasks-message').style.display = 'none';

    }
}
function changeState(i) {
    console.log(i);
    console.log(tasksArray[i].done);

    const taskObject = tasksArray[i];
    taskObject.done = !taskObject.done;

    saveToStorage();
    drawArray();

}
function removeTask(i) {
    tasksArray.splice(i, 1);
    saveToStorage();

    drawArray();
}



if (Array.isArray(JSON.parse(localStorage.getItem('myTasks')))) {

    tasksArray.push(...JSON.parse(localStorage.getItem('myTasks')));
    drawArray();
}
