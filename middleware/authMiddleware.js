const authMiddle = (req, res, next) => {
  const password = "665465465454";
  const auth = req.headers.authorization;

  if (password === auth) {
    next();
  } else {
    res.send("Unauthraized !");
  }
};

module.exports = authMiddle;
