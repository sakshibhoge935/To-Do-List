const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value.trim() === '') {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = inputBox.value;

  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });

  const span = document.createElement("span");
  span.innerHTML = "&#X2715"; 
  span.addEventListener("click", (e) => {
    e.stopPropagation(); 
    li.remove();
  });

  li.appendChild(span);
  listContainer.appendChild(li);
  inputBox.value = '';
}
