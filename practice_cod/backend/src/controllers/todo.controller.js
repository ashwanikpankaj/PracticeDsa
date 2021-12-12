const express = require('express');
const { create } = require('../models/todo.model');
const router = express.Router();
const todosItem = require("../models/todo.model")

router.post("",async(req,res)=>{
 const todo = await todosItem.create(req.body);
 return res.status(200).send({todo})
})

router.get("",async(req,res)=>{
    const todos = await todosItem.find().lean().exec();
    return res.status(200).send({todos})
})

router.delete("/:id",async(req,res)=>{
    const todo = await todosItem.deleteOne({_id:req.params.id});
    const todos = await todosItem.find().lean().exec();
    return res.status(200).send({todos})
})

router.patch("/:id",async(req,res)=>{
    const todo = await todosItem.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    const todos = await todosItem.find().lean().exec();
    return res.status(200).send({todos})
})
module.exports = router