document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("add");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Add event listener to the delete button
            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                li.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
