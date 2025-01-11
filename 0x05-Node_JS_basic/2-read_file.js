const fs = require("fs");

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, "utf8");
    const rows = data.split("\n").map((line) => line.trim());
    const header = rows[0].split(",");
    const pp = [];
    for (let i = 1; i < rows.length - 1; i += 1) {
      const people = {};
      const val = rows[i].split(",");
      for (let j = 0; j < header.length; j += 1) {
        people[header[j]] = val[j];
      }
      pp.push(people);
    }
    console.log(`Number of students: ${pp.length}`);
    const fields = new Set();
    for (let i = 0; i < header.length; i += 1) {
      fields.add(pp[i].field);
    }
    let lng = 0;
    const fieldss = Array.from(fields);
    let lists = [];
    for (let i = 0; i < fieldss.length; i += 1) {
      for (let j = 0; j < pp.length; j += 1) {
        if (pp[j].field === fieldss[i]) {
          lists.push(` ${pp[j].firstname}`);
          lng += 1;
        }
      }
      console.log(`Number of students in ${fieldss[i]}: ${lng}. List:${lists}`);
      lists = [];
      lng = 0;
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;