require("dotenv").config();
const express = require("express");
const { db } = require("./db/schema");
const app = express();
// const routes = require("./routes/index");

app.use(express.json());
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
