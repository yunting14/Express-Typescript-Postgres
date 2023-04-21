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
exports.deleteMCQById = exports.findMCQById = exports.findAllMCQs = exports.createMCQ = void 0;
var UserService_1 = require("../service/UserService");
var QuestionService_1 = require("../service/QuestionService");
var MultipleChoiceQuestion_1 = require("../entity/MultipleChoiceQuestion");
var appAbility_1 = require("../ability/appAbility");
var ability_1 = require("@casl/ability");
// create questions
var createMCQ = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var question, optionA, optionB, optionC, optionD, answer, user_id, author, createdMCQ;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                question = req.body.question;
                optionA = req.body.optionA;
                optionB = req.body.optionB;
                optionC = req.body.optionC;
                optionD = req.body.optionD;
                answer = req.body.answer;
                user_id = req.body.author;
                return [4 /*yield*/, (0, UserService_1.s_findUserById)(user_id)];
            case 1:
                author = _a.sent();
                if (!author) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, QuestionService_1.s_createNewMCQ)(question, optionA, optionB, optionC, optionD, answer, author)];
            case 2:
                createdMCQ = _a.sent();
                res.json("New MCQ created: " + JSON.stringify(createdMCQ)); // without JSON.stringify() it will print [object Object]
                return [3 /*break*/, 4];
            case 3:
                res.json("Error");
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createMCQ = createMCQ;
// find all questions
var findAllMCQs = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var mcqs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, QuestionService_1.s_findAllMCQs)()];
            case 1:
                mcqs = _a.sent();
                if (mcqs) {
                    res.json(mcqs);
                }
                else {
                    res.json("Unable to retrieve MCQs");
                }
                return [2 /*return*/];
        }
    });
}); };
exports.findAllMCQs = findAllMCQs;
// find questions by id 
var findMCQById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var mcq_id, user_id, user, ability, mcq;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mcq_id = req.body.mcq_id;
                user_id = req.body.user_id;
                return [4 /*yield*/, (0, UserService_1.s_findUserById)(user_id)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                ability = (0, appAbility_1.defineMCQAbility)(user);
                return [4 /*yield*/, (0, QuestionService_1.s_findMCQById)(mcq_id)];
            case 2:
                mcq = _a.sent();
                if (mcq) {
                    try {
                        ability_1.ForbiddenError.from(ability).setMessage("You can only view questions you created.").throwUnlessCan(appAbility_1.Action.Read, mcq);
                        res.json(mcq);
                    }
                    catch (ForbiddenError) {
                        console.log(ForbiddenError);
                        // res.json(ForbiddenError);
                        res.json("You can only view questions you created.");
                    }
                }
                else {
                    res.json("No MCQs found for user with id [".concat(user_id, "}]"));
                }
                return [3 /*break*/, 4];
            case 3:
                res.json("No user found for id [".concat(user_id, "]"));
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.findMCQById = findMCQById;
// delete question
var deleteMCQById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var mcq_id, user, ability, hasAbility;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mcq_id = req.body.mcq_id;
                return [4 /*yield*/, (0, UserService_1.s_findUserById)(1)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                ability = (0, appAbility_1.defineMCQAbility)(user);
                hasAbility = ability.can(appAbility_1.Action.Delete, MultipleChoiceQuestion_1.MultipleChoiceQuestion);
                console.log("type of isAllowed", typeof hasAbility);
                if (!hasAbility) {
                    res.json("You cannot delete questions");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, QuestionService_1.s_deleteMCQById)(mcq_id)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                res.json("User does not exist.");
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteMCQById = deleteMCQById;
