import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "5m" }
    );

    const result = {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      token,
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists!" });

    if (password != confirmPassword)
      return res.status(400).json({ message: "Passwords don't match!" });

    const hashedPassword = await bcrypt.hash(password, 12);

    let result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    result = {
      id: result._id,
      name: result.name,
      email: result.email,
      token,
    };
    res.status(200).json(result);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
