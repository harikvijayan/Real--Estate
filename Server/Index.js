const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const Routes=require('./src/Routes/Users.js')
const Route=require('./src/Routes/Admin.js')

const app=express()
app.use(express.json())
app.use(cors())

app.use("/auth",Routes)
app.use("/admin",Route)

mongoose.connect("mongodb+srv://harikv03:harivijayan123@products.ikfc7uu.mongodb.net/products")
        .then(()=>{console.log("DataBase Connected !!!");})
        .catch(err=>console.log(err))

app.listen(5000,()=>{
    console.log("SERVER STARTED !!!!");
})