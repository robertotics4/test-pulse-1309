import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Order from "./Order";
import ShippingCompany from "./ShippingCompany";

@Entity()
export default class Shipping {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: false })
    price: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne((type) => ShippingCompany, (shippings) => Shipping)
    shippingCompany: ShippingCompany;

    @OneToOne((type) => Order, (shipping) => Shipping)
    order: Order;
}
