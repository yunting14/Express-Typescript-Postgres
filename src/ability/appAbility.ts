import { PureAbility, AbilityBuilder, Ability, AbilityTuple, MatchConditions, AbilityClass, InferSubjects, ExtractSubjectType } from "@casl/ability";
import { User } from "../entity/User";
import { MultipleChoiceQuestion } from "../entity/MultipleChoiceQuestion";

// use PureAbility because Ability is deprecated. 
type userAbility = PureAbility<AbilityTuple, MatchConditions>;
const userAbility = PureAbility as AbilityClass<userAbility>;
const lambdaMatcher = (matchConditions : MatchConditions) => matchConditions;


type Subject = InferSubjects<typeof MultipleChoiceQuestion>
type ability = PureAbility<["read", Subject], MatchConditions>

export const defineAbility = (user:User) => {
    
    const {can, cannot, build} = new AbilityBuilder(PureAbility as AbilityClass<ability>);
    // new AbilityBuilder<userAbility>(AbilityType: AbilityFactory<userAbility>): AbilityBuilder<userAbility>
    
    can("read", MultipleChoiceQuestion, ({author}) => author.user_id == user.user_id)
    //{ author : {$eq: user.user_id}}

    return build({
        conditionsMatcher: lambdaMatcher,
        detectSubjectType: (item) => 
            item.constructor as ExtractSubjectType<Subject>,
    });
    // can("read", "MultipleChoiceQuestion", ({author}) => author == user.user_id);

    // return build({conditionsMatcher: lambdaMatcher});
}


