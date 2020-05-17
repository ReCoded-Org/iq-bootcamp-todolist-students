/*Header*/
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.getElementById("headerH1").innerHTML = today;
/*Main*/
let listUl = document.getElementById("ul-list");
let p1 = document.getElementById("ul-h");
function newLi(){
    let gettingTodo = document.getElementById("write-todo").value; 
    let gettingdate =document.getElementById("select-date").value;
    let formInput = document.getElementsByName('formName')[0];
    let li=document.createElement('li');
    li.innerText= gettingTodo +"\n "+gettingdate;
    let checkFilltext = document.forms["formName"]["inputText"].value;
    let checkFillDtae = document.forms["formName"]["selecteDate"].value;
    if (checkFilltext == "" || checkFilltext == null || checkFillDtae == "" || checkFillDtae == null) {
        alert("Must Be All Filled Out");
        return false;
      }
    p1.remove();
    listUl.appendChild(li);
    formInput.reset();
}