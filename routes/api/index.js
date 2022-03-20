const router = require("express").Router();
const userRoutes = require("./userRoutes");
const friendRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes')

router.user("/users", userRoutes);
router.user("/users" , friendRoutes);
router.use('/thougts', thoughtRoutes)

module.exports = router;
