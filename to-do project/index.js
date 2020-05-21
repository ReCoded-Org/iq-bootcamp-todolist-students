window.addEventListener("DOMContentLoaded", getdate());
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
window.addEventListener("DOMContentLoaded", Time());
function Time() {
    let time = new Date();
    let t = time.toLocaleTimeString();
    document.getElementById('Time').innerText = t;
    let run = setTimeout(Time, 1000);
}

window.addEventListener("DOMContentLoaded", daterestrict);
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
    hiddenElemetns= document.getElementsByClassName('hide');
    for(let i=0; i<hiddenElemetns.length; i++)
  {
      hiddenElemetns[i].style.display = "block"; 
  }
    let taskName = document.getElementById('task').value;
    let deadlineDate = document.getElementById('date').value;
    let list = document.getElementById('list');
    let listItem = document.createElement('li');
    var e = document.getElementById("exampleFormControlSelect1");
var userChoice = e.options[e.selectedIndex].text;
    if (taskName == "" || deadlineDate == "") {
        {
            if (taskName == "") { taskName.focus(); }
        }
        {
            if (deadlineDate == "") { deadlineDate.focus(); }
        }
    }
    else {
        listText = taskName + "<br />" + deadlineDate + "&nbsp &nbsp &nbsp &nbsp &nbsp" + userChoice;
    }
   list.innerText=null;
    listItem.innerHTML = listText;
    list.appendChild(listItem);
    let form = document.getElementById('taskForm');
    form.reset();
}
window.addEventListener("DOMContentLoaded", hide);
function hide(){
  hiddenElemetns= document.getElementsByClassName('hide');
  for(let i=0; i<hiddenElemetns.length; i++)
{
    hiddenElemetns[i].style.display = "none"; 
}
}

document.querySelectorAll('ul').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      if(item.style.textDecoration == "none"){
      item.style.textDecoration= "line-through";}
      else{
        item.style.textDecoration= "none"
      }
    })
  });