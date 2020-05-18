let currentDate = new Date();

let dateH1 = document.getElementById('current-date');

dateH1.innerText = currentDate.getDate() + "/" + (currentDate.getMonth() +1) +"/"+currentDate.getFullYear();

let deadlineInput = document.getElementById('deadline');

deadlineInput.min =  currentDate.toISOString().split("T")[0];
console.log(currentDate.toISOString());

function addTask(event) {
    let description = document.getElementById('description').value;
    let deadline = deadlineInput.value;
    if (description ==='' || deadline ==='' ) {
        alert("Make sure to fill all of the fields");
        return;
      } 
    let task = document.createElement('li');
    task.innerHTML = `<div>${description}</div><div>${deadline}</div>`;
    let tasksList = document.getElementById('tasks-list');
    tasksList.appendChild(task);
    document.getElementById('deadline').value = '';
    document.getElementById('description').value = '';
    document.getElementById('no-tasks-message').remove();
}

