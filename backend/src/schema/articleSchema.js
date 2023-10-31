const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    claps: Number,
    category: [{ type: String, required: true }],
    createdAt: { type: Date, default: Date.now },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const Article = mongoose.model('Article', articleSchema);


module.exports = Article;