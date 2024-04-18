import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import { db } from "./db/db.js";
const app = express();
// const routes = require("./routes/index");

app.use(json());
// app.use("/", routes);

app.get("/ping", (req, res) => {
  res.status(200).json({
    status: true,
    message: "pong",
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, async () => {
  // console.log(db);
  console.log("running at " + port);
});
