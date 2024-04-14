import React from "react";

function Lec06Challenges() {
  const [arr, setArr] = React.useState(["A", "B", "C", "D", "B", "B", "B"]);
  function removeFirst() {
    setArr((prev) => {
      // changing the previous state by removing the first element
      const newArr = prev.slice(1);
      // should use methods that return a new array, object or state( basically immutable methods)
      // using mutator methods like pop, push, shift, unshift, splice, sort, reverse, etc. is not as setState is responsible for re-rendering the component
      return newArr;
    });
  }

  function removeSpecificLetter(letter) {
    setArr((prev) => {
      return prev.filter((item) => item !== letter);
    });
  }

  function addingNewLetterAtSpecficIndex(letter, index) {
    setArr((prev) => {
      return [...prev.slice(0, index), letter, ...prev.slice(index)];
    });
  }
  return (
    <div>
      <button onClick={removeFirst}>Dequeue</button>
      <br />
      <br />
      <div>{arr.join(",")}</div>
      <br />
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <br />
      <button onClick={() => addingNewLetterAtSpecficIndex("E", 2)}>
        Add E at index 2{" "}
      </button>
    </div>
  );
}

export default Lec06Challenges;