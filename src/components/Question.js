import React from 'react';

const Question= props => {
  return(
    <div>
      <h1>{props.Category}</h1>
      <p>{props.Question}</p>
      <p>{props.Answer}</p>
    </div>
  )
}

export  default Question;