import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createProductOrder1600824036063
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Product_Order",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "product_id",
                        type: "int",
                    },
                    {
                        name: "order_id",
                        type: "uuid",
                    },
                    {
                        name: "amount",
                        type: "int",
                        default: 0,
                        isNullable: false,
                    },
                    {
                        name: "note",
                        type: "text",
                        isNullable: true,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Product_Order");
    }
}
