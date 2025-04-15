const HandleGemini = async (prompt) => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const apiKey = process.env.GEMINI_API_KEY; // Replace with your actual API key
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
    };

    try {
        const chatSession = model.startChat({ generationConfig, history: [] });
        const result = await chatSession.sendMessage(prompt);

        // Extracting text response
        const responseJson = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
        const parsedResponse = JSON.parse(responseJson);
        
        return parsedResponse;
    } catch (error) {
        console.error("Error in HandleGemini:", error);
        return "Error processing your request";
    }
};

module.exports = HandleGemini;
