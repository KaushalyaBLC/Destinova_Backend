const express = require("express");
const router = express.Router();

// Import the controller
const { getIndustry, getCluster, getCareerData} = require('../Controllers/crystalController');
const { get } = require("mongoose");

// Routes
router.get("/industry/:industry_name", (req, res) => {
    getIndustry(req, res);
  });

router.get("/cluster/:cluster_name", (req, res) => {
    getCluster(req, res);
  });

  router.get("/career/:career", (req, res) => {
    getCareerData(req, res);
  });
// Export the router
module.exports = router;