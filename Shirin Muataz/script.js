function addTask() {
  let taskDate = document.getElementById("newTask-Date").value;
  let task = document.getElementById("newTask").value;
  let ul = document.getElementById("ulmenu");
  $("#ulmenu").append(`<li>${task}` + `<br>` + `${taskDate}</li>`);
}
