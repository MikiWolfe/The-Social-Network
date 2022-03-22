const { User } = require("../models");

module.exports = {

  // Add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true, runValidators: true}
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: "No friends found with this ID" })
          : res.status(200).json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Remove a friend
  deleteFriend(req, res) {
    User.findOneAndDelete(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: "No friends found with this ID" })
          : res.status(200).json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
};
