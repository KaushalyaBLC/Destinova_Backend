const GeneratePrompt = async (personalData, educationResult, answers) => {
  try {
    const educationLevel = personalData.education;

    // Define dynamic question list
    const questionsList = {
      q1: "How confident do you feel in your mathematics and science abilities? (1 to 5)",
      q2: "Rate your proficiency in using computers and software applications (1 to 5).",
      q3: "How comfortable are you with writing essays or reports? (1 to 5)",
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

    // Construct user responses dynamically
    const formattedResponses = Object.entries(questionsList)
      .map(([key, question]) => `${question}: ${answers[`answer${key.substring(1)}`] || "Not provided"}`)
      .join("\n");

    // Define education-specific details
    let educationDetails = "";
    if (["ol", "preal", "al", "degree"].includes(educationLevel)) {
      educationDetails = `
      ---------------------------------------------
      User Education Details:
      ${JSON.stringify(educationResult, null, 2)}
      ---------------------------------------------`;
    }

    // Generate the AI prompt
    const prompt = `
      You are a digital career counselor assisting a Sri Lankan student at the ${educationLevel.toUpperCase()} level.
      
      ---------------------------------------------
      User Details:
      ${JSON.stringify(personalData, null, 2)}
      ${educationDetails}
      
      User Responses:
      ${formattedResponses}
      ---------------------------------------------
      
      Carefully analyze the user's input and generate insights about their passions, skills, and possible ${educationLevel === "degree" ? "career" : "higher education and career"} paths in Sri Lanka.
      Act as a professional career counselor and provide the best advice possible. Always use the person's name you, your instead of pronouns.
      When recommending education paths, mention both private (paid) and free government options.

      ## OUTPUT FORMAT ##
      {
        "enoughInformation": "true/false (false if the given information is not sufficient)",
        "passion": "A 200-word professional description about the user's passion based on the responses.",
        "skill": "A 200-word professional description about the user's skillset based on the responses.",
        "higherEducation": [
          {
            "name": "Course Name",
            "description": "A 150-word description of the course.",
            "path": "Recommended path to pursue this course.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this course.",
            "whySuitable": "A 100-word explanation of why this course is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this course"],
              "cons": ["List of negative aspects of this course"]
            }
          },
          {
            "name": "Another Course",
            "description": "A 150-word description of the course.",
            "path": "Recommended path to pursue this course.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this course.",
            "whySuitable": "A 100-word explanation of why this course is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this course"],
              "cons": ["List of negative aspects of this course"]
            }
          },
          {
            "name": "Another Course",
            "description": "A 150-word description of the course.",
            "path": "Recommended path to pursue this course.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this course.",
            "whySuitable": "A 100-word explanation of why this course is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this course"],
              "cons": ["List of negative aspects of this course"]
            }
          },
          {
            "name": "Another Course",
            "description": "A 150-word description of the course.",
            "path": "Recommended path to pursue this course.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this course.",
            "whySuitable": "A 100-word explanation of why this course is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this course"],
              "cons": ["List of negative aspects of this course"]
            }
          },
          {
            "name": "Another Course",
            "description": "A 150-word description of the course.",
            "path": "Recommended path to pursue this course.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this course.",
            "whySuitable": "A 100-word explanation of why this course is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this course"],
              "cons": ["List of negative aspects of this course"]
            }
          },

        ],}
        "careerPath": [
          {
            "name": "Career Name",
            "description": "A 150-word description of the career.",
            "path": "Recommended path to pursue this career.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this career.",
            "whySuitable": "A 100-word explanation of why this career is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this career"],
              "cons": ["List of negative aspects of this career"]
            }
          },
          {
            "name": "Another Career",
            "description": "A 150-word description of the career.",
            "path": "Recommended path to pursue this career.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this career.",
            "whySuitable": "A 100-word explanation of why this career is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this career"],
              "cons": ["List of negative aspects of this career"]
            }
              },
            {
            "name": "Another Career",
            "description": "A 150-word description of the career.",
            "path": "Recommended path to pursue this career.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this career.",
            "whySuitable": "A 100-word explanation of why this career is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this career"],
              "cons": ["List of negative aspects of this career"]
            }
              },
            {
            "name": "Another Career",
            "description": "A 150-word description of the career.",
            "path": "Recommended path to pursue this career.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this career.",
            "whySuitable": "A 100-word explanation of why this career is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this career"],
              "cons": ["List of negative aspects of this career"]
            }
              },
            {
            "name": "Another Career",
            "description": "A 150-word description of the career.",
            "path": "Recommended path to pursue this career.",
            "howtoImprove": "A 100-word description of how the user can improve their skills for this career.",
            "whySuitable": "A 100-word explanation of why this career is suitable for the user based on their answers.",
            "prosAndCons": {
              "pros": ["List of positive aspects of this career"],
              "cons": ["List of negative aspects of this career"]
            }
        },
          }
        ]
      }
    `;

    return prompt;
  } catch (error) {
    console.error("Error in GeneratePrompt: ", error);
    throw new Error("Failed to generate prompt.");
  }
};

module.exports = GeneratePrompt;
