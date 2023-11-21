const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8001, () => {
  console.log('listening on *:8001');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('stream', function (data) {
    socket.broadcast.emit('stream', data);
  });
  socket.on('tarace', function (msg) {
    socket.broadcast.emit('tarace', msg);
  });
});