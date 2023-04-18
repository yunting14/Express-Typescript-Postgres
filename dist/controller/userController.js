"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserScore = exports.findUserByUsername = exports.findAllUsers = exports.createUser = void 0;
var UserService_1 = require("../service/UserService");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, createdUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    username = req.body.username;
                    password = req.body.password;
                    return [4 /*yield*/, (0, UserService_1.serviceCreateNewUser)(username, password)];
                case 1:
                    createdUser = _a.sent();
                    res.json(createdUser);
                    return [2 /*return*/];
            }
        });
    });
}
exports.createUser = createUser;
function findAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.json("You are viewing all users");
            return [2 /*return*/];
        });
    });
}
exports.findAllUsers = findAllUsers;
function findUserByUsername(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var username;
        return __generator(this, function (_a) {
            username = req.params.username;
            res.json("You have found your user ".concat(username));
            return [2 /*return*/];
        });
    });
}
exports.findUserByUsername = findUserByUsername;
function updateUserScore(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var score;
        return __generator(this, function (_a) {
            score = req.params.score;
            res.json("User score updated to ".concat(score, "!"));
            return [2 /*return*/];
        });
    });
}
exports.updateUserScore = updateUserScore;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var username;
        return __generator(this, function (_a) {
            username = req.params.username;
            res.json("User with username \"".concat(username, "\" deleted"));
            return [2 /*return*/];
        });
    });
}
exports.deleteUser = deleteUser;