//adding the date to the header
const date = document.getElementById('date');
const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
date.textContent = `${day}/${month}/${year}` ;



