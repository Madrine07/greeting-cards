import React from 'react';
import './';



// Goal.js

function MadeGoal() {
  return <h2>Goal!</h2>;
}

function MissedGoal() {
  return <h2>Missed!</h2>;
}

function Goal(props) {
  const isGoal = props.isGoal;

  if (isGoal) {
    return <MadeGoal />;
  }

  return <MissedGoal />;
}

export { Goal };

