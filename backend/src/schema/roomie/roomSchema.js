const mongoose = require('mongoose');



const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  price: { type: Number, required: true },
  images: [String],
  amenities: [String],
  availability: { type: Boolean, default: true },
  mid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
