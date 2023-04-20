import { Request, Response } from "express";
import { s_findUserById } from "../service/UserService";
import { User } from "../entity/User";
import { s_createNewMCQ, s_findAllMCQs } from "../service/QuestionService";
import { MultipleChoiceQuestion } from "../entity/MultipleChoiceQuestion";

// create questions
/* body
{
    "question":"Which of the following is an incorrect fact about the three-body problem?",
    "optionA": "Isaac Newton was the scientist that made significant progress in this problem.",
    "optionB": "A restricted three-body problem means that one of the three bodies has negligble mass",
    "optionC": "Through the three-/N-body problem, it is theorized the solar system is unstable.",
    "optionD": "We are able to predict the positions of the three bodies in gravitational motion given time t",
    "answer": "D",
    "author": 1
}
*/
export const createMCQ = async (req:Request, res:Response) => {
    let question = req.body.question;
    let optionA = req.body.optionA;
    let optionB = req.body.optionB;
    let optionC = req.body.optionC;
    let optionD = req.body.optionD;
    let answer = req.body.answer; // A, B, C, D
    let user_id:number = req.body.author;

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