const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// adding tasks 
function addTask() {
    if (inputBox.value === '') {
        alert('Oops! No task for now.');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // for giving a deleting option for a task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// checking the tasks completed
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// saving previous tasks 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// displaying previously saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();