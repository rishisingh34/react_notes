import { useState, useEffect } from "react";

function Lec11useEffectBonus() {
  const [name, setName] = useState("Rishi");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`Name : ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);
  return (
    <div>
      <div>
        {" "}
        <input type="text" onChange={(e) => setName(e.target.value)} />{" "}
      </div>
      <br />
      <br />
      <div>{name}</div>
    </div>
  );
}

export default Lec11useEffectBonus;
