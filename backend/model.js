const mongoose = require('mongoose')


const schema = mongoose.Schema(
     {
     email:String,
     todolist:[
                {
                id:Number,
                todo:String,
                }
               ],
     })

module.exports =mongoose.model("db",schema)