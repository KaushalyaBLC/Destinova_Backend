//Import models
const Industry = require("../Models/industryModel");
const Cluster = require("../Models/clusterModel");

const getIndustry = async (req, res) => {
    const industry_name = req.params.industry_name;
    const industry = await Industry.findOne({ industry: industry_name });
    industry ? res.status(200).json(industry) : res.status(404).json({ error: "Industry not found" });
};

const getCluster = async (req, res) => {
    const cluster_name = req.params.cluster_name;
    const cluster = await Cluster.findOne({ name: cluster_name });
    cluster ? res.status(200).json(cluster) : res.status(404).json({ error: "Cluster not found" });
}

module.exports = { getIndustry, getCluster };