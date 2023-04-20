"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineAbility = void 0;
var ability_1 = require("@casl/ability");
var MultipleChoiceQuestion_1 = require("../entity/MultipleChoiceQuestion");
var userAbility = ability_1.PureAbility;
var lambdaMatcher = function (matchConditions) { return matchConditions; };
var defineAbility = function (user) {
    var _a = new ability_1.AbilityBuilder(ability_1.PureAbility), can = _a.can, cannot = _a.cannot, build = _a.build;
    // new AbilityBuilder<userAbility>(AbilityType: AbilityFactory<userAbility>): AbilityBuilder<userAbility>
    can("read", MultipleChoiceQuestion_1.MultipleChoiceQuestion, function (_a) {
        var author = _a.author;
        return author.user_id == user.user_id;
    });
    //{ author : {$eq: user.user_id}}
    return build({
        conditionsMatcher: lambdaMatcher,
        detectSubjectType: function (item) {
            return item.constructor;
        },
    });
    // can("read", "MultipleChoiceQuestion", ({author}) => author == user.user_id);
    // return build({conditionsMatcher: lambdaMatcher});
};
exports.defineAbility = defineAbility;
