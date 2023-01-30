import * as diaryServices from "../services/diaryService";
import toNewDiaryEntry from "../utils/newEntry";

export const getDiaries = (req: any, res: any) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
};

const getDiaryById = (req: any, res: any) => {
  const diary = diaryServices.findById(+req.params.id);

  return diary ? res.send(diary) : res.sendStatus(404);
};

const postDiary = (req: any, res: any) => {
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
};

const updateDiary = (req: any, res: any) => {
  const entry = req.body;

  diaryServices.updateDiary(entry);

  res.status(200).json(diaryServices.getEntriesWithoutSensitiveInfo());
};

const deleteDiaryById = (req: any, res: any) => {
  diaryServices.deleteDiary(+req.params.id);

  res.status(200).send(diaryServices.getEntriesWithoutSensitiveInfo());
};

export default { getDiaries, getDiaryById, postDiary, updateDiary, deleteDiaryById };
