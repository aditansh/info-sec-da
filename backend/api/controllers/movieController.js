import dotenv from "dotenv";
dotenv.config();
import { eq, like } from "drizzle-orm";
import { db } from "../db/db.js";
import { movies } from "../db/schema.js";

export const search = async (req, res) => {
  try {
    const title = req.body.value;

    if (!title) {
      return res.status(400).json({
        status: false,
        message: "Title is required",
      });
    }

    const result = await db
      .select()
      .from(movies)
      .where(like(movies.title, "%" + title + "%"))
      .run();

    if (result.rows.length > 0) {
      return res.status(200).json({
        status: true,
        msg: "Movies found",
        data: result.rows,
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
