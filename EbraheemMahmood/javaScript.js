/* get the curent date */
const a = document.getElementsByClassName('theDateOfToday')[0];
let today = new Date()
let day = today.getDate()
let month = today.getMonth()+1
let year = today.getFullYear()
let datheInInput  = document.getElementById('theDate')
if(day<10) {
    day ='0' + day
}
if(month<10){
    month = '0' + month
}
let theDate = `${year}-${month}-${day}`
a.textContent = theDate;



/* declare some varables */
let monthsNames = ['Jan','Feb','Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let mainONe = document.getElementsByClassName('theMainCalender')[0]
let theMissions = document.getElementsByClassName('theMissions')[0]
const theButtons = `<div><div class="iContainer"><i class="far fa-circle"></i></div>
<svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
    </svg></div>`

let theDates = document.getElementById('theDate')
theDates.setAttribute('min',theDate)
const saveChanges = document.getElementsByClassName('saveChanges')[0]
let TaskObjectsArr = []
const theTaskObj = {}
let convertToStr = ''
const taskContainer = document.getElementsByClassName('taskContainer')
let taskTitle1 = document.getElementById('theHead')

/* This Function Will Add The Task*/



 function addTask (){
     
    /* Get The Value Of The Two Inputs*/
    
    let taskDate  = document.getElementById('theDate').value
    let taskTitle = document.getElementById('theHead').value

    
    let splitTaskDate = document.getElementById('theDate')
    splitTaskDate = splitTaskDate.value.split('-')
    splitTaskDate = splitTaskDate.reverse()
    let aaaaa = splitTaskDate[1] = splitTaskDate[1]-'0'
    splitTaskDate[1] = monthsNames[splitTaskDate[1]-1]
    splitTaskDate.unshift(splitTaskDate[1])
    splitTaskDate.splice(2,1) 
    splitTaskDate = splitTaskDate.join('-')
    let setAttrValue = document.getElementById('theDate')
    window.splitTaskDate = splitTaskDate
    if(splitTaskDate != "-" && !taskTitle1.value == 0){
    for(i=theMissions.childElementCount-1;i==theMissions.childElementCount-1;i++){
        theTaskObj[i] = {
        
            yourTitle : taskTitle,
            yourDate : splitTaskDate,
            isItDone : 'No',
           Priority :document.getElementById('Priority').value
    }
        TaskObjectsArr.push(theTaskObj[i])
            
        convertToStr = JSON.stringify(TaskObjectsArr)
            storeMyObj = localStorage.setItem('theObj',convertToStr)
            
            
        window.storeMyObj = storeMyObj
        
        }
            
            
        if(taskDate !=0 && taskTitle !=0){
            doneFun()

            let taskContainer = document.createElement('ul')
            taskContainer.setAttribute('class','taskContainer')
            let myTitleLi = document.createElement('li')
            myTitleLi.setAttribute('class','taskTitle')
            myTitleLi.innerHTML = `${taskTitle}`
            let myDateLi = document.createElement('li')
            myDateLi.setAttribute('class','taskDate')
            myDateLi.innerHTML = `Deadline :${splitTaskDate}`
            let myPriority = document.createElement('li')
            myPriority.setAttribute('class','myPriority')
            myPriority.innerHTML = `${TaskObjectsArr[i].Priority}`
            taskContainer.innerHTML = theButtons
            taskContainer.appendChild(myTitleLi)
            taskContainer.appendChild(myDateLi)
            taskContainer.appendChild(myPriority)
            theMissions.appendChild(taskContainer)
            document.getElementById('theDate').value = ''
            document.getElementById('theHead').value =''

                    removeItem()
                    doneFun()
                    PriorityCheck()
                    showTheParagraph()
            }
              
    }
    

}  

 


 
    

let getTheAttay = localStorage.getItem('theObj')
let backToArr = JSON.parse(getTheAttay)
TaskObjectsArr = backToArr.concat(TaskObjectsArr)

            
   
for(let i=theMissions.childElementCount; i<TaskObjectsArr.length;i++){
    let taskContainer = document.createElement('ul')
                    taskContainer.setAttribute('class','taskContainer')
                    let myTitleLi = document.createElement('li')
                    myTitleLi.setAttribute('class','taskTitle')
                    myTitleLi.innerHTML = `${TaskObjectsArr[i].yourTitle}`
                    let myDateLi = document.createElement('li')
                    myDateLi.setAttribute('class','taskDate')
                    myDateLi.innerHTML = `Deadline :${TaskObjectsArr[i].yourDate}`
                    let myPriority = document.createElement('li')
                     myPriority.setAttribute('class','myPriority')
                     myPriority.innerHTML = `${TaskObjectsArr[i].Priority}`
                    taskContainer.innerHTML = theButtons
                    taskContainer.appendChild(myTitleLi)
                    taskContainer.appendChild(myDateLi)
                    taskContainer.appendChild(myPriority)
                    doneFun()
                    theMissions.appendChild(taskContainer)
                    if(TaskObjectsArr[i].isItDone == 'Yes'){
                        taskContainer.classList.add('done')
                        taskContainer.getElementsByClassName('far')[0].classList.remove('fa-circle')
                        taskContainer.getElementsByClassName('far')[0].classList.add('fa-check-circle')
                    }
                    

                    doneFun()
                    showTheParagraph()
    
}




function removeItem(){
    let theTrash = document.querySelectorAll('.bi-trash-fill')
    theTrash.forEach(Element=>{
    
        Element.addEventListener('click',function(){
            Element.parentNode.parentNode.remove()
            let Ul1 = Element.parentNode.parentNode
            let aultitle = Ul1.getElementsByClassName('taskTitle')[0]
            let auldate = Ul1.getElementsByClassName('taskDate')[0]
                let checkTitle = aultitle.textContent
                let checkDate = auldate.textContent.split(':')[1]
                let index = 0
                for(i=0;i<TaskObjectsArr.length;i++){
                    if(TaskObjectsArr[i].yourTitle == checkTitle && TaskObjectsArr[i].yourDate == checkDate ){
                        index = i
                        TaskObjectsArr.splice(index,1)
                        window.index = index
                        PriorityCheck()

                        convertToStr = JSON.stringify(TaskObjectsArr)
                        storeMyObj = localStorage.setItem('theObj',convertToStr)
                        showTheParagraph()

                        
                    }
                }
                
                
               
        })
    
    })     
        
}
function showTheParagraph(){    
    if(theMissions.childElementCount==0){
        document.getElementsByClassName('theNonP')[0].style.visibility = 'visible'
        }
    else{
        document.getElementsByClassName('theNonP')[0].style.visibility = 'hidden'

    } 
}
function doneFun(){
    let checked = document.querySelectorAll('.iContainer')
    checked.forEach(checkIcon=>{
        checkIcon.addEventListener('click',function(){
            let ul = checkIcon.parentNode.parentNode
            let aultitle = ul.getElementsByClassName('taskTitle')[0]
            let auldate = ul.getElementsByClassName('taskDate')[0]

            let checkTitle = aultitle.textContent
            let checkDate = auldate.textContent.split(':')[1]
            let index = 0
            for(i=0;i<TaskObjectsArr.length;i++){
                if(TaskObjectsArr[i].yourTitle == checkTitle && TaskObjectsArr[i].yourDate == checkDate ){
                    index = i
                    ul.classList.toggle('done')
                    let checkit = checkIcon.getElementsByClassName('far')[0]
                    if(checkit.classList.contains('fa-check-circle')){
                        checkit.classList.remove('fa-check-circle')
                        checkit.classList.add('fa-circle')
                    }
                    else{
                        checkit.classList.remove('fa-circle')
                        checkit.classList.add('fa-check-circle')
                    }
                   
                    if(ul.classList.contains('done') ){
                    TaskObjectsArr[i].isItDone = 'Yes'
                    }
                    else{
                        TaskObjectsArr[i].isItDone = 'No'
                    }
                    window.index = index
                    convertToStr = JSON.stringify(TaskObjectsArr)
                    storeMyObj = localStorage.setItem('theObj',convertToStr)
                }
            }
        })
    })
}
    let yourDateCompare =theDate.split('-')
    yourDateCompare = yourDateCompare.reverse()
    let cccc = yourDateCompare[1] = yourDateCompare[1]-'0'
    yourDateCompare.unshift(yourDateCompare[1])
    yourDateCompare.splice(2,1)
   yourDateCompare[0] = monthsNames[yourDateCompare[0]-1]
   for(i=0;i<TaskObjectsArr.length;i++){
    if(TaskObjectsArr[i].yourDate.split('-')[2]<=yourDateCompare[2]){
        if(monthsNames.indexOf(TaskObjectsArr[i].yourDate.split('-')[0])
        ==monthsNames.indexOf(yourDateCompare[0])){
            if(TaskObjectsArr[i].yourDate.split('-')[1]<yourDateCompare[1]){
                
                taskContainer[i].style.backgroundColor = '#F0E8E0'
            }

        }
        if(monthsNames.indexOf(TaskObjectsArr[i].yourDate.split('-')[0])
        <monthsNames.indexOf(yourDateCompare[0])){
            taskContainer[i].style.backgroundColor = '#F0E8E0'
                
        }
    }
    
   }
  function PriorityCheck() {
      for(i=0;i<TaskObjectsArr.length;i++){
          if(TaskObjectsArr[i].Priority == 'Priority1'){
              taskContainer[i].getElementsByClassName('myPriority')[0].style.color ='red'
          }
          if(TaskObjectsArr[i].Priority == 'Priority2'){
            taskContainer[i].getElementsByClassName('myPriority')[0].style.color ='orange'
          }
          if(TaskObjectsArr[i].Priority == 'Priority3'){
            taskContainer[i].getElementsByClassName('myPriority')[0].style.color ='gray'
          }
      }
  }
removeItem()
PriorityCheck()