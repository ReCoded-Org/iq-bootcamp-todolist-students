let masterList = [];
window.onload = function () {
  if (masterList !== null) {
    for (let j = 0; j < localStorage.length; j++) {
      masterList[j] = JSON.parse(localStorage.getItem("task" + j)); //get data from storage
      let storedTask = masterList[j];
      let entry = document.createElement("li"); 
      let list = document.getElementById("ulmenu"); 
      entry.innerHTML = storedTask; 
      list.appendChild(entry); 
    }
  } else {
    //if nothing exist in storage, keep todos array empty
    masterList = [];
  }
};
//-------- Defining Calender Start date --------
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;
document.getElementById("newTask-Date").setAttribute("min", today);

//----------Adding Task to List Function --------------
function addTask() {
  //------------Changing Month format to Manth's Name ------------
  let date = new Date($("#newTask-Date").val());
  let dateArr = changeMonthFormat(date); //----call function that changes Month's format
  let task = { task: document.getElementById("newTask").value };
  let ul = document.getElementById("ulmenu");

  //--------------- Defining the Array of Objects
  let arrObj = [dateArr, task];
  let li = document.createElement("li");
  let inner = `${arrObj[1].task}`;
  inner += `<button class="btn float-right" onclick="delItem()"><i class="fa fa-trash delete_icon" style="font-size:1.5rem;color:red"></i></button>`;
  inner +=
    '<button class="btn float-right" onclick="doneItem()"><i class="fa fa-check-circle" style="font-size:1.5rem;color:green"></i></button>';
  inner += `<br>`;
  inner +=
    `${arrObj[0][0].month}` +
    "-" +
    `${arrObj[0][1].day}` +
    "-" +
    `${arrObj[0][2].year}`;
  li.innerHTML = inner;
  $("#ulmenu").append(inner);
  clearInput();
  masterList.push(inner);
  //--------------Adding the task -------------------
  for (let j = 0; j < masterList.length; j++)
    window.localStorage.setItem("task" + j, JSON.stringify(masterList[j]));
}
function clearInput() {
  document.getElementById("form").reset();
}
function changeMonthFormat(date) {
  const monthArr = [
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
    "December",
  ];
  let day = { day: date.getDate() };
  let month = date.getMonth();
  let year = { year: date.getFullYear() };
  let monthName = { month: monthArr[month] };
  let dateAfterFormat = [monthName, day, year];
  return dateAfterFormat;
}

function delItem() {
  event.target.closest("li").remove();
}

function doneItem() {
  event.target.closest("li").setAttribute("class", "selected");
}

