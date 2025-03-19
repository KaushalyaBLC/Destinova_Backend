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
    const agricultureExtensionEducationClusterData = {
      name: "Agriculture Extension & Education",
      industry: "agriculture",
      definition: "Agriculture Extension & Education provides farmers, rural communities, and agricultural professionals with essential knowledge, tools, and training to enhance agricultural practices, sustainability, and productivity, bridging the gap between scientific research and practical farming applications to promote rural development and environmental sustainability across various farming sectors.",
      key_areas: [
        { title: "Farmer Education", description: "Developing training programs to educate farmers on modern techniques such as sustainable farming, pest management, crop rotation, and financial management." },
        { title: "Community Outreach", description: "Engaging with rural communities to understand their needs, providing solutions, and promoting the adoption of advanced agricultural methods for better productivity." },
        { title: "Research Dissemination", description: "Transferring research findings and agricultural innovations from institutions to farmers to help improve productivity, sustainability, and farming efficiency in rural areas." },
        { title: "Policy Advocacy", description: "Advocating for policies that support agricultural education, rural development programs, and practices that promote long-term sustainability in farming communities." },
        { title: "Technology Transfer", description: "Introducing new agricultural technologies such as precision farming, farm management software, and IoT to farmers for increased productivity and reduced environmental impact." }
      ],
      career_paths: [
        { title: "Extension Officer", description: "Provides expert advice to farmers, offering guidance on adopting new agricultural practices, technologies, and sustainable methods for improved farm productivity." },
        { title: "Agricultural Educator", description: "Teaches agricultural subjects in schools or universities, preparing students for careers in agriculture and promoting sustainable farming practices through education." },
        { title: "Farm Advisor", description: "Works directly with farmers to advise on best practices for crop management, pest control, soil health, and maximizing farm productivity." },
        { title: "Agricultural Policy Analyst", description: "Evaluates agricultural policies and suggests improvements to support sustainable farming practices, food security, and rural development." },
        { title: "Community Development Officer", description: "Designs and implements programs to enhance the well-being of rural communities, focusing on education, infrastructure, and improved agricultural productivity." },
        { title: "Agricultural Communications Specialist", description: "Develops educational content such as brochures, websites, and social media posts to inform farmers and the public about agricultural trends and innovations." },
        { title: "Sustainable Agriculture Consultant", description: "Advises farmers on how to adopt sustainable practices that minimize environmental impact while improving farm productivity, soil health, and water management." },
        { title: "Research Extension Coordinator", description: "Facilitates the transfer of agricultural research findings to farmers and ensures that new technologies and methods are effectively adopted by the farming community." },
        { title: "Rural Development Officer", description: "Focuses on improving rural infrastructure and the overall economic and social well-being of rural communities by developing and managing sustainable programs." },
        { title: "Agricultural Entrepreneur", description: "Develops innovative business models or technologies aimed at solving problems within the agricultural sector, from new farming techniques to market access solutions." }
      ],
      education_training: [
        { title: "Undergraduate Degrees", description: ["BSc in Agricultural Extension", "BSc in Agricultural Education", "BSc in Rural Development"] },
        { title: "Postgraduate Degrees", description: ["MSc in Agricultural Extension", "MSc in Rural Development", "MSc in Agricultural Education"] },
        { title: "Certifications", description: ["Certified Agricultural Extension Professional", "Diploma in Rural Development"] },
        { title: "Training Programs", description: ["Internships with agricultural extension agencies", "Workshops on sustainable farming practices"] }
      ],
      skills_required: [
        { title: "Communication Skills", description: "Effective communication is key for explaining complex agricultural concepts to farmers and rural communities in an easily understandable manner." },
        { title: "Community Engagement", description: "Building relationships with farming communities is essential to successfully implement educational programs and ensure effective knowledge transfer." },
        { title: "Research Skills", description: "Ability to understand, analyze, and apply agricultural research to improve farming practices and meet real-world challenges faced by farmers." },
        { title: "Technology Proficiency", description: "Familiarity with agricultural technologies such as farm management software, GPS, IoT, and precision farming techniques is essential for modern extension workers." },
        { title: "Problem-Solving Skills", description: "Extension professionals need strong problem-solving skills to tackle challenges such as pest infestations, climate issues, and soil health problems." }
      ],
      employment_sectors: [
        { title: "Private Sector", description: "Agri-businesses, tech companies, and private research institutions that drive innovation and offer opportunities for agricultural extension professionals." },
        { title: "Government Sector", description: "Government departments such as agriculture and rural development, offering positions for extension officers, educators, and researchers in public programs." },
        { title: "Educational Institutions", description: "Universities and agricultural colleges that provide education and training in agriculture, rural development, and agricultural extension services." },
        { title: "NGOs", description: "Non-governmental organizations focused on rural development, food security, and promoting sustainable agricultural practices through outreach programs." }
      ],
      future_trends: [
        { title: "Digital Extension Services", description: "The use of digital tools, mobile apps, and online platforms for delivering agricultural education and services to remote and underserved farmers." },
        { title: "Climate-Smart Agriculture", description: "Promoting farming practices that help farmers adapt to climate change, like water-efficient irrigation systems, crop diversification, and sustainable farming techniques." },
        { title: "Agri-Tech Integration", description: "The growing use of advanced technologies such as drones, sensors, and AI in agriculture to improve farm management and productivity." }
      ],
      challenges: [
        { title: "Knowledge Gaps", description: "Limited access to current agricultural research and knowledge for farmers, leading to inefficiency in practices and reduced productivity." },
        { title: "Climate Change", description: "Unpredictable weather patterns and extreme climate events create significant challenges to agricultural production and rural livelihoods." },
        { title: "Funding and Resources", description: "Lack of sufficient funding for extension programs can limit their reach, especially in underserved rural areas." }
      ],
      opportunities: [
        { title: "Government Support", description: "Increasing government initiatives and funding for sustainable agriculture, rural development, and agricultural education create growth opportunities." },
        { title: "Technological Advancements", description: "New agricultural technologies offer opportunities to enhance farm efficiency, improve sustainability, and reduce environmental impact in farming." },
        { title: "Global Agricultural Challenges", description: "The global demand for solutions to food security and climate change offers opportunities for innovation and growth in agricultural extension." }
      ]
    };

    // Insert data into MongoDB
    const cluster = new Cluster(agricultureExtensionEducationClusterData);
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
