import React from 'react'

export function Lec02_props(props) {
  // props is an object that contains all the properties passed to the component
  console.log(props); // {name: "custom_name", age: 20}
  return (
    <div>Name : {props.name}, Age : { props.age }</div>
  )
}

export function Lec02_props_2({ name, age  = 30 }) { 
  // destructuring props and giving default value to age if value in age  is not passed to the component
  console.log(props); // {name: "custom_name", age: 20}
  return (
    <div>Name : { name }, Age : { age } </div>
  )
}

export function Lec02_props_Accessing_Children({ children , ...props }) {
  // destructuring props and extracting children from the props
  console.log(props); // {name: "custom_name", age: 20}
  return (
    <div>{children}</div>
  )
}