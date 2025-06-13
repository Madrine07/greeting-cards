import React from 'react';
import './greeting.css';

function GreetingCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <p className="sender">From: {props.sender}</p>
    </div>
  );
}

export default GreetingCard;
