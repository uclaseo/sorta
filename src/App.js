import React from 'react';

import Visualizer from './containers/Visualizer/Visualizer';
// import BarContainer from './BarContainer';
import './App.scss';

class App extends React.Component {
  // state = {
  //   numbers: [500, 100, 400, 10, 40, 220, 600],
  // }

  // start = () => {
  //   const numbers = [ ...this.state.numbers ];
    
  //   let i = 0;
  //   const times = numbers.length;
  //   const sort = () => {
  //     if (i < times) {
  //       setTimeout(sort, 200);
  //     }
  //     i += 1;
  //   }
  //   sort();
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     let min = numbers[i];
  //     for (let j = i + 1; j < numbers.length; j += 1) {
  //       if (numbers[j] < min) {
  //         min = numbers[j];
  //         let temp = numbers[i];
  //         numbers[i] = min;
  //         numbers[j] = temp;
  //         continue;
  //       }

  //     }
  //   }
  //   this.setState({
  //     numbers,
  //   });
  // }

  // reset = () => {
  //   this.setState({
  //     numbers: [ ...dummy ],
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Visualizer></Visualizer>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <div>hello world</div>
  //         <BarContainer numbers={this.state.numbers} />
  //         <button onClick={this.start}>click me</button>
  //         <button onClick={this.reset}>reset</button>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
