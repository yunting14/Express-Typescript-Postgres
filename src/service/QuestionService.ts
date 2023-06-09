import { MultipleChoiceQuestion } from "../entity/MultipleChoiceQuestion";
import { User } from "../entity/User";
import { r_deleteMCQById, r_findAllMCQs, r_findMCQById, r_saveNewMCQ } from "../repository/QuestionRepository";

export const s_createNewMCQ = async (
    question:string,
    optionA: string,
    optionB:string,
    optionC:string,
    optionD:string,
    answer:string,
    author:User
): Promise<MultipleChoiceQuestion> => {
    const newMCQ = new MultipleChoiceQuestion();
    newMCQ.question = question;
    newMCQ.optionA = optionA;
    newMCQ.optionB = optionB;
    newMCQ.optionC = optionC;
    newMCQ.optionD = optionD;
    newMCQ.answer = answer;
    newMCQ.author = author; 

    let createdQuestion = await r_saveNewMCQ(newMCQ);
    return createdQuestion;
}

export const s_findAllMCQs = async ():Promise<MultipleChoiceQuestion[]> => {
    let mcqs = await r_findAllMCQs();
    return mcqs;
}

export const s_findMCQById = async (mcq_id:number):Promise<MultipleChoiceQuestion|null> => {
    let mcq = await r_findMCQById(mcq_id);
    return mcq;
}

export const s_deleteMCQById = async (mcq_id:number):Promise<boolean> => {
    let deleted:boolean = await r_deleteMCQById(mcq_id);
    return deleted;
}