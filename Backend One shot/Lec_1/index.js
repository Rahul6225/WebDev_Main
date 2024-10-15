require('dotenv').config()
const express = require("express")

const app = express();
const port = 3000

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/twitter",(req,res)=>{
    res.send("Hii there is a Twitter")
})
app.get("/login",(req,res)=>{
    res.send("<h1> hii Please login at homepage</h1>")
})
app.get("/youtube",(req,res)=>{
    res.send("<h2>This is My Youtube Channel</h2>")
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listing on ${port}`)
})