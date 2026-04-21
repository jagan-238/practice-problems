const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { users } = require("../data/users.data");

// SIGNUP
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 5);

  const user = { id: Date.now(), email, password: hashed };
  users.push(user);

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.status(201).json({ token });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.status(200).json({ token });
};