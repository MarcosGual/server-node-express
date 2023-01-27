import { type } from "os";

//export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
//export type Visibility = "great" | "good" | "ok" | "poor";

//cuando agregamos un enum, se convierte en código javascript
// por lo que necesitamos cambiar el nombre del archivo types.d.ts a types.ts
export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number;
}

export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

// export interface NoSensitiveInfoDiaryEntry {
//   id: number
//   date: string
//   weather: Weather
//   visibility: Visibility
// }

// SE PUEDE HACER LO MISMO DE SPECIALDIARYENTRY CON TIPOS PERO NO HAY HERENCIA
// type DiaryEntry {
//   id: number;
//   date: string;
//   weather: Weather;
//   visibility: Visibility;
//   comment: string;
// }

// type SpecialDiaryEntry = DiaryEntry & {
//   flightNumber: number;
// };
