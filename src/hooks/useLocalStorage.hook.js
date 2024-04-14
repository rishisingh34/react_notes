import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key); 
    return localValue ? localValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value); 
  }, [value])
  return [firstName, setFirstName];
}