window.addEventListener("load", getdate());
function getdate(){
let today = new Date();
let d = String(today.getDate());
let m = String(today.getMonth() + 1); //months start with 0
let y = today.getFullYear();
today = d + '/' + m + '/' + y;
document.getElementById('DateOfToday').innerText= today;
let t=setInterval(getdate,1000);
}