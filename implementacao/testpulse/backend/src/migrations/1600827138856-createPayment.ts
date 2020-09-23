import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createPayment1600827138856 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Payment",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "amount",
                        type: "decimal",
                        precision: 5,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "discountAmount",
                        type: "decimal",
                        precision: 5,
                        scale: 2,
                        default: 0,
                    },
                    {
                        name: "amountPaid",
                        type: "decimal",
                        precision: 5,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "coupon_id",
                        type: "int",
                    },
                    {
                        name: "formOfPayment_id",
                        type: "int",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Payment");
    }
}
