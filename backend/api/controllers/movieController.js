import dotenv from "dotenv";
dotenv.config();
import { sql } from "drizzle-orm";
import { db } from "../db/db.js";
import { SQLiteDialect } from "drizzle-orm/sqlite-core";

export const search = async (req, res) => {
  try {
    const title = req.body.value;

    if (!title) {
      return res.status(400).json({
        status: false,
        message: "Title is required",
      });
    }

    // console.log(`select * from movies where title like ${title};`);
    // console.log(
    //   `select * from movies where title like '' UNION SELECT id, name, email, password, username FROM users;`
    // );

    const movies = await db.run(
      sql`select * from movies where title like ${title};`
    );

    // console.log(movies);

    if (movies.rows.length > 0) {
      return res.status(200).json({
        status: true,
        msg: "Movies found",
        data: movies.rows,
      });
    }

    return res.status(400).json({
      status: false,
      msg: "No movies found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      msg: err,
    });
  }
};
