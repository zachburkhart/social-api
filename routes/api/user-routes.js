const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  createFriend,
  updateUser,
  deleteUser,
  deleteFriend
} = require('../../controllers/user-controller');

// /api/user
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/user/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friend/:friendId
router
  .route('/:userid/friend/:friendId')
  .post(createFriend) 
  .delete(deleteFriend);

module.exports = router;