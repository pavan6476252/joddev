const express = require('express');
const RoomSchema = require('../schema/roomSchema');
const isAuthenticated = require('../middleware/firebase_mw');
const User = require('../schema/userSchema');

const router = express.Router();

router.post('/create', isAuthenticated, async (req, res) => {
    try {
        const { uid } = req.user;
        const { startTime, public, title, subTitle, thumbnail } = req.body;

        const room = new RoomSchema({
            uid,
            startTime,
            public,
            title,
            subTitle,
            thumbnail
        });

        const newRoom = await room.save();
        res.status(201).json(newRoom);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/update/:id', isAuthenticated, async (req, res) => {
    try {
        const { uid } = req.user;
        const { startTime, public, title, subTitle, thumbnail, ended } = req.body;
        const roomId = req.params.id; // Extract room ID from the URL

        const updatedRoom = await RoomSchema.findOneAndUpdate(
            { _id: roomId, uid: uid },
            {
                startTime,
                public,
                title,
                subTitle,
                thumbnail,
                ended
            },
            { new: true }
        );

        if (!updatedRoom) {
            return res.status(404).json({ message: 'Room not found or unauthorized' });
        }

        res.status(200).json(updatedRoom);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/find/:id', async (req, res) => {
    try {
        const roomId = req.params.id;
        const room = await RoomSchema.findOne({ _id: roomId });

        if (room) {
            res.status(200).json(room);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    } catch (e) {
        console.log('room/find/ : ', e);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
});
router.get('/findall/:uid', async (req, res) => {
    try {
        const uid = req.params.uid;
        const room = await RoomSchema.find({ uid });

        if (room) {
            res.status(200).json(room);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    } catch (e) {
        console.log('room/findall/ : ', e);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
});
router.get('/findall/', async (req, res) => {
    try {
     
        const room = await RoomSchema.find();

        if (room) {
            res.status(200).json(room);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    } catch (e) {
        console.log('room/findall/ : ', e);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
});

//participant routes

router.post('/roomId/participants/add', isAuthenticated, async (req, res) => {
    try {
        const { roomId } = req.params;
        const { uid } = req.user;

        //check room
        const room = await RoomSchema.findOne({ _id: roomId });

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        //alredy exists
        if (room.participants.includes(uid)) {
            return res.status(400).json({ message: "User  already exists in room" });

        }

        //add room participant

        room.participants.push(uid);
        await room.save();

        res.status(200).json({ message: 'Participant added successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.delete('/:roomId/participants/remove/:participantId', isAuthenticated, async (req, res) => {
    try {
        const { roomId, participantId } = req.params;
        const { uid } = req.user;

        // Check if the room exists
        const room = await RoomSchema.findOne({ _id: roomId });

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }


        if (room.uid !== uid) {
            return res.status(403).json({ message: 'Permission denied' });
        }

        // Check if the participant is in the room
        if (!room.participants.includes(participantId)) {
            return res.status(404).json({ message: 'Participant not found in the room' });
        }

        // Remove the participant 
        room.participants = room.participants.filter((p) => p !== participantId);
        await room.save();

        res.status(200).json({ message: 'Participant removed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Route to leave a room
router.delete('/:roomId/participants/leave', isAuthenticated, async (req, res) => {
    try {
        const { roomId } = req.params;
        const { uid } = req.user;

        // Check if the room exists
        const room = await RoomSchema.findOne({ _id: roomId });

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Check if the user is a participant in the room
        if (!room.participants.includes(uid)) {
            return res.status(400).json({ message: 'User is not a participant in the room' });
        }

        // Remove the user from the list of participants
        room.participants = room.participants.filter((p) => p !== uid);
        await room.save();

        res.status(200).json({ message: 'Left the room successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;


