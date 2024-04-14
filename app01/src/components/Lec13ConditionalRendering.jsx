import React from 'react'

function Lec13ConditionalRendering() {

  let isLoggedIn = false; 
  let num = 10;
  return (
    <div>
      <div>
        {/* using ternary operator  */}
        {isLoggedIn ? <h1>Welcome Rishi</h1> : <h1>Welcome Guest</h1>}
        
        {/* using && to first validate and then second statement will be returned  */}
        {num != null && <h1>Number : {num}</h1>}
      </div>
    </div>
  )
}

export default Lec13ConditionalRendering