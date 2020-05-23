// Date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
// formatting date
function taskDate(dateMilli) {
  let d = (new Date(dateMilli) + '').split(' ');
  d[2] = d[2] + ',';
  return [d[1], d[2], d[3]].join(' ');
}

let datemilli = Date.parse(today);
document.getElementById("headerH1").innerHTML =taskDate(datemilli);
// past date does not accepted
let settingMin =  document.getElementById("select-date");
settingMin.setAttribute('min',`${yyyy}-${mm}-${dd}`);

let listUl = document.getElementById("ul-list");
let h2 = document.getElementById("ul-h");
let listLiId=0;
const gettingTodo = document.getElementById("write-todo"); 
const gettingdate =  document.getElementById("select-date");
const priority =  document.getElementById("add-priorities");

let h3=document.createElement("h3");

let arr=[];

function newLi(overrideData = {}, considerEmpty = true){
  const defualtValues = {
     gettingTodo: gettingTodo.value,
     gettingdate: gettingdate.value,
     priority: priority.value,
     completed: false
  };
  const liObject = {
    ...defualtValues,
    ...overrideData
  }
    let formInput = document.getElementsByName('formName')[0];
    let li=document.createElement('li');

    li.id=`list-item-all-content-${listLiId}`;

    li.innerHTML=`<div><input ${ (liObject.completed)? 'checked' : '' } type="checkbox" id="list-item-checkbox-${listLiId}"  onChange="checkboxChanged(${listLiId})"> <span id="list-item-${listLiId}" style="${ (liObject.completed)? ' text-decoration: line-through !important;' : '' }" >${liObject.gettingTodo} </span> </div>
    <div>${liObject.gettingdate }   ${ liObject.priority} </div><div display="inline;"><input type="button" id="list-item-button-${listLiId}" onclick="removeLi(${listLiId})" value="&#10006;" class="remove" title="Remove Task"></div>`;

    let checkFilltext = document.forms["formName"]["inputText"].value;
    let checkFillDtae = document.forms["formName"]["selecteDate"].value;
    if (considerEmpty &&( checkFilltext == "" || checkFilltext == null || checkFillDtae == "" || checkFillDtae == null ) ) {
        alert("⚠️ Must Be All Filled Out");
        return false;
      }
      
      h2.remove();

    if(new Date(liObject.gettingdate) < new Date()){
      li.style.backgroundColor = "#650000";
    }

    arr.push(liObject);
    localStorage.setItem("array", JSON.stringify(arr));

      h3.innerText=`Your Task(s)`;
      formInput.appendChild(h3);
      listUl.appendChild(li);
      formInput.reset();
      listLiId++;
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
  let allLi = document.getElementById("list-item-all-content-"+id);
  allLi.remove();
  let arr = JSON.parse(localStorage.getItem("array"));
  arr.splice(id, 1);
  localStorage.setItem("array", JSON.stringify(arr));
}

function loadStorageLi(){
  let arr = JSON.parse(localStorage.getItem("array"));
  arr.forEach((todo)=>{
    newLi({
      gettingTodo: todo.gettingTodo,
      gettingdate: todo.gettingdate,
      priority: todo.priority,
      completed: todo.completed
    }, false)
  })
console.log(arr);
}
loadStorageLi();