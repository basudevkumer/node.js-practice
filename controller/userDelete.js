// const User = require("../models/user");

// const userDelete = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await User.findByIdAndDelete(id);
//     res.send("User delet");
//   } catch (error) {
//     res.send(error);
//   }
// };

// module.exports = userDelete;

const User = require("../models/user");

const userDelete = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.send("Delete items");
  } catch (error) {
    res.send(error);
  }
};

module.exports = userDelete;
