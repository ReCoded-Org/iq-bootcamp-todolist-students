window.addEventListener("load", getdate());
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
window.addEventListener("load", Time());
function Time() {
    let time = new Date();
    let t = time.toLocaleTimeString();
    document.getElementById('Time').innerText = t;
    let run = setTimeout(Time, 1000);
}

window.addEventListener("load", daterestrict);
function daterestrict() {
    let deadlineDate = document.getElementById('date');
    let today = new Date();
    let d = String(today.getDate());
    let m = String(today.getMonth() + 1);
    let y = String(today.getFullYear());
    //here the days and months should have a 0 before them so it gives the correct min value.
    if (d < 10) {
        d = `0${d}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    today = y + '-' + m + '-' + d;
    deadlineDate.setAttribute('title', `Add date from: ${today}`);
    deadlineDate.setAttribute('min', today);
}

let btn = document.getElementById('btn'); //get button
btn.addEventListener('click', addToList);
function addToList() {
    let taskName = document.getElementById('task').value;
    let deadlineDate = document.getElementById('date').value;
    let list = document.getElementById('list');
    let listItem = document.createElement('li');
    if (taskName == "" || deadlineDate == "") {
        {
            if (taskName == "") { taskName.focus(); }
        }
        {
            if (deadlineDate == "") { deadlineDate.focus(); }
        }
    }
    else {
        listText = taskName + "<br />" + deadlineDate;
    }
    listItem.innerHTML = listText;
    list.appendChild(listItem);
    let form = document.getElementById('taskForm');
    form.reset();
}
