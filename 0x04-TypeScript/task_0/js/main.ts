interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent = {
    firstName: 'Nqobile',
    lastName: 'Mvundlela',
    age: 24,
    location: 'Pretoria'
}

const secondStudent = {
    firstName:'Magaret',
    lastName: 'Moekwa',
    age:24,
    location: 'Pretoria'
}

const studentsList:Student[] = [
    firstStudent,secondStudent
]

// Render a table using Vanilla JavaScript
const body = document.querySelector('body') as HTMLBodyElement;
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const cell1 = document.createElement('td');
  cell1.textContent = student.firstName;
  row.appendChild(cell1);

  const cell2 = document.createElement('td');
  cell2.textContent = student.location;
  row.appendChild(cell2);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
body.appendChild(table);
