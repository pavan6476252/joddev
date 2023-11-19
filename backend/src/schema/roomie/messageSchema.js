const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
