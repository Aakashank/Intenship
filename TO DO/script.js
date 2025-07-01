const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');

    li.innerHTML = `
      <span>${taskText}</span>
      <div class="task-buttons">
        <button class="complete-btn">Done</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', function (e) {
  const target = e.target;

  if (target.classList.contains('complete-btn')) {
    target.closest('li').classList.toggle('completed');
  }

  if (target.classList.contains('delete-btn')) {
    target.closest('li').remove();
  }
});
