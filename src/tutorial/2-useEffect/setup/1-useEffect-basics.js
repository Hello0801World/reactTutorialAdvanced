import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue ] = useState(0)

  // useEffect runs after every rendering
  
  useEffect(() => {
    console.log('call useEffect');
    if (value > 5) {
      document.title= `New message ${value}`;
  }
}, [value]); // array is a list of dependencies
// only invokes when it renders if it has an empty second parameter in useEffect
// when second parameter has some value in array, whenever something happens for a second parameter
// useEffect invokes

  useEffect(() => {
    console.log('hello world')
  }, []) 

  console.log('render component')
  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={() => {setValue(value + 1)} }>
      Click me
    </button>
  </>;
};

export default UseEffectBasics;
