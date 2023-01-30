import express from "express";
import toNewDiaryEntry from "../utils/newEntry";
import diaryController from "../controllers/diaryController";

const router = express.Router();

router.get("/", diaryController.getDiaries);

router.get("/:id", diaryController.getDiaryById);

router.post("/", diaryController.postDiary);

router.put("/", diaryController.updateDiary);

router.delete("/:id", diaryController.deleteDiaryById);

export default router;
