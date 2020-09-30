import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Order from "./Order";

@Entity()
export default class Status {
    @PrimaryGeneratedColumn("increment")
    id: Number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    title: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany((type) => Order, (status) => Status)
    orders: Order[];
}
