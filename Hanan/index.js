/*Header*/
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.getElementById("headerH1").innerHTML = today;
/*Main*/
let listUl = document.getElementById("ul-list");
let h2 = document.getElementById("ul-h");

let settingMin =  document.getElementById("select-date");
settingMin.setAttribute('min',`${yyyy}-${mm}-${dd}`);

let h3=document.createElement("h3");

let count=0;
let listLiId=0;

function newLi(){
    let gettingTodo = document.getElementById("write-todo").value; 
    let gettingdate =  document.getElementById("select-date").value;
    let priority =  document.getElementById("add-priorities").value;
    let formInput = document.getElementsByName('formName')[0];
    let li=document.createElement('li');


    li.innerHTML=`<div id="list-item-all-content-${listLiId}"><div><input type="checkbox" id="list-item-checkbox-${listLiId}"  onChange="checkboxChanged(${listLiId})"> <span id="list-item-${listLiId}">${gettingTodo} </span> </div>
    <div>${gettingdate }   ${ priority} </div><div display="inline;"><input type="button" id="list-item-button-${listLiId}" onclick="remove(${listLiId})" value="Remove" ></div></div>`;


    let checkFilltext = document.forms["formName"]["inputText"].value;
    let checkFillDtae = document.forms["formName"]["selecteDate"].value;
    if (checkFilltext == "" || checkFilltext == null || checkFillDtae == "" || checkFillDtae == null) {
        alert("⚠️ Must Be All Filled Out");
        return false;
      }
     
      count=count+1;
      h3.innerText=`There Is ${count} Task(s)`;
      formInput.appendChild(h3);
      h2.remove();
      listUl.appendChild(li);
      formInput.reset();
      listLiId++;
}

function checkboxChanged(id){
  let Box = document.getElementById("list-item-checkbox-"+id);
  let paragraph = document.getElementById("list-item-"+id);
  if (Box.checked == true){
    paragraph.style.textDecoration = "line-through";
  } else {
    paragraph.style.textDecoration = "none";
  } 
}

function remove(id) {
  let button = document.getElementById("list-item-button-"+id);
  let allLi = document.getElementById("list-item-all-content-"+id);

  allLi.remove();
}