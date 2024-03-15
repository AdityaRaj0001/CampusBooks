const mongoose=require("mongoose")

const Schema=mongoose.Schema

const bookSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Genre:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Book',bookSchema)