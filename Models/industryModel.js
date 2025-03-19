const mongoose = require('mongoose');

const CareerClusterSchema = new mongoose.Schema({
    cluster_name: String,
    description: String,
    key_skills: [String],
    career_paths: [String]
});

const IndustryTrendSchema = new mongoose.Schema({
    topic: String,
    description: String
});

const ChallengeSchema = new mongoose.Schema({
    topic: String,
    description: String
});

const SalaryExpectationSchema = new mongoose.Schema({
    role: String,
    salary_range: String
});

const WorkEnvironmentSchema = new mongoose.Schema({
    title: String,
    description: String
});

const RegulationPolicySchema = new mongoose.Schema({
    title: String,
    description: String
});

const IndustrySchema = new mongoose.Schema({
    industry_name: { type: String, required: true },
    industry:{type: String, required: true, lowercase: true},
    overview: {
        description: String,
        importance: String
    },
    conclusion: {
        summary: String
    },
    career_clusters: [CareerClusterSchema],
    industry_trends: [IndustryTrendSchema],
    challenges: [ChallengeSchema],
    major_employers: [String],
    salary_expectations: [SalaryExpectationSchema],
    work_environment: [WorkEnvironmentSchema],
    industry_regulations_and_policies: [RegulationPolicySchema]
});

module.exports = mongoose.model('Industry', IndustrySchema);
