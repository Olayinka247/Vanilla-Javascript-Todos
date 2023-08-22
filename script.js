let todos = [];
todos.push("Clear The Garden");

todos.forEach((todosList) => {
  let element = document.createElement("div");
  element.innerText = todosList;
  document.body.appendChild(element);
});
