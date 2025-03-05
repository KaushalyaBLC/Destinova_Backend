const express = require("express");
const router = express.Router();

// Import the controller
const novaController = require('../Controllers/novaController');

// Routes
router.post("/", (req, res) => {
    novaController(req, res);
  });

// Export the router
module.exports = router;