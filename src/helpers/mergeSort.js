const mergeSort = (array) => {
  if (array.length === 1) return array;
  const half = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, half));
  const secondHalf = mergeSort(array.slice(half, array.length));
  let i = 0;
  let j = 0;
  const sorted = [];
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sorted.push(firstHalf[i]);
      i += 1;
    } else {
      sorted.push(secondHalf[j]);
      j += 1;
    }
  }
  sorted.push(...firstHalf.slice(i))
  sorted.push(...secondHalf.slice(j));

  return sorted;
}
export default mergeSort;
