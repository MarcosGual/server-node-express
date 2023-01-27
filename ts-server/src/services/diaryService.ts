import diaryData from "../data/diaries.json";
import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry,
} from "../types";

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

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry: DiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry,
  };

  diaries.push(newEntry);
  return newEntry;
};

export const updateDiary = (updatedEntry: DiaryEntry): DiaryEntry[] => {
  const index = diaries.indexOf(updatedEntry);

  diaries[index]=updatedEntry;

  return diaries;
};

export const deleteDiary = (id: number): DiaryEntry[] => {
  const filteredEntries = diaries.filter((d) => d.id !== id);
  diaries = filteredEntries;

  return diaries;
};
