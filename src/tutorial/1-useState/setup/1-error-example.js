import React, { useState } from 'react';

// useState is to change the state of component

const ErrorExample = () => {
  const handleClick = () => {
    title = 'hello people'
    console.log(title)
  };

  let title = 'random title'
  return <>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      Change title
    </button>
  </>;
};

export default ErrorExample;