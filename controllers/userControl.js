const { User, Thought } = require("../models");

module.exports = {
  
  // GET all users
  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => res.status(200).json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // GET single user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts")
      .populate("friends")
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: "That user does not exsist." })
          : res.status(200).json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // CREATE new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err));
  },

  // UPDATE user
  updateUser(req, res) {
    User.where({ _id: req.params.userId })
      .updateOne(req.body)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err));
  },

  // DELETE user & all of their thoughts
  deleteUser(req, res) {
    User.deleteOne({ _id: req.params.userId })
      .then((user) => res.status(200).json(user))
      .then((user) => {
        !user
          ? res
              .status(404)
              .json({ message: "Unable to locate user by that ID." })
          : Thought.deleteMany({ _id: { $in: user.thoughts } });
      })
      .catch((err) => res.status(500).json(err));
  },
};
