import { useState, useEffect } from "react"

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => { 
    const controller = new AbortController(); 

    fetch(url, { signal : controller.signal , ...options })
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch the data for that resource')
        } else {
          return res.json();
        }
      })
      .then(data => setData(data))
      .catch(err => {
        if( err.name === 'AbortError') return;
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false); 
      })
    
    return () => {
      controller.abort()
    }
  }, [url])

  return [data, isLoading, isError]
}