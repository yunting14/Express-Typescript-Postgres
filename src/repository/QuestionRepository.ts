import { MultipleChoiceQuestion } from "../entity/MultipleChoiceQuestion";
import AppDataSource from "../ormconfig";

const dbManager = AppDataSource.manager;

export const r_saveNewMCQ = async (mcq:MultipleChoiceQuestion):Promise<MultipleChoiceQuestion> => {
    let createdMCQ = await dbManager.save(mcq);
    return createdMCQ;
}

export const r_findAllMCQs = async():Promise<MultipleChoiceQuestion[]> => {
    // let mcqs = await dbManager.find(MultipleChoiceQuestion);
    
    // need to define relations for author be included in json
    let mcqs = await dbManager.getRepository(MultipleChoiceQuestion).find({
        relations:{
            author:true
        }
    });
    
    return mcqs;
}

export const r_findMCQById = async(mcq_id:number):Promise<MultipleChoiceQuestion|null> => {
    let mcq = await dbManager.getRepository(MultipleChoiceQuestion).findOne({
        where:{mcq_id : mcq_id},
        relations:{author:true}
    })

    return mcq;
}

export const r_deleteMCQById = async (mcq_id:number):Promise<boolean> => {
    await dbManager.delete(MultipleChoiceQuestion, { mcq_id: mcq_id });
    let mcq = await r_findMCQById(mcq_id);
    if (mcq){
        return false;
    }else{
        return true;
    }
}