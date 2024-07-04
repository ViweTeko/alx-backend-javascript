export default function getListStudentIds(array) {
  let arr = [];
  if (array instanceof Array) {
    arr = array.map((item) => item.id);
  }

  return arr;
}
