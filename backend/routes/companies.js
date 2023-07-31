const express=require("express")
const router=express.Router()
const {getCompanies,getCompany,createCompany,updateCompany,deleteCompany}=require("../controllers/companyController")

//Get all companies

router.get('/',getCompanies)

//Get a single workout

router.get('/:id',getCompany)

//Create a single company

router.post('/',createCompany)

//Delete a single company

router.delete('/:id',deleteCompany)

//Update a company

router.patch('/:id',updateCompany)



//export router
module.exports=router