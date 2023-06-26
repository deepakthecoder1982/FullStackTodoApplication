const express = require("express");
const { todoModel } = require("../Model/todo.model");

const todoRouter = express.Router();

todoRouter.get("/", async(req,res) => {
    try {
        let todos =await todoModel.find();
        res.send({todos})
    } catch (error) {
        res.status(400).send({error:error?.message});
    }
});

module.exports = {
  todoRouter,
};
