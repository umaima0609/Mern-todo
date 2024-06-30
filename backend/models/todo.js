const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc:  String,
    isEdit: {
        type: Boolean,
        default: 0
    }

})
const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo


