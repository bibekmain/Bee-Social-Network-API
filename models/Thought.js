const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction.js");
const dateFormat = require("../utils/dateFormat");

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
      //use a getter to format the date
      get: (date) => dateFormat(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    toObject: {
      virtuals: true
    },
    id: false,
  }
);

//a virtual "reactionCount" that returns the number of reactions on the thought
thoughtSchema.virtual("reactionCount").get(function () {
  return (this.reactions && this.reactions.length) ? this.reactions.length : 0;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
