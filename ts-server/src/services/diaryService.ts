import diaryData from "../../data/diaries.json";
import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry,
} from "../types";

const jsonfile = require("jsonfile");

let diaries: DiaryEntry[] = diaryData as DiaryEntry[]; //EXCEPCIÓN DE TIPO (as) -->evitarla siempre que se pueda

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((entry) => entry.id === id);

  if (entry) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }

  return undefined;
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    });
  };

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry | void => {
  try {
    const newEntry: DiaryEntry = {
      id: Math.max(...diaries.map((d) => d.id)) + 1,
      ...newDiaryEntry,
    };

    diaries.push(newEntry);
    
    jsonfile.writeFileSync(
      "./data/diaries.json",
      diaries,
      { spaces: 2 },
      function (err: Error) {
        if (err) console.error(err.message);
      }
    );

    console.log("guardado");
    return newEntry;
  } catch (error: any) {
    console.log(error.message);
    return;
  }
};

export const updateDiary = (updatedEntry: DiaryEntry): DiaryEntry[] => {
  const index = diaries.indexOf(updatedEntry);

  diaries[index] = updatedEntry;

  return diaries;
};

export const deleteDiary = (id: number): DiaryEntry[] => {
  const filteredEntries = diaries.filter((d) => d.id !== id);
  diaries = filteredEntries;

  return diaries;
};
