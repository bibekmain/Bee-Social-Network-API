const { Thought, User } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .populate("reactions")
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a thought
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .populate("responses")
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Create a thought
  async createThought(req, res) {
    /*Example req.body
      {
        "username": "exampleUser",
        "thoughtText": "example thought text"
      }
    */
    try {
      const newThought = await Thought.create(req.body);
      if (newThought) {
        //After creating the thought, add the thought to the respective user's model
        User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: newThought._id } },
          { new: true }
        )
          .then((data) => res.json(newThought))
          .catch((err) => res.json(err));
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update a thought
  updateThought(req, res) {
    /*Example req.body
      {
        thoughtText: "example thought text"
      }
    */
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Create a reaction //TODO:
  createReaction(req, res) {
    /*Example req.body
    {
      "username": "exampleuser",
      "reactionBody": "example reaction"
    }
    */
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: { reactions: req.body } },
      { new: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a reaction TODO:
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
