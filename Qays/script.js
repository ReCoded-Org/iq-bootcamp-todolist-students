
const priority = [1, 2, 3]
const monthsNames =
    [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

const tasksArray = [];

let currentDate = new Date();

let dateH = document.getElementById('current-date');
dateH.innerHTML = monthsNames[currentDate.getMonth()] + " " + currentDate.getDate();
// dateH.innerText = currentDate.getDate() + "/" + (currentDate.getMonth() +1) +"/"+currentDate.getFullYear();

let deadlineInput = document.getElementById('deadline');

deadlineInput.min = currentDate.toISOString().split("T")[0];

function addTask(event) {
    let description = document.getElementById('description').value;
    let deadline = deadlineInput.value;
    if (description === '' || deadline === '') {
        alert("Make sure to fill all of the fields");
        return;
    }

    tasksArray.push({ description: description, deadline: deadline,done:false });

    drawArray();
}


function drawArray() {
    localStorage.setItem('myTasks',JSON.stringify(tasksArray) );

    const oldTasks = document.querySelectorAll("#tasks-list *");
    for (let i = 0; i < oldTasks.length; i++) {
        oldTasks[i].remove();
    }
    for (let i = 0; i < tasksArray.length; i++) {
        const taskObject = tasksArray[i];
        let description = taskObject.description;
        let deadline = taskObject.deadline;
        let task = document.createElement('li');
        let lineThrough = taskObject.done ? "line-through":"";
        let checked =  taskObject.done?"checked":"";
        task.innerHTML = `<p>
        <label class="rounded">
            <input type="checkbox" class="filled-in rounded"  onclick="changeState(${i})" ${checked} />
            <span>Filled in</span>
        </label>
    </p><div class=${lineThrough}>${description}</div><div>${deadline}</div>`;
        let tasksList = document.getElementById('tasks-list');
        tasksList.appendChild(task);
        document.getElementById('deadline').value = '';
        document.getElementById('description').value = '';
        document.getElementById('no-tasks-message').style.display = 'none';
    }
}

function changeState(i){
    console.log(i);
    console.log(tasksArray[i].done);

    const taskObject = tasksArray[i];
    taskObject.done =  !taskObject.done;
    

    drawArray();

}


let elems = document.querySelectorAll('.datepicker');
let instances = M.Datepicker.init(elems, {
    autoClose: true,
    minDate: new Date(),
    // setDefaultDate: new Date(2000,01,31),
    format: "mmm dd, yyyy",
    onSelect: function (datee) {
        console.log(datee);

    }
});


document.addEventListener('DOMContentLoaded', function () {
    var elemss = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elemss, {});
});
console.log(localStorage.getItem('myTasks'));
console.log(Array.isArray(localStorage.getItem('myTasks')));

if (Array.isArray(JSON.parse(localStorage.getItem('myTasks')))){
 
tasksArray.push(...JSON.parse(localStorage.getItem('myTasks')));
drawArray();
} 
// localStorage.clear();