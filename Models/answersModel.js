const mongoose = require("mongoose");

const answersSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer", 
    required: true,
  },
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  answer5: String,
  answer6: String,
  answer7: String,
  answer8: String,
  answer9: String,
  answer10: String,
  answer11: String,
  answer12: String,
  answer13: String,
  answer14: String,
  answer15: String,
  creadtedAt: {
    type: Date,
    default: Date.now,
  },
});

const Answers = mongoose.model("Answers", answersSchema);

module.exports = Answers;
