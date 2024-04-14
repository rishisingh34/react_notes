import React from 'react';
import { useState } from 'react';

function Lec04UseState() {
  //  one way to set initial state is pass string, object, array, number, boolean etc. to useState or pass a function that returns the initial state.
  // function  can be passed in 2 ways : function call  or arrow function

  // 1. function call
  // const setNameInitial = () => {
  //   return "Rishi";
  // }
  // const [name, setName] = React.useState(setNameInitial());

  // 2. arrow function ---> this is better way to set initial state , as it will be called only once
  const [name, setName] = React.useState(() => {
    return "Rishi"; 
  });
  const [age, setAge] = useState(25);
  
  const [person, setPerson] = useState({ name: "Rishi", age: 25, message: "Hello World" });
  
  const changeMessage = () => { 
    // this will not work as expected
    // setPerson({ message: "Hello Rishi" });

    // this is the correct way to update the state
    setPerson({ ...person, message: "Hello Rishi" });
  }


  const handleClick = () => { 
    if(name === "Rishi") {
      setName('Rishi Raj Singh');
    } else {
      setName('Rishi');
    }
  }; 
  const handleAge = () => { 
    // this will not work as expected will only increment the age by 1
    // setAge(age + 1);
    // setAge(age + 1);

    // this will work as expected
    // getting the previous state and then updating it thus incrementing the age by 2
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
  }

  return (
    <div>
      <h1 style={{ color: "red", margin: "10px", fontFamily: "arial" }}>
        Hello, {name}, {age} years old, {person.message}
      </h1>
      <br />
      <br />
      <button
        style={{
          color: "whitesmoke",
          backgroundColor: "blue",
          fontSize: "2rem",
          padding: "10px",
        }}
        onClick={handleClick}
      >
        Change Name
      </button>
      <br />
      <br />
      <button
        style={{
          color: "whitesmoke",
          backgroundColor: "blue",
          fontSize: "2rem",
          padding: "10px",
        }}
        onClick={handleAge}
      >
        Change Age
      </button>
    </div>
  );
}

export default Lec04UseState;