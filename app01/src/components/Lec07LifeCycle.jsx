import React from 'react'
import { useState  } from 'react';

function Lec07LifeCycle() {
  const [isShown , setIsShown] = useState(true)
  const childComponent = isShown ? <div>Hello World</div>: null
  return (
    <div>
      <div>Lec07LifeCycle</div>
      <button onClick={() => setIsShown(false)}></button>
      {childComponent}
    </div>
  );
}


// Life Cycle of a component
// 1. Mounting
//    - constructor
//    - render
//    - componentDidMount
// 2. Updating
//    - render
//    - componentDidUpdate
// 3. Unmounting
//    - componentWillUnmount
// 4. Error Handling
//    - componentDidCatch
//    - static getDerivedStateFromError
//    - static getDerivedStateFromProps
//    - shouldComponentUpdate
//    - getSnapshotBeforeUpdate

export default Lec07LifeCycle