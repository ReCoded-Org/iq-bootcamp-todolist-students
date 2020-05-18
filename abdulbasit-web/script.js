const input = document.querySelector("#input-task");
const btnAdd = document.querySelector("#btn-add");
const ul = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-counter");
taskCount.textContent = `${ul.childElementCount}`;

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const todo = input.value;
    //check if input is empty
    if (todo.length > 0) {
        const task = document.createElement("li")
        task.className = "list-group-item rounded-pill w-100 my-2 mr-5";
        const btn = document.createElement("button");
        task.innerHTML = todo;
        //create delete button
        btn.innerHTML = "Delete";
        btn.className = "btn btn-danger rounded-pill btn-sm mr-auto";
        task.appendChild(btn);
        ul.appendChild(task);

        //clear input after adding
        input.value = "";

        //call delete function
        deleteTask(btn);

    }
})

//delete task function
function deleteTask(btn) {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    })
}


//data and time setter
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

time.textContent = `${date.getHours()}:${date.getMinutes()}`;
day.textContent = `${days[date.getDay()]}, ${date.getDate()}th`;
month.textContent = `${monthNames[date.getMonth()]}`;


$(document).ready(function(){
    //matarilez date picker 
    $('.datepicker').datepicker();
    
    $(input).hide();
    $(btnAdd).click(()=>{
        $(input).fadeIn("slow");
    })
});
  
