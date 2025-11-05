const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  course: {
    type: String,
    required: [true, "Course is required"]
  },
  age: Number,
  city: String
});

module.exports = mongoose.model("Student", studentSchema);
