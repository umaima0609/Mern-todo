const express = require('express')
const todoRouter = require('./routes/todos')
const cors = require("cors")
const dbconnect = require('./db')
const bodyParser = require('body-parser') 
const app = express()
const port = 5000

// app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.get("/", (req, res) => {
    return res.status(200).send("server is running")
})

app.use("/todo", todoRouter)



app.listen(port, async () => {
    await dbconnect();
    console.log("server is running at port", port)
})