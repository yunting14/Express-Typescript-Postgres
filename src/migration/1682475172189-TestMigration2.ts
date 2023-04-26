import { MigrationInterface, QueryRunner } from "typeorm"

export class TestMigration21682475172189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(
        //     `ALTER TABLE "multiple_choice_question" DROP COLUMN "role"`
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
