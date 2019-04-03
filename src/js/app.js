export default function sorted(arr) {
  arr.sort((a, b) => (a.health - b.health));
  const newArr = arr.reverse();
  return newArr;
}
