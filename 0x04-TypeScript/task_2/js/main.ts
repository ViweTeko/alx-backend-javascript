/** Create DirectorInterface */
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/** Create TeacherInterface */
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/** Create class Director that will implement TeacherInterface */
export class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

/** Create a class Teacher that will implement TeacherInterface */
export class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a coffee break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

/** Create a function createEmployee */
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/** Write a function isDirector */
export function isDirector(employee: Director | Teacher) {
  return employee instanceof Director;
}

/** Write a function executeWork */
export function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

/** Write a string literal type named Subjects */
export type Subjects = "Math" | "History";

/** Write a function named teachClass */
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
}
