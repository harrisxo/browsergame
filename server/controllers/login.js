const loginControl = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({
      message: "All fields are required",
    });
  }
  // add database validation
  console.log(email, password);
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = { loginControl };
