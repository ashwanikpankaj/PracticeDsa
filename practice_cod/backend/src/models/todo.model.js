const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    status:{type:Boolean,required:true},
    id:{type:String,required:true}
})

const todosItem = mongoose.model("todos",todoSchema);

module.exports = todosItem;