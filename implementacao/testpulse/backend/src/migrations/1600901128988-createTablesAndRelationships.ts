import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablesAndRelationships1600901128988 implements MigrationInterface {
    name = 'createTablesAndRelationships1600901128988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "coupon" ("id" SERIAL NOT NULL, "code" character varying(10) NOT NULL, "description" text NOT NULL, "discount" numeric(5,2) NOT NULL, CONSTRAINT "UQ_62d3c5b0ce63a82c48e86d904bc" UNIQUE ("code"), CONSTRAINT "PK_fcbe9d72b60eed35f46dc35a682" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "form_of_payment_type_enum" AS ENUM('à vista', 'a prazo')`);
        await queryRunner.query(`CREATE TABLE "form_of_payment" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "type" "form_of_payment_type_enum" NOT NULL DEFAULT 'à vista', "installments" integer, CONSTRAINT "UQ_4bfb1f0a39d1bb41eb5911d3175" UNIQUE ("title"), CONSTRAINT "PK_1dd0f0bb3c89aa8c142df4ec421" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" numeric(5,2) NOT NULL, "discountAmount" numeric(5,2), "paidAmout" numeric(5,2) NOT NULL, "couponId" integer, "formOfPaymentId" integer, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "price" numeric(5,2) NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer, CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shipping_company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "cnpj" character varying(18) NOT NULL, "transportValue" numeric(5,2) NOT NULL, "phone" character varying(15) NOT NULL, CONSTRAINT "UQ_dfe66d8451994adc8f5b32cef02" UNIQUE ("name"), CONSTRAINT "UQ_62ee00c4fdbffe00ede4514c12c" UNIQUE ("cnpj"), CONSTRAINT "PK_685b1115bb33326874b3d3eda9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shipping" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text, "price" numeric(5,2) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "shippingCompanyId" uuid, CONSTRAINT "PK_0dc6ac92ee9cbc2c1611d77804c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, CONSTRAINT "UQ_f9dc1a8021d2a3297a6f376ff6b" UNIQUE ("title"), CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "clientId" uuid, "statusId" integer, "paymentId" uuid, "shippingId" uuid, CONSTRAINT "REL_9ad13532f48db4ac5a3b3dd70e" UNIQUE ("paymentId"), CONSTRAINT "REL_8bf3257f3efd245c9f292c169c" UNIQUE ("shippingId"), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "cpf" character varying(14) NOT NULL, "email" character varying(50) NOT NULL, "phone" character varying(15) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9921dca81551c93e5a459ef03ce" UNIQUE ("cpf"), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "street" character varying(80) NOT NULL, "number" integer NOT NULL, "complement" character varying(50), "district" character varying(50) NOT NULL, "state" character varying(50) NOT NULL, "city" character varying(50) NOT NULL, "reference" character varying(80) NOT NULL, "cep" character varying(9) NOT NULL, "is_first" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "UQ_cf5aa06a2455d081671071a43eb" UNIQUE ("cep"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_products_product" ("orderId" uuid NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_59f5d41216418eba313ed3c7d7c" PRIMARY KEY ("orderId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1f9ea0b0e59e0d98ade4f2d5e9" ON "order_products_product" ("orderId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d6c66c08b9c7e84a1b657797df" ON "order_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_b4eb410b9078a9ccec2bf5190dd" FOREIGN KEY ("couponId") REFERENCES "coupon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_ac882fe8a36ac55995911019f2d" FOREIGN KEY ("formOfPaymentId") REFERENCES "form_of_payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipping" ADD CONSTRAINT "FK_64dbc263279933d4cf89984d725" FOREIGN KEY ("shippingCompanyId") REFERENCES "shipping_company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_3b6667bfe775fa39753ca6af2dc" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_9ad13532f48db4ac5a3b3dd70e5" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_8bf3257f3efd245c9f292c169c5" FOREIGN KEY ("shippingId") REFERENCES "shipping"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_3d3e29e99d821fd75d7cb117e04" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "FK_1f9ea0b0e59e0d98ade4f2d5e99" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff"`);
        await queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "FK_1f9ea0b0e59e0d98ade4f2d5e99"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_3d3e29e99d821fd75d7cb117e04"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_8bf3257f3efd245c9f292c169c5"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_9ad13532f48db4ac5a3b3dd70e5"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_3b6667bfe775fa39753ca6af2dc"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3"`);
        await queryRunner.query(`ALTER TABLE "shipping" DROP CONSTRAINT "FK_64dbc263279933d4cf89984d725"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_ac882fe8a36ac55995911019f2d"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_b4eb410b9078a9ccec2bf5190dd"`);
        await queryRunner.query(`DROP INDEX "IDX_d6c66c08b9c7e84a1b657797df"`);
        await queryRunner.query(`DROP INDEX "IDX_1f9ea0b0e59e0d98ade4f2d5e9"`);
        await queryRunner.query(`DROP TABLE "order_products_product"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "shipping"`);
        await queryRunner.query(`DROP TABLE "shipping_company"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "form_of_payment"`);
        await queryRunner.query(`DROP TYPE "form_of_payment_type_enum"`);
        await queryRunner.query(`DROP TABLE "coupon"`);
    }

}
