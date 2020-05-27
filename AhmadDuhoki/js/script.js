//Selecting Elements
const monthDayFormat = document.getElementById("monthDay");
const clearAll = document.getElementById("clearAll");
const form = document.getElementById("form");
const inputTask = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const inputList =document.getElementById("inputList");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn =document.getElementById("cancelBtn");
const hideBtn =document.getElementById("hideBtn");
const showHideBtn = document.getElementById("showHideBtn");
const noTaskMsg = document.getElementById("noTaskMsg");
const ulList = document.getElementById("list");

//Classes Names
const CHECK = "fas";
const UNCHECK = "far";
const LINE_THROUGH = "lineThrough";

//variables
let arrList ;
let id ;
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//get items from local storage
let data = localStorage.getItem("TASKS");

//check whether the localstorage is empty or not 
if(data){
    arrList = JSON.parse(data);
    id = arrList.length;
    loadList(arrList);
}
else{
    arrList = [];
    id = 0;
} 

//load items to the user's interface
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.task, item.date, item.options, item.id, item.done, item.trash);
    });
}

//Clear all tasks function and event listener
clearAll.addEventListener('click', function(e){
    localStorage.clear();
    location.reload();
});

//Show Today's Date
function date1(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();
    
    if(dd<10){
        dd = '0' + dd;
    } 
    if(mm<10){
        mm = '0' + mm;
    } 
    
    return yy + "-" + mm + "-" + dd;
}

//Show Today's Date in Different Format
function headerFormattedDate(){
    let today = new Date();
    let dd = today.getDate();
    let mm = months[today.getMonth()];
 
    return mm + " " + dd;
}

//adding formatted date and settign min attribute for the date input
monthDayFormat.innerHTML = headerFormattedDate();
inputDate.setAttribute("min", date1());

//adding add to do function for adding tasks
function addToDo(task, date, options, id, done, trash) {
   
    if(trash){
        return ;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    let items = `<li class="list-group-item px-5 mx-5 border border-warning rounded text-warning bg-dark mb-5" style="border-width: 3px !important;">
        <div class="d-flex flex-column justify-content-between px-5 pt-4" style="border-width: 4px !important;">
            <h6 id="back-color" class="text1 ${LINE}"><strong>Task: </strong>${task}</h6>
            <h6 class="text2 ${LINE}"><strong>Deadline: </strong>${date}</h6>
            <h6 class="text3 ${LINE}"><strong>Priority: </strong><span classs="option-color">${options}</span></h6>
            <div class="d-flex justify-content-around m-4 text-light">
                <div>
                    <button class="btn btn-dark" type="button"><i class="${DONE} fa-check-circle" job="complete" id="${id}"></i></button>
                </div>
                <div>
                    <button class="btn btn-dark" type="button"><i class="fas fa-trash-alt" job="delete" id="${id}"></i></button>
                </div>
            </div>
        </div>
    </li>
    `;

    ulList.innerHTML += items;

    for (let i = 0; i<=id; i++) {
    if (date <= date1()) {
        document.querySelector(".text1").classList.add('bg-warning', 'text-dark', 'p-2', 'rounded');
    }

    if (options == "Priority 1") {
        document.querySelector(".text3").classList.add('bg-danger', 'text-light', 'rounnded', 'p-1');
    }
    else if ((options == "Priority 2")) {
        document.querySelector(".text3").classList.add('bg-primary', 'text-light', 'rounnded', 'p-1');
    }
    else {
        document.querySelector(".text3").classList.add('bg-success', 'text-light', 'rounnded', 'p-1');
    }
}

}

// event listener for submit button
submitBtn.addEventListener('click', function(e){
    e.preventDefault();

    const task = inputTask.value;
    const date = inputDate.value;
    const options = inputList.value;

    if(task && date) {
        addToDo(task, date, options, id, false, false);

        arrList.push({
            task: task,
            date: date,
            options: options,
            id: id,
            done: false,
            trash: false
        });

        id++;

        localStorage.setItem("TASKS", JSON.stringify(arrList));
        
        form.reset();
    
    }
    else{
        alert("Please Add a Task And Its Deadline!!");
    }

});

//complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.parentNode.parentNode.parentNode.querySelector(".text1").classList.toggle(LINE_THROUGH);
    element.parentNode.parentNode.parentNode.parentNode.querySelector(".text2").classList.toggle(LINE_THROUGH);
    element.parentNode.parentNode.parentNode.parentNode.querySelector(".text3").classList.toggle(LINE_THROUGH);

    arrList[element.id].done = arrList[element.id].done ? false : true;

}

//remove to do
function removeToDo(element){
    element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);

    arrList[element.id].trash = true;

    arrList.splice(element.attributes.id.value, 1);
     
   
}

//targeting the items and return the clicked element function
ulList.addEventListener('click', function(e){
    const element = e.target;
    const elementCommand = element.attributes.job.value;

    if(elementCommand == "complete") {
        completeToDo(element);
    }
    else if(elementCommand == "delete") {
        removeToDo(element);
    }
    
    localStorage.setItem("TASKS", JSON.stringify(arrList));

});

//setting form section to hide 
form.style.display = 'none';

// show and hide form menu
showHideBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(form.style.display == 'none') {
        form.style.display = 'block';
        hideBtn.style.display = 'none';
    }

});

//event listener for cancel button
cancelBtn.addEventListener('click', function(e){
    form.style.display = 'none';
    hideBtn.style.display = 'block';
});
