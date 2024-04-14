import {useState , useEffect } from 'react'

function Lec10useEffectExercise() {

  const [person, setPerson] = useState({ name: "Rishi", age: 25, message: "Hello World" });

  // ex-1 render each time the component re-renders
  useEffect(() => {
    console.log('Render')  
  })

  // ex-2 render only once when the component is mounted
  useEffect(() => {
    console.log('Hi')
  }, [])

  // ex-3 render only when the name or age changes 
  useEffect(() => {
    console.log(`Name : ${person.name} and Age : ${person.age} changed`)
  }, [person.name, person.age])

  // ex-4 setting document title to name 
  useEffect(() => {
    document.title = person.name
  }, [person.name])

  function changeName() {
    if(person.name === "Rishi") {
      setPerson({...person, name: "Rishi Raj Singh"})
    } else {
      setPerson({...person, name: "Rishi"})
    }
  }

  function changeAge() {
    setPerson(prev => {
      return {...prev, age : prev.age + 1}
    })
  }



  useEffect(() => {
    console.log('Component Mounted')

    // return function will run when the component is unmounted 
    // so best place to return something is in useEffect has a second argument as an empty array if you want to run the return function only once when the component is unmounted
    return () => {
      console.log('Component Unmounted')
    }
  }, [] )
  return (
    <div>
      <button onClick={changeAge}> Change Age </button>
      <br />
      <br />
      <br />
      <button onClick= { changeName} > Change Name </button>
    </div>
  )
}

export default Lec10useEffectExercise