const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



io.on('connection', function(client){
  client.on('messages', function(data){
    client.broadcast.emit("messages", data);
    console.log(data);
  });  
});


app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});
server.listen(3000);
