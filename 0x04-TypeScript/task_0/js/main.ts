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
const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
