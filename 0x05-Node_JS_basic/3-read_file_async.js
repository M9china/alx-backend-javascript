const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }
            try {
                const lines = data.split('\n').filter((line) => line.trim() !== ''); // Filter empty lines
                const students = lines.slice(1); // Skip the header
                console.log(`Number of students: ${students.length}`);
                
                const fields = {};
                students.forEach((student) => {
                    const field = student.split(',');
                    const fieldName = field[3]?.trim(); // Handle potential extra spaces
                    const firstName = field[0]?.trim();
                    
                    if (fieldName && firstName) {
                        if (!fields[fieldName]) {
                            fields[fieldName] = [];
                        }
                        fields[fieldName].push(firstName);
                    }
                });
                
                for (const [field, names] of Object.entries(fields)) {
                    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
                }
                
                resolve();
            } catch {
                reject(new Error('Cannot load the database'));
            }
        });
    });
}

module.exports = countStudents;
