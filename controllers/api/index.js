const router = require("express").Router();
const userRoutes = require("./userRoutes");
const friendRoutes = require('./userRoutes');

router.user("/users", userRoutes);
router.user("/users" , friendRoutes);


module.exports = router;
