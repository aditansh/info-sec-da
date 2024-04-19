import dotenv from "dotenv";
dotenv.config();
import { sql } from "drizzle-orm";
import { db } from "../db/db.js";

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      return res.status(400).json({
        status: false,
        message: "All inputs are required",
      });
    }

    const query = "select * from users where username = '" + username + "' and password = '" + password + "';";
    const result = await db.run(sql.raw(query));

    if (result.rows.length > 0) {
      const user = result.rows[0];
      return res.status(200).json({
        status: true,
        msg: "Login successful",
        data: {
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          role: user.role,
        },
      });
    }

    return res.status(400).json({
      status: false,
      msg: "Invalid credentials",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      staus: false,
      msg: err,
    });
  }
}
