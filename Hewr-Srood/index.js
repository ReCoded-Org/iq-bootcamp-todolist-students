const dateH = document.querySelector("#current-date");

// inputs
const dateInput = document.querySelector("#date-input");
const taskInput = document.querySelector("#task-input");

//utilites for creating new lists
let taskDescription, taskDeadline, listItem;
const listUl = document.querySelector("#list-group");
const listClasses = [
  "list-group-item",
  "d-flex",
  "list-animate",
  "mt-1",
  "justify-content-between",
];
// checkboxes
const boldCheckbox = document.querySelector("#bold-checkbox");
const italicCheckbox = document.querySelector("#italic-checkbox");

//htmlLang is used to change order of spans while appending
const htmlLang = document.querySelector("html").getAttribute("lang");

//get the current date
function getCurrentDate() {
  let today = new Date(),
    day = today.getDate(),
    month = today.getMonth() + 1,
    year = today.getFullYear();
  //the default formating of month and day is mm and dd so we can't retrive day/month with single number
  day < 10 ? (day = "0" + day) : day;
  month < 10 ? (month = "0" + month) : month;
  return year + "-" + month + "-" + day;
}

//set today header function
function setTodayDateHeader(value) {
  dateH.innerText = value;
}

//set today header to current date
setTodayDateHeader(getCurrentDate());

//setting minimun input to our date input
dateInput.setAttribute("min", getCurrentDate());

document.querySelector("#form").addEventListener("submit", addList);

function addList(e) {
  // for removing the refresh while submiting we'll add prevent default
  e.preventDefault();

  //creating 2 spans for our list item
  taskDescription = document.createElement("span");
  taskDeadline = document.createElement("span");

  // creating the list item for the list group
  listItem = document.createElement("li");

  // adding the classes to our spans
  taskDescription.classList.add("task-description");
  taskDeadline.classList.add("task-deadline");

  //setting our input values to the spans
  taskDescription.innerText = taskInput.value;
  taskDeadline.innerText = dateInput.value;

  // checkbox cinditions for making the the text bold or italic or both
  boldCheckbox.checked
    ? (taskDescription.style.fontWeight = "bold")
    : (taskDescription.style.fontWeight = "noraml");
  italicCheckbox.checked
    ? (taskDescription.style.fontStyle = "italic")
    : (taskDescription.style.fontStyle = "normal");

  // adding all list classes to our new li
  for (let item of listClasses) {
    listItem.classList.add(item);
  }

  // changing the order of spans according to the language
  if (htmlLang == "en") {
    listItem.appendChild(taskDescription);
    listItem.appendChild(taskDeadline);
    listUl.appendChild(listItem);
  } else {
    listItem.appendChild(taskDeadline);
    listItem.appendChild(taskDescription);
    listUl.appendChild(listItem);
  }

  // setting the values of our list to null to prevent access them from the console
  taskInput.value = null;
  dateInput.value = null;
  taskDescription = null;
  taskDeadline = null;
  listItem = null;
}

// adding animation while clicking on submit(add) button
function btn_animate() {
  document.querySelector(".submit-btn").classList.add("btn-animate");

  setTimeout(function () {
    document.querySelector(".submit-btn").classList.remove("btn-animate");
  }, 500);
}
