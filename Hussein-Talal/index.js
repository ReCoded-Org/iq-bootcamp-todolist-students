//declaring the variables
const todayDate = document.getElementById('todayDate');
let day = new Date().getDate();
let month = (new Date().getMonth() + 1);
let year = new Date().getFullYear();
const form = document.getElementById('form');
let text = document.getElementById('text');
const ul = document.querySelector('ul');
let date = document.getElementById('date');
const msg = document.getElementById('msg');

//adding the date to the header

todayDate.textContent = dateFormater(new Date().toDateString().split(" ")); 

function dateFormater (dateString){
    return dateString[0]+" "+dateString[1]+ " "+dateString[2] +","+dateString[3];
}

// setting the min attribute in date input field
// if(day<10){
//     day='0'+day
// } 
// if(month<10){
//     month='0'+month
// } 
// let today = year+'-'+month+'-'+day;
// date.setAttribute("min", today);

//adding-task function
let numberOfTasks = 1;
function addTask(){
    if (text.value === '' || date.value === '') {
        msg.textContent = "Input the task and the date";
    }
    else{
        document.getElementById('noTasks').textContent = `You have ${numberOfTasks} task/s`;
        const div = document.createElement('div');
        const li = document.createElement('li');
        const span = document.createElement('span');
        //div.className = "todo-item";
        span.innerText = "deadline : " + date.value;
        li.className = "collection-item";
        li.innerText = text.value;
        li.appendChild(span);
        //div.appendChild(li);
        ul.appendChild(li);
        numberOfTasks++;
        form.reset();
        msg.textContent = '';
    }    
}

const submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
})

//initializing materialize components 
const calendar = document.querySelector('.datepicker');
M.Datepicker.init(calendar,{
    minDate: new Date()
});

let elems = document.querySelectorAll('select');
let options = document.querySelectorAll('option');
let instances = M.FormSelect.init(elems, options);