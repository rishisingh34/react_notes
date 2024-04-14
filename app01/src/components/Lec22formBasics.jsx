import { React, useState } from 'react'

const Lec22formBasics = () => {
  
  const [todos, setTodos] = useState([]);
  const[newTodoName, setNewTodoName] = useState(""); 
  function addNewTodo(e) {

    e.preventDefault();
    if (newTodoName === "") return; 
    setTodos(prevTodos => {
      return [...prevTodos, { id: Date.now(), name: newTodoName }];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }
  return (
    <div>
      <ul style={{listStyle : 'none'}} id='list'>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)}
              />
              <span>{todo.name}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
      <form onSubmit={addNewTodo} id="">
        <input type="text" value={newTodoName} onChange={e => setNewTodoName(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default Lec22formBasics