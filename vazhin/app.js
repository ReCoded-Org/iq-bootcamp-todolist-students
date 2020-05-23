// Selectors

const todayDate = document.querySelector(".today-date");
const todoList = document.querySelector(".todo-list");
const taskText = document.querySelector('#todo-text');
const priorityInput = document.querySelector('#select-priority');
const deadlineInput = document.querySelector('#date');
const addBtn = document.querySelector(".btn");
const cancelBtn = document.querySelector(".cancel-btn");
const noTasks = document.querySelector(".tasks-empty");
let arrOfTasks = [];
// arrOfTasks = JSON.parse(localStorage.getItem('all-tasks'));
let inEditMode = false;
let indexOfInEditTask;
priorityInput.value = "";

// Event listeners

window.addEventListener('load', startDateTime);
addBtn.addEventListener("click", addTodo);
cancelBtn.addEventListener("click", cancelTodo);

// Functions

function addTodo(event) {
    event.preventDefault();

    if (taskText.value === "") {
        taskText.classList.add("fill-out-field");
        taskText.placeholder = "add a task";
        return;
    }
    else if (deadlineInput.value === "") {
        taskText.placeholder = "coding... 👩‍💻";
        taskText.classList.remove("fill-out-field");
        deadlineInput.classList.add("fill-out-field");
        deadlineInput.placeholder = "enter a deadline";
        return;
    }
    else {
        deadlineInput.placeholder = '';
        deadlineInput.classList.remove("fill-out-field");

        const objOfTask = {
            task: taskText.value,
            priority: priorityInput.value,
            deadline: deadlineInput.value,
        };

        if (inEditMode) {
            arrOfTasks.splice(indexOfInEditTask, 1, objOfTask);
            inEditMode = false;
            addBtn.innerHTML = "add task"
        }
        else {
            arrOfTasks.push(objOfTask);
        }
    }

    updateTasksInList();
}

function updateTasksInList() {

    // localStorage.setItem('all-tasks',JSON.stringify(arrOfTasks));

    let previousTasks = document.querySelectorAll(".todo-list div");
    for (let i = 0; i < previousTasks.length; i++) {
        previousTasks[i].remove();
    }

    for (let i = 0; i < arrOfTasks.length; i++) {

        const todoDiv = document.createElement("div");
        const task = document.createElement("li");
        const priority = document.createElement("p");
        const deadline = document.createElement("p");
        const todoBtnsDiv = document.createElement("div");
        const completedBtn = document.createElement('button');
        const trashBtn = document.createElement('button');
        const editBtn = document.createElement('button');

        task.innerHTML = `task: ${arrOfTasks[i].task}`;
        priority.innerHTML = `priority: ${arrOfTasks[i].priority}`;
        deadline.innerHTML = `deadline: ${arrOfTasks[i].deadline}`;
        completedBtn.innerHTML = '<i></i>';
        trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        editBtn.innerHTML = 'edit';

        noTasks.remove();
        todoList.appendChild(todoDiv);
        todoDiv.appendChild(task);
        todoDiv.appendChild(priority);
        todoDiv.appendChild(deadline);
        todoDiv.appendChild(todoBtnsDiv);
        todoBtnsDiv.appendChild(completedBtn);
        todoBtnsDiv.appendChild(trashBtn);
        todoBtnsDiv.appendChild(editBtn);

        editBtn.classList.add("edit-btn");
        todoBtnsDiv.classList.add("todo-btns-div");
        completedBtn.classList.add("completed-btn");
        trashBtn.classList.add("trash-btn");
        todoDiv.classList.add("todo-div");
        task.classList.add("display-5");
        priority.classList.add("display-5");
        deadline.classList.add("display-5");

        taskText.value = "";
        priorityInput.value = "";
        deadlineInput.value = "";

        if (arrOfTasks[i].priority === "1") {
            priority.style.color = 'red';
        }
        else if (arrOfTasks[i].priority === "2") {
            priority.style.color = 'blue';
        }
        else if (arrOfTasks[i].priority === "3") {
            priority.style.color = 'green';
        }

        function checkDateOverdue() {

            let thisTaskDeadline = Date.parse(arrOfTasks[i].deadline);
            let today = Date.parse(changeDateFormat());
            if (thisTaskDeadline <= today) {
                deadline.classList.add("date-overdue");
            }
        }
        checkDateOverdue();

        trashBtn.addEventListener('click', function () {

            arrOfTasks.splice(i, 1);
            updateTasksInList();
            if (todoList.childElementCount === 0) {
                todoList.appendChild(noTasks);
            }
        })

        let completedBtnClicked = false;
        completedBtn.addEventListener('click', function () {

            const motivatingWords = [
                "you nailed that one 🙌",
                "Keep going 😎",
                "There you go!",
                "Keep up the good work.",
                "Keep it up.",
                "Good job.",
                "I’m so proud of you!",
                "That was awesome!",
                "Well done.",
                "keep pushing!",
                "You can do this!",
                "That's how we do it 😎",
                "Well done.",
                "Never give up, just like that.",
                "Do not stop 🙌",
                "You're amazing!",
                "You're the best",
                "Well, that was impressive.",
                "It's possible! don't forget that.",
                "amazing job 💯"
            ]
            const motivatingWordsNode = document.createElement('p');
            let randomIndex = Math.floor(Math.random() * motivatingWords.length);
            motivatingWordsNode.innerText = `${motivatingWords[randomIndex]}`
            motivatingWordsNode.style.textAlign = "center";
            motivatingWordsNode.classList.add("motivating");

            if (completedBtnClicked == false) {

                task.innerHTML = `<strike>task: ${arrOfTasks[i].task}</strike>`;
                priority.remove();
                deadline.remove();
                todoDiv.insertBefore(motivatingWordsNode, todoDiv.childNodes[1]);
                completedBtn.innerHTML = '<i class="fas fa-check"></i>';
                completedBtnClicked = true;
                return;
            }
            else if (completedBtnClicked == true) {
                task.innerHTML = `task: ${arrOfTasks[i].task}`;
                completedBtn.innerHTML = '<i></i>';
                document.querySelector('.motivating').remove();
                todoDiv.insertBefore(priority, todoDiv.childNodes[1]);
                todoDiv.insertBefore(deadline, todoDiv.childNodes[2]);
                completedBtnClicked = false;
                return;
            }
        })

        editBtn.addEventListener("click", function () {
            inEditMode = true;
            indexOfInEditTask = i;

            addBtn.innerHTML = "edit task"
            taskText.value = arrOfTasks[i].task;
            priorityInput.value = arrOfTasks[i].priority;
            deadlineInput.value = arrOfTasks[i].deadline;
        })
    }
}

function cancelTodo() {
    taskText.value = "";
    priorityInput.value = "";
    deadlineInput.value = "";
    inEditMode = false;
    addBtn.innerHTML = "add task"
}

function changeDateFormat() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const current_datetime = new Date();
    let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getDate() + ", " + current_datetime.getFullYear();
    return formatted_date;
}

function startDateTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    todayDate.innerHTML = `${changeDateFormat()} &nbsp; ${h + ":" + m + ":" + s}`
    let t = setTimeout(startDateTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function datePicker() {
    document.querySelector('#datetimepicker1').datetimepicker();
};

$(document).ready(function () {
    var date_input = $('input[name="date"]');
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

    date_input.datepicker({
        startDate: today,
        format: 'MM dd, yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})

// updateTasksInList()













