

const toodForm = document.querySelector(".form-todo");

const todoList = document.querySelector(".todo-list");

const todoInput = document.querySelector(".form-todo input[type='text']");


toodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
          <span>
            ${newTodoText}
          </span>
          <div class="todo-buttons">
            <div class="todo-btn done">Done</div>
            <div class="todo-btn remove">Remove</div>
          </div>
      `;

  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);

  todoInput.value = "";

})

todoList.addEventListener("click", (e) => {
  if(e.target.classList.contains("remove")){
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
    
  }
 
  if(e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
    liSpan.style.color = "green";
    
  }
 
})