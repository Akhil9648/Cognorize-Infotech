// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <span class="delete-btn" onclick="deleteTask(this)">❌</span>`;
    taskList.appendChild(li);
    
    saveTasksToLocalStorage(taskText);

    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}

// Function to delete a task
function deleteTask(el) {
  const taskText = el.parentElement.textContent.trim();
  el.parentElement.remove();
  removeTaskFromLocalStorage(taskText);
}

// Function to save tasks to local storage
function saveTasksToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter(item => item !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage on page load
function loadTasks() {
  const taskList = document.getElementById('taskList');
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks !== null) {
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `${task} <span class="delete-btn" onclick="deleteTask(this)">❌</span>`;
      taskList.appendChild(li);
    });
  }
}

// Call loadTasks() on page load
document.addEventListener('DOMContentLoaded', loadTasks);
