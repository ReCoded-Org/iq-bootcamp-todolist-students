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
let ulList ;
let listItem;
let checker;
let deadlineView;
let priortyView;
console.log(ulList);
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
     ulList = document.getElementById('list');
     listItem = document.createElement("li");
     checker = document.createElement('input');
     deadlineView = document.createElement("p");
     priortyView = document.createElement("p")
     console.log(ulList);
    
    checker.type = "checkbox";
    checker.value = 1;
    ulList.appendChild(listItem);
  
    for (let i = 0; i < todo.length; i++){
        let getTodo = todo[i];
       
        listItem.innerText = getTodo.task;
        deadlineView.innerText= getTodo.deadline;
        if(getTodo.priorty === "high priorty"){
            priortyView.style.color = "red";
        } else if (getTodo.priorty === "med priorty") {
            priortyView.style.color = "orange";

        } else {
            priortyView.style.color = "green";
        }
        priortyView.innerText = getTodo.priorty;
        console.log(priortyView);
     

    }
    localStorage.setItem('todoList', JSON.stringify(todo));
    listItem.appendChild(checker);
    listItem.appendChild(deadlineView);
    listItem.appendChild(priortyView);
    listItem.style.listStyle = "none"
   
}
