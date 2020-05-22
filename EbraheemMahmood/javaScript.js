/* get the curent date */
const a = document.getElementsByClassName('theDateOfToday')[0];
let today = new Date()
let day = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()



if(day<10) {
    day ='0' + day
}
if(month<10){
    month = '0' + month
}
let theDate = `${year}-${month}-${day}`

a.textContent = theDate;



/* declare some varables */

let mainONe = document.getElementsByClassName('theMainCalender')[0]
let theMissions = document.getElementsByClassName('theMissions')[0]
let Cal = document.getElementById('myCalendar')
let theDates = document.getElementById('theDate')
theDates.setAttribute('min',today)
const saveChanges = document.getElementsByClassName('saveChanges')[0]
const TaskObjectsArr = []
const theTaskObj = {}
 function addTask (){
    let taskDate  = document.getElementById('theDate').value
    let taskTitle = document.getElementById('theHead').value
    let taskContainer = document.createElement('div')
    if(taskDate !=0 && taskTitle !=0){
    taskContainer.setAttribute('class','taskContainer')
    taskContainer.innerHTML = `<h4>You Have:</h4><div class='taskTitle'><p>${taskTitle}</p></div><div class='taskDate'><p>Deadline : ${taskDate}<p></div>`
        
        theMissions.appendChild(taskContainer)
    
    for(i=theMissions.childElementCount;i<theMissions.childElementCount+1;i++){
        theTaskObj[i] = {
            yourTitle : taskTitle,
            yourDate : taskDate
        }
        TaskObjectsArr.push(taskTitle)     
   
    }
    
   
       
   

    
        window.taskDate = taskDate
        window.taskTitle = taskTitle
    
}

   
if(taskTitle !=0 && taskDate!=0){
    document.getElementsByClassName('theNonP')[0].style.visibility = 'hidden'
    }


}

 let exampleModalCenter = document.getElementById('exampleModalCenter')
 saveChanges.addEventListener('click',function () {
    exampleModalCenter.setAttribute('aria-hidden',"true")
    exampleModalCenter.removeAttribute('aria-modal',"true")
    let fade  = document.getElementsByClassName('fade')[0]
    fade.style.display= 'none'
    fade.classList.toggle('show')
    let modal_backdrop  = document.getElementsByClassName('modal-backdrop')[0]
    modal_backdrop.style.display= ' none'
})
 const taskContainer = document.getElementById('taskContainer')
 
 /////////////////////////
/*
/* get the input date and put it inside div 
function getTheHead(){
 
    let dateVar = theDates.value
    //creating the divs containers and append it
    let theMi = document.createElement('div') 
    theMi.setAttribute('class','theMi')
    let newDiv = document.createElement('h5')
    newDiv.setAttribute('class','myDiv2')
    theMi.appendChild(newDiv)
    let theHead = document.getElementById('theHead').value
    let myDiv = document.createElement('h5')
    myDiv.setAttribute('class','myDiv')
    theMi.appendChild(myDiv)
    theMissions.appendChild(theMi)
    //put the task details in an object
    let task = {
        theTitle:theHead,
        theTime:dateVar
    }
    myDiv.innerHTML = task.theTime
    newDiv.innerHTML =task.theTitle

    let delButton = document.createElement('button')
    delButton.className = 'salam'
    theMi.appendChild(delButton)
    function deleteTask(){
        myDiv.remove(newDiv)
        console.log('sd')
    }
    delButton.setAttribute("onclick",deleteTask())

   
   
   
    if(myDiv.innerHTML==''){
        theMi.remove(theMi)
    }
    if(theMissions.childElementCount>0){
        let theNonP = document.getElementsByClassName('theNonP')[0]
        theNonP.style.visibility = 'hidden'
    
    }

    
}


function toggleClass(){
    let blackSC = document.getElementsByClassName('blackScreen')[0]
    mainONe.classList.toggle('showIt');
    //blackSC.classList.toggle('showIt')
}*/