import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todos } from './Components/Todos'
import { CreateTodo } from './Components/CreateTodo'
function App() {

  const[todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
    </>
  )
}

export default App
