"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineAbility = void 0;
var ability_1 = require("@casl/ability");
var userAbility = ability_1.PureAbility;
var lambdaMatcher = function (matchConditions) { return matchConditions; };
var defineAbility = function (user) {
    var _a = new ability_1.AbilityBuilder(userAbility), can = _a.can, cannot = _a.cannot, build = _a.build;
    // new AbilityBuilder<userAbility>(AbilityType: AbilityFactory<userAbility>): AbilityBuilder<userAbility>
    can("read", "MultipleChoiceQuestion", function (_a) {
        var author = _a.author;
        return author === user.user_id;
    });
    return build({ conditionsMatcher: lambdaMatcher });
};
exports.defineAbility = defineAbility;
