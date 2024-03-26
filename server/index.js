import express from "express";
import { config } from "dotenv";
config();

const port = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login to Enter</h1>");
});

app.get("/*", (req, res) => {
  res.status(404).send("<h1>404 not found</h1>");
});

app.listen(port, () => {
  console.log(`Server is listing on PORT ${port}`);
});
