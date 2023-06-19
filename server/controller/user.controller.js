const User = require("../model/user.model");

const AllUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) return res.status(404).send("user not found ");
    res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { fName, lName, rollNo, department, shift, section } = req.body;
    const user = new User({
      fName,
      lName,
      department,
      rollNo,
      shift,
      section,
    });
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).send("user not found");
    res.status(200).send("deleted successfully");
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { fName, lName, Department, RollNo, Shift, Section } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      {
        fName,
        lName,
        Department,
        RollNo,
        Shift,
        Section,
      },
      { new: true }
    );
    if (!user) return res.status(404).send("User Not Found");
    res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { AllUsers, createUser, deleteUser, updateUser };
