const router = require("express").Router();
const bookRoutes = require("./results");

// Book routes
router.use("/results", bookRoutes);

module.exports = router;
