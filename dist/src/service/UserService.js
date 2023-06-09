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
exports.s_deleteUser = exports.s_updateUserLevel = exports.s_findUserById = exports.s_findUserByUsername = exports.s_findAllUsers = exports.s_createNewUser = void 0;
var User_1 = require("../entity/User");
var UserRepository_1 = require("../repository/UserRepository");
var s_createNewUser = function (username, password) {
    var newUser = new User_1.User();
    newUser.username = username;
    newUser.password = password;
    newUser.level = "Beginner";
    newUser.status = "Active";
    var createdUser = (0, UserRepository_1.r_saveUser)(newUser);
    return createdUser;
};
exports.s_createNewUser = s_createNewUser;
// find all users
var s_findAllUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, UserRepository_1.r_findAllUsers)()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, users];
        }
    });
}); };
exports.s_findAllUsers = s_findAllUsers;
// find user by username
var s_findUserByUsername = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, UserRepository_1.r_findUserByUsername)(username)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.s_findUserByUsername = s_findUserByUsername;
// find user by user_id
var s_findUserById = function (user_id) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, UserRepository_1.r_findUserById)(user_id)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
exports.s_findUserById = s_findUserById;
// update user score
var s_updateUserLevel = function (username, level) { return __awaiter(void 0, void 0, void 0, function () {
    var user, success;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, UserRepository_1.r_findUserByUsername)(username)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, UserRepository_1.r_updateUserLevel)(user, level)];
            case 2:
                success = _a.sent();
                return [2 /*return*/, success];
            case 3: return [2 /*return*/, false];
        }
    });
}); };
exports.s_updateUserLevel = s_updateUserLevel;
// delete user (change status to deleted)
var s_deleteUser = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var user, deleted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, UserRepository_1.r_findUserByUsername)(username)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, UserRepository_1.r_changeUserStatusToDeleted)(user)];
            case 2:
                deleted = _a.sent();
                return [2 /*return*/, deleted];
            case 3: return [2 /*return*/, false];
        }
    });
}); };
exports.s_deleteUser = s_deleteUser;
