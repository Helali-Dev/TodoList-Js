const addTodoButton = document.getElementById("add-todo-btn");
const addInput = document.getElementById("add-input");
const todoList = document.getElementById("todo-list");

const todos = [];

// ADD NEW TASK
addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  const value = addInput.value.trim();

  // IF VALUE WAS CORRECT ADD NEW TASK INTO TODOLIST
  if (value !== "") {
    // ADD NEW TODO VALUE INTO TODOS ARRAY
    todos.push(value);
    todoList.innerHTML = "";

    // GET ALL TASKS FROM TODOS ARRAY AND SHOW IT
    todos.forEach((todo) => {
      const todoItem = document.createElement("li");
      todoItem.classList.add("todo-item");
      todoItem.innerHTML = `
      <span class="todo-text"> ${todo} </span>
      <button class="todo-btn" type="button" id="edit-btn">
          <i class="fa fa-edit"></i>
      </button>
      <button class="todo-btn" type="button" id="delete-btn">
          <i class="fa fa-trash"></i>
      </button>
      `;
      todoList.appendChild(todoItem);
      console.log(todos);
    });

    // RESET TODO INPUT VALUE
    addInput.value = "";
  } else {
    console.log("please write into input");
  }
});
