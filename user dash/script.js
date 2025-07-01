
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const tbody = document.querySelector('#userTable tbody');

    users.forEach(user => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
    alert('Failed to load user data.');
  });


