const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
let toDosArr = [];

function saveToDosArr () {
    localStorage.setItem("toDos", JSON.stringify(toDosArr));
}


function deleteToDo (event) {
   const li = event.target.parentElement;
   li.remove();
   toDosArr = toDosArr.filter(toDo => toDo.id !== parseInt(li.id));
   saveToDosArr();

}

function paintToDo (newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;

    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    span.innerText = newToDoObj.text;
    li.appendChild(button);

    toDoList.appendChild(li);
}
function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    toDoInput.value="";
    toDosArr.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDosArr();
}


toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDosArr = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
