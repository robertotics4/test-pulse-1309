import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Shipping from "./Shipping";

@Entity()
export default class ShippingCompany {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    name: string;

    @Column({ type: "varchar", length: 18, nullable: false, unique: true })
    cnpj: string;

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: false })
    transportValue: number;

    @Column({ type: "varchar", length: 15, nullable: false })
    phone: string;

    @OneToMany((type) => ShippingCompany, (shippingCompany) => ShippingCompany)
    shippings: Shipping[];
}
