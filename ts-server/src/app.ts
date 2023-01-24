import express from "express"; //ESModules
// const express=require('express') -> commonjs
import diaryRouter from "./routes/diaries";

const app = express();

app.use(express.json());

const PORT = 8080;

app.get("/ping", (_req, res) => {
  console.log("someone ping here!! " + new Date().toLocaleDateString());
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(
    `Sever running on port ${PORT}. Visit http://localhost:${PORT}/ping`
  );
});
