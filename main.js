const inputBox = document.getElementById("input__box");
const listContainer = document.getElementById("list__container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write a task");
  } else {
    let li = document.createElement("li");
    let box = document.createElement("div");
    const title = document.createElement("h2");
    const inp = document.createElement("input");

    title.textContent = inputBox.value;
    let deleteButton = document.createElement("button");
    deleteButton.className = "delet";
    deleteButton.textContent = "Delete";

    li.className = "box1";
    box.className = "box";
    inp.type = "checkbox";
    box.append(inp, title);

    li.append(box, deleteButton);
    listContainer.appendChild(li);

    inp.addEventListener("change", () => {
      if (inp.checked) {
        title.style.textDecoration = "line-through";
      } else {
        title.style.textDecoration = "none";
      }
    });

    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    inputBox.value = "";
  }
}

const darkModeBtn = document.querySelector(".darc__mond");
const lightModeBtn = document.querySelector(".blc__mond");

darkModeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "#fff";
});

lightModeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
});
