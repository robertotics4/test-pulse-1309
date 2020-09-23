import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";

@Entity()
export default class Status {
    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    title: string;

    @OneToMany((type) => Order, (status) => Status)
    orders: Order[];
}
