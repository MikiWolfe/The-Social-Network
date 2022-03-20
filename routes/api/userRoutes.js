const router = require('.');
const {User, Thought } = require('../../models');

// GET all users
router.get("/", async (req, res) => {
    try {
      const userData = await User.findAll({});
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET single user by ID
  router.get("/:userId", async (req, res) => {
    try {
      const userData = await User.findById(req.params.userId);
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });






  
module.exports = router
