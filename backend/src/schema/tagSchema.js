const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    name: String,
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;