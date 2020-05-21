//declaring the variables
const todayDate = document.getElementById('todayDate');
let day = new Date().getDate();
let month = (new Date().getMonth() + 1);
let year = new Date().getFullYear();
const form = document.getElementById('form');
const text = document.getElementById('text');
const priority = document.getElementById('priority');
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


//adding-task function
let numberOfTasks = 1;
const tasks = [];
function addTask(){
    if (text.value === '' || date.value === '') {
        msg.textContent = "Input the task and the date";
    }
    else{
        const taskObj = {
            task : text.value,
            deadline : date.value,
            priority : priority.value
        }
        tasks.push(taskObj);
        document.getElementById('noTasks').textContent = `You have ${numberOfTasks} task/s`;
        taskPrint(taskObj);
        numberOfTasks++;
        form.reset();
        msg.textContent = '';
    }    
}

function taskPrint (taskObj){
    const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = "deadline : " + taskObj.deadline;
        li.className = "collection-item";
        li.innerText = taskObj.task;
        li.appendChild(span);
        ul.appendChild(li);
}
console.log(tasks);
console.log(priority.value);

submit.addEventListener('click', (e)=>{
    e.preventDefault();
})




//initializing materialize components 
const calendar = document.querySelector('.datepicker');
M.Datepicker.init(calendar,{
    minDate: new Date()
});

let elems = document.querySelectorAll('select');
let options = document.querySelectorAll('option');
let instances = M.FormSelect.init(elems, options);