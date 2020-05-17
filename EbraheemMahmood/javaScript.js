const a = document.getElementsByClassName('theDateOfToday')[0];
let today = new Date()
let theDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
a.textContent = theDate;