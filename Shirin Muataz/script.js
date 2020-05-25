let masterList = [];
window.onload = function () {
  if (localStorage.length > 1) {
    for (let j = 0; j < localStorage.length; j++) {
      masterList[j] = JSON.parse(localStorage.getItem("task" + j)); //get data from storage
      if ((typeof masterList[j] !== 'undefined') && (masterList[j] !== null)) {
        let storedTask = masterList[j];
        let entry = document.createElement("li");
        let list = document.getElementById("ulmenu");
        entry.innerHTML = storedTask;
        list.appendChild(entry);

      }
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
  if (document.getElementById("newTask-Date").value !== "" && document.getElementById("newTask") !== "") {
    let date = new Date($("#newTask-Date").val());
    option = { month: "long", day: "numeric", year: "numeric" };
    let dateArr = { date: date.toLocaleDateString("en-US", option) };
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
    inner += `${arrObj[0].date}`;
    li.innerHTML = inner;
    $("#ulmenu").append(li);
    clearInput();
    masterList.push(inner);
    //--------------Adding the task -------------------
    for (let j = 0; j < masterList.length; j++)
      window.localStorage.setItem("task" + j, JSON.stringify(masterList[j]));
  }
  else
    alert("Please Enter Task Date and Task");
}
function clearInput() {
  document.getElementById("form").reset();
}
function delItem() {
  event.target.closest("li").remove();
}

function doneItem() {
  event.target.closest("li").setAttribute("class", "selected");
}

function clearLocalMem() {
  localStorage.clear();
  $("#ulmenu").empty();
}
