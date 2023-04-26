import { MigrationInterface, QueryRunner } from "typeorm"

export class TestMigration1682417998876 implements MigrationInterface {

    // code to perform migration
    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(
        //     `ALTER TABLE "multiple_choice_question" ADD COLUMN "role" VARCHAR`,
        // )
    }

    // code to reverse the migration
    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(
        //     `ALTER TABLE "multiple_choice_question" DROP COLUMN "role"`
        // )
    }

}
