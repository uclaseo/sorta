export const selectionSort = (array, animations) => {
  for (let i = 0; i < array.length; i += 1) {
    let maxValue = array[0];
    let maxValueIndex = 0;
    for (let j = 0; j < array.length - i; j += 1) {
      animations.push([maxValueIndex, j]);
      if (array[j] > maxValue) {
        animations.push([maxValueIndex, j, true]);
        maxValue = array[j];
        maxValueIndex = j;
      }
    }
    animations.push([maxValueIndex, array.length - 1 - i, true]);
    animations.push([maxValueIndex, array.length - 1 - i, true, true]);
    [ array[array.length - 1 - i], array[maxValueIndex] ] = [ array[maxValueIndex], array[array.length - 1 - i] ]
  }
  animations.push([0, 0, false, false, true])
  return animations;
};

const array = [90, 80, 10, 30];
const animations = [];

// console.log(selectionSort(array, animations));
// console.log(animations);