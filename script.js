let n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("ToDate")
.innerHTML = m + "/" + d +"/" + y;

document.getElementById("addTodo").addEventListener('click', function(toDoEvent) {
    let text = document.getElementById("text").value;
    let deadline = document.getElementById("deadline").value;
    let addedToDos = document.getElementById("addedToDos");
    if (text == "", deadline == "") {
        alert("Add a ToDo!");
    }

    else {
        
        let newToDo = document.createElement('li');
        newToDo.innerHTML = `<div>${text}</div><div>${deadline}</div>`;
        addedToDos.appendChild(newToDo);

        text = document.getElementById('text').value ='';
        deadline = document.getElementById('deadline').value ='';
    }
});