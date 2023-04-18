import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    user_id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    level: string // beginner, intermediate, advanced

    @Column()
    status: string // active, deleted

}