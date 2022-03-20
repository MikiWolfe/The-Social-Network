const router = require("express").Router();
const apiRoutes = require("../controllers/api");

router.use("/api", apiRoutes);

router.use((req, res) => {
    return res.status(400).send('Oops! Something went wrong.')
})
module.exports = router;
