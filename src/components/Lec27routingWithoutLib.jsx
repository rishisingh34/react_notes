import React from 'react'

const Lec27routingWithoutLib = () => {
  let component 
  switch (window.location.pathname) { 
    case '/': 
      component = <h1>Home</h1> 
      break 
    case '/about': 
      component = <h1>About</h1> 
      break 
    case '/contact': 
      component = <h1>Contact</h1> 
      break 
    default: 
      component = <h1>Page Not Found</h1>
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      { component }
    </>
  ); 
}

export default Lec27routingWithoutLib