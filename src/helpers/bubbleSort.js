export const bubbleSort = (array, animations) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (j + 1 < array.length - i) {
        animations.push([j, j + 1])
      }
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1, true]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    animations.push([array.length - 1 - i, array.length - 1 - i, false, true]);
  }
  return animations;
};

// const array = [90, 80, 70, 20];
// const animations = [];

// console.log(bubbleSort(array, animations));
// console.log(animations);