const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    unique: true,
    // validate: true
    //     * Must match a valid email address (look into Mongoose's matching validation)
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  //     * Array of `_id` values referencing the `User` model (self-reference)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = User;
