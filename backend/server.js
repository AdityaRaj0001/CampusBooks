require("dotenv").config()

const express=require("express")
const companyRoutes=require('./routes/companies')
const mongoose=require('mongoose')
const cors = require('cors')
//express app {jaise hmko pata hi nhi h :)} 

const app=express()

//middleware

app.use(express.json())//to get server req as json 
app.use(cors({
    origin:'*'
}))

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/companies',companyRoutes)

//connect to db then listen to requests

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connection to database successful')
        //listen to request on PORT
        app.listen(process.env.PORT,()=>{
            console.log(`listening to requests on port http://localhost:${process.env.PORT} `)
        })
    })
    .catch((err)=>{
        console.log(err)
    })


