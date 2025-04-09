import express from "express";
import pkg from 'body-parser';
const { json } = pkg;
import router from "./routes/taskRoutes.js";
import jwt from "jsonwebtoken";
const app = express();

app.use(json());
app.use("/api", router);

app.post("/login", (req, res) => {
  const SECRET = process.env.JWT_SECRET || "urvashiSecretKey";
  const { username } = req.body;
  const token = jwt.sign({ username }, SECRET);
  res.json({ token });
});

export default app;