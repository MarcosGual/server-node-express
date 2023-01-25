export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

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
>

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
