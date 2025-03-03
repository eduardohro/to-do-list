let task = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput')
    const text = taskInput.ariaValueMax.trim()

    if(text){
        task.push({ text: text, completed: false});

        updateTasksList();
    }
};

const updateTasksList = () => {
    const taskList = document.getElementById('task-list')
    taskList.innerHTML = ''

    task.forEach((task, index) => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? "completed":""}">
                <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""
                }/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="img/edit.png" onClick="editTask(${index})" />
                <img src="img/bin.png" onClick="deleteTask(${index})" />
            </div>
        </div>
        `;

        listItem.addEventListener('change', () => toggleTaskComplete(index))
        taskList.append(listItem);
    });
};

document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault()

    addTask();
});