const http=require('http');
const express=require('express');
const route=require('route');


let app=express();

let server=http.createServer(app,(err)=>{
    if(err)
    console.log(err)
})

const port=3000;
//const localhost='127.0.0.1'

app.get("/", (req, res) => {
    res.send("This is The server side");
})

app.get("/about",(req,res)=>{
    res.send("thi is about page..")
})


server.listen(port,(err)=>{
    if(err)
    {
        console.log(error)
    }else{
        console.log(`server is running on http://localhost:${port}`)
    }
})