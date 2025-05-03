// Importation des modules
const express =
require('express');
const http = require('http');
const socketIO =
 require('socket.io');

 // Initialisation de l'app
const app = express();
const server =
http.createServer(app);
const io = socketIO(server);

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));

// Événement de connexion socket
io.on('connection', (socket) => 
{
console.log("Un utilisateur s\'est connecté");
socket.on('chatMessage', (msg) => {

// Réémettre le message à tous les
clients
io.emit('chatMessage', msg);
});
socket.on('disconnect', () => 
{
console.log("Un utilisateur s\'est déconnecté");
});
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
console.log(`Serveur Socket.io
démarré sur
 http://localhost:${PORT}`);
})