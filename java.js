function time(){

    let mytime=new Date();
    let myday=mytime.getDate();
    let mymonth=mytime.getMonth()+1;
    let myyear=mytime.getFullYear();
    let hours = mytime.getHours();
    let minutes = mytime.getMinutes();
    let seconds = mytime.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('timeanddate').innerHTML =
    
    myday+"/"+mymonth+"/"+myyear+"<br />"+hours+":"+minutes+":"+seconds;
    
    let t = setTimeout(time, 500);
    }
    function checkTime(i){
    
        if(i<10){i="0"+i};
        return i;
    }


    
function addtodo(){


  /*  let deadline1=document.getElementsByTagName("INPUT")[0].value;
    let textoftodo=document.getElementsByTagName("INPUT")[1].value;
    
    document.getElementById("showthetodoanddate").innerHTML= deadline1+ "<br>"+textoftodo;
    */

    let li=document.createElement("li")
    let deadline1=document.getElementsByClassName("deadline")[0].value;
   
    let textoftodo=document.getElementsByTagName("INPUT")[1].value;

let all=textoftodo+deadline1;

let t = document.createTextNode(all);
  
li.appendChild(t);


    if (all === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementsByTagName("INPUT")[0].value="";
    document.getElementsByTagName("INPUT")[1].value="";

    let span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
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

 