/**
 * A class representing Holberton course.
 */

export default class HolbertonCourse {
/**
 * creates an attribute name, length and students
 * name - the name of the course
 * length - how long the course takes
 * students - the names of students in a course
 */

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
 * retrives the name of course
 */

  get name() {
    return this._name;
  }

  /**
 * sets the name of course
 */

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = value;
  }

  /**
 * retrives the length of a course
 */

  get length() {
    return this._length;
  }

  /**
 * Sets the length of a course
 */

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
 * retrieves the name of a student
 */

  get students() {
    return this._students;
  }

  /**
 * Sets the name of students in a course
 */

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
