export const selectionSort = (array, animations) => {
  for (let i = 0; i < array.length; i += 1) {
    let maxValue = array[0];
    let maxValueIndex = 0;
    for (let j = 0; j < array.length - i; j += 1) {
      // two green pointers
      animations.push([maxValueIndex, j]);
      if (array[j] > maxValue) {
        // change color to red
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

const generateRandomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    array.push(generateRandomIntFromInterval(10, 200));
  }
  return array;
};

const checkEqual = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const test = (times) => {
  for (let i = 0; i < times; i += 1) {
    const array = makeArray(100);
    const sortedArray = array.slice().sort((a, b) => a - b);
    const selectedArray = selectionSort(array.slice(), []);
    const areEqual = checkEqual(sortedArray, selectedArray);
    if (!areEqual) {
      return false;
    }
  }
  return true;
}

// console.log(test(10));
// console.log(makeArray(10));