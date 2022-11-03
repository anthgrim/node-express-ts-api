"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewDiaryEntry = void 0;
const types_1 = require("../types");
const parseComment = (comment) => {
    if (!isString(comment)) {
        throw new Error('Incorrect or missing comment');
    }
    return comment;
};
const parseDate = (date) => {
    if (!isDate(date) || !isString(date)) {
        throw new Error('Incorrect Type. Date must be date');
    }
    return date;
};
const parseWeather = (weather) => {
    if (!isString(weather) || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather');
    }
    return weather;
};
const parseVisibility = (visibility) => {
    if (!isString(visibility) || !isVisibility(visibility)) {
        throw new Error('Incorrect visitibility type');
    }
    return visibility;
};
const isVisibility = (visibility) => {
    return Object.values(types_1.Visibility).includes(visibility);
};
const isWeather = (weather) => {
    return Object.values(types_1.Weather).includes(weather);
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isString = (valueFromRequest) => {
    return typeof valueFromRequest === 'string' || valueFromRequest instanceof String;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object === null || object === void 0 ? void 0 : object.comment),
        date: parseDate(object === null || object === void 0 ? void 0 : object.date),
        weather: parseWeather(object === null || object === void 0 ? void 0 : object.weather),
        visibility: parseVisibility(object === null || object === void 0 ? void 0 : object.visibility)
    };
    return newEntry;
};
exports.toNewDiaryEntry = toNewDiaryEntry;
