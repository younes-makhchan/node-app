require("dotenv").config();
const express=require("express")
const app=express();

app.use(express.static("./public"))

const PORT=process.env.PORT||3000
app.get("/",(req,res)=>{
    console.log('app starting')
    res.send("work")
})
app.listen(PORT,()=>{
    console.log("server started")
})