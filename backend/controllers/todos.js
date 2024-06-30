const arr = require("../data");
const Todo = require("../models/todo");
// CRUD 
async function getTodos(req, res){ // all
    console.log("im in get todos")
    const resp = await Todo.find()
    res.send({message: "all todos", status: 200, data: resp})
   
} 
function getTodoById(req, res){ // get one
    res.send(arr)
}

async function createTodo(req, res){
    // save todo in database
    console.log("...create", req.body)
    const { title, desc } = req.body
    const resp = await Todo.create({
        title: title, 
        desc: desc
    })
    console.log(resp)
    res.send({message: "todo created", status: 201, res: resp})
} 

function deleteTodo(req, res){
    res.send("delete")
} 
async function updateTodo(req, res){
    console.log("updateTodo", req.body)
    const { title, desc, _id } = req.body
    const resp = await Todo.findByIdAndUpdate(_id, {title, desc})
    console.log(resp)
    res.send({message: "todo update", status: 200, res: resp})
} 

module.exports = {getTodos, createTodo, deleteTodo, updateTodo}