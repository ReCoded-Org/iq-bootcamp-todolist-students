var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("newTask-Date").setAttribute("min", today);

function addTask() {
  let taskDate = document.getElementById("newTask-Date").value;
  let task = document.getElementById("newTask").value;
  let ul = document.getElementById("ulmenu");
  $("#ulmenu").append(
    `<li>${task}` +
      `<button class="btn float-right" onclick="delItem()"><i class="fa fa-trash delete_icon" style="font-size:1.5rem;color:red"></i></button>` +
      `<button class="btn float-right" onclick="doneItem()"><i class="fa fa-check-circle" style="font-size:1.5rem;color:green"></i></button>` +
      `<br>` +
      `${taskDate}</li>`
  );
}

function delItem() {
  event.target.closest("li").remove();
}

function doneItem() {
  event.target.closest("li").setAttribute("class", "selected");
}
