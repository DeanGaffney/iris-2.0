var express = require("express");

var router = express.Router();

// ROUTE IMPORTS
const userRoutes = require("./user");

// ROUTES SETUP
router.use("/user", userRoutes);

module.exports = router;
