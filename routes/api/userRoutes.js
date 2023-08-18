const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(removeFriend).post(addFriend);

module.exports = router;
