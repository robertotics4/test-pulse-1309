import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createClient1600803933761 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Client",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "14",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "15",
                        isNullable: false,
                    },
                    {
                        name: "address_id",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Client");
    }
}
