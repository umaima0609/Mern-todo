const express = require("express")
const arr = require("../data")
const todoRouter = express.Router()
const {getTodos, createTodo, deleteTodo, updateTodo} = require("../controllers/todos.js")
todoRouter
    .get("/", getTodos)
    .post("/", updateTodo)
    .post("/add", createTodo)
    .delete("/", deleteTodo)



module.exports = todoRouter