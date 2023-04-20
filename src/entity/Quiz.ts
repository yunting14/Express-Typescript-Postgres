import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import {MultipleChoiceQuestion} from "./MultipleChoiceQuestion" 

@Entity()
export class Quiz{
    
    @PrimaryGeneratedColumn()
    quiz_id : number

    @OneToOne(() => User)
    @JoinColumn()
    author : User

    @OneToMany(() => MultipleChoiceQuestion, (mcq) => mcq.quiz)
    questions : MultipleChoiceQuestion[]

}
