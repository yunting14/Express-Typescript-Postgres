import { MigrationInterface, QueryResult, QueryRunner } from "typeorm"

export class CreateUserTable1682481772914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" (
                user_id integer,
                username varchar,
                password varchar,
                level varchar,
                status varchar
            )`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE "user"`
        )
    }

}
