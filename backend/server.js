const express=require('express');
const dotenv=require('dotenv')
const {chats}=require('./data/data');

const app=express()
 

app.get("/",(req,res)=>
{
res.send("Hi");
}



);

app.get("/api/chat",(req,res)=>

{
    res.send({chats});
});
app.get("/api/chat/:id",(req,res)=>

{
console.log(req.params.id);
const singleCHat=chats.find((c)=>c._id==req.params.id);
res.send(singleCHat)



}

);
const port=5000;

app.listen(port,console.log(`Server has started ${port}`))