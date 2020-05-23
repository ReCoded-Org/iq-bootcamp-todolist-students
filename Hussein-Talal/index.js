//declaring the variables
const todayDate = document.getElementById('todayDate');
let day = new Date().getDate();
let month = (new Date().getMonth() + 1);
let year = new Date().getFullYear();
const form = document.getElementById('form');
const text = document.getElementById('text');
const priority = document.getElementById('priorityChoose');
const submit = document.getElementById('submit');
const date = document.getElementById('date');
const msg = document.getElementById('msg');
const ul = document.querySelector('ul');

//adding the date to the header

todayDate.textContent = dateFormater(new Date().toDateString().split(" "));
function dateFormater (dateString){
    const dateFormated = dateString[0]+" "+dateString[1]+ " "+dateString[2] +","+dateString[3]
    return dateFormated ;
}

//function to update number of tasks
function updateTaskIndecator(){
    let totalTasks = numberOfTasks-numberOfDeleted;
    const tasksIndecator = document.getElementById('noTasks');
    if(numberOfTasks-numberOfDeleted != 0){
        tasksIndecator.textContent = `You have ${totalTasks} task/s`;
    }
    else {
        tasksIndecator.textContent = `You got no tasks !!! keep it like that`;
    }

}

//adding-task function
let numberOfTasks = 0;
let numberOfDeleted = 0;
const tasks = [];
function addTask(){
    if (text.value === '' || date.value === '' || priority.value ==='') {
        msg.textContent = "Input the task and the date";
    }
    else{
        numberOfTasks++;
        const taskObj = {
            task : text.value,
            deadline : date.value,
            priority : priority.value
        }
        tasks.push(taskObj);
        taskPrint(taskObj);
        form.reset();
        msg.textContent = '';
        updateTaskIndecator();
        addToLocal(taskObj);
    }
}

function updateTasksID (){
    const li = document.getElementsByClassName('collection-item');
    for(let i=1 ; i<= tasks.length ; i++){
        li[i-1].setAttribute("id",i);
    }
}

function deleteTask (id){
    numberOfDeleted++;
    const li = document.getElementById(`${id}`);
    li.remove();
    tasks.splice(id-1,1);
    updateTaskIndecator();
    updateTasksID();
}
function taskPrint (taskObj){
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = "<label class='col s1 check-task'><input class='task-check' onclick='isChecked(this.parentNode.parentNode.id)' type='checkbox'><span></span></label><div class='col s7'><span class='task'></span><span class='deadline'></span></div><div class='col s2 secondary' ><span class='priority badge red new'></span></div><div class='col s2 secondary'><a onclick='deleteTask(this.parentNode.parentNode.id)' class='secondary-content'><i class='material-icons'>delete</i></a></div>"
        li.classList = "collection-item row";
        li.setAttribute("id",numberOfTasks-numberOfDeleted);
        
        const task = document.getElementsByClassName('task')[numberOfTasks-1-numberOfDeleted];
        const deadline = document.getElementsByClassName('deadline')[numberOfTasks-1-numberOfDeleted];
        const priority = document.getElementsByClassName('priority')[numberOfTasks-1-numberOfDeleted];
        task.innerText = taskObj.task;
        deadline.innerText = taskObj.deadline;
        priority.innerText = taskObj.priority;
}

function isChecked(id){
    const checkbox = document.getElementsByClassName('task-check')[id-1];
    const task = document.getElementsByClassName('task')[id-1];
    if(checkbox.checked){
        task.style.textDecoration= "line-through";
    }
    else{
        task.style.textDecoration= "none";
    }
}

submit.addEventListener('click', (e)=>{
    addTask();
    e.preventDefault();
})

function addToLocal(taskObj){
    const taskString = JSON.stringify(taskObj);
    localStorage.setItem("task"+localStorage.length,taskString);
}

function printLocalStorage(){
    for(let i=0 ; i<localStorage.length; i++){
        const task = JSON.parse(localStorage.getItem("task"+(i)))
        console.log(task);
        numberOfTasks++;
        tasks.push(task);
        updateTaskIndecator();
        taskPrint(task);
    }
}
printLocalStorage();

//initializing materialize components
const calendar = document.querySelector('.datepicker');
M.Datepicker.init(calendar,{
    minDate: new Date()
});

let elems = document.querySelectorAll('select');
let options = document.querySelectorAll('option');
let instances = M.FormSelect.init(elems, options);