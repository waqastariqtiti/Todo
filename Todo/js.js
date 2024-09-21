var textera = document.querySelector(".div");
var inpu = document.querySelector(".InputTodo");

function Addto() {
  if (inpu.value.trim() === "") {
    alert("Enter the Todo first");
  } else {
    if (
      (textera.innerHTML === `<p style="padding-top: 20px;color:#117554; background-color: #e9dd5e;">your Todo will be show here</p>`)
    ) {
      textera.innerHTML = createTodoItem(inpu.value);
    } else {
      textera.innerHTML += createTodoItem(inpu.value);
    }
  }
  inpu.value = "";
  inpu.focus();
}
function createTodoItem(value) {
  return `
    <div style="height:40px; border-radius:5px; display: flex; justify-content: space-between; align-items:center; margin:20px; color:#117554; background-color: #6ec207;">
      <div style="margin-left:20px; background-color: #6ec207;">${value}</div>
      <button onclick="dletetodo(this)" style="margin-right:20px; background-color:red; color:#117554; border-radius: 8px; height:30px; width:60px;">Delete</button>
    </div>`;
}
function cleardo() {
  textera.innerHTML = "";
  textera.innerHTML = `<p style="padding-top: 20px;color:#117554; background-color: #e9dd5e;">your Todo will be show here</p>`;
}
function dletetodo(btn) {
  btn.parentElement.remove();
  if (textera.innerHTML.trim() === "") {
    cleardo();
  }
}
