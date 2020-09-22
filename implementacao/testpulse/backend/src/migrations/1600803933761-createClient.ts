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
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "14",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "15",
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
        queryRunner.dropTable("Client");
    }
}
