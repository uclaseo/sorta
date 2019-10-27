import React, { Component } from 'react';

import { getMergeSortAnimations } from '../../helpers/mergeSort';
import { bubbleSort } from '../../helpers/bubbleSort';
import { selectionSort } from '../../helpers/selectionSort';
import styles from './Visualizer.module.css';

const SPEED = 1000;
const LENGTH = 5;

class Visualizer extends Component {
  state = {
    array: [],
  }

  componentDidMount() {
    this.generateRandomArray(LENGTH);
  }

  generateRandomArray = (length) => {
    const array = [];
    for (let i = 0; i < length; i += 1) {
      array.push(this.generateRandomIntFromInterval(10, 150));
    }
    this.setState({
      array,
    }, () => {
      for (let i = 0; i < array.length; i += 1) {
        const bar = document.getElementsByClassName(styles.barValue);
        bar[i].style.backgroundColor = 'white';
      }
    });
  }

  generateRandomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  handleNew = () => {
    this.generateRandomArray(LENGTH);
  }

  handleMergeSort = () => {
    const animations = getMergeSortAnimations(this.state.array);
    // console.log(animations);
    // for (let i = 0; i < animations.length; i += 1) {
    //   const bars = document.getElementsByClassName(styles.barValue);
    //   const isColorChange = i % 3 !== 2;
    //   if (isColorChange) {
    //     const [barOneIdx, barTwoIdx] = animations[i];
    //     const barOneStyle = bars[barOneIdx].style;
    //     const barTwoStyle = bars[barTwoIdx].style;
    //     const color = i % 3 === 0 ? 'yellow' : 'red';
    //     setTimeout(() => {
    //       barOneStyle.backgroundColor = color;
    //       barTwoStyle.backgroundColor = color;
    //     }, i * 1000);
    //   } else {
    //     setTimeout(() => {
    //       const [barOneIdx, newHeight] = animations[i];
    //       const barOneStyle = bars[barOneIdx].style;
    //       barOneStyle.height = `${newHeight}px`;
    //     }, i * 1000);
    //   }
    // }
  }

  handleSelectionSort = () => {
    const animations = selectionSort(this.state.array, []);
    console.log('animations', animations);
    for (let i = 0; i < animations.length; i += 1) {
      const bars = document.getElementsByClassName(styles.barValue);
      const [barOneIndex, barTwoIndex, changeColor, swap, end] = animations[i];
      const barOneStyle = bars[barOneIndex].style;
      const barTwoStyle = bars[barTwoIndex].style;
      if (!changeColor && !swap && !end) {
        setTimeout(() => {
          barOneStyle.backgroundColor = 'green';
          barTwoStyle.backgroundColor = 'green';
          if (barTwoIndex > barOneIndex + 1) {
            bars[barTwoIndex - 1].style.backgroundColor = 'white';
          }
        }, SPEED * i);
      } else if (changeColor && !swap && !end) {
        setTimeout(() => {
          barOneStyle.backgroundColor = 'red';
          barTwoStyle.backgroundColor = 'red';
        }, SPEED * i);
        if (barOneIndex !== barTwoIndex) {
          setTimeout(() => {
            barOneStyle.backgroundColor = 'white';
            // barTwoStyle.backgroundColor = 'white';
          }, SPEED * i + SPEED)
        }
      } else if (changeColor && swap && !end) {
        setTimeout(() => {
          const temp = barTwoStyle.height;
          barTwoStyle.height = barOneStyle.height;
          barOneStyle.height = temp;
        }, SPEED * i);
      } else if (end) {
        setTimeout(() => {
          barOneStyle.backgroundColor = 'red';
          barTwoStyle.backgroundColor = 'red';
        }, SPEED * i);
      }
    }
  }

  handleBubbleSort = () => {
    const animations = bubbleSort(this.state.array, []);
    console.log(animations);
    for (let i = 0; i < animations.length; i += 1) {
      const bars = document.getElementsByClassName(styles.barValue);
      const [barOneIndex, barTwoIndex, swap, end] = animations[i];
      const barOneStyle = bars[barOneIndex].style;
      const barTwoStyle = bars[barTwoIndex].style;
      if (!swap && !end) {
        setTimeout(() => {
          if (bars[barOneIndex - 1]) {
            bars[barOneIndex - 1].style.backgroundColor = 'white';
          }
          barOneStyle.backgroundColor = 'green';
          barTwoStyle.backgroundColor = 'green';
        }, SPEED * i);
      } else if (end) {
        setTimeout(() => {
          if (bars[barOneIndex - 1]) {
            bars[barOneIndex - 1].style.backgroundColor = 'white';
          }
          barOneStyle.backgroundColor = 'red';
        }, SPEED * i);
      } else {
        setTimeout(() => {
          const temp = barTwoStyle.height;
          barTwoStyle.height = barOneStyle.height;
          barOneStyle.height = temp;
        }, SPEED * i);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className={styles.visualizerContainer}>
        <div className={styles.bars}>
          {
            array.map((value, index) => (
              <div
                className={styles.barValue}
                key={index}
                style={{ height: `${value}px`}}
              >
              </div>
            ))
          }
        </div>
        <button onClick={this.handleNew}>New Numbers</button>
        {/* <button onClick={this.handleMergeSort}>Merge</button> */}
        <button onClick={this.handleSelectionSort}>Selection</button>
        <button onClick={this.handleBubbleSort}>Bubble</button>
      </div>
    );
  }
}

export default Visualizer;