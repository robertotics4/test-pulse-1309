import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createShippingCompany1600806905267
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ShippingCompany",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                        length: "18",
                        isNullable: false,
                    },
                    {
                        name: "shipping",
                        type: "decimal",
                        precision: 5,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "15",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ShippingCompany");
    }
}
