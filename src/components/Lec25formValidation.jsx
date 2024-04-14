import React, { useState } from 'react'

// this file is not complete yet !!!!!!!!

const Lec25formValidation = () => {
  const [email, setEmail] = useState("")  
  const [password, setPassword] = useState("")  

  const [emailErrors, setEmailErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  
  function onSubmit(e) {
    e.preventDefault() 
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="text"
            className="input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErrors.length > 0 && (
            <span className="msg">{emailErrors.join(", ")}</span>
          )}
        </div>
        <div
          className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}> 
          <label htmlFor="password" className='label'>Password</label>
          <input  className='input' type="password" id='password' value={password} onChange={e=>setPassword(e.target.value)}/> 
        </div>
        <button className='btn' type='submit'>  
          Submit
        </button>
      </form>
    </>
  );
}

export default Lec25formValidation