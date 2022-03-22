const { User, Thought } = require("../models");

module.exports = {
    
  // GET all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  // GET one thought
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select("-__v")
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res
              .status(404)
              .json({ message: "The Pensive found no thoughts with that ID." })
          : res.status(200).json(dbThoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // CREATE a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findByIdAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Thought created but not assigned to a user." })
          : res.status(200).json(user)
      )
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // UPDATE a thought
  updateThought(req, res) {
    Thought.where({ _id: req.params.id })
      .updateOne(req.body)
      .then((thoughtData) => res.status(200).json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },

  // DELETE a thought
  deleteThought(req, res) {
    Thought.deleteOne({ _id: req.params.id })
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },
};
