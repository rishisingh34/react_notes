import { useState } from 'react'
import {useFetch} from '../hooks/useFetch.hook'

const URLS = {
  users: "https://jsonplaceholder.typicode.com/users",
  posts: "https://jsonplaceholder.typicode.com/posts",
  comments: "https://jsonplaceholder.typicode.com/comments"

}

const Lec20customHooksTask = () => {

  const [url, setUrl] = useState(URLS.users);
  const [data, isLoading, isError] = useFetch(url); 

  return (
    <>
      <label>
        <input
          type="radio"
          checked={url === URLS.users}
          onChange={() => setUrl(URLS.users)}
        />
        Users
      </label>
      <label>
        <input
          type="radio"
          checked={url === URLS.posts}
          onChange={() => setUrl(URLS.posts)}
        />
        Posts
      </label>
      <label>
        <input
          type="radio"
          checked={url === URLS.comments}
          onChange={() => setUrl(URLS.comments)}
        />
        Comments 
      </label>
      <div>
        {isLoading ? ( <h1>Loading...</h1> ): isError ? ( <h1>Error</h1> ) : ( <pre>{JSON.stringify(data, null, 2)}</pre> )}
      </div>
    </>
  );
}

export default Lec20customHooksTask