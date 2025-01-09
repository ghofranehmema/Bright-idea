const express = require('express');
const { createIdea, getIdeas, likeIdea, deleteIdea } = require('../controllers/ideascontroller');
const router = express.Router();

router.post('/', createIdea);
router.get('/', getIdeas);
router.post('/:id/like', likeIdea);
router.delete('/:id', deleteIdea);

module.exports = router;
