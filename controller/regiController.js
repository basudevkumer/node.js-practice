// const User = require("../models/user");

// const registration = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const user = await User.create({
//       name: name,
//       email: email,
//       password: password,
//     });

// const existingUser = await User.findOne({ email: email });

// if (existingUser) {
//   return res.send("User already exist");
// }

//     user.save();

//     res.status(201).json({
//       success: true,
//       data: user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = { registration };

const User = require("../models/user");

const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = registration;
