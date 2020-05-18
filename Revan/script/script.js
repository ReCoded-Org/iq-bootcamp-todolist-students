let date = document.querySelector('#today');
let d = new Date()
date.innerText = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
let data = '';
function showTodo() {
    let project = document.getElementById('project').value;
    // let projectContainer = document.querySelector('.project-container');
    let date = document.querySelector('#todo-date').value;
    let projectList = document.querySelector('ul');
    if (date == '' || project == '') {

    } else {
        data += '<li> <h4>' + project + '</h4><h4>' + date + '</h4></li>';
        projectList.innerHTML = data;
    }
}