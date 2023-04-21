import { Request, Response } from "express";
import { s_findUserById } from "../service/UserService";
import { User } from "../entity/User";
import { s_createNewMCQ, s_deleteMCQById, s_findAllMCQs, s_findMCQById } from "../service/QuestionService";
import { MultipleChoiceQuestion } from "../entity/MultipleChoiceQuestion";
import { Action, defineMCQAbility } from "../ability/appAbility";
import { ForbiddenError, subject } from "@casl/ability"

// create questions
export const createMCQ = async (req:Request, res:Response) => {
    let question = req.body.question;
    let optionA = req.body.optionA;
    let optionB = req.body.optionB;
    let optionC = req.body.optionC;
    let optionD = req.body.optionD;
    let answer = req.body.answer; // A, B, C, D
    let user_id:number = req.body.author; // get via session or some authentication lib (req.user)

    let author:User|null = await s_findUserById(user_id);
    if (author) {
        let createdMCQ:MultipleChoiceQuestion = await s_createNewMCQ(question,optionA,optionB,optionC,optionD,answer,author);
        res.json("New MCQ created: " + JSON.stringify(createdMCQ)); // without JSON.stringify() it will print [object Object]
    }
    else{
        res.json("Error")
    }

}

// find all questions
export const findAllMCQs = async (req:Request, res:Response) => {
    let mcqs = await s_findAllMCQs();
    if (mcqs){
        res.json(mcqs);
    }else{
        res.json("Unable to retrieve MCQs");
    }
}

// find questions by id 
export const findMCQById = async (req:Request, res:Response) => {
    let mcq_id = req.body.mcq_id;
    let user_id = req.body.user_id; 
    let user = await s_findUserById(user_id);

    if (user){
        let ability = defineMCQAbility(user);
        let mcq = await s_findMCQById(mcq_id);

        if (mcq){
            try {
                ForbiddenError.from(ability).setMessage("You can only view questions you created.").throwUnlessCan(Action.Read, mcq);
                res.json(mcq);
            } catch (ForbiddenError) {
                console.log(ForbiddenError);
                // res.json(ForbiddenError);
                res.json("You can only view questions you created.");
            }
        }else{
            res.json(`No MCQs found for user with id [${user_id}}]`);
        }
    }else{
        res.json(`No user found for id [${user_id}]`);
    }
}

// delete question
export const deleteMCQById = async (req:Request, res:Response) =>{
    let mcq_id = req.body.mcq_id;

    // req.user or get from session
    let user = await s_findUserById(1);
    if (user){
        let ability = defineMCQAbility(user);
        let hasAbility:boolean = ability.can(Action.Delete, MultipleChoiceQuestion);
        
        if (!hasAbility){
            res.json("You cannot delete questions");
            return;
        }
        await s_deleteMCQById(mcq_id);
    }else{
        res.json("User does not exist.");
    }
    
}