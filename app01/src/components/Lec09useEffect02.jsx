import { useState, useEffect } from "react";

function Lec09useEffect02() {
  const [width, setWidth] = useState(window.innerWidth);
  const [testWidth, setTestWidth] = useState(window.innerWidth);

  // changing  width variable by adding eventing listener, listening to resizing of window  once the component is mounted using useEffect hook
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // event listeners need to be removed otherwise memory leaks may occur 

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // in the above useEffect hook, first cleanup will run and then the event listener will be added ensuring that previous event listener is removed before adding a new one

  // change the width variable by setting the window.innerWidth to testWidth variable whenever the window.innerWidth changes
  // this approach is recommended to avoid the use of event listeners
  useEffect(() => {
    setTestWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div>
      <div>{width}</div>
      <br />
      <br />
      <div>{testWidth}</div>
    </div>
  );
}

export default Lec09useEffect02;
