import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateMCQTable1682484825731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"mcq",
                    columns: [
                        {
                            name: "mcq_id",
                            type: "integer",
                            isPrimary: true
                        },
                        {
                            name:"question",
                            type:"varchar"
                        },
                        {
                            name:"optionA",
                            type:"varchar"
                        },
                        {
                            name:"optionB",
                            type:"varchar"
                        },
                        {
                            name:"optionC",
                            type:"varchar"
                        },
                        {
                            name:"optionD",
                            type:"varchar"
                        },
                        {
                            name:"answer",
                            type:"varchar"
                        },
                        {
                            name:"author",
                            type:"integer"
                        }
                    ]
                }
            )
        );

        await queryRunner.createForeignKey(
            "mcq", new TableForeignKey(
                {
                    columnNames:["author"],
                    referencedTableName: "user",
                    referencedColumnNames: ["user_id"]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("mcq")
    }

}
