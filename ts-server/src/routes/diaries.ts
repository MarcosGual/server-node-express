import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetching all diaries");
});

router.post("", (req, res) => {
  res.send("Saving diary...");
});

export default router;