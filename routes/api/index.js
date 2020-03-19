const router = require("express").Router();
const resultsRoutes = require("./results");

// results routes
router.use("/results", resultsRoutes);

module.exports = router;
