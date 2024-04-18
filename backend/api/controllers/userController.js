import dotenv from "dotenv";
dotenv.config();
import { sql } from "drizzle-orm";

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      return res.status(400).json({
        status: false,
        message: "All inputs are required",
      });
    }
    
    if (
      username === process.env.USERNAME &&
      password === process.env.PASSWORD
    ) {
      return res.status(200).json({
        status: true,
        message: "Login successful",
      });
    }

    return res.status(400).json({
      status: false,
      msg: "Invalid credentials",
    });
  } catch (err) {
    res.status(500).json({
      staus: false,
      msg: err,
    });
  }
}
