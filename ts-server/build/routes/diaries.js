"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diaryService"));
const newEntry_1 = __importDefault(require("../utils/newEntry"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get("/:id", (req, res) => {
    const diary = diaryServices.findById(+req.params.id);
    return diary ? res.send(diary) : res.sendStatus(404);
});
router.post("/", (req, res) => {
    try {
        const { date, weather, visibility, comment } = (0, newEntry_1.default)(req.body);
        const newDiaryEntry = diaryServices.addDiary({
            date,
            weather,
            visibility,
            comment,
        });
        res.status(201).json(newDiaryEntry);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
router.put("/", (req, res) => {
    const entry = req.body;
    diaryServices.updateDiary(entry);
    res.status(200).json(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.delete("/:id", (req, res) => {
    diaryServices.deleteDiary(+req.params.id);
    res.status(200).send(diaryServices.getEntriesWithoutSensitiveInfo());
});
exports.default = router;