let todo = [];
const unList = document.getElementById('list');
const listItem = document.createElement('li');

const taskValue = document.getElementById("todo-input").value;
const deadlineValue = document.getElementById("todo-deadline").value;
const priortyValue = document.getElementById("Priorties").value;
const form = document.getElementById("task-form");
const add = document.getElementById("addBtn");



function Today (){
    let dateH1 = document.getElementById('header');
    let todayH1 = document.getElementById('today');
    let updatedDate = new Date();
    let day = String(updatedDate.getDate()).padStart(2, '0');
    let month = String(updatedDate.getMonth() + 1).padStart(2, '0');
    let year = updatedDate.getFullYear();
    updatedDate = month + '/' + day + '/' + year;
    todayH1.innerText = updatedDate;
}
Today();



function addItem (task,deadline,priorty){
    const todos = {
        task,
        deadline,
        priorty,
        checked: false,
        id: Date.now()
    };
    todo.push(todos);
    console.log(todo);
    }
  