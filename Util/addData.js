const mongoose = require('mongoose');
const Cluster = require('../Models/clusterModel'); // Import the Industry schema

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/destinova', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB Connected');

    // Data to insert into the database
    const sustainableAndGreenBuildingClusterData = {
      name: "Sustainable & Green Building",
      industry: "construction",
      definition: "Sustainable & Green Building focuses on designing, constructing, and operating buildings in an environmentally responsible and resource-efficient manner. It incorporates eco-friendly materials, energy-efficient technologies, and sustainable construction practices to minimize the environmental impact of the built environment.",
      key_areas: [
        { title: "Energy-Efficient Design", description: "Designing buildings with energy-saving technologies like passive solar heating, high-efficiency HVAC systems, and LED lighting." },
        { title: "Sustainable Materials", description: "Using eco-friendly materials such as recycled, reclaimed, and non-toxic substances in construction to reduce environmental impact." },
        { title: "Water Conservation", description: "Implementing systems like low-flow fixtures, rainwater harvesting, and water recycling to minimize water usage." },
        { title: "Indoor Environmental Quality", description: "Focusing on improving air quality, lighting, and acoustics for healthier and more comfortable living or working spaces." },
        { title: "Green Building Certifications", description: "Achieving certifications like LEED (Leadership in Energy and Environmental Design) for buildings that meet environmental standards." }
      ],
      career_paths: [
        { title: "Sustainability Consultant", description: "Provides expertise in sustainable building practices and energy-efficient design strategies." },
        { title: "Green Architect", description: "Designs buildings using sustainable materials, energy-efficient systems, and environmentally friendly practices." },
        { title: "LEED Accredited Professional", description: "Specializes in LEED certification and helps guide projects through the certification process." },
        { title: "Building Systems Engineer", description: "Designs and optimizes building systems (HVAC, electrical, plumbing) for maximum energy efficiency and sustainability." },
        { title: "Construction Project Manager", description: "Manages construction projects while ensuring adherence to sustainability goals and green building standards." },
        { title: "Sustainable Building Materials Specialist", description: "Sources and recommends sustainable and eco-friendly materials for construction projects." },
        { title: "Energy Auditor", description: "Assesses the energy use of buildings and provides recommendations for improving energy efficiency." },
        { title: "Environmental Health & Safety Officer", description: "Ensures that construction practices and building designs meet safety and environmental standards." },
        { title: "Urban Planner with Sustainability Focus", description: "Plans and develops urban spaces with a focus on sustainability, energy efficiency, and low environmental impact." },
        { title: "Green Building Operations Manager", description: "Oversees the operations and maintenance of buildings with a focus on sustainability and energy conservation." }
      ],
      education_training: [
        { title: "Undergraduate Degrees", description: ["BSc in Environmental Engineering", "BSc in Architecture", "BSc in Sustainable Construction"] },
        { title: "Postgraduate Degrees", description: ["MSc in Sustainable Building Design", "MSc in Green Building Systems", "MSc in Energy Management"] },
        { title: "Certifications", description: ["LEED Accredited Professional", "Certified Green Building Professional", "Sustainability Manager Certification"] },
        { title: "Training Programs", description: ["Workshops on sustainable construction practices", "Training on energy-efficient building systems"] }
      ],
      skills_required: [
        { title: "Sustainable Design Knowledge", description: "Understanding of green building practices, sustainable materials, and energy-efficient technologies." },
        { title: "Project Management Skills", description: "Ability to manage complex construction projects while ensuring adherence to sustainability goals." },
        { title: "Energy Efficiency Expertise", description: "Knowledge of energy-saving strategies and technologies to reduce a building's environmental impact." },
        { title: "Building Systems Knowledge", description: "Understanding of HVAC, plumbing, and electrical systems optimized for sustainability." },
        { title: "Environmental Awareness", description: "Understanding of the environmental impact of construction and the importance of eco-friendly practices." }
      ],
      employment_sectors: [
        { title: "Private Sector", description: "Construction firms specializing in green buildings, architectural firms focused on sustainability, and renewable energy companies." },
        { title: "Government Sector", description: "Municipalities and government agencies promoting sustainable urban development and green building initiatives." },
        { title: "NGOs", description: "Non-governmental organizations focused on environmental sustainability, climate change, and building green cities." },
        { title: "Educational Institutions", description: "Universities offering degrees in sustainable design, architecture, and environmental engineering." }
      ],
      future_trends: [
        { title: "Smart Buildings", description: "Integration of smart technologies such as IoT and automation to optimize energy use and improve building performance." },
        { title: "Net-Zero Buildings", description: "Designing buildings that produce as much energy as they consume, achieving net-zero carbon emissions." },
        { title: "Circular Construction", description: "Implementing circular economy principles by reusing building materials and reducing waste in construction." }
      ],
      challenges: [
        { title: "Cost of Sustainable Materials", description: "The high initial cost of sustainable materials can make green building projects more expensive." },
        { title: "Regulatory Barriers", description: "Navigating local regulations and building codes that may not be conducive to green construction practices." },
        { title: "Awareness and Education", description: "Lack of awareness among clients and stakeholders about the long-term benefits of sustainable building practices." }
      ],
      opportunities: [
        { title: "Green Building Demand", description: "The increasing demand for environmentally responsible buildings in both residential and commercial sectors." },
        { title: "Technological Innovations", description: "Advances in building materials, energy-efficient technologies, and construction techniques to reduce environmental impact." },
        { title: "Government Incentives", description: "Government incentives for green building projects, including tax rebates and energy-efficiency grants." }
      ]
    };

    // Insert data into MongoDB
    const cluster = new Cluster(sustainableAndGreenBuildingClusterData);
    cluster.save()
      .then(() => {
        console.log('Data successfully added!');
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error adding data:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
