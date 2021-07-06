const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDOList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
let toDos =[];

function deleteToDo(event) {  //target : 클릭된 HTML 요소
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id))
  saveToDo();
  
}

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 값을 단순 string 형태로 저장
}


function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span"); 
  span.innerText = newToDo.text;
  const delButton = document.createElement("button");
  delButton.innerText = "❌";
  delButton.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(delButton);
  toDOList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value =""
  const newTodoObj = {
    text: newTodo,
    id:Date.now(),
  };
  if(toDos.length>24){
    alert("더이상 추가할 수 없습니다.");
    return 0;
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //parsedToDos.forEach();  // 배열의 원소마다 함수를 실행
  parsedToDos.forEach(paintToDo);  //arrow function
}
// fillter() : 배열의 원소들을 모두 item으로 실행하여 true값이 나오면 남기고 아니면 제외시킴(삭제x)