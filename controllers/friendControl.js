const { User } = require("../models");

module.exports = {
  // Add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.status(200).json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Remove a friend
  deleteFriend(req, res) {
    User.findOneAndDelete(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: "No user found with this ID" })
          : res.status(200).json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },
};
