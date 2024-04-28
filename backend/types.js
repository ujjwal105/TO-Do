const { clear } = require("console");
const zod = require("zod");


const createTodo = zod.object({
    tittle: zod.string()
    ,
    description: zod.string()
})
const updateTodo = zod.object({
   id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}