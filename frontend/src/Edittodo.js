import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios"
function EditTodo({todo}) {
    console.log(todo)
  const [titleu, settitle] = useState("")
  const [descu, setdesc] = useState("")
  console.log(titleu, descu)
  useEffect(()=>{
    settitle(todo.title)
    setdesc(todo.desc )
  },[todo])
  const handleUpdate = (e) => {
    e.preventDefault()
    // update api call
    const res = axios.post("http://localhost:5000/todo/", {_id: todo._id, title: titleu, desc: descu})
    console.log(titleu, descu,res)
    

  }
  return (
    <form onSubmit={handleUpdate}>
      <label for="title">title:</label><br />
      <input value={titleu} type="text" id="title" name="title" onChange={(e) => settitle(e.target.value)} /><br />
      <label for="desc">desc:</label><br />
      <input value={descu} type="text" id="desc" name="desc" onChange={(e) => setdesc(e.target.value)} /><br /><br />
      <input type="submit" value="Update" />
    </form>
  );
}

export default EditTodo;
