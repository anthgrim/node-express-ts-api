"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.findById = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry !== null) {
        return {
            id: entry === null || entry === void 0 ? void 0 : entry.id,
            date: entry === null || entry === void 0 ? void 0 : entry.date,
            weather: entry === null || entry === void 0 ? void 0 : entry.weather,
            visibility: entry === null || entry === void 0 ? void 0 : entry.visibility
        };
    }
    return undefined;
};
exports.findById = findById;
const addEntry = (newDiaryEntry) => {
    const newEntry = Object.assign({ id: diaries.length }, newDiaryEntry);
    diaries.push(newEntry);
    return newEntry;
};
exports.addEntry = addEntry;
