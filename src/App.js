import React from 'react';
import BarContainer from './BarContainer';
import './App.scss';

class App extends React.Component {
  state = {
    numbers: [500, 100, 400, 10, 40, 220, 600],
  }

  start = () => {
    this.setState(prevState => {
      const newNumbers = prevState.numbers.reverse();
      return {
        numbers: newNumbers,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>hello world</div>
          <BarContainer numbers={this.state.numbers} />
          <button onClick={this.start}>click me</button>
        </header>
      </div>
    );
  }
}

export default App;
