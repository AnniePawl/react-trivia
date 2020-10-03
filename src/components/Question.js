import React from 'react';

const Question= props => {
  return(
    <div>
      <h1>{props.category}</h1>
      <p>{props.question}</p>
      <p>{props.answer}</p>
    </div>
  )
}

export  default Question;