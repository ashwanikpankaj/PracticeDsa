const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors')
const connect = require("../src/configs/db");
const todoContoller = require("../src/controllers/todo.controller")

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.use("/todos",todoContoller)
app.listen(4500,async(req,res)=>{
    await connect();
    console.log("Listening on port 4500")
})