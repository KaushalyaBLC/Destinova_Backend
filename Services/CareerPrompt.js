const CareerPrompt = async (career) => {
    const prompt = `Provide detailed career guidance information for the career: ${career}. The response should be formatted in JSON and structured with the following key details. Ensure the information is relevant to students in Sri Lanka, considering the local job market, education system, and opportunities. if the user input is not a career make is_career: false,
  
    {
      "is_career": {true/false},
      "career_title": "${career}",
      "description": "{Brief job description including key responsibilities}",
      "work_environment": "{Office, remote, fieldwork, etc.}",
      "industries": ["{Industry 1}", "{Industry 2}", "{Industry 3}"],
      "skills": {
        "technical_skills": ["{Skill 1}", "{Skill 2}", "{Skill 3}"],
        "soft_skills": ["{Skill 1}", "{Skill 2}", "{Skill 3}"]
      },
      "qualifications": {
        "minimum_education": "{Minimum required qualification in Sri Lanka}",
        "recommended_education": "{Preferred degree or certifications}",
        "training_courses": ["{Relevant course 1}", "{Relevant course 2}"]
      },
      "career_path": {
        "entry_level_roles": ["{Role 1}", "{Role 2}"],
        "mid_level_roles": ["{Role 1}", "{Role 2}"],
        "senior_level_roles": ["{Role 1}", "{Role 2}"],
        "alternative_careers": ["{Career 1}", "{Career 2}"]
      },
      "salary": {
        "entry_level": "{Estimated salary in LKR}",
        "mid_level": "{Estimated salary in LKR}",
        "senior_level": "{Estimated salary in LKR}",
        "factors_affecting_salary": ["{Factor 1}", "{Factor 2}"]
      },
      "job_market": {
        "demand_in_sri_lanka": "{Current demand level}",
        "growth_trends": "{Future job growth predictions}",
        "major_employers": ["{Company 1}", "{Company 2}", "{Company 3}"],
        "freelance_opportunities": "{Yes/No, with explanation}"
      },
      "work_life_balance": {
        "working_hours": "{Typical working hours}",
        "job_flexibility": "{Remote work, freelance, shifts, etc.}",
        "stress_level": "{Low/Medium/High with explanation}",
        "job_satisfaction": "{General job satisfaction level}"
      },
      "tools_and_technologies": ["{Tool 1}", "{Tool 2}", "{Software 1}", "{Software 2}"],
      "education_and_training": {
        "top_universities": ["{University 1}", "{University 2}"],
        "online_courses": ["{Course 1}", "{Course 2}"],
        "scholarships": ["{Scholarship 1}", "{Scholarship 2}"]
      }
    }
    `;
    return prompt;
  };
  
  module.exports = CareerPrompt;
  