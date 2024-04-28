const mongoose = require("mongoose");
const { title } = require("process");

mongoose.connect("mongodb+srv://name:url.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports={
    todo:todo
}
