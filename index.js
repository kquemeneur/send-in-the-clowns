const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// à la racine on renvoie vers index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// lancement du serveur
server.listen(8001, () => {
  console.log('listening on http://localhost:8001');
});

// A la connexion d'un client au serveur
io.on('connection', (socket) => {
  // quand on reçoit une image traitée
  socket.on('stream', function (data) {
    // on renvoit l'image au client
    socket.emit('stream', data);
  });
 
});