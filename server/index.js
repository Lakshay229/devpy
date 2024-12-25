const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: true,
});

const emailToSocket = new Map();
const socketToEmail = new Map();

io.on('connection', (socket) => {
    console.log('A user connected, id:', socket.id);

    socket.on('room:join', ({ email, roomNumber }) => {
        console.log('User:', email, 'joined room:', roomNumber);
        emailToSocket.set(email, socket.id);
        socketToEmail.set(socket.id, email);
        io.to(socket.id).emit("room:join", { email, roomNumber });
    });
});


app.get('/', (req, res) => {
    console.log("/")
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
