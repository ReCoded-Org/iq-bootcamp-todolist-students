function Today (){
    let dateH1 = document.getElementById('header');
    let todayH1 = document.getElementById('today');
    let updatedDate = new Date();
    let day = String(updatedDate.getDate()).padStart(2, '0');
    let month = String(updatedDate.getMonth() + 1).padStart(2, '0');
    let year = updatedDate.getFullYear();
    updatedDate = `${day} ${month}, ${year}`
    todayH1.innerText = updatedDate;
}
Today();

function addItem (){
    let taskValue = document.getElementById("todo-input").value;
    let unList = document.getElementById('list');
    let listItem = document.createElement('li');
    let deadLineValue = document.getElementById("todo-deadline").value;
    let deadlineView = document.createElement('p')
    let emptyStatus = document.getElementById('no-tasks');
    listItem.style.listStyle = 'none'
    listItem.style.borderBottom = '1px solid #eee'
    listItem.style.fontSize = '1.6rem'
    listItem.innerText = taskValue;
    deadlineView.innerHTML = deadLineValue;

    if (taskValue === "") {
        alert("Enter Task!")

    } else {
        
        emptyStatus.style.display = 'none';
        unList.appendChild(listItem);
        listItem.appendChild(deadlineView);
       
      

    }
    
    document.getElementById('task-form').reset();

}
