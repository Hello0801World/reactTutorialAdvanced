import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [error, setError ] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world'; // if it's true, the latter is shown

  return (
    <>
      {/* <h1>value ||: {firstValue}</h1>
      <h1>value &&: {secondValue}</h1> */}
      <h1>{text || 'John doe'}</h1>
      <button className="btn" onClick={()=>{
        setError(!error)
      }} style={{marginBottom:'3rem'}}>toggle error</button>

      {error && <h1>Error... </h1>}
      {error ? (<p>there is an error</p> 
      ): (
        <div>
          <h2>there is not error</h2>
        </div>
      )} 
    </>
  );
};

export default ShortCircuit;
