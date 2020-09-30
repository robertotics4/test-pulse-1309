import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Shipping from "./Shipping";

@Entity()
export default class ShippingCompany {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    name: string;

    @Column({ type: "varchar", length: 18, nullable: false, unique: true })
    cnpj: string;

    @Column({
        name: "transport_value",
        type: "decimal",
        precision: 5,
        scale: 2,
        nullable: false,
    })
    transportValue: number;

    @Column({ type: "varchar", length: 15, nullable: false })
    phone: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany((type) => ShippingCompany, (shippingCompany) => ShippingCompany)
    shippings: Shipping[];
}
