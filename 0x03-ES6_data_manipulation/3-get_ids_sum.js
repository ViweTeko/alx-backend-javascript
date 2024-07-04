export default function getStudentIdsSum(students) {
  return students.reduce((aggregate, student) => aggregate + student.id, 0);
}
