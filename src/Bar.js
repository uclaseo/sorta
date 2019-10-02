import React from 'react';
import './Bar.css';

function Bar(props) {
  const height = props.value;
  return (
    <div className="bar" style={{height}}>

    </div>
  );
}

export default Bar;
