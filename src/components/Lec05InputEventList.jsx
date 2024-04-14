import React from "react";

function Lec05InputEventList() {
  const [name, setName] = React.useState("Rishi");

  return (
    <div>
      {/* to change the value of input take the event and change the value of target that initiated event through setFooBar(e.target.value) */}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {/* can also use defaultValue for the value inside input to change but that will not enable us to keep track of variable */}
    </div>
  );
}

export default Lec05InputEventList;
