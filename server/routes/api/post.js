const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const { Post } = require('../../models');

// get all of posts from database
router.get('/', (req, res) => {
  Post.findAll()
  .then((posts) => {
    res.send(posts);
  })
  .catch(console.error);
});

// get one post from database
router.get('/:postId', (req, res) => {
  Post.findById(req.params.postId)
  .then((post) => {
    res.send(post)
  })
  .catch(console.error);
});

// create one post in database (admin)
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    intro_paragraph: req.body.introParagraph,
    content: req.body.content
  })
  .then((post) => {
    res.send(post);
  })
  .catch(console.error);
});

// update one post in database (admin)
router.put('/:postId', (req, res) => {
  Post.update({
    title: req.body.title,
    intro_paragraph: req. body.introParagraph,
    content: req.body.content
  }, {
    where: {
      id: req.params.postId
    }
  })
  .then((updatedCount) => {
    res.status(200).send(updatedCount[0]);
  })
  .catch(console.error);
});

// delete one post from database (admin)
router.delete('/:postId', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.postId
    }
  })
  .then((deletedCount) => {
    if (deletedCount > 0) {
      res.sendStatus(202);
    } else {
      res.sendStatus(404);
    }
  })
  .catch(console.error);
});

module.exports = router;
