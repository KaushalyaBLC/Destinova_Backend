const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the CareerCluster schema
const careerClusterSchema = new Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  definition: { type: String, required: true },
  key_areas: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  career_paths: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  education_training: [
    {
      title: { type: String, required: true },
      description: [{ type: String }]
    }
  ],
  skills_required: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  employment_sectors: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  future_trends: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  challenges: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  opportunities: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ]
});

// Create the Mongoose model
const CareerCluster = mongoose.model('CareerCluster', careerClusterSchema);

// Export the model
module.exports = CareerCluster;
