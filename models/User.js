const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\w+@\w+(.\w{2,3})+/, "Email address INVALID"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought"
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//a virtual "friendCount" that returns the number of friends
userSchema.virtual("friendCount").get(() => this.friends.length);

const User = model('user', userSchema);

module.exports = User;
