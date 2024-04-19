import dotenv from "dotenv";
dotenv.config();
import { sql } from "drizzle-orm";
import { db } from "../db/db.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await db.run(sql`select * from blogs;`);

    if (blogs.rows.length > 0) {
      return res.status(200).json({
        status: true,
        msg: "Blogs found",
        data: blogs.rows,
      });
    }

    return res.status(400).json({
      status: false,
      msg: "No blogs found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      msg: err,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        status: false,
        msg: "All inputs are required",
      });
    }

    const blog = await db.run(
      sql`insert into blogs (title, content) values (${title}, ${content});`
    );

    if (blog.rowsAffected > 0) {
      return res.status(200).json({
        status: true,
        msg: "Blog created successfully",
      });
    }

    return res.status(400).json({
      status: false,
      msg: "Blog not created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      msg: err,
    });
  }
};
