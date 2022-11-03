"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    return res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
