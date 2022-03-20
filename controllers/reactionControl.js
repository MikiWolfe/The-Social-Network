const { Thought } = require("../models");

module.exports = {

  // CREATE reaction
  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "The Pensive found no thoughts with that ID" })
          : res.status(200).json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETE reaction
  deleteReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.body._id } } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "The Pensive found no thoughts with that ID" })
          : res.status(200).json
      )
      .catch((err) => res.status(500).json(err));
  },
};

