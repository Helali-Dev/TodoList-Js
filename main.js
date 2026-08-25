const addTodoButton = document.getElementById("add-todo-btn");
const addInput = document.getElementById("add-input");
const todoList = document.getElementById("todo-list");

const todos = [];

const displayTask = () => {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
    <span class="todo-text"> ${todo} </span>
    <button class="todo-btn" type="button" id="edit-btn">
        <i class="fa fa-edit"></i>
    </button>
    <button class="todo-btn" type="button" id="delete-btn" onclick="deleteTask(this)" data-index=${index}>
        <i class="fa fa-trash"></i>
    </button>
    `;
    todoList.appendChild(todoItem);
  });
};

// ADD NEW TASK
addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  const value = addInput.value.trim();

  // IF VALUE WAS CORRECT ADD NEW TASK INTO TODOLIST
  if (value !== "") {
    // ADD NEW TODO VALUE INTO TODOS ARRAY
    todos.push(value);
    // SHOW TASKS
    displayTask();
  }

  // RESET TODO INPUT VALUE
  else {
    console.log("please write into input");
  }
  addInput.value = "";
});

const deleteTask = (btn) => {
  // console.log(t)
  const index = btn.dataset.id;
  todos.splice(index, 1);
  // SHOW EXIST TASKS
  displayTask();
};
