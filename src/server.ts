import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./router";
import { protect } from "./modules/auth";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("hello"));
  }, 1);
});

app.use("/api", protect, router);

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default app;
