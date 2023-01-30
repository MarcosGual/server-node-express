import * as diaryServices from "../services/diaryService";

export const getDiaries = (req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
};

const getDiaryById = (req, res) => {
  const diary = diaryServices.findById(+req.params.id);

  return diary ? res.send(diary) : res.sendStatus(404);
};

const postDiary = (req, res) => {
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

const updateDiary = (req, res) => {
  const entry = req.body;

  diaryServices.updateDiary(entry);

  res.status(200).json(diaryServices.getEntriesWithoutSensitiveInfo());
};

const deleteDiaryById = (req, res) => {
  diaryServices.deleteDiary(+req.params.id);

  res.status(200).send(diaryServices.getEntriesWithoutSensitiveInfo());
};

export default { getDiaries, getDiaryById, postDiary, updateDiary, deleteDiaryById };
