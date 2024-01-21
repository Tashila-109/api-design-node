import express from "express";
import morgan from "morgan";

import router from "./router";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("hello"));
  }, 1);
});

app.use("/api", router);

export default app;
