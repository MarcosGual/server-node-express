"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const isString = (string) => {
    return typeof string !== "string";
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment parameter");
    }
    return commentFromRequest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (datefromRequest) => {
    if (!isString(datefromRequest) && !isDate(datefromRequest)) {
        throw new Error("Incorrect or missing date parameter");
    }
    return datefromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Incorrect or missing weather parameter");
    }
    return weatherFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) ||
        !isVisibility(visibilityFromRequest)) {
        throw new Error("Incorrect or missing visibility parameter");
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
