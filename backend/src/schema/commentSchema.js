const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Comment = mongoose.model('Comment', commentSchema);
  
  
  module.exports =  Comment;