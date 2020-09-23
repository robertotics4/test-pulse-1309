import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createOrder1600823339933 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Order",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "client_id",
                        type: "uuid",
                    },
                    {
                        name: "status_id",
                        type: "int",
                    },
                    {
                        name: "payment_id",
                        type: "uuid",
                    },
                    {
                        name: "shipping_id",
                        type: "uuid",
                    },
                    {
                        name: "date",
                        type: "date",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Order");
    }
}
