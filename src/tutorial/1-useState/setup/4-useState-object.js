import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson ] = useState ({
    name:'peter', 
    age: 24,
    message: 'random message',
  });

  const [name, setName ] = useState('peter')
  const [age, setAge ] = useState(24)
  const [message, setMessage ] = useState('random message')

  const changeMessage = () =>{
    // use spread operator (in thin case ...person)
    // 
    setPerson({...person, message: 'hello world'}); 
    
  }

    console.log(person)
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>Change message</button>

    </>
    );
};

export default UseStateObject;
