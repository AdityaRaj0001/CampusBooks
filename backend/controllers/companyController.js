const Company=require('../models/companyModel')
const mongoose=require("mongoose")


//get all companies like so :)

const getCompanies=async(req,res)=>{

    const companies=await Company.find().sort({createdAt:-1})

    if(!companies) {
        return res.status(500).json({msg:"we fucked up sorry!"})
    }
   
    res.status(200).json(companies)
}


//get a single company

const getCompany=async(req,res)=>{

    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid company ID"})
    }

    const company=await Company.findById(id)

    if(!company){
        return res.status(404).json({error:"No such company exist"})
    }
    res.status(200).json(company)

}

// create a company

const createCompany=async(req,res)=>{

    const {Name,Cg_Criteria,Domain}=req.body
    console.log(req.body)
    
    //add to database
    try{
        const company=await Company.create({Name,Cg_Criteria,Domain})
        res.status(200).json(company)
    }
    catch(error){

        res.status(400).json({error:error.message})
    }

}

//delete a company

const deleteCompany=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid company ID"})
    }

    const company=await Company.findOneAndDelete({_id:id})

    if(!company){
        return res.status(404).json({error:"No such company exist"})
    }

    res.status(200).json(company) //return the company you deleted

}





//update a workout


const updateCompany=async(req,res)=>{
    
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid company ID"})
    }

    const company=await Company.findOneAndUpdate({_id:id},{
        ...req.body
    }, {returnDocument: 'after'})

    if(!company){
        return res.status(404).json({error:"No such company exist"})
    }
    

    res.status(200).json(company)  //gets you the updated company details

}


//an async function to fetch company by id for delete update and get single company

// async function fetchCompany(req,res,next){
//     let company

//     try{
//         company=await Company.findById(req.params.id)
//         if(!company){
//             return res.status(404).json({message:'Cannot find company'})
//         }

//     } catch(err){
//         return res.status(500).json({message:err.message})
//     }

//     res.company=company
//     next()


// }






module.exports={
    getCompanies,
    getCompany,
    createCompany,
    deleteCompany,
    updateCompany
}


