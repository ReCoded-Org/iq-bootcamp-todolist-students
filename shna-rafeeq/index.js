/*Header*/
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("header").innerHTML = today;
/*Main*/

let listUl = document.getElementById("list-ul");
let h1 = document.getElementById("f-h1");
let p = document.getElementById("pul");

function newLiAdded(){
    let gettingTodo = document.getElementById("get-todo").value; 
    let getdate =document.getElementById("get-date").value;
    let frm = document.getElementsByName('contact-form')[0];
    let li=document.createElement('li');
    li.innerText= gettingTodo +" \t "+getdate;
    let checkFilltext = document.forms["contact-form"]["select-todo"].value;
    let checkFillDtae = document.forms["contact-form"]["selecte-date"].value;
    if (checkFilltext == "" || checkFilltext == null || checkFillDtae == "" || checkFillDtae == null) {
        alert("Please fill the all form");
        return false;
      }
    p.remove();
    li.style.fontSize = "30px";
    listUl.appendChild(li);
    frm.reset();
}






