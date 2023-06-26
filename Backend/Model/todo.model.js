const mongoose = require("mongoose");


const todoSchema = mongoose.Schema({
    title: {type:String,required:true},
    status: {type:String,required:true},
    user: {type:String,required:true},
    userId: {type:String,required:true}
},{
    versionKey:false
})

const todoModel = mongoose.model("todo",todoSchema);


module.exports={
    todoModel
}