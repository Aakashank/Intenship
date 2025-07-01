const employeeForm = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const positionInput = document.getElementById('position');
const emailInput = document.getElementById('email');
const tableBody = document.getElementById('employee-table-body');

employeeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const position = positionInput.value.trim();
  const email = emailInput.value.trim();

  if (name && position && email) {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${name}</td>
      <td>${position}</td>
      <td>${email}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    nameInput.value = '';
    positionInput.value = '';
    emailInput.value = '';
  }
});

// Delete functionality using event delegation
tableBody.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('tr').remove();
  }
});
