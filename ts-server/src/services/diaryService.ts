import diaryData from "../data/diaries.json";
import { DiaryEntry, NoSensitiveInfoDiaryEntry } from "../types";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]; //EXCEPCIÓN DE TIPO (as) -->evitarla siempre que se pueda

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] =>
  diaries;

export const addEntry = (): undefined => undefined;
