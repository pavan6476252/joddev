const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    public: Boolean,
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    thumbnail: { type: String, required: true },
    startTime: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    ended: { type: Boolean, default: false }
});

const RoomSchema = mongoose.model('Room', roomSchema);


module.exports = RoomSchema;