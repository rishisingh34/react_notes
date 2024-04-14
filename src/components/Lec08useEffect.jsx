import {useState , useEffect} from 'react'

function Lec08useEffect() {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(23);
  // every time this particular component is rendered, useEffect is called
  useEffect(() => {
    console.log("useEffect called");
  });

  // calling useEffect only once when the component is mounted
  useEffect(() => {
    console.log("useEffect called only once");
  }, []);

  // This use effect is called when there is any change in the name or age
  useEffect(() => {
    console.log(
      "This use effect is called when there is any change in the name or age"
    );
  }, [name, age]);
  const changeName = () => {
    setName("new name");
  };
  const changeAge = () => {
    setAge((age) => age + 1);
  };
  return (
    <div>
      <div>Lec08useEffect</div>
      <button onClick={changeName}> Change Name </button>
      <button onClick={changeAge}> Change Age </button>
    </div>
  );
}

export default Lec08useEffect