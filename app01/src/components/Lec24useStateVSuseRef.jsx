import {React, useState , useRef  , useEffect }from 'react'

const Lec24useStateVSuseRef = () => {
  // const [name, setName] = useState("")
  const nameRef =  useRef()
  useEffect(() => {
    console.log("render"); 
  })

  function handleSubmit(e) {
    e.preventDefault()
    const name = nameRef.current.value 
    if (name === "") return 
    alert(`Name : ${name}`)
  }
  return (
    <div onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text"  id='name' ref={nameRef}/>
      {/* <input
        type="text"
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <br />
      <br />
      <button>Alert Name</button>
    </div>
  )
}

export default Lec24useStateVSuseRef