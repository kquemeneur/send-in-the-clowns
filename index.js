const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('stream',function(data){
        socket.broadcast.emit('stream',data);
    });
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});