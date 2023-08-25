const todos = [
  {
    title: "Wash Dishes",
    dueDate: "04-09-2023",
  },
  {
    title: "Buy Milk",
    dueDate: "02-05-2023",
  },
];
render(); // to render what we already have in the array before the push

function addTodo() {
  const todoInput = document.getElementById("input-todo");
  const title = todoInput.value; // to get whatever its typed in the textbox
  const datePick = document.getElementById("due-date");
  const dueDate = datePick.value;
  if (title === "" || dueDate == "") return alert("Please fill all fields!");
  todos.push({
    title: title,
    dueDate: dueDate,
  }); // adding new object to the array
  render();
}

function render() {
  document.getElementById("todo-list").innerHTML = ""; // this is to always clear the previous and not duplicate it when rendering a new one
  todos.forEach((todo) => {
    const element = document.createElement("div");
    element.innerText = todo.title + "   " + todo.dueDate;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    element.appendChild(deleteButton);

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}
