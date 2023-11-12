require('./src/config/firebase_config')
require('./src/config/mongodb_config')
const express = require('express')
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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
const fileUploadRoutes = require('./src/routes/fileupload')
const RoomSchema = require('./src/schema/roomSchema');
const User = require('./src/schema/userSchema');



// use routes

app.use('/api/users', userRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/room', roomRoutes);
app.use('/', fileUploadRoutes);



const server = createServer(app)
const socketIO = new Server(server,
    {
        cors: {
            origin: 'http://localhost:5173/',
            methods: ['GET', 'POST'],
        }
    })




// Define the storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const extArray = file.mimetype.split('/');
        const extension = extArray[extArray.length - 1];
        cb(null, `${file.fieldname}-${Date.now()}.${extension}`);
    },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/static', express.static(path.resolve('./uploads')));



//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });


});

/// 

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})