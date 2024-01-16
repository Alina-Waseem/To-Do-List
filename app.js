let list = document.getElementById("List");

function addtodo(){
    let todo_item = document.getElementById("InputHolder");
    let li = document.createElement("li");
    let litext = document.createTextNode(todo_item.value);
    li.appendChild(litext);    

let delButton = document.createElement("button");
let textButton = document.createTextNode("Delete");
delButton.appendChild(textButton);
li.appendChild(delButton);
delButton.setAttribute("id" , "Delete");
delButton.setAttribute("onclick" , "deleteitem(this)");

let editButton =document.createElement("button");
let textButton2 = document.createTextNode("Edit");
editButton.appendChild(textButton2);
li.appendChild(editButton);
editButton.setAttribute("id" , "Edit");
editButton.setAttribute("onclick" , "edititem(this)");

list.appendChild(li);

todo_item.value = "";
console.log(li);
}

function deleteitem(e){
    e.parentNode.remove();
}

function edititem(e){
    let editValue = prompt("Edit the item");
    e.parentNode.firstChild.nodeValue = editValue;
}

function deleteall(){
    list.innerHTML = "";
}