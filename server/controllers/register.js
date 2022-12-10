const registerControl = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(422).json({
      message: "All fields are required",
    });
  } else if (password.length < 6) {
    return res.status(422).json({
      message: "Password must be at least 6 characters long",
    });
  }
  console.log(username, email, password);
  res.status(201).json({ message: "ok" });
};

module.exports = { registerControl };
