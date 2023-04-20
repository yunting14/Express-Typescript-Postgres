"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controller/userController");
var QuestionController_1 = require("../controller/QuestionController");
var router = express_1.default.Router();
router.get("/api", function (req, res) {
    res.json("Welcome to to my typescript quiz app server!");
});
// user
router.post("/api/signup", userController_1.createUser);
router.get("/api/user/all", userController_1.findAllUsers);
router.get("/api/user/:username", userController_1.findUserByUsername);
router.put("/api/user/updateLevel", userController_1.updateUserLevel);
router.delete("/api/user/delete", userController_1.deleteUser);
// question
router.post("/api/question/create", QuestionController_1.createMCQ);
router.get("/api/question/all", QuestionController_1.findAllMCQs);
exports.default = router;
