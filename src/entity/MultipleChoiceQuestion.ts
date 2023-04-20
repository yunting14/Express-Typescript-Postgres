import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./Quiz";
import { User } from "./User";

@Entity()
export class MultipleChoiceQuestion {
    @PrimaryGeneratedColumn()
    mcq_id : number

    @OneToOne(() => User)
    @JoinColumn()
    author: User

    @Column()
    question : string

    @Column()
    optionA : string

    @Column()
    optionB : string

    @Column()
    optionC : string

    @Column()
    optionD : string

    @Column()
    answer : string

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz : Quiz 
}