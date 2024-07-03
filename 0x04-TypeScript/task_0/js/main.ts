/** This script writes an interface named Student */

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Viwe",
  lastName: "Teko",
  age: 26,
  location: "Gqeberha",
};
const studentTwo: Student = {
  firstName: "Simphiwe",
  lastName: "Mandela",
  age: 27,
  location: "Durban",
};

const studentsList: Array<Student> = [studentOne, studentTwo];

/** Using vanilla JS, render a table and append
 * new row to table. */
export const renderTable = (studentsList: Array<Student>): void => {
  const table = document.createElement("table");
  const tableRow = document.createElement("tr");
  table.insertAdjacentElement("beforeend", tableRow);

  tableRow.insertAdjacentHTML("beforeend", "<th>FirstName</th>");
  tableRow.insertAdjacentHTML("beforeend", "<th>Location</th>");

  for (const student of studentsList) {
    const stRow = document.createElement("tr");
    stRow.insertAdjacentHTML("beforeend", "<td>${student.firstName}</td>");
    stRow.insertAdjacentHTML("beforeend", "<td>${student.location}</td>");
    stRow.insertAdjacentElement("beforeend", stRow);

    document.body.insertAdjacentElement("beforeend", table);
  }
  renderTable(studentsList);
};
