import './App.css';
import { useState } from 'react'
import axios from "axios"
function AddTodo() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("first", title, desc)
    const data = {
      title,
      desc
    }
    const resp= await axios.post("http://localhost:5000/todo/add", data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="title">title:</label><br />
      <input type="text" id="title" name="title" onChange={(e) => settitle(e.target.value)} /><br />
      <label for="desc">desc:</label><br />
      <input type="text" id="desc" name="desc" onChange={(e) => setdesc(e.target.value)} /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddTodo;
