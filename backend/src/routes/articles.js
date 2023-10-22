const express = require('express');
const Article = require('../schema/articleSchema'); 
const isAuthenticated = require('../middleware/firebase_mw');
const User = require('../schema/userSchema');
const { Types } = require('mongoose');

const router = express.Router();
 
router.use(isAuthenticated);

// Create an article
router.post('/', isAuthenticated, async (req, res) => {
  const { title, content } = req.body;
   
  try {
    // Check if the user exists in MongoDB
    console.log(req.user.uid )

    const existingUser = await User.findOne({ uid: req.user.uid });
    if (!existingUser) {
      return res.status(403).json({ message: 'User profile is incomplete. Please complete your profile.' });
    }

    const newArticle = new Article({
      title: title,
      content: content,
      author: existingUser._id,
      claps: 0,
      comments: [],
    });

    const article = await newArticle.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an article
router.delete('/:articleId', async (req, res) => {
  const { articleId } = req.params;

  try {
    const article = await Article.findOne({ _id: articleId, author: req.user.uid });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Delete the article
    await Article.deleteOne({ _id: articleId });
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
