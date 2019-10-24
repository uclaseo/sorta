// export function getMergeSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   const auxiliaryArray = array.slice();
//   mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//   console.log('animations', animations);
//   return animations;
// }
// // let i = 0;
// function mergeSortHelper(
//   mainArray,
//   startIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   if (startIdx === endIdx) return;
//   // console.log('i', i);
//   // console.log('startIndex', startIdx);
//   // console.log('endIdx', endIdx);
//   // console.log('auxilaryArray', auxiliaryArray);
//   // console.log('mainArray', mainArray);
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
//   // i += 1;
//   mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//   mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//   // console.log('=============')
//   doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, j]);
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       // We overwrite the value at index k in the original array with the
//       // value at index i in the auxiliary array.
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     } else {
//       // We overwrite the value at index k in the original array with the
//       // value at index j in the auxiliary array.
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, i]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, i]);
//     // We overwrite the value at index k in the original array with the
//     // value at index i in the auxiliary array.
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//   }
//   while (j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([j, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([j, j]);
//     // We overwrite the value at index k in the original array with the
//     // value at index j in the auxiliary array.
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }

export function getMergeSortAnimations(array) {
  const animations = [];
  const sorted = mergeSort(array, animations);
  console.log('sorted', sorted);
  console.log('animations', animations)
  return animations;
}


const mergeSort = (array, animations, originalArray, fakeArray) => {
  if (array.length === 1) return array;
  const half = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, half), animations, originalArray, fakeArray);
  const secondHalf = mergeSort(array.slice(half, array.length), animations, originalArray, fakeArray);
  let i = 0;
  let j = 0;
  const sorted = [];
  while (i < firstHalf.length && j < secondHalf.length) {
    // console.log(animations)
    // animations.push([i, j])
    if (firstHalf[i] < secondHalf[j]) {
      const index = originalArray.indexOf(firstHalf[i]);
      animations.push(index);
      sorted.push(firstHalf[i]);
      i += 1;
    } else {
      const index = originalArray.indexOf(secondHalf[i]);
      animations.push(index);
      sorted.push(secondHalf[j]);
      j += 1;
    }
  }

  if (i === firstHalf.length) {
    const index = originalArray.indexOf(firstHalf[i]);
    animations.push(index);
    sorted.push(...secondHalf.slice(j));
  } else if (j === secondHalf.length) {
    const index = originalArray.indexOf(firstHalf[i]);
    animations.push(index);
    sorted.push(...firstHalf.slice(i));
  }
  console.log(sorted);
  return sorted;
}



const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
    }
  }
}


export default mergeSort;
const array = [9, 8, 7, 2]
const animations = [];
// console.log(mergeSort(array, animations, array, array))
// console.log(animations);
