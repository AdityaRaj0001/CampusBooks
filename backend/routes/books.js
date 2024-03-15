const express=require("express")
const router=express.Router()
const {getBooks,createBook,updateBook,deleteBook}=require("../controllers/bookController")

//Get all Books

router.get('/',getBooks)

//Create a single Book

router.post('/',createBook)

//Delete a single Book

router.delete('/:id',deleteBook)

//Update a Book

router.patch('/:id',updateBook)



//export router
module.exports=router