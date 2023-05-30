import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('K');
  const [error, setError ] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>value ||: {firstValue}</h1>
      <h1>value &&: {secondValue}</h1> */}
      <h1>{text || 'John doe'}</h1>
      <button className="btn" onClick={()=>{
        setError(!error)
      }} style={{marginBottom:'3rem'}}>toggle error</button>

      {error && <h1>Error... </h1>}
    </>
  );
};

export default ShortCircuit;
