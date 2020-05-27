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
    masterList = [];
  }
  //checkDate(document.getElementById("#ulmenu"));
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
    let e = document.getElementById("priority");
    let strUser = e.options[e.selectedIndex].value;
    let ul = document.getElementById("ulmenu");

    //--------------- Defining the Array of Objects
    let arrObj = [dateArr, task];
    let li = document.createElement("li");
    let inner = `<div>` + `${arrObj[1].task}`;
    inner += `<button class="btn float-right" onclick="delItem()"><i class="fa fa-trash delete_icon" style="font-size:1.5rem;color:red"></i></button>`;
    inner +=
      '<button class="btn float-right" onclick="doneItem()"><i class="fa fa-check-circle" style="font-size:1.5rem;color:green"></i></button>';
    inner += `</div>`;
    inner += `<div class="displayLi">`
    inner += `${arrObj[0].date}`;
    switch (strUser) {
      case "priority 1":
        inner += `<p class="priority1">` + `${strUser}` + `</p>`;
        break;
      case "priority 2":
        inner += `<p class="priority2">` + `${strUser}` + `</p>`;
        break;
      case "priority 3":
        inner += `<p class="priority3">` + `${strUser}` + `</p>`;
    }
    li.innerHTML = inner;
    $("#ulmenu").append(li);
    clearInput();
    masterList.push(inner);
    //--------------Adding the task to local storage-------------------
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
  event.target.closest("div").setAttribute("class", "selected");
}

function clearLocalMem() {
  localStorage.clear();
  $("#ulmenu").empty();
}

//-------------to check the expired tasks-------------- Need to change the entire infrastructure, Like changing created <li> contents to objects to be able to reach task's date
/*function checkDate(ulmenu) {
  let ulm = document.getElementById("ulmenu");
  if (ulm !== null) {
    let li = ulm.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const liText = document.querySelector(`#ulmenu ${ulm[i]}`);         //ulm[i].getElementsByTagName("li").innerText;
      const x = liText.length;
      let startChkDate = x - 12; //-----assuming date resides at the end of <li> contents, which is the case before adding Priority
      const ChkDate = liText.slice(startChkDate, liText.length);
      const taskDate = new Date(ChkDate.val());
      const crrentDate = new Date();
      if (taskDate < crrentDate)
        ulm[i].getElementsByTagName("li").style.backgroundColor = "red";
    }
  }
}*/