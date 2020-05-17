
// setting the Current date we see up in our webpage
let currentDate = document.getElementById('currentDate');
let date = new Date();
currentDate.innerText ="Today : "+ date.toDateString();


let todoButton=document.getElementById('todoBtn');
let deadline=document.getElementById('deadline');
let list=document.getElementById('list');
let todo=document.getElementById('todo');
let form=document.getElementById('myForm');
let noTasksText=document.getElementById('luckyYou');
let ulSection = document.getElementsByClassName('ulSection');

let tasks = [];
todoButton.addEventListener('click',function(e){
if(todo &&todo.value &&deadline &&deadline.value){
    noTasksText.innerText=" ohh now you have some !!"
    
    let listItem= document.createElement('li');
    let todoTitle=document.createElement('span');
    let todoDeadline=document.createElement('span');
    listItem.classList.add('listItem');
    list.appendChild(listItem);

    todoTitle.innerText= todo.value;
    listItem.appendChild(todoTitle);
    todoDeadline.innerText=deadline.value;
    listItem.appendChild(todoDeadline);

    
    e.preventDefault();
    let task = {
        title : todo.value,
        deadline: deadline.value

    };
    tasks.push(task);
    console.log(tasks);
    
    form.reset();

    localStorage.setItem('myTasksList' , JSON.stringify(tasks));
    localStorage.setItem('key(could be myTasksList)' , JSON.stringify(NameOftheArrayThatHasAllTheTaskObjects));


     }

});
