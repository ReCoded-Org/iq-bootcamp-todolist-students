
let todo = JSON.parse(localStorage.getItem("todoList")) ??[];
console.log(todo)
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
const form = document.getElementById('task-form');


function intalizeTasks (){
    let todos = {
        
        task:document.getElementById("todo-input").value,
        deadline:document.getElementById("todo-deadline").value,
        priorty: document.getElementById("Priorties").value,
        
        
    };
    todo.push(todos);

    localStorage.setItem('todoList', JSON.stringify(todo));
    for(let i = 0; i < todo.length; i++){
        let taskList = todo[i];
        console.log(taskList);
        addTask(taskList);

    }

}

function addTask (tasks) {


   
    let ulList = document.getElementById('list');
    let emptyStatus = document.getElementById("no-tasks");
    let listItem = document.createElement("li");
    let checker = document.createElement('input');
    let deadlineView = document.createElement("p");
    let priortyView = document.createElement("p")
   
    listItem.style.listStyle = "none"
    
    checker.type = "checkbox";
    checker.value = 1;
   
    ulList.appendChild(listItem);
    listItem.appendChild(deadlineView);
    listItem.appendChild(priortyView);
    listItem.appendChild(checker);
  
       
        listItem.innerText = tasks.task;
        if (listItem !== ""){
            emptyStatus.style.display = "none";
        }
        
        deadlineView.innerText= tasks.deadline;

        if(tasks.priorty === "high priorty"){
            priortyView.style.color = "red";
        } else if (tasks.priorty === "med priorty") {
            priortyView.style.color = "orange";

        } else {
            priortyView.style.color = "green";
        }
        priortyView.innerText = tasks.priorty;     

    

    
   
    function taskChecker () {
        checker.addEventListener('change', function(e){
    
            if(checker.checked){
                listItem.style.textDecoration = "line-through";
            } else {
                listItem.style.textDecoration = "none";
            }
        });
        
    }
    taskChecker();
}

    


form.addEventListener('submit', function(e){
    e.preventDefault();
    // addTask();
    intalizeTasks();
});


function taskRemover (){

}