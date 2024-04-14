import{ React ,useState, useMemo }from 'react'

const LIST = Array(1_000_000).fill(0).map((_, i) => i)

const Lec17useMemo = () => {
  const [query, setQuery] = useState(""); 
  const [isDarkMode, setIsDarkMode] = useState(false);  

  const filteredList = useMemo(() => {
    return LIST.filter((n) => n.toString().includes(query));
  }, [query]); 
  console.log(filteredList.length);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Query : 
        <input type="text" value={query} onChange={e =>{setQuery(e.target.value)} } /> 
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={e => setIsDarkMode(e.target.checked)} checked={isDarkMode} />
        Dark Mode 
      </label>
    </div >
  )
}

export default Lec17useMemo