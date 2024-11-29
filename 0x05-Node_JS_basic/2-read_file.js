function countStudents(path) {
    try {
        const fs = require('fs');
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        const students = lines.filter((line) => line).slice(1);
        console.log(`Number of students: ${students.length}`);
        const fields = {};
        students.forEach((student) => {
            const field = student.split(',');
            if (!fields[field[3]]) {
                fields[field[3]] = [];
            }
            fields[field[3]].push(field[0]);
        });
        for (const field in fields) {
            if (field) {
                console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
            }
        }
    }catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
