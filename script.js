const todos = ["Wash Cloth", "Do The Dishes"];
render(); // to render what we already have in the array before the push

function addTodo() {
  const todoInput = document.getElementById("input-todo");
  const textInfo = todoInput.value; // to get whatever its typed in the textbox
  todos.push(textInfo); // push it into the array/ adding a new list of todos
  render();
}

function render() {
  document.getElementById("todo-list").innerHTML = ""; // this is to always clear the previous and not duplicate it when rendering a new one
  todos.forEach((todoTitle) => {
    const element = document.createElement("div");
    element.innerText = todoTitle;
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}
