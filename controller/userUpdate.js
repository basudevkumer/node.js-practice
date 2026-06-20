// const User = require("../models/user");

// const userUpdate = async (req, res) => {
//   const { id } = req.params;

//   await User.findByIdAndUpdate(id, req.body, { new: true });

//   res.send("Data updated");
// };

// module.exports = userUpdate;

const User = require("../models/user");

const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send({
      id: id,
      name: name,
      email: email,
      password: password,
      status: "Data updated",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = userUpdate;
