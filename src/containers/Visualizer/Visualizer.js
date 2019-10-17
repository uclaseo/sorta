import React, { Component } from 'react';
import styles from './Visualizer.module.css';


class Visualizer extends Component {
  state = {
    array: [],
  }

  componentDidMount() {
    this.generateRandomArray(100);
  }

  generateRandomArray = (length) => {
    const array = [];
    for (let i = 0; i < length; i += 1) {
      array.push(this.generateRandomIntFromInterval(10, length));
    }
    this.setState({
      array,
    });
  }

  generateRandomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  handleOnClick = () => {
    this.generateRandomArray(100);
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
        <button onClick={this.handleOnClick}>New Numbers</button>
        <button onClick={this.handleOnClick}>Merge</button>
        <button onClick={this.handleOnClick}>Select</button>
        <button onClick={this.handleOnClick}>Insertion</button>
      </div>
    );
  }
}

export default Visualizer;