const GeneratePrompt = require("../Services/GeneratePrompt");
const HandleGemini = require("../Services/HandleGemini");
const SaveDB = require("../Services/SaveDB");

const novaController = async (req, res) => {
    const data = req.body;
    let { personalData, educationDetails, answers, ip } = data;
  try {
    // Ensure valid data is provided
    if (!personalData || !educationDetails || !answers) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    // Get the user's education type and retrieve corresponding details
    const educationType = personalData.education;
    const educationResult = educationDetails[educationType] || {};

    // Generate the AI prompt
    const prompt = await GeneratePrompt(personalData, educationResult, answers);

    // Get the AI-generated response from HandleGemini
    const result = await HandleGemini(prompt);

    // Send the response back to the client
    res.status(200).send(result);

    

  } catch (error) {
    console.error("Error in novaController:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }

  //Save the data to the database
  SaveDB(personalData, answers, ip);
};

module.exports = novaController;
