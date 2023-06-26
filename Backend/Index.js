const express = require("express");
const { connection } = require("./config/db");
const { todoRouter } = require("./routes/todo.routes");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();
// 17min 

const app = express();

app.use(express.json());

app.use("/todos",todoRouter);
app.use("/users",userRouter);

app.listen(process.env.port,async()=>{

    try {
        const connect = await connection; 
        console.log("DB connected");
        console.log("Server is running on Port:-"+process.env.port);
    } catch (error) {
        console.log(error.message)
    }
})