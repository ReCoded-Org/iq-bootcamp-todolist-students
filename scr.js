
var d = new Date();

let month_name=d.toLocaleString('default', { month: 'long' });

let h=document.getElementById("h");
h.innerHTML=month_name+'  '+d.getDate()+','+d.getFullYear();

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


let array=[];
let drop= document.getElementById("dropdown");
let li_element;
let ul_element;
let container;

let icon_listener;
let elements
let new_date
let random
check_empty()


//button submit listener
document.getElementById("todo").addEventListener("click",function(){
  
    if (document.getElementById("task").value==''){
        document.getElementById("task").required;
    }
    else{
          container.innerHTML=``
          create_array(create_obj())
          
          console.log('array',array.length,'\n',array)
          create_li()

        // add_listener()
          
     document.getElementById("input1").value='';
     document.getElementById("task").value='';
}})


//creat object
function create_obj(){

  //generate random
    random=uuidv4() 

    return{   
        title:document.getElementById("task").value,
        deadline:document.getElementById("input1").value,
        priority:drop[drop.selectedIndex].text  ,   
        id:random,// id="bin"
        icon:`<i class="fa fa-trash bin" aria-hidden="true"></i>`
    }
}

//creat  array of object
function create_array(x){
array.push(x)
}

//create list items

function create_li(){
  ul_element = document.getElementById("list");

  //clear the old ul and display the new array
  ul_element.innerHTML="";
for(let i=0;i<array.length;i++){

  //change date to formatte may 20,2020
   new_date=Convert_date(array[i].deadline);

 
    li_element = document.createElement("li");
    li_element.innerHTML=`<input type="checkbox" id="myCheck" value=""  onclick="make_inline_text()">
                   <h3>${array[i].title}</h3>
                   <p>${new_date}</p>
                   <p>${array[i].priority}</p>
                      ${array[i].icon}`

      //check task if expired
      check_deadline(li_element.children[1],array[i].deadline);
      
  ul_element.appendChild(li_element);

  //add listener
   {
    // console.log(" index of item in array is:",i)
     icon_listener=li_element.children[4];
     icon_listener.addEventListener("click",function(){
    
   let id_object=array[i].id
   let index_object=array.findIndex(x => x.id ===id_object)
   delete_task(index_object)
});

}

}
}

// delete task from array

function delete_task(i){

   console.log("removed", array.splice(i,1)) ;
   console.log(array)
   create_li()
   
}

//checkbox
function make_inline_text(){
     checkbox=document.querySelectorAll("#myCheck");
     for(let i=0;i<checkbox.length;i++){
       if(checkbox[i].checked==true){
           checkbox[i].value=checkbox[i].checked;
           console.log(checkbox[i].value);
           parent= checkbox[i].parentElement;
           header=parent.children[1];
           header.style.textDecoration= "line-through";
    
   }
      else {
           checkbox[i].value=checkbox[i].checked;
           console.log(checkbox[i].value);
           parent= checkbox[i].parentElement;
           header=parent.children[1];
           header.style.textDecoration= "none";
       }
     }
}
// check expired task
function check_deadline(header_tage,data_chosen){
  console.log(data_chosen);
  if(data_chosen<d){
    header_tage.style.color="red";
    header_tage.style.textDecoration= "underline";
  }
}

//display text when there is no tasks
function check_empty(){
  if (array.length<1){
        container=document.getElementById("empty_task")
        container.innerHTML=`<h3>There Are No Tasks   <i class="far fa-meh-rolling-eyes"></i></h3>`
}
}
//convert formatt date 
function Convert_date(date){
  s=new Date(date);
  let month_name= s.toLocaleString('default', { month: 'long', day: "numeric",  year:'numeric'});
  return month_name
 
 }

 function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

