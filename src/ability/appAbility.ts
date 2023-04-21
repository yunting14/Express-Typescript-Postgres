import { PureAbility, AbilityBuilder, Ability, AbilityTuple, MatchConditions, AbilityClass, InferSubjects, ExtractSubjectType } from "@casl/ability";
import { User } from "../entity/User";
import { MultipleChoiceQuestion } from "../entity/MultipleChoiceQuestion";

// use PureAbility because Ability is deprecated. 
const lambdaMatcher = (matchConditions : MatchConditions) => matchConditions;
type Subject = InferSubjects<typeof MultipleChoiceQuestion>
export enum Action {
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete",
    Manage = "manage"
}
type ability = PureAbility<[Action, Subject], MatchConditions>

export const defineMCQAbility = (user:User) => {
    
    const {can, cannot, build} = new AbilityBuilder(PureAbility as AbilityClass<ability>);
    
    can(Action.Read, MultipleChoiceQuestion, ({author}) => author.user_id == user.user_id);
    cannot(Action.Delete, MultipleChoiceQuestion);

    return build({
        conditionsMatcher: lambdaMatcher,
        detectSubjectType: (item) => 
            item.constructor as ExtractSubjectType<Subject>,
    });
}


