import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter ] = useState(0)

  const decrease = () =>{
    setCounter(counter-1)
  }

  const increase = () => {
    setCounter(counter+1)
  }

  const reset = () => {
    setCounter(0)
  }

  const complexIncrease = () => {
    setTimeout(()=>{
      // setCounter(counter + 1)
      setCounter((prevState)=>{
         console.log(prevState)
        return prevState + 1;
       })
    }, 2000) // run 2000 ms (2 seconds) later
  };

   return (
    <>
      <section style={{margin:'4rem 8'}}>
        <h2>
            regular counter
        </h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={decrease}>Decrease</button>
        <button className="btn" onClick={increase}>increase</button>
        <button className="btn" onClick={reset}>reset</button>
      </section>

      <section style={{margin:'4rem 8'}}>
        <h2>
            More Complex counter
        </h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={complexIncrease}>increase later</button>
      </section>
    </>
  )};

export default UseStateCounter;
