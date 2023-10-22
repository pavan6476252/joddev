const express = require('express');
const User = require('../schema/userSchema');
const isAuthenticated = require('../middleware/firebase_mw');

const router = express.Router();

router.use(isAuthenticated);

router.get('/profile', isAuthenticated, async (req, res) => {
    const uid = req.user.uid;

    try {
        // Fetch the user's profile from MongoDB
        const user = await User.findOne({ uid });
        if (!user) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/profile', isAuthenticated, async (req, res) => {
    const uid = req.user.uid;
    const { name, picture } = req.body;

    try {
        // Update the user's profile in MongoDB
        const updatedUser = await User.findOneAndUpdate(
            { uid },
            { $set: { name, picture } },
            { new: true } // Return the updated user data
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Register a new user
router.post('/register', isAuthenticated, async (req, res) => {
    const { uid, email, name, picture } = req.user;
    try {

        const existingUser = await User.findOne({ uid });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }


        const newUser = new User({
            uid: uid,
            email: email,
            name: name,
            picture: picture,

        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
