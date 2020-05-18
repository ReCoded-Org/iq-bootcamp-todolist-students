//declaring the variables
const todayDate = document.getElementById('todayDate');
let day = new Date().getDate();
let month = (new Date().getMonth() + 1);
let year = new Date().getFullYear();
const form = document.getElementById('form');
let text = document.getElementById('text');
const ul = document.querySelector('ul');
let date = document.getElementById('date');
const msg = document.getElementById('msg');

//adding the date to the header
todayDate.textContent = `${day}/${month}/${year}` ;

// setting the min attribute in date input field
if(day<10){
    day='0'+day
} 
if(month<10){
    month='0'+month
} 
let today = year+'-'+month+'-'+day;
date.setAttribute("min", today);

//adding-task function
let numberOfTasks = 1;
function addTask(){
    if (text.value === '' || date.value === '') {
        msg.textContent = "Input the task and the date";
    }
    else{
        document.getElementById('noTasks').textContent = `You have ${numberOfTasks} task/s`;
        const add = document.createElement('li');
        add.innerHTML= `<div class ="todo-item"><li>${text.value}</li><span>Deadline : ${date.value}</span></div>`
        ul.appendChild(add);
        numberOfTasks++;
        form.reset();
        msg.textContent = '';
    }    
}
