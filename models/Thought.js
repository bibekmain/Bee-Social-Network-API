const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      required: true,
      get: ""//TODO
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

//a virtual "reactionCount" that returns the number of reactions on the thought
thoughtSchema.virtual("reactionCount").get(() => this.reactions.length);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
