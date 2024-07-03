/** Building Teacher interface */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}
/** Write interface named Directors that extends Teacher */
export interface Directors extends Teacher {
  numberOfReports: number;
}

/** Write interface for function named printTeacherFunction */
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
/** Write a function printTeacher */
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

/** The coonstructor of the class should be described through an interface */
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

/** The class should be described through an interface */
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

/** Write a class named StudentClass */
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this._firstName;
  }
}
