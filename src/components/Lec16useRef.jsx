import {React , useState , useEffect , useRef }from 'react'

const Lec16useRef = () => {
  // const rishi = React.useRef("Rishi"); 
  // console.log(rishi.current); 
  // rishi.current = "raj"; 
  // console.log(rishi.current);
  const [name, setName] = useState(""); 
  const inputRef = useRef(); 
  useEffect(() => {
    inputRef.current.focus();   
  })
  useEffect(() => {
    console.log(inputRef.current.value); 
  }, [name])

  return (
    <div>
      {/* changing reference will not re-render the component unlike the setState  */}
      {/* <button
        onClick={() => {
          rishi.current = Math.random();
        }}
      >
        Change Ref
      </button>
      <button
        onClick={() => {
          console.log(rishi.current);
        }}
      >
        Print Ref
      </button> */}

      <input
        ref={inputRef}
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Lec16useRef