window.addEventListener("DOMContentLoaded", TimeAndDate());
function TimeAndDate() {
    function getdate() {
        let today = new Date();
        let d = String(today.getDate());
        let m = String(today.getMonth() + 1); //months start with 0
        let y = String(today.getFullYear());
        if (d < 10) {
            d = `0${d}`;
        }
        if (m < 10) {
            m = `0${m}`;
        }
        today = y + '/' + m + '/' + d;
        document.getElementById('DateOfToday').innerText = today;
    }
    function Time() {
        let time = new Date();
        let t = time.toLocaleTimeString();
        document.getElementById('Time').innerText = t;
        let run = setTimeout(Time, 1000);
    }
    getdate();
    Time();
}

document.getElementById("taskForm").addEventListener("click", function (event) {
    event.preventDefault()
});
$(document).ready(function () {
    let date_input = $('input[id="date"]'); //our date input has the name "date"
    let options = {
        startDate: "new Date()",
        format: 'MM, dd yyyy',
        todayHighlight: true,
        autoclose: true,
        orientation: "top right"
    };
    date_input.datepicker(options);
})

let listID = 0;
let btn = document.getElementById('btn'); //get button
btn.addEventListener('click', addToList);
function addToList() {
    hiddenElemetns = document.getElementsByClassName('hide');
    for (let i = 0; i < hiddenElemetns.length; i++) {
        hiddenElemetns[i].style.display = "block";
    }
    let taskName = document.getElementById('task').value;
    let deadlineDate = document.getElementById('date').value;
    let e = document.getElementById("exampleFormControlSelect1");
    let priority = e.options[e.selectedIndex].text;
    let listText = null;
    let inputCollection = [];
    if (taskName == "" || deadlineDate == "") {
        if (taskName == "") { document.getElementById('task').focus(); }
        else {
            if (deadlineDate == "") { document.getElementById('date').focus(); }
        }
    }
    else {
        listText = {
            taskName: taskName,
            deadlineDate: deadlineDate,
            priority: priority
        }
    }
    inputCollection.push(listText);
    for (let i = 0; i <= inputCollection.length; i++) {
        let task = inputCollection[i];
        let nameOfTask = task.taskName;
        let taskDeadline = task.deadlineDate;
        let taskPriority = task.priority;
        let listItem = document.createElement('li');
        listItem.setAttribute('id', `listItem${listID}`);
        //  listItem.setAttribute('class', );
        let span = `<div class=" row">
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="check${listID}" onclick="markAsChecked(${listID})">
  <label class="form-check-label" for="check">
  </label>
</div>
        <div class="col-md-5">
        ${nameOfTask} <br>
         ${taskDeadline}
          ${taskPriority}</div>
        <div class="col-md-6 text-right"><i class="fa fa-trash-o" onclick="remove(${listID})" style="font-size:40px;"></i>
        </div> <hr></div>`;
        listItem.innerHTML = span;
        let list = document.getElementById('list');
        list.appendChild(listItem);
        listID = listID + 1;
        document.getElementById('remove').style.display = "none";
        let form = document.getElementById('taskForm');
        form.reset();
        btn.blur();
    }
}
function remove(i) {
    $(`#listItem${i}`).remove();
}
function markAsChecked(i) {
    let buttons = document.getElementsByClassName('form-check-input');
    let checkval = buttons[i].checked;
    if (checkval == true) {
        $(`#listItem${i}`).css("text-decoration", "line-through");
    }
    else {

        $(`#listItem${i}`).css("text-decoration", "none");
    }
}


window.addEventListener("DOMContentLoaded", hide);
function hide() {
    hiddenElemetns = document.getElementsByClassName('hide');
    let form = document.getElementById('taskForm');
    form.reset();
    for (let i = 0; i < hiddenElemetns.length; i++) {
        hiddenElemetns[i].style.display = "none"
    }
}

