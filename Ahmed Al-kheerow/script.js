let todayDate = new Date();

document.getElementById('today-date').innerHTML = todayDate.getDate() + "/" + (todayDate.getMonth() +1 ) + "/" + todayDate.getFullYear();

document.getElementsByClassName('add-task')[0].addEventListener ('click', function(event) {
    let todo = document.getElementById('todo').value;
    let deadline = document.getElementById('deadline').value;

    let theTask = document.createElement('li');
    theTask.innerHTML = `<div>${todo}</div><div> ${deadline} </div>`;  
    
    let newTask = document.getElementById('todo-tasks');
    newTask.appendChild(theTask);

    todo = document.getElementById('todo').placeholder ='write another one';
    todo = document.getElementById('todo').value ='';

    deadline = document.getElementById('deadline').value ='';
    
});