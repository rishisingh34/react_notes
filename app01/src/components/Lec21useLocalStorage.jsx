import React from 'react'
import  useLocalStorage  from '../hooks/useLocalStorage.hook'
const Lec21useLocalStorage = () => {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");
  return (
    <div>
      <label>First Name</label>
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
    </div>
  )
}

export default Lec21useLocalStorage