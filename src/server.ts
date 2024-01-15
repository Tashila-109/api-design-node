import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("hello"));
  }, 1);
});

export default app;
