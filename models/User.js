const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
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
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
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

//a virtual "friendCount" that returns the number of friends
userSchema.virtual('friendCount').get(function () {
  return (this.friends && this.friends.length) ? this.friends.length : 0;
});

const User = model("user", userSchema);

module.exports = User;
