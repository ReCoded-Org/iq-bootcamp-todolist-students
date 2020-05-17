function addNewToDo(){
    let input = document.getElementById("todoinput").value
    let text = document.createTextNode(input)
    let newIput = document.createElement("li")
    //let dead = document.getElementById("Deadline")
    newIput.appendChild(text)
    //document.getElementById("todolist").appendChild(newIput).appendChild(dead)
    document.getElementById("todolist").appendChild(newIput)
}