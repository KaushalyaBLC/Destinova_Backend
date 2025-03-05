const GeneratePrompt = async (personalData, educationResult, answers) => {
  try {
    const educationLevel = personalData.education;

    // Define question list dynamically for flexibility
    const questionsList = {
      q1: "How confident do you feel in your mathematics and science abilities? (1 to 5)",
      q2: "Rate your proficiency in using computers and software applications (1 to 5).",
      q3: "How comfortable are you with writing essays or reports? (1 to 5.)",
      q4: "Describe any notable academic achievements after age 15.",
      q5: "Have you learned or practiced coding? If so, through what method?",
      q6: "What programming languages have you tried, and what have you created?",
      q7: "What subjects are you most passionate about, and why?",
      q8: "Describe a topic or concept you learned outside your school curriculum.",
      q9: "Can you describe a challenging problem you solved and how?",
      q10: "Which sports have you participated in?",
      q11: "What skills or lessons have you gained from sports?",
      q12: "Which extracurricular activities have you participated in?",
      q13: "Have you taken any initiatives or led any projects?",
      q14: "Which careers or industries excite you the most and why?",
      q15: "Do you prefer working individually or in a team? Explain why.",
    };

    // Build the AI prompt based on the education level
    let prompt = "";

    if (educationLevel === "preol") {
      prompt = `
        You are a digital career counselor assisting a Sri Lankan student who has not yet faced the GCE O/L examination.
        ---------------------------------------------
        User Details:
        ${JSON.stringify(personalData, null, 2)}
        ---------------------------------------------
        User Responses:
        ${Object.entries(questionsList)
        .map(
            ([key, question]) =>
            `${question}: ${answers[`answer${key.substring(1)}`] || "Not provided"}`
        )
        .join("\n")}
        ---------------------------------------------
        Carefully analyze the user's input and generate insights about their passions, skills, and possible higher education paths in Sri Lanka. act as a professionnal career counselor and provide the user with the best advice possible always use your the persons name not his her. in path mention the private paid options and free government option both

        ## OUTPUT FORMAT ##
        {
        "enoughInformation": "true/false (make it false if the given information is not sufficient)",
        "passion": "200-word attractive and professional description about the user's passion based on the answers",
        "skill": "200-word attractive and professional description about the user's skillset based on the answers",
        "higherEducation": [
            {
            "name": "Name of the course",
            "description": "100-word description of the course",
            "path": "Recommended path to pursue this course"
            },
            {
            "name": "Name of another course",
            "description": "100-word description of the course",
            "path": "Recommended path to pursue this course"
            },
            {
            "name": "Name of another course",
            "description": "100-word description of the course",
            "path": "Recommended path to pursue this course"
            },
            {
            "name": "Name of another course",
            "description": "100-word description of the course",
            "path": "Recommended path to pursue this course"
            },
            {
            "name": "Name of another course",
            "description": "100-word description of the course",
            "path": "Recommended path to pursue this course"
            },
        ]
        }
            `;
    } else {
      prompt = `User's education level (${educationLevel}) is not currently handled in this implementation.`;
    }

    return prompt;
  } catch (error) {
    console.error("Error in GeneratePrompt: ", error);
    throw new Error("Failed to generate prompt.");
  }
};

module.exports = GeneratePrompt;
