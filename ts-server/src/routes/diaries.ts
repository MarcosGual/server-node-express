import express from "express";
import * as diaryServices from "../services/diaryService";
import toNewDiaryEntry from "../utils/newEntry";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(+req.params.id);

  return diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const { date, weather, visibility, comment } = toNewDiaryEntry(req.body);

    const newDiaryEntry = diaryServices.addDiary({
      date,
      weather,
      visibility,
      comment,
    });

    res.status(201).json(newDiaryEntry);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

router.put("/", (req, res) => {
  const entry = req.body;

  diaryServices.updateDiary(entry);

  res.status(200).json(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.delete("/:id", (req, res) => {
  diaryServices.deleteDiary(+req.params.id);

  res.status(200).send(diaryServices.getEntriesWithoutSensitiveInfo());
});

export default router;
