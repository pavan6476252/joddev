const express = require('express');
const isAuthenticated = require('../middleware/firebase_mw');
const RoomSchema = require('../schema/roomie/roomSchema');
const multer = require('multer');


const { faker } = require('@faker-js/faker');


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
        const { page = 1, limit = 10, category, query, latitude, longitude, distance = 10000 } = req.query;

        let queryOptions = {};

        if (category === 'low-price') {
            queryOptions.sort = { price: 1 };
        } else if (category === 'high-price') {
            queryOptions.sort = { price: -1 };
        }

        let roomQuery = {};

        if (latitude && longitude) {
            const lat = parseFloat(latitude);
            const long = parseFloat(longitude);

            roomQuery.location = {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [long, lat],
                    },
                    $maxDistance: distance,
                },
            };
        }

        const rooms = await RoomSchema.find(roomQuery)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort(queryOptions.sort);

        const totalRooms = await RoomSchema.countDocuments(roomQuery);

        if (!rooms || rooms.length === 0) {
            return res.status(404).json({ message: 'No rooms found' });
        }

        res.json({
            rooms: rooms,
            count: rooms.length,
            currentPage: parseInt(page),
            totalPages: Math.ceil(totalRooms / limit),
        });
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

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No images uploaded' });
        }

        const imageUrls = req.files.map(file => `/static/${file.filename}`);

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

        const savedRoom = await newRoom.save();

        res.status(201).json({ "savedRoom": true, res: savedRoom });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/uploadFakeData', async (req, res) => {
    try {
        const { numberOfRooms = 10 } = req.body;

        // Generate fake data
        const fakeRooms = Array.from({ length: numberOfRooms }, () => ({
            title: faker.lorem.words(),
            description: faker.lorem.paragraph(),
            location: {
                type: 'Point',
                coordinates: [faker.location.latitude(), faker.location.longitude()]
            },
            price: faker.number.float({ min: 20, max: 2000 }),
            images: [faker.image.url()],
            amenities: ['wifi', 'parking', 'pool'],
            availability: faker.number.binary(),
            mid: '65358b2b5c5a91339782cd7d',
        }));

        // Save fake data to the database
        await RoomSchema.insertMany(fakeRooms);

        res.status(201).json({ message: 'Fake data uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
