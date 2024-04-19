import dotenv from "dotenv";
dotenv.config();
import { sql } from "drizzle-orm";
import { db } from "../db/db.js";

export const search = async (req, res) => {
  try {
    const title = req.body.value;

    if (!title) {
      return res.status(400).json({
        status: false,
        message: "Title is required",
      });
    }

    const query = "select * from movies where title like '%" + title + "%';";

    const movies = await db.run(sql.raw(query));

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
