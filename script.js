const addBtn = document.querySelector("#addBtn");


function addNewElement() {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    const spanText = document.createElement("span");
    spanText.className = "list-group-item-text";
    let inputValue = document.querySelector("#myInput").value;
    if (inputValue === "") {
        alert("Enter todo item");
        return;
    }
    spanText.innerHTML = inputValue;
    const listParent = document.querySelector("#myList");
    listItem.appendChild(spanText);
    listParent.appendChild(listItem);
    document.querySelector("#myInput").value = "";

    const span = document.createElement("span");
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    listItem.appendChild(span);

    const editTodo = document.createElement("button");
    editTodo.innerHTML = "Edit";
    listItem.appendChild(editTodo);
    editTodo.className = "btnEdit";
}


function switchChecked() {
    const list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
        if (ev.target.className.includes("list-group-item-text")) {
            ev.target.classList.toggle("checked");
        }
    })
}


function deleteTodo() {
    const list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
        if (ev.target.className.includes("close")) {
            ev.target.parentElement.remove();
        }
    })
}


function editContent() {
    const list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
        if (ev.target.className.includes("btnEdit")) {
            const listItem = ev.target.parentElement;
            const spanText = listItem.querySelector(".list-group-item-text");
            const currentText = spanText.textContent;
            const newText = prompt("Edit your todo item", currentText);
            if (newText !== "") {
                spanText.textContent = newText;
            }
        }
    });
}


switchChecked();
deleteTodo();
editContent();

addBtn.addEventListener("click", () => {
    addNewElement();
});