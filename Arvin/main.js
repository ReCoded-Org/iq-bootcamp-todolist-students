const date = new Date();
document.getElementById("time").innerHTML = date.toDateString();

let calender = document.querySelectorAll('.datepicker');
let instances = M.Datepicker.init(calender, {
    autoClose: true,
    minDate: new Date(),
    format: 'mmm dd, yyyy',
    onSelect: function (datte) {
        console.log(datte);

    }
});

if(window.localStorage.getItem("todos") == undefined){
    var todos = [];
    //way to set item 
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

let todolist = document.getElementById('todoList');


function addToDo(){
let dateList =document.getElementById('todoDate').value;
let textList = document.getElementById('todoText').value;
let priorityList = document.getElementById('todoPriority').value;
 


   let li = document.createElement("li");
   let text = document.createTextNode(textList);
   textList.className = "text";
   li.appendChild(text);

   let date = document.createTextNode(dateList);
   dateList.className = 'datte';
   li.appendChild(date);
    
   let priority = document.createTextNode(priorityList);
   priorityList.className = 'priority';
   li.appendChild(priority);


  if (textList === '' || dateList === '') {
    alert('please fill all your fields !');
  }
   else { 

    todolist.appendChild(li);
  }

    document.getElementById("todoText").value = "";

    let edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(textList));
        
    let remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(textList));

    let check = document.createElement('input');
        check.classList.add('check');
        check.innerHTML = `<input type="checkBox"/>`;
        check.addEventListener('click', () => this.check(textList));

        li.appendChild(check);
        li.appendChild(edit);
        li.appendChild(remove);
} 

btn.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(textList.value != ""){
		new item(textList.value);
        todos.push(textList.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		textList.value = "";
	}
}
remove(li);{
    itemBox.parentNode.removeChild(itemBox);
    let index = todos.indexOf(li);
    todos.splice(index, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
}


edit(textList);{
    if(input.disabled == true){
       input.disabled = !input.disabled;
    }
    else{
        input.disabled = !input.disabled;
        let indexof = todos.indexOf(textList);
        todos[indexof] = input.value;
        // Saving element in local storage
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}




