/*Header*/
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("header").innerHTML = today;

const dateElemnt = document.getElementById("get-date");
dateElemnt.setAttribute('min', `${yyyy}-${mm}-${dd}`);

let listUl = document.getElementById("list-ul");
let p = document.getElementById("pul");
let h3=document.createElement("h3");
let count=0;


let listItemId = 0;
function newLiAdded(){
    let gettingTodo = document.getElementById("get-todo").value; 
    let getdate =document.getElementById("get-date").value;
    let priorities = document.getElementById("drop-list").value;
    let frm = document.getElementsByName('contact-form')[0];
    let li=document.createElement('li');
    li.classList.add("check-line");
    li.innerHTML = `<div> <input id="list-item-checkbox-${listItemId}" type="checkbox" onChange="checkboxChanged(${listItemId})" > <span id="list-item-${listItemId}">${gettingTodo} </span> ${getdate} ${priorities}</div> `;
    let checkFilltext = document.forms["contact-form"]["select-todo"].value;
    let checkFillDtae = document.forms["contact-form"]["selecte-date"].value;
    if (checkFilltext == "" || checkFilltext == null || checkFillDtae == "" || checkFillDtae == null) {
        alert("Please fill the all form");
        return false;
      }
    p.remove();
    count=count+1;
    h3.innerText=`There Is ${count} Task(s)`;
    frm.appendChild(h3);
    listUl.appendChild(li);
    frm.reset();
    listItemId++;
}
function checkboxChanged(id){
  let Box = document.getElementById("list-item-checkbox-"+id);
  let paragraph = document.getElementById("list-item-"+id);
  if (Box.checked == true){
    paragraph.style.textDecoration = "line-through";
  } else {
    paragraph.style.textDecoration = "none";
  }
  // 
}







