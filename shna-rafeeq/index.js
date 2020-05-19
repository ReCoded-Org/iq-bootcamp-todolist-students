/*Header*/
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("header").innerHTML = today;

const dateElemnt = document.getElementById("get-date");
dateElemnt.setAttribute('min', `${yyyy}-${mm}-${dd}`);

let listUl = document.getElementById("list-ul");
let p = document.getElementById("pul");



function newLiAdded(){
    let gettingTodo = document.getElementById("get-todo").value; 
    let getdate =document.getElementById("get-date").value;
    let priorities = document.getElementById("drop-list").value;
    let frm = document.getElementsByName('contact-form')[0];
    let li=document.createElement('li');
    li.innerHTML = `<div> <input type="checkbox" class="checked"> ${gettingTodo} ${getdate} ${priorities} </div> `;
    let checkFilltext = document.forms["contact-form"]["select-todo"].value;
    let checkFillDtae = document.forms["contact-form"]["selecte-date"].value;
    if (checkFilltext == "" || checkFilltext == null || checkFillDtae == "" || checkFillDtae == null) {
        alert("Please fill the all form");
        return false;
      }
    p.remove();
   
    listUl.appendChild(li);
    frm.reset();
}






