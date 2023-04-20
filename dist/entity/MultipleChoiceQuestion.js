"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleChoiceQuestion = void 0;
var typeorm_1 = require("typeorm");
var Quiz_1 = require("./Quiz");
var User_1 = require("./User");
var MultipleChoiceQuestion = exports.MultipleChoiceQuestion = /** @class */ (function () {
    function MultipleChoiceQuestion() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], MultipleChoiceQuestion.prototype, "mcq_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return User_1.User; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", User_1.User)
    ], MultipleChoiceQuestion.prototype, "author", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MultipleChoiceQuestion.prototype, "question", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MultipleChoiceQuestion.prototype, "optionA", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MultipleChoiceQuestion.prototype, "optionB", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MultipleChoiceQuestion.prototype, "optionC", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MultipleChoiceQuestion.prototype, "optionD", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MultipleChoiceQuestion.prototype, "answer", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Quiz_1.Quiz; }, function (quiz) { return quiz.questions; }),
        __metadata("design:type", Quiz_1.Quiz)
    ], MultipleChoiceQuestion.prototype, "quiz", void 0);
    MultipleChoiceQuestion = __decorate([
        (0, typeorm_1.Entity)()
    ], MultipleChoiceQuestion);
    return MultipleChoiceQuestion;
}());
