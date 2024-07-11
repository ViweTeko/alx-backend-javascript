/* Implement a class named HolbertonCourse*/
class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* SETTERS */
  /** Setter name */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
  
  /** Setter length */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /** Setter students */
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  /* GETTERS */
  /** Getter name */
  get name() {
    return this._name;
  }

  /** Getter length */
  get length() {
    return this._length;
  }

  /** Getter students */
  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
