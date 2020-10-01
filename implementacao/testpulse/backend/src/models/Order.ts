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

    @ManyToOne((type) => Client, (client) => client.orders)
    client: Client;

    @ManyToOne((type) => Status, (status) => status.orders)
    status: Status;

    @OneToOne((type) => Payment, (payment) => payment.order)
    @JoinColumn()
    payment: Payment;

    @OneToOne((type) => Shipping, (shipping) => shipping.order)
    @JoinColumn()
    shipping: Shipping;

    @ManyToMany((type) => Product, (products) => products.orders)
    @JoinTable()
    products: Product[];
}
