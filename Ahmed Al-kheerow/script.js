

    let todayDate = new Date();

    document.getElementById('today-date').innerHTML = todayDate.getDate() + "/" + (todayDate.getMonth() + 1) + "/" + todayDate.getFullYear();
    let deadlineInput = document.getElementById('deadline');
    deadlineInput.min = todayDate.toISOString().split('T')[0]; //to split the date from time, you cant choose previos date
    console.log(todayDate.toISOString());

    // document.getElementsByClassName('add-task')[0].addEventListener('click', function (event) {
        // event.preventDefault();

        function addTask(event){

           let todo = document.getElementById('todo').value;
           let deadline = document.getElementById('deadline').value;
           if (todo === '' || deadline ==='') {
               alert('Please enter date and todo')
               return;
               
           }

           let myTask = document.createElement('li');
           myTask.innerHTML = `<div>${todo}</div>  <div>${deadline}</div>`;

           document.getElementById('todo-tasks').appendChild(myTask);

           document.getElementById('no-task').style.display = 'none';
           document.getElementById('todo').value = '';
           document.getElementById('deadline').value = '';
           document.getElementById('todo').placeholder = 'GO on';
           
        }
        
























   
        // function addTask(event) {
        //     document.getElementById('add-task');


        //     let todo = document.getElementById('todo').value;
        //     let deadline = deadlineInput.value;

        // let theTask = document.createElement('li');
        // theTask.innerHTML = `<div>${todo}</div><div> ${deadline} </div>`;
        // document.getElementById('no-task').remove();

        // let newTask = document.getElementById('todo-tasks');
        // newTask.appendChild(theTask);

        // todo = document.getElementById('todo').placeholder = 'write another one';
        // todo = document.getElementById('todo').value = '';

        // deadline = document.getElementById('deadline').value = '';

        // }
        


    



