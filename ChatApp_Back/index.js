const http = require('http');
const express = require('express');
const cors = require('cors');
const {Server} = require('socket.io');

const app =express();
const port = 3001;

const server = http.createServer(app,(err)=>{
    if(err)
     console.log(err);
})

app.use(cors());

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POSt"]
    }
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.get("/",(req,res)=>{
    res.send("This is The server side");
})

server.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`server is running on http://localhost:${port}`)
    }
})
