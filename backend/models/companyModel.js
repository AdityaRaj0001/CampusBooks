const mongoose=require("mongoose")

const Schema=mongoose.Schema

const companySchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Cg_Criteria:{
        type:Number,
        required:true
    },
    Domain:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Company',companySchema)