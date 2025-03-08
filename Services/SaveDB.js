// Import models
const Customer = require("../Models/customerModel");
const Answers = require("../Models/answersModel");

const SaveDB = async (personalData, answers, ip) => {
  try {
    // Correcting the switch statement
    switch (personalData.education) {
      case "preol":
        personalData.education = "Following GCE O/L";
        break;
      case "ol":
        personalData.education = "Completed GCE O/L";
        break;
      case "preal":
        personalData.education = "Following GCE A/L";
        break;
      case "al":
        personalData.education = "Completed GCE A/L";
        break;
      case "degree":
        personalData.education = "Following/Completed a Degree";
        break;
      default:
        personalData.education = "N/A";
        break;
    }

    let customerId = "";
    
    // Await the database query
    const existingCustomer = await Customer.findOne({ telNo: personalData.telNo });

    if (existingCustomer) {
      customerId = existingCustomer._id;
      await Customer.updateOne(
        { _id: customerId },
        {
          $set: {
            name: personalData.name,
            email: personalData.email,
            bDay: personalData.bDay,
            education: personalData.education,
            ip: ip,
          },
        }
      );
    } else {
      const newCustomer = new Customer({
        name: personalData.name,
        email: personalData.email,
        telNo: personalData.telNo,
        bDay: personalData.bDay,
        education: personalData.education,
        ip: ip,
      });

      const addedCustomer = await newCustomer.save();
      customerId = addedCustomer._id;
    }

    // Creating and saving answers
    const newAnswers = new Answers({
      customerId: customerId,
      ...answers, 
    });

    await newAnswers.save();
    
  } catch (error) {
    console.error("Error in saving to the database:", error);
    throw error; 
  }
};

module.exports = SaveDB;
