import React, { useState } from "react";

// Parent Component
const Lec23oneWayDataFlow = () => {
  const [count, setCount] = useState(0);

  // Callback function to update count
  const updateCount = () => {
    setCount(prevCount => prevCount +1 )
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent updateCount={updateCount} />
    </div>
  );
};

// Child Component
const ChildComponent = ({ updateCount }) => {
  const handleClick = () => {
    // Update count in the parent component
    updateCount(); // You can pass any new value here
  };

  return <button onClick={handleClick}>Increase Count</button>;
};

export default Lec23oneWayDataFlow;


// In React, the one-way data flow concept is a fundamental principle that emphasizes the unidirectional flow of data throughout your application. This means that data flows from parent components to child components, and any changes to that data should occur in a controlled manner, typically through the use of state and props.

// Here's how the one-way data flow concept works in React:

// Parent Component State: In React, state is typically managed within the parent component. State represents the data that can change over time, affecting the UI. When the state of a parent component changes, React automatically re-renders the component and its children to reflect the new state.

// Props: Props (short for properties) are a way to pass data from parent to child components. Props are immutable, meaning that child components cannot directly modify the props they receive from their parent.

// Changing State in Child Components: If you need to change the state of a parent component from a child component, you typically do this by passing a callback function as a prop to the child component. This callback function can then be invoked in the child component, triggering a state change in the parent component.