import {React, useCallback, useEffect , useState } from 'react'

//  1. useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
const Lec47useCallback = () => {
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(0);  

  const printName = useCallback(() => {
    console.log(`Name : ${name}`);
  }, [name])
  //  useCallback is used to prevent unnecessary re-renders of child components. whenever the any other change occurs in the component then the printName also changes hence useEffect will be called. but if we use useCallback then it will only change when the name changes.
  // useCallBack should be used in only those scenarios where the function is passed to dependent array of useEffect or useMemo.
  useEffect(() => {
    console.log("In Effect ");
    printName(); 
  }, [printName])
  return (
    <div>
      Name : 
      <input type="text" value={name} onChange={e => { setName(e.target.value) }} />
      <br />
      Age :
      <input type="number" value={age} onChange={e => { setAge(e.target.value) }} />
    </div>
  )
}

export default Lec47useCallback