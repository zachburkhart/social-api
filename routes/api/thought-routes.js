const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

// /api/thought
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// /api/thought/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /reactions
router('/:thoughtid/reactions')

module.exports = router;