require('./src/config/firebase_config')
require('./src/config/mongodb_config')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const { createServer } = require('http')
const { Server } = require('socket.io')
const app = express()


const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


//import routes
const userRoutes = require('./src/routes/users')
const articlesRoutes = require('./src/routes/articles')
const roomRoutes = require('./src/routes/rooms');
const RoomSchema = require('./src/schema/roomSchema');
const User = require('./src/schema/userSchema');

// use routes

app.use('/api/users', userRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/room', roomRoutes)


const server = createServer(app)
const socketIO = new Server(server,
    {
        cors: {
            origin: 'http://localhost:5173/',
            methods: ['GET', 'POST'],
        }
    })


//socket methods 
//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})