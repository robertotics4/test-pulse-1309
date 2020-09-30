import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Client from "./Client";
import Payment from "./Payment";
import Product from "./Product";
import Shipping from "./Shipping";
import Status from "./Status";

@Entity()
export default class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "date" })
    date: Date;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @ManyToOne((type) => Client, (orders) => Order)
    client: Client;

    @ManyToOne((type) => Status, (orders) => Order)
    status: Status;

    @OneToOne((type) => Payment, (order) => Order)
    @JoinColumn()
    payment: Payment;

    @OneToOne((type) => Shipping, (order) => Order)
    @JoinColumn()
    shipping: Shipping;

    @ManyToMany((type) => Product, (orders) => Order)
    @JoinTable()
    products: Product[];
}
