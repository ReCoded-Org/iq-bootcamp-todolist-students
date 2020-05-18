const toDoText=document.getElementById("Today-text")
const todayH1=document.createElement("h1")
todayH1.innerText="Today"
toDoText.appendChild(todayH1)


const date= new Date();
const day=new Date().getDate();
const month=new Date().getMonth() + 1;
const year=new Date().getFullYear();
const dateH1=document.createElement("h1")
dateH1.innerText=`${day} / ${month} / ${year}`;
toDoText.appendChild(dateH1)

const toDo=document.getElementById("todo")

const inputDate=document.getElementById("date")
inputDate.value==""
const task=document.getElementById("task")
task.value=""
const inputButton=document.getElementById("button")
const ulList=document.getElementById("list")
inputButton.addEventListener("click",adding)

const warning=document.createElement("p")
 let i=0
function adding(){
    if (task.value=="" || inputDate.value=="")
    {
        warning.innerText="task or date should not be empty"
        warning.style.color="red"
        toDo.appendChild(warning)

    }else{
        warning.innerText=""
       const Items=document.createElement("li")
       Items.id=i+1;
       Items.tabIndex=1
 Items.innerText=task.value +"\n"+ inputDate.value; 
 ulList.appendChild(Items)
 task.value=null; 
 i=i+1;
    }
}
