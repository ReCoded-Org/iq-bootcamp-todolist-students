
function addTodo()
            {

                let txtVal = document.getElementById('txtVal').value;
                let datVal = document.getElementById('my_date').value;
                let listNode = document.getElementById('list');
                let add_li = document.createElement("li");
                let datNode = document.createTextNode(datVal);
                let txtNode = document.createTextNode(txtVal);
                let br = document.createElement("br");

                
                
                add_li.appendChild(txtNode);
                add_li.appendChild(br);
                add_li.appendChild(datNode);
                 
                listNode.appendChild(add_li);
            
            }
            
             today = new Date();
             date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            document.getElementById("p1").innerHTML=date