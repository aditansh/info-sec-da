import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
const app = express();
import routes from "./routes/index.js";
app.use(json());
app.use(cors());
app.use("/", routes);

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
  console.log("running at " + port);
});
