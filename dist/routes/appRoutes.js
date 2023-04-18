"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controller/userController");
var router = express_1.default.Router();
router.get("/api", function (req, res) {
    res.json("Welcome to to my typescript quiz app server!");
});
router.post("/api/signup", userController_1.createUser);
router.get("/api/user/all", userController_1.findAllUsers);
router.get("/api/user/:username", userController_1.findUserByUsername);
router.put("/api/user/updateScore/:score", userController_1.updateUserScore);
router.delete("/api/user/delete/:username", userController_1.deleteUser);
exports.default = router;
