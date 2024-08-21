document.getElementById('add').addEventListener('click', addTask);
window.addEventListener('load', loadTasks);

function addTask() {
    const input = document.getElementById('input');
    const val = input.value.trim();

    if (val === '') {
        alert('Please enter a value.');
        return;
    }

    const taskHTML = `
        <div class="total">
            <div class="task">
                <p class="name">The Task</p>
                <button class="arrow">
                    <box-icon name='chevron-down' size='lg'></box-icon>
                </button>
            </div>
            <p class="topic">${val}</p>
            <div class="control">
                <button class="done">Done</button>
                <button class="delete">Delete</button>
            </div>
        </div>`;
    const place = document.querySelector('.list');
    place.insertAdjacentHTML('beforeend', taskHTML);
    input.value = '';

    attachEventListeners();
    saveTasks();
}

function attachEventListeners() {
    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', toggleTask);
    });

    document.querySelectorAll('.done').forEach(doneButton => {
        doneButton.addEventListener('click', markAsDone);
    });

    document.querySelectorAll('.delete').forEach(deleteButton => {
        deleteButton.addEventListener('click', deleteTask);
    });
}

function toggleTask(event) {
    const totalDiv = event.target.closest('.total');
    totalDiv.classList.toggle('expanded');
    const isExpanded = totalDiv.classList.contains('expanded');
    event.target.setAttribute('name', isExpanded ? 'chevron-up' : 'chevron-down');
    saveTasks();
}

function markAsDone(event) {
    const totalDiv = event.target.closest('.total');
    totalDiv.classList.toggle('complete');
    const isDone = totalDiv.classList.contains('complete');
    event.target.textContent = isDone ? 'Undone' : 'Done';
    totalDiv.querySelector('.topic').style.color = isDone ? 'black' : 'gray';
    saveTasks();
}

function deleteTask(event) {
    const totalDiv = event.target.closest('.total');
    totalDiv.remove();
    saveTasks();
    console.log('Task deleted');
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.total').forEach(totalDiv => {
        tasks.push({
            text: totalDiv.querySelector('.topic').textContent,
            done: totalDiv.classList.contains('complete'),
            expanded: totalDiv.classList.contains('expanded')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tasks saved:', tasks);
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const place = document.querySelector('.list');
    place.innerHTML = ''; // Clear the list before reloading

    tasks.forEach(task => {
        const taskHTML = `
            <div class="total ${task.done ? 'complete' : ''} ${task.expanded ? 'expanded' : ''}">
                <div class="task">
                    <p class="name">The Task</p>
                    <button class="arrow">
                        <box-icon name='${task.expanded ? 'chevron-up' : 'chevron-down'}' size='lg'></box-icon>
                    </button>
                </div>
                <p class="topic" style="color: ${task.done ? 'black' : 'gray'}">${task.text}</p>
                <div class="control">
                    <button class="done">${task.done ? 'Undone' : 'Done'}</button>
                    <button class="delete">Delete</button>
                </div>
            </div>`;
        place.insertAdjacentHTML('beforeend', taskHTML);
    });

    attachEventListeners();
    console.log('Tasks loaded:', tasks);
}
