import './App.css';
import React, { useState, useEffect} from 'react'
import Header from "./components/Header"
import Todo from "./components/Todo"
import Form from "./components/Form"

function App() {
  const [todos, setTodos] = useState([])
  const [todosC, setTodosC] = useState([])

  const addTodo = (e) => {
    e.preventDefault()    
    setTodos([...todos, e.target.text.value])     
  }

 const deleteTodo = (todoToRemove) => {
    console.log('deletingG...')  
    let index = todos.indexOf(todoToRemove.text)
    todos.splice(index,1)
    console.log(todos)
    setTodos((previousTodo)=>[...todos])
  }

  useEffect(()=>{
    setTodos(todos)
  }, [todos])
  

  return (
    <div className="App">
      <div className="container">
       <Header
        text = {todos.length === 1 
          ?<h2>You have 1 Todo</h2>
          :<h2>You have {todos.length} Todos</h2>} 
        />
       {todos.map(todo=><Todo text={todo} deleteTodo={deleteTodo} key={Math.random()}/>)}
        <Form submithandler={addTodo} />
      </div>    
    </div>
  );
}

export default App;
