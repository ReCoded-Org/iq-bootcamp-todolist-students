submit = document.getElementById('button');
submit.addEventListener('click',function(){
    date = document.forms[0].date.value;
    todo = document.forms[0].todo.value;
    let newtask=document.createElement("div")
    section = document.getElementById('tasks')
    newtask.innerHTML = (`
    <div id="list" class="btn btn-outline-primary m-1">
            <div>
                <p>Date: ${date}</p>
                <p>Task: ${todo}</p>
            </div>
        </div>
    `)
    section.appendChild(newtask)
})

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("dateflag").innerHTML = m + "/" + d + "/" + y;

