
// setting the Current date we see up in our webpage
let currentDate = document.getElementById('currentDate');
let date = new Date();
currentDate.innerText ="Today : "+ date.toDateString();


const todoButton=document.getElementById('todoBtn');
let deadline=document.getElementById('deadline');
let list=document.getElementById('list');
let todo=document.getElementById('todo');
const form=document.getElementById('myForm');
let noTasksText=document.getElementById('luckyYou');
let ulSection = document.getElementsByClassName('ulSection');

let tasks = [];
todoButton.addEventListener('click',function(e){
if(todo &&todo.value &&deadline &&deadline.value){
    noTasksText.innerText=" ohh now you have some !!"

    let task={
    Title: todo.value,
    Deadline: deadline.value
            };
let listItem = document.createElement('li');
let taskTitle = document.createElement('span');
taskTitle.innerText = task.Title;
let taskDeadline = document.createElement('span');
taskDeadline.innerText= task.Deadline;
listItem.appendChild(taskTitle);
listItem.appendChild(taskDeadline);
listItem.classList.add('listItem');
list.appendChild(listItem);
tasks.push(task);

localStorage.setItem('myTasksList' , JSON.stringify(tasks));
form.reset();

     }

});
