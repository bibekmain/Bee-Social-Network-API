const { User, Thought } = require("../models");

module.exports = {
  // Get all students
  getUsers(req, res) {
    User.find()
      .populate('thoughts')
      .populate('friends')
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a single student
  getUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // create a new user
  createUser(req, res) {
    /*Example req.body
      {
        "userame": "newUsername",
        "email": "newEmail@email.com"
      }
    */
    User.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update a user
  updateUser(req, res) {
    /*Example req.body
      {
        "userame": "newUsername",
        "email": "newEmail@email.com"
      }
    */
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId }, { new: true })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add a friend to a user
  async addFriend(req, res) {
    //update user's friend list
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
    //update the friend's friend list
    .then((data) =>
      User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $addToSet: { friends: req.params.userId } },
        { runValidators: true, new: true }
      )
    )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  // Remove a friend from a user
  removeFriend(req, res) {
    //update user's friend list
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
    //update the friend's friend list
    .then((data) =>
      User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $pull: { friends: req.params.userId } },
        { runValidators: true, new: true }
      )
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
