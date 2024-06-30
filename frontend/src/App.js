import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import EditTodo from './Edittodo'

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState({})

  useEffect(() => {
    const res = fetch("http://localhost:5000/todo/")
    .then(data => data.json())
    .then(res => {
      console.log("my data", res.data)
      setTodoList(res.data)
    })
    console.log(res)

  }, [])

  const handleUpdate = (item) =>{
    setTodo({...item})

  }

  return (
    <div>
      {/* <AddTodo /> */}
      <EditTodo todo={todo}  />
      {todoList.map((item) => (
      <>
      <h1>{item.title}</h1>
      <p>{item.desc} <button onClick={() => handleUpdate(item)}>Edit</button><button>delete</button></p>
      </>
    ))}</div>
  )
}
export default App