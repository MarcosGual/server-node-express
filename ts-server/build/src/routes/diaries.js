"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryController_1 = __importDefault(require("../controllers/diaryController"));
const router = express_1.default.Router();
router.get("/", diaryController_1.default.getDiaries);
router.get("/:id", diaryController_1.default.getDiaryById);
router.post("/", diaryController_1.default.postDiary);
router.put("/", diaryController_1.default.updateDiary);
router.delete("/:id", diaryController_1.default.deleteDiaryById);
exports.default = router;
