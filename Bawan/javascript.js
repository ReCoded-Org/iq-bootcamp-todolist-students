
// make date before current date unpickable
document.addEventListener("DOMContentLoaded", () =>  {
  let dateToday = new Date().toJSON();
  dateToday=dateToday.split('T')[0]
  let fulldate=document.getElementById("date")
fulldate.setAttribute("min", dateToday);
 

})

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
},
  false);


//adding current date to header

let dt = new Date();
const months = [
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
]
const monthIndex = dt.getMonth()
const monthName = months[monthIndex]
const date=dt.getDate()
const dateMonth= monthName+" "+date
document.getElementById("datetime").innerHTML = dateMonth.toLocaleString();

// Create a new list item when clicking on the "Add" button
function newElement() {

  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  
  // priority
  const priority = document.querySelector('#todo-priority-input').value;
  let prioritySpan = document.createElement("span");
  prioritySpan.className = "priorityClass"
  prioritySpan.innerHTML = priority

  //adding date
  let appendDate = document.getElementById("date").value;
  let dateSpan = document.createElement("span");
  dateSpan.className = "dates";
  dateSpan.innerHTML = appendDate
  li.appendChild(dateSpan);
  li.appendChild(prioritySpan);


  if (inputValue === '' ) {
    alert("You must write your task!");
  } 
  else if(appendDate === ''){
    alert("pick your deadline Date!");
  }
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let noTask=document.getElementById("noTaskLabel");
  noTask.className = "noTaskClass"
  //adding close button
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



