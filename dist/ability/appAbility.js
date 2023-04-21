"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineMCQAbility = exports.Action = void 0;
var ability_1 = require("@casl/ability");
var MultipleChoiceQuestion_1 = require("../entity/MultipleChoiceQuestion");
// use PureAbility because Ability is deprecated. 
var lambdaMatcher = function (matchConditions) { return matchConditions; };
var Action;
(function (Action) {
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
    Action["Manage"] = "manage";
})(Action = exports.Action || (exports.Action = {}));
var defineMCQAbility = function (user) {
    var _a = new ability_1.AbilityBuilder(ability_1.PureAbility), can = _a.can, cannot = _a.cannot, build = _a.build;
    can(Action.Read, MultipleChoiceQuestion_1.MultipleChoiceQuestion, function (_a) {
        var author = _a.author;
        return author.user_id == user.user_id;
    });
    cannot(Action.Delete, MultipleChoiceQuestion_1.MultipleChoiceQuestion);
    return build({
        conditionsMatcher: lambdaMatcher,
        detectSubjectType: function (item) {
            return item.constructor;
        },
    });
};
exports.defineMCQAbility = defineMCQAbility;
