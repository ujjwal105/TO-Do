const mongoose = require("mongoose");
const { title } = require("process");

mongoose.connect("mongodb+srv://ujjwaltyagi01:x6cItBDlbpInbeN7@cluster0.2gt5yli.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports={
    todo:todo
}