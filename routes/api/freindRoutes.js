const router = require("express").Router();

const { addFriend, deleteFriend } = require("../../controllers/friendControl");

router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;
