
// setting the Current date we see up in our webpage
let currentDate = document.getElementById('currentDate');
const tarikh=new Date();
let yy= new Intl.DateTimeFormat('en',{year:'numeric'}).format(tarikh);
let mm= new Intl.DateTimeFormat('en',{month:'short'}).format(tarikh);
let dd= new Intl.DateTimeFormat('en',{day:'2-digit'}).format(tarikh);
currentDate.innerText=` today is : ${mm} ${dd}, ${yy}`;

const todoButton=document.getElementById('todoBtn');
let deadline=document.getElementById('deadline');
let list=document.getElementById('list');
let todo=document.getElementById('todo');
const form=document.getElementById('myForm');
let noTasksText=document.getElementById('luckyYou');
let ulSection = document.getElementsByClassName('ulSection');
const priorities = document.getElementById('priorities');
const firstPriority = document.getElementById('priority1');
const secondPriority = document.getElementById('priority2');
const thirdPriority = document.getElementById('priority3');

let tasks = [];
todoButton.addEventListener('click',function(e){
if(todo &&todo.value &&deadline &&deadline.value){
    noTasksText.innerText=" ohh now you have some !!"

    let task={
    Title: todo.value,
    Deadline: deadline.value,
    Priority: priorities.value,
            };
let listItem = document.createElement('li');

let taskTitle = document.createElement('span');
taskTitle.innerText = task.Title;

let inputCheck =document.createElement('input');
inputCheck.setAttribute('type','checkbox');
inputCheck.setAttribute('id','checkbox');
inputCheck.setAttribute('value','checkedTask');


let taskDeadline = document.createElement('span');
 let d=new Date(task.Deadline);
 let yyy= new Intl.DateTimeFormat('en',{year:'numeric'}).format(d);
let mmm= new Intl.DateTimeFormat('en',{month:'short'}).format(d);
let ddd= new Intl.DateTimeFormat('en',{day:'2-digit'}).format(d);
taskDeadline.innerText=` ${mmm} ${ddd}, ${yyy}`;



let priority = document.createElement('span');
if(task.Priority=='priority 1'){
     priority.style.color="red";
}
if(task.Priority=='priority 2'){
     priority.style.color="yellow";
}
if(task.Priority=='priority 3'){
     priority.style.color="green";
}

priority.innerText=` (${task.Priority})`;
taskDeadline.appendChild(priority);

let TrashCanSpan=document.createElement('span');
TrashCanSpan.innerHTML +='<img src="can.svg" alt="trash can"/>'
TrashCanSpan.classList.add('trashcan');
listItem.appendChild(taskTitle);
listItem.appendChild(taskDeadline);
listItem.appendChild(TrashCanSpan);
listItem.appendChild(inputCheck);



listItem.classList.add('listItem');

list.appendChild(listItem);
tasks.push(task);
console.log(tasks);

localStorage.setItem('myTasksList' , JSON.stringify(tasks));
form.reset();

TrashCanSpan.addEventListener('click',function(){
     list.removeChild(listItem);;
});

inputCheck.addEventListener('click',function(){

if(inputCheck.checked){
     taskTitle.style.textDecoration='line-through';
}else{
     taskTitle.style.textDecoration='none';
}
})

     }

});
