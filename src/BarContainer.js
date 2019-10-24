import React from 'react';
import Bar from './Bar';
import './BarContainer.css';

function BarContainer(props) {
  return (
    <div className="barContainer">
      {props.numbers.map((value) => {
        return (
          <Bar key={Math.random()} value={value} />
        );
      })}
    </div>
  );
}

export default BarContainer;
