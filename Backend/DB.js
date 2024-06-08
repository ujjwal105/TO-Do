const mongoose = require("mongoose")
 
mongoose.connect("mongodb+srv://ujjwaltyagi2969:7Yt52S35jFd7FPAw@ujjwalcluster0.ebodbeu.mongodb.net/todos")

const todoSchema  = mongoose.Schema({
title:String,
description:String,
completed:Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}
