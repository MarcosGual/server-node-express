import { Visibility, Weather } from "../enums";
import { NewDiaryEntry } from "../types.d";


const isString = (string: string): boolean => {
  return typeof string === "string";
};

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment parameter");
  }

  return commentFromRequest;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (datefromRequest: any) => {
  if (!isString(datefromRequest) && !isDate(datefromRequest)) {
    throw new Error("Incorrect or missing date parameter");
  }

  return datefromRequest;
};

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather parameter");
  }

  return weatherFromRequest;
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missing visibility parameter");
  }

  return visibilityFromRequest;
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment),
  };

  return newEntry;
};

export default toNewDiaryEntry;
