const router = require("express").Router();
const userRoutes = require("./userRoutes");
const friendRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes')

router.use("/users", userRoutes);
router.use("/users" , friendRoutes);
router.use('/thougts', thoughtRoutes)

module.exports = router;
