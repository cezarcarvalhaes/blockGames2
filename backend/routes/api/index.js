const router = require("express").Router();
const bookRoutes = require("./games");

// Book routes
router.use("/games", bookRoutes);

module.exports = router;
