
class Task {

    constructor(description, deadline, priority, isDone = false) {
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.isDone = isDone;
    }
}

const myTasksArr = [];

let todayDate = new Date();

document.getElementById('today-date').innerHTML = todayDate.getDate() + "/" + (todayDate.getMonth() + 1) + "/" + todayDate.getFullYear();
let deadlineInput = document.getElementById('deadline');
deadlineInput.min = todayDate.toISOString().split('T')[0]; //to split the date from time, you cant choose previos date
console.log(todayDate.toLocaleDateString('en-US', {
    
    month : 'short',
    day : 'numeric',
    year : 'numeric'
}));

// document.getElementsByClassName('add-task')[0].addEventListener('click', function (event) {
// event.preventDefault();

function addTask(event) {

    let todo = document.getElementById('todo').value;
    let deadline = document.getElementById('deadline').value;
    let priority = document.getElementById('priority').value;
    if (todo === '' || deadline === '') {
        alert('Please enter date and todo')
        return;

    }

    const task = new Task(todo, deadline, priority);

    myTasksArr.push(task);
    redrawEverything();

}


function redrawEverything() {
    localStorage.setItem('myTasks',JSON.stringify(myTasksArr));

    const oldTask = document.querySelectorAll('#todo-tasks div');

    for (let i = 0; i < oldTask.length; i++) {
        oldTask[i].remove();
    }



    for (let i = 0; i < myTasksArr.length; i++) {
        const task = myTasksArr[i];
        const done = task.isDone;
        const classDone = done ? 'del' : '';
        const checkBox = done ? 'checked' : '';
        const myTask = document.createElement('div');
        myTask.innerHTML =
            ` <div class="input-group-text bg-info ">
           <div class="container ">
           <div class="row align-items-center">
             <div class="col m-0 "><input  type="checkbox" onclick="makeDone(${i})" aria-label="Checkbox for following text input" ${checkBox}></div>
             <div class="col-md-3 text-left text-white"> <div class="${classDone}">${task.description}</div> <div>${task.deadline},${task.priority}</div></div>
             <div class="col offset-md-8 text-danger "><i class="fas fa-trash " onclick="deleteItem(${i})"></i></div>
           </div>
       </div>
       </div>`;
           
       
       console.log(todayDate);
       console.log(new Date(task.deadline));
       
       
       if (new Date(task.deadline) < todayDate) {
        myTask.innerHTML =
            ` <div class="input-group-text bg-info ">
           <div class="container ">
           <div class="row align-items-center">
             <div class="col m-0 "><input  type="checkbox" onclick="makeDone(${i})" aria-label="Checkbox for following text input" ${checkBox}></div>
             <div class="col-md-3 text-left text-white"> <div class="${classDone} bg-danger" >${task.description}</div> <div>${task.deadline},${task.priority}</div></div>
             <div class="col offset-md-8 text-danger "><i class="fas fa-trash " onclick="deleteItem(${i})"></i></div>
           </div>
       </div>
       </div>`;
           
       } 
 

        document.getElementById('todo-tasks').appendChild(myTask);

        document.getElementById('no-task').style.display = 'none';
        document.getElementById('todo').value = '';
        document.getElementById('deadline').value = '';
        document.getElementById('todo').placeholder = 'Add Todo';

        

    }

}
function makeDone(i) {
    myTasksArr[i].isDone = !myTasksArr[i].isDone;

    redrawEverything();
}
function deleteItem(i){
    myTasksArr.splice(i,1);
    redrawEverything();

}



myTasksArr.push(...JSON.parse(localStorage.getItem('myTasks')));
redrawEverything();

