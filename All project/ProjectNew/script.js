document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("edit-btn")) {
            const li = e.target.parentElement;
            const taskText = prompt("Enter the updated task:", li.textContent.trim());
            if (taskText !== null && taskText.trim() !== "") {
                li.textContent = taskText;
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.classList.add("edit-btn");

                let div = document.createElement("div"); 
                div.appendChild(deleteBtn);
                div.appendChild(editBtn);

                li.appendChild(div);
            }
        } else if (e.target.tagName === "BUTTON" && e.target.textContent === "Delete") {
            e.target.parentElement.remove();
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        let div = document.createElement("div");
        div.setAttribute('class','div') 
        div.appendChild(deleteBtn);
        div.appendChild(editBtn);

        li.appendChild(div);
        taskList.appendChild(li);
    }
});
