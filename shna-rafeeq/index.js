/*Header*/
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

function taskDate(dateMilli) {
  let d = (new Date(dateMilli) + '').split(' ');
  d[2] = d[2] + ',';

  return [d[1], d[2], d[3]].join(' ');
}
let datemilli = Date.parse(today);
document.getElementById("header").innerHTML =taskDate(datemilli);

const dateElemnt = document.getElementById("get-date");
dateElemnt.setAttribute('min', `${yyyy}-${mm}-${dd}`);

let listUl = document.getElementById("list-ul");
let p = document.getElementById("pul");



const gettingTodo = document.getElementById("get-todo"); 
const getdate =document.getElementById("get-date");
const priorities = document.getElementById("drop-list");

let listItemId = 0;
let arr = [];


function newLiAdded(overrideData = {}, considerEmpty = true){

    const defualtValues = {
      gettingTodo:  gettingTodo.value,
      getdate : getdate.value,
      priorities : priorities.value,
      completed: false,
    };
    const liObject = {
      ...defualtValues,
      ...overrideData,
    }

    let frm = document.getElementsByName('contact-form')[0];
    let li=document.createElement('li');

    li.id=`list-item-all-content-${listItemId}`;
    li.innerHTML = `<div> <input ${ (liObject.completed)? 'checked' : '' } class="checkBox" id="list-item-checkbox-${listItemId}" type="checkbox" onChange="checkboxChanged(${listItemId})" >
     <span style="${ (liObject.completed)? ' text-decoration: line-through !important;' : '' }" id="list-item-${listItemId}">${liObject.gettingTodo} </span>
     <p>${liObject.getdate}</p><p> ${liObject.priorities}</p> </div>
    <span class="recycle" id="list-item-button-${listItemId}" onclick="removeLi(${listItemId})">🗑️<span> `;
    
    let checkFilltext = document.forms["contact-form"]["select-todo"].value;
    let checkFillDtae = document.forms["contact-form"]["selecte-date"].value;
    if (considerEmpty &&( checkFilltext == "" || checkFilltext == null || checkFillDtae == "" || checkFillDtae == null ) ) {
        alert("Please fill the all form");
        return false;
      }
    p.remove();
      //expired date
    if(new Date(liObject.getdate) < new Date()){
      li.style.backgroundColor = "#650000";
    }
    arr.push(liObject);
    localStorage.setItem("array", JSON.stringify(arr));
  
    listUl.appendChild(li);
    frm.reset();
    listItemId++;
}


function checkboxChanged(id){
  let Box = document.getElementById("list-item-checkbox-"+id);
  let paragraph = document.getElementById("list-item-"+id);
  let arr = JSON.parse(localStorage.getItem("array"));
  if (Box.checked == true){
    arr[id].completed = true;
    paragraph.style.textDecoration = "line-through";
  } else {
    arr[id].completed = false;
    paragraph.style.textDecoration = "none";
  }
  localStorage.setItem("array", JSON.stringify(arr));
}

function removeLi(id) {
  // let allLi = document.getElementById("list-item-all-content-"+id);
  // allLi.remove();
  let arr = JSON.parse(localStorage.getItem("array"));
  arr.splice(id, 1);
  localStorage.setItem("array", JSON.stringify(arr));
}


function loadStorageLi(){
  let arr = JSON.parse(localStorage.getItem("array"));
  arr.forEach((todo)=>{
    newLiAdded({
      getdate: todo.getdate,
      gettingTodo: todo.gettingTodo,
      priorities: todo.priorities,
      completed: todo.completed,

    }, false)
  })
console.log(arr);
}

loadStorageLi();
