
var d = new Date();

let h=document.getElementById("h");
h.innerHTML=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();

let in1=document.getElementById("input1") ;

let new_digit_month=(d.getMonth()+1);

if ((d.getMonth()+1)<10 ) {
    new_digit_month = "0" +(d.getMonth()+1) ;
} 
let new_digit_day=d.getDate() ;

if (d.getDate()<10 ) {
    new_digit_day = "0" +d.getDate() ;
} 
let m=d.getFullYear()+'-'+new_digit_month+'-'+new_digit_day;
in1.setAttribute('min',m);

//list
function makelist() {
  if (document.getElementById("input2").value==''){
    document.getElementById("input2").required;
  }
  else{
 var tag1 = document.createElement("li");
 var element = document.getElementById("list");
 element.appendChild(tag1);
console.log(tag1)
    var tagdiv = document.createElement("div");
        tagdiv.classList.add("mystyle");
             var tag2=document.createElement("h4");
              //var text1=document.createTextNode(document.getElementById("input2").value);
             tag2.innerHTML=document.getElementById("input2").value;
             
             tagdiv.appendChild(tag2);
              

             var tag3=document.createElement("p");
              text2=document.createTextNode(document.getElementById("input1").value);
              tag3.appendChild(text2);
              tagdiv.appendChild(tag3);
    tag1.appendChild(tagdiv)

 document.getElementById("input1").value='';
 document.getElementById("input2").value='';
}
}





