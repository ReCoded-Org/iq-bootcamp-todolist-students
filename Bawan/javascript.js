


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
},

 false);
 //adding current date to header
let dt = new Date();
document.getElementById("datetime").innerHTML=dt.toLocaleString();

// Create a new list item when clicking on the "Add" button
function newElement() {
  
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;

  let t = document.createTextNode(inputValue);

  li.appendChild(t);


//adding date
  let x = document.getElementById("date").value;
    let dateSpan = document.createElement("span");
  dateSpan.className = "dates";
  dateSpan.innerHTML = x
  li.appendChild(dateSpan);

  if (inputValue === '' ) {
    alert("You must write something!");
  } else { 
    
    document.getElementById("myUL").appendChild(li);

  }
  document.getElementById("myInput").value = "";



//adding close button
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



