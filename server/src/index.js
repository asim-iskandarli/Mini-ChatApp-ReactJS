const express = require('express');
const cors = require('cors');
const http = require("http");

const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const path = path.join(__dirname, 'server', 'dist')

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
});

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('room', (data) => {
        socket.join(data.roomId);
        socket.to(data.roomId).emit('joinRoom', data.username)
    });

    socket.on('message', (data) => {
        socket.to(data.roomId).emit('messageClient', data);
    });

    

    socket.on('leaveRoom', (data) => {
        socket.leave(data.roomId);
        socket.to(data.roomId).emit('leaveRoom', data.username)
    })

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});