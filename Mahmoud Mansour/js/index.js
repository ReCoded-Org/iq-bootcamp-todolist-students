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

let todo = [];
function addTask () {

 
    let todos = {
        id: Date.now(),
        task:document.getElementById("todo-input").value,
        checked:false,
        deadline:document.getElementById("todo-deadline").value,
        priorty: document.getElementById("Priorties").value,
        
        
    };
   
    todo.push(todos);
    console.log(todo);
    let ulList = document.getElementById('list');
    const listItem = document.createElement("li");
    const deadlineView = document.createElement("p");
    const priortyView = document.createElement("p")
    ulList.appendChild(listItem);
    listItem.appendChild(deadlineView);
    listItem.appendChild(priortyView);
    for (let i = 0; i < todo.length; i++){
        let getTodo = todo[i];
        console.log(getTodo);
        listItem.innerText = getTodo.task;
        deadlineView.innerText= getTodo.deadline;
        console.log(deadlineView);
        priortyView.innerText = getTodo.priorty;
        console.log(priortyView);
    }
}