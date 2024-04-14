import { useState, useEffect } from 'react';  


export default function Lec12fetchApi() { 
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => { 
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json()
        } else {
          throw new Error('Something went wrong ...')
        }
      
      })
      .then(data => {
        console.log(data);
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  let jsx; 
  if (loading) {
    jsx = <div>Loading ...</div>
  } else if (error) {
    jsx = <div>{error.message}</div>
  } else if (users) {
    jsx = <div>
      <ul>
        {users.map(user => (
          <li style={ { padding : "10px" }} key={user.id}>Name : {user.name} <br />
            UserName : {user.username} <br /> 
            Address : { user.address.street + ", " +  user.address.city}</li>
        ))}
      </ul>
    </div>
  }

  return <div>
    {jsx}
  </div>
}
