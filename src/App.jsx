import { useState } from "react";
import "./styles.css";


export default function App() {
  const [newItem, setnewItem] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    
    setTodo((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed:
        false },
      ]
    })
  }

  console.log(todo)

  return (
    <>
      <form onSubmit={ handleSubmit } className="new-item-form">
       <div className="form-row">
       <label htmlFor="item">New Item</label>
       <input 
       value={newItem} 
       onChange={e => setnewItem(e.target.value)} 
       type='text' id='item'></input>
       </div>
       <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
      {todo.map((todo) =>{
        return  <li>
        <label>
          <input type="checkbox" checked={todo.completed}/>
           {todo.title}
        </label>
        <button className="btn btn-danger">Delete</button>
        </li>
      })}  
    </ul>
    </>
  )
}