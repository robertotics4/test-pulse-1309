import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export default class editProductOrder1600827649059
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "Product_Order",
            "amount",
            new TableColumn({
                name: "quantity",
                type: "int",
                default: 0,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "Product_Order",
            "quantity",
            new TableColumn({
                name: "amount",
                type: "int",
                isNullable: false,
            })
        );
    }
}
