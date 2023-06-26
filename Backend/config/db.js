const mongoose = require("mongoose");
require('dotenv').config();
const connection = mongoose.connect(`${process.env.mongoUrl}/TodoApp`)

module.exports={
    connection
}