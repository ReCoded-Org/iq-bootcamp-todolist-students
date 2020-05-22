// Selectors

const todayDate = document.querySelector(".today-date");
const todoList = document.querySelector(".todo-list");
const taskText = document.querySelector('#todo-text');
const priorityInput = document.querySelector('#select-priority');
const deadlineInput = document.querySelector('#date');
const addBtn = document.querySelector(".btn");
const noTasks = document.querySelector(".tasks-empty");


// Event listeners

window.addEventListener('load', startDateTime);
addBtn.addEventListener("click", addTodo);


// Functions

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

        const todoDiv = document.createElement("div");
        const task = document.createElement("li");
        const priority = document.createElement("p");
        const deadline = document.createElement("p");
        const todoBtnsDiv = document.createElement("div");
        const completedBtn = document.createElement('button');
        const trashBtn = document.createElement('button');

        task.innerHTML = `task: ${taskText.value}`;
        priority.innerHTML = `priority: ${priorityInput.value}`;
        deadline.innerHTML = `deadline: ${deadlineInput.value}`;
        completedBtn.innerHTML = '<i></i>';
        trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

        noTasks.remove();
        todoList.appendChild(todoDiv);
        todoDiv.appendChild(task);
        todoDiv.appendChild(priority);
        todoDiv.appendChild(deadline);
        todoDiv.appendChild(todoBtnsDiv);
        todoBtnsDiv.appendChild(completedBtn);
        todoBtnsDiv.appendChild(trashBtn);

        todoBtnsDiv.classList.add("todo-btns-div");
        completedBtn.classList.add("completed-btn");
        trashBtn.classList.add("trash-btn");
        todoDiv.classList.add("todo-div");
        task.classList.add("display-5");
        priority.classList.add("display-5");
        deadline.classList.add("display-5");

        taskText.value = "";
        deadlineInput.value = "";

        if (priorityInput.value === "1") {
            priority.style.color = 'red';
        }
        else if (priorityInput.value === "2") {
            priority.style.color = 'blue';
        }
        else if (priorityInput.value === "3") {
            priority.style.color = 'green';
        }

        trashBtn.addEventListener('click', function () {
            todoDiv.remove();
            if (todoList.hasChildNodes() == false) {
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
                task.innerHTML = `<strike>task: ${taskText.value}</strike>`;
                priority.remove();
                deadline.remove();
                todoDiv.insertBefore(motivatingWordsNode, todoDiv.childNodes[1]);
                completedBtn.innerHTML = '<i class="fas fa-check"></i>';
                completedBtnClicked = true;
                return;
            }
            else if (completedBtnClicked == true) {
                task.innerHTML = `task: ${taskText.value}`;
                completedBtn.innerHTML = '<i></i>';
                document.querySelector('.motivating').remove();
                todoDiv.insertBefore(priority, todoDiv.childNodes[1]);
                todoDiv.insertBefore(deadline, todoDiv.childNodes[2]);
                completedBtnClicked = false;
                return;
            }
        })
    }
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











