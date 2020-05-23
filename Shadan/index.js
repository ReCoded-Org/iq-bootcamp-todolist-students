const toDoText=document.getElementById("Today-text")
const todayH1=document.createElement("h1")
todayH1.innerText="Today"
toDoText.appendChild(todayH1)


const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let current_datetime = new Date()
    let formatted_date = months[current_datetime.getMonth()] +" "+ current_datetime.getDate() + " ," + current_datetime.getFullYear()
    const dateH1=document.createElement("h1")

    dateH1.innerText=formatted_date;

const prioreties=document.getElementById('priorities')

const taskArr=[]
toDoText.appendChild(dateH1)

const toDo=document.getElementById("todo")

const inputDate=document.getElementById("date")
inputDate.value==""
const divPropertyandbutton=document.createElement("div")
divPropertyandbutton.setAttribute("class","divPropertyandbutton")


var Mintoday = "May 13 ,2020"
//inputDate.setAttribute('min', Mintoday);
const task=document.getElementById("task")
task.value=""
const inputButton=document.getElementById("button")
const ulList=document.getElementById("list")
inputButton.addEventListener("click",addingTasks)
 
const cancelButton=document.getElementById("cancel")
cancelButton.addEventListener("click",cancelFunc)
const warning=document.createElement("p")
 let i=0
 let storedTasks

function addingTasks(){
    if (task.value=="" || inputDate.value=="")
    {
        warning.innerText="task or date is empty"
        warning.style.color="red"
        toDo.appendChild(warning)
    }else{
      adding()
      
    }
    }

    function adding(){
        warning.innerText=""
        const DateandProperty=document.createElement("p")
        const taskTitle=document.createElement("h3")
        let buttonDelete=document.createElement('input')
        buttonDelete.setAttribute("type","button")
        buttonDelete.setAttribute("value","delete")
        buttonDelete.setAttribute("id","BtnDelete")
        let check=document.createElement('input')
check.setAttribute("type","checkbox")
let div=document.createElement('div')
div.setAttribute("class","divCheck")
let label=document.createElement('label')
label.setAttribute("class","LabelCheck")
label.setAttribute("for","checking")
label.appendChild(check)
div.appendChild(label)
let taskObject={
  task:task.value,
  inputDate:inputDate.value,
  prioreties:prioreties.value
}
taskArr.push(taskObject)
localStorage.setItem("taskArr",JSON.stringify(taskArr))
console.log(localStorage.length)



 
function FunctionCheck(){
    if(check.checked==true)
 { 
    taskTitle.style.textDecoration="line-through"
    label.style.backgroundColor="#66bb6a"
 }else{
    taskTitle.style.textDecoration="none"
    label.style.backgroundColor="#f2f2f2"

 }  
  }
  function deleteFunc(){
    Items.remove()

  }
  buttonDelete.addEventListener('click',deleteFunc)

check.addEventListener('click',FunctionCheck)
    const Items=document.createElement("li")
       Items.id=i
       Items.tabIndex=1;
       
       
       let prioEle=document.createElement('span')
       prioEle.innerText=`${prioreties.value}`
       if(prioEle.innerText==='Priorety 1'){
         prioEle.setAttribute("style", "color:red;font-weight:bold");
         
       }
       else if (prioEle.innerText==='Priorety 2'){
        prioEle.setAttribute("style", "color:gold;font-weight:bold");
       
       }else{
        prioEle.setAttribute("style", "color:green;font-weight:bold");

       }

      DateandProperty.innerHTML=`${inputDate.value}   `;
     DateandProperty.appendChild(prioEle)
      taskTitle.innerText=task.value + "\n";
      
 
 
 
 check.id="checking"

 Items.appendChild(div)
 Items.appendChild(taskTitle)
 Items.appendChild(DateandProperty)
 Items.appendChild(buttonDelete)

 //Items.appendChild(divPropertyandbutton)

 ulList.appendChild(Items)


 task.value=null; 
i++

   
      
}     
for(let j=0;j<JSON.parse(localStorage.getItem("taskArr")).length;j++){
  //taskArr=getItem("taskObject")
 const OldItems=document.createElement('li')
 let TaskObj= JSON.parse(localStorage.getItem("taskArr"))[j]["task"]
 let dateObj=JSON.parse(localStorage.getItem("taskArr"))[j]["inputDate"]
let prioretyObj=JSON.parse(localStorage.getItem("taskArr"))[j]["prioreties"]
 const DateandProperty=document.createElement("p")
 const taskTitle=document.createElement("h3")
 let buttonDelete=document.createElement('input')
 buttonDelete.setAttribute("type","button")
 buttonDelete.setAttribute("value","delete")
 buttonDelete.setAttribute("id","BtnDelete")
 let check=document.createElement('input')
check.setAttribute("type","checkbox")
let div=document.createElement('div')
div.setAttribute("class","divCheck")
let label=document.createElement('label')
label.setAttribute("class","LabelCheck")
label.setAttribute("for","checking")
label.appendChild(check)
div.appendChild(label)
function FunctionCheck(){
if(check.checked==true)
{ 
taskTitle.style.textDecoration="line-through"
label.style.backgroundColor="#66bb6a"
}else{
taskTitle.style.textDecoration="none"
label.style.backgroundColor="#f2f2f2"
}  
}
function deleteFunc(){
  OldItems.remove()

}
buttonDelete.addEventListener('click',deleteFunc)

check.addEventListener('click',FunctionCheck)
OldItems.tabIndex=1;
check.id="checking"
taskTitle.innerText=TaskObj
DateandProperty.innerText= dateObj + "  " + prioretyObj;
OldItems.appendChild(div)
OldItems.appendChild(taskTitle)
OldItems.appendChild(DateandProperty)
OldItems.appendChild(buttonDelete)

ulList.appendChild(OldItems)

task.value=null; 
 
}

    
    
    function cancelFunc(){
      inputDate.value=""
      task.value=""
    }
    var dateToday = new Date(); 

    $(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      date_input.datepicker({
        format: ('MM dd ,yyyy'),
        container: container,
        todayHighlight: true,
        autoclose: true,
        startDate: dateToday
      })
    })
   

