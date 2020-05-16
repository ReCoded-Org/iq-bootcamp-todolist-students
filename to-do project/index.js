window.addEventListener("load", getdate());
function getdate(){
let today = new Date();
let d = String(today.getDate());
let m = String(today.getMonth() + 1); //months start with 0
let y = String(today.getFullYear());
today = y + '/' + m + '/' + d;
document.getElementById('DateOfToday').innerText= today;
}
window.addEventListener("load", Time());
function Time(){
    let time = new Date();
let t= time.toLocaleTimeString();
document.getElementById('Time').innerText= t;
let run =setTimeout(Time,1000);
}