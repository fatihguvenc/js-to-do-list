const todoInput = document.getElementById("todo-input");
const removeButton = document.getElementById("close-icon")
const list = document.getElementById("todo-list");
const form = document.getElementById("todo-form");
form.addEventListener("submit",addTodo);
list.addEventListener("click",removeTodo);


removeButton.addEventListener("click",function removeAll(){
    list.innerHTML = "";
});
const alertContainer = document.getElementById("alert-container");

function addTodo(e){
    e.preventDefault();
    let inputValue = todoInput.value;
    list.innerHTML +=`
            <div class="list-area">
                <li class="list-item">${inputValue}</li>
                <div class="close-check">
                    <input type="checkbox" name="" id="checkbox">
                    <i id="close-icon" class="fas fa-times close-icon"></i>
                </div>
            </div>`
    todoInput.value = "";
}

function removeTodo(e){
    if(e.target.id === "close-icon"){
        e.target.parentElement.parentElement.remove();
    }
}