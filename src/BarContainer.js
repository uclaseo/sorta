import React from 'react';
import Bar from './Bar';
import './BarContainer.css';

function BarContainer() {
  const dummyBars = [1, 3, 4, 10, 22, 50, 3, 4, 10, 22, 50, 3, 4, 10, 22, 50, 3, 4, 10, 22, 50, 3, 4, 10, 22, 50, 3, 4, 10, 22, 50, 3, 4, 10, 22, 50, 3, 4, 10, 22, 50];
  return (
    <div className="barContainer">
      {dummyBars.map((value) => {
        return (
          <Bar key={Math.random()} value={value} />
        );
      })}
    </div>
  );
}

export default BarContainer;
