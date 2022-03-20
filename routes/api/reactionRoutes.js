const router = require("express").Router();

const {
  addReaction,
  deleteReaction,
} = require("../../controllers/reactionControl");

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
