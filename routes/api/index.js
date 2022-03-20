const router = require("express").Router();
const userRoutes = require("./userRoutes");
const friendRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const reactionRoutes = require("./reactionRoutes");

router.use("/users", userRoutes);
router.use("/users", friendRoutes);
router.use("/thougts", thoughtRoutes);
router.use("/reactions", reactionRoutes);

module.exports = router;
