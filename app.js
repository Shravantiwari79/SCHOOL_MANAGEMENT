const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/Studentman';
const PORT = 8080;

async function main(){
    await mongoose.connect(dbUrl);    //dbUrl
 }
 main().
 then(()=>{
     console.log("connected to DB"); // connect successfully with db
 })      
 .catch((err)=>{
     console.log(err);   // when occurs any problems with database connection 
 })

app.get("/",(req,res)=>{
    res.send("Hi I'm Root");
})
app.listen(PORT, (req,res)=>{
    console.log(`Server is listing on port ${PORT}`);
})