import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createFormOfPayment1600826006392
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "FormOfPayment",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["à vista", "a prazo"],
                    },
                    {
                        name: "installments",
                        type: "int",
                        isNullable: true,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("FormOfPayment");
    }
}
