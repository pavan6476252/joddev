const express = require('express');
const isAuthenticated = require('../middleware/firebase_mw');
const RoomSchema = require('../schema/roomie/roomSchema');
const multer = require('multer');

const router = express.Router();

// router.use(isAuthenticated);

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

router.get('/', async (req, res) => {
    try {
        const rooms = await RoomSchema.find();
        if (!rooms || rooms.length === 0) {
            return res.status(404).json({ message: 'No rooms found' });
        }

        res.json({ rooms: rooms });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/createRoom', upload.array('images'), async (req, res) => {
    try {
        const {
            amenities,
            availability,
            description,
            title,
            location,
            mid,
            price,
        } = req.body;
        // console.log(req.body)
         
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No images uploaded' });
        }
 
        const imageUrls = req.files.map(file => `/static/${file.filename}`);
// console.log(imageUrls)
        
        const newRoom = new RoomSchema({
            amenities,
            availability,
            description,
            images: imageUrls,
            title,
            location,
            mid,
            price,
        });

        // // Save the room to the database
        const savedRoom = await newRoom.save();

        res.status(201).json({"savedRoom":true , res:savedRoom});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
