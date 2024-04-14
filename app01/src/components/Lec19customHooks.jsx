import {React, useState, useEffect } from 'react'

const Lec19customHooks = () => {
  const [name, onChange] = useInputValue("");
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  // const [isDarkMode , setIsDarkMode] = useState(false);
  useEffect(() => {
    console.log(name);
  }, [name])
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color : isDarkMode ? "white" : "black"
      }}
    >
      Name : 
      <input type="text" value={name} onChange={onChange} />
      <br />
      <br />
      <button onClick={toggleDarkMode}>Toggle Mode</button>
    </div>
  )
}

// keep the custom hook outside the component
// keep these custom hooks in a separate js file
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue); 
  const toggle = () => setValue(!value);
  return [value, toggle];
}

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  const onChange = e => setValue(e.target.value);

  return [
    value,
    onChange
  ];
}

export default Lec19customHooks