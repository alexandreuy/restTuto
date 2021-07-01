const express = require('express');
const router = express.Router();
const Post= require('../models/Post');


router.get('/', (req, res) => {
    const posts = Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({error}));
});

router.post('/', async (req, res) => {
    const post = new Post({
        ...req.body
    });
    const savedPost = await post.save();
    res.json(savedPost);
});

module.exports = router;