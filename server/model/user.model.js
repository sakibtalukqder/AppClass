const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true
  },
  shift: String,
  section: {
    type: String,
    required: true
  },
});

const User = mongoose.model("User", studentSchema);
module.exports = User;
