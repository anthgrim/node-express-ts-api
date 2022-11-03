"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diariyServices_1 = require("../services/diariyServices");
const diariesUtils_1 = require("../utils/diariesUtils");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const entries = (0, diariyServices_1.getEntries)();
    res.send(entries);
});
router.post('/', (req, res) => {
    try {
        const newEntry = (0, diariesUtils_1.toNewDiaryEntry)(req.body);
        const newDiaryEntry = (0, diariyServices_1.addEntry)(newEntry);
        res.send(newDiaryEntry);
    }
    catch (error) {
        res.status(400);
    }
});
router.get('/sensitive', (_req, res) => {
    const diaries = (0, diariyServices_1.getEntriesWithoutSensitiveInfo)();
    res.send(diaries);
});
router.get('/:id', (req, res) => {
    const entry = (0, diariyServices_1.findById)(Number(req.params.id));
    return (entry !== null) ? res.send(entry) : res.sendStatus(404);
});
exports.default = router;
